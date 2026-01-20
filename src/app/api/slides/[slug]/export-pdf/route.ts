import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import path from "path";

const VIEWPORT = { width: 1600, height: 900 }; // 16:9 비율
const DEVICE_SCALE_FACTOR = 3; // 실제 캡처: 4800x2700

// 텍스트 요소 정보
interface TextElement {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
}

export const dynamic = "force-dynamic";
export const maxDuration = 120;

// 슬라이드 수 자동 감지
function getSlideCount(slug: string): number {
  const pagesDir = path.join(process.cwd(), "src/app/slides", slug, "pages");

  if (!fs.existsSync(pagesDir)) {
    return 0;
  }

  const pages = fs.readdirSync(pagesDir).filter((dir) => {
    const fullPath = path.join(pagesDir, dir);
    return fs.statSync(fullPath).isDirectory() && /^\d+$/.test(dir);
  });

  return pages.length;
}

// 프레젠테이션 제목 (slug -> title 매핑)
function getPresentationTitle(slug: string): string {
  const titles: Record<string, string> = {
    "pdfua": "PDF-UA-Strategy",
    "ax-guide": "Accessibility-Guide",
    "strategy-2026": "Strategy-2026",
    "strategy-plan": "Strategy-Plan-2026",
  };
  return titles[slug] || slug;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { searchParams } = new URL(request.url);
  let browser = null;

  // 슬라이드 수 자동 감지
  const totalSlides = getSlideCount(slug);

  if (totalSlides === 0) {
    return NextResponse.json(
      { error: `프레젠테이션 '${slug}'을 찾을 수 없거나 슬라이드가 없습니다.` },
      { status: 404 }
    );
  }

  // 페이지 범위 파라미터 (기본값: 전체)
  const startPage = Math.max(1, Number(searchParams.get("start")) || 1);
  const endPage = Math.min(totalSlides, Number(searchParams.get("end")) || totalSlides);

  if (startPage > endPage) {
    return NextResponse.json(
      { error: "시작 페이지가 끝 페이지보다 클 수 없습니다." },
      { status: 400 }
    );
  }

  try {
    // Dynamic import puppeteer to avoid build issues
    const puppeteer = await import("puppeteer");

    browser = await puppeteer.default.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
    });

    const page = await browser.newPage();
    await page.setViewport({ ...VIEWPORT, deviceScaleFactor: DEVICE_SCALE_FACTOR });

    // Get base URL from environment or use default
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const slideData: { screenshot: Uint8Array; textElements: TextElement[] }[] = [];

    // Capture each slide as screenshot + extract text elements
    for (let i = startPage; i <= endPage; i++) {
      const url = `${baseUrl}/slides/${slug}/pages/${i}`;
      console.log(`Capturing slide ${i} (${i - startPage + 1}/${endPage - startPage + 1}): ${url}`);

      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // Wait for animations to complete
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Hide UI elements for clean capture
      await page.evaluate(() => {
        // Hide header/appbar
        const header = document.querySelector("header");
        const appbar = document.querySelector(".slide-appbar");
        // Hide keyboard hint
        const keyboardHint = document.querySelector(".keyboard-hint");
        // Hide any loading overlays
        const loadingOverlay = document.querySelector('[class*="fixed"][class*="inset-0"][class*="z-50"]');

        if (header) (header as HTMLElement).style.display = "none";
        if (appbar) (appbar as HTMLElement).style.display = "none";
        if (keyboardHint) (keyboardHint as HTMLElement).style.display = "none";
        if (loadingOverlay) (loadingOverlay as HTMLElement).style.display = "none";
      });

      // Extract text elements with position info
      const textElements = await page.evaluate(() => {
        const elements: {
          text: string;
          x: number;
          y: number;
          width: number;
          height: number;
          fontSize: number;
        }[] = [];

        // Walk through all text nodes in the document
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode: (node) => {
              // Skip empty text nodes
              const text = node.textContent?.trim();
              if (!text) return NodeFilter.FILTER_REJECT;

              // Skip hidden elements
              const parent = node.parentElement;
              if (!parent) return NodeFilter.FILTER_REJECT;

              const style = getComputedStyle(parent);
              if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") {
                return NodeFilter.FILTER_REJECT;
              }

              return NodeFilter.FILTER_ACCEPT;
            },
          }
        );

        let node;
        while ((node = walker.nextNode())) {
          const parent = node.parentElement;
          if (!parent) continue;

          const text = node.textContent?.trim();
          if (!text) continue;

          // Get bounding rect using Range for accurate text position
          const range = document.createRange();
          range.selectNodeContents(node);
          const rect = range.getBoundingClientRect();

          // Skip elements outside viewport
          if (rect.width === 0 || rect.height === 0) continue;
          if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
          if (rect.right < 0 || rect.left > window.innerWidth) continue;

          const style = getComputedStyle(parent);
          const fontSize = parseFloat(style.fontSize) || 16;

          elements.push({
            text,
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            fontSize,
          });
        }

        return elements;
      });

      // Take screenshot as JPEG
      const screenshot = await page.screenshot({
        type: "jpeg",
        quality: 90,
        fullPage: false,
      });

      slideData.push({ screenshot, textElements });
    }

    await browser.close();
    browser = null;

    // Create PDF from screenshots with text layer
    const pdfDoc = await PDFDocument.create();

    // Register fontkit for custom font support
    pdfDoc.registerFontkit(fontkit);

    // Load Pretendard font for Korean text support
    const fontPath = path.join(
      process.cwd(),
      "public/fonts/Pretendard-Regular.ttf"
    );
    const fontBytes = fs.readFileSync(fontPath);
    const customFont = await pdfDoc.embedFont(fontBytes);

    // PDF 페이지 크기를 스케일 적용된 크기로 설정
    const scaledWidth = VIEWPORT.width * DEVICE_SCALE_FACTOR;
    const scaledHeight = VIEWPORT.height * DEVICE_SCALE_FACTOR;

    for (const { screenshot, textElements } of slideData) {
      const jpgImage = await pdfDoc.embedJpg(screenshot);
      const pdfPage = pdfDoc.addPage([scaledWidth, scaledHeight]);

      // Draw background image
      pdfPage.drawImage(jpgImage, {
        x: 0,
        y: 0,
        width: scaledWidth,
        height: scaledHeight,
      });

      // Draw invisible text layer for text selection
      for (const textEl of textElements) {
        // Convert browser coordinates to PDF coordinates
        // Browser: origin at top-left, Y increases downward
        // PDF: origin at bottom-left, Y increases upward
        const pdfX = textEl.x * DEVICE_SCALE_FACTOR;
        const pdfY = scaledHeight - (textEl.y + textEl.height) * DEVICE_SCALE_FACTOR;
        const fontSize = textEl.fontSize * DEVICE_SCALE_FACTOR;

        try {
          pdfPage.drawText(textEl.text, {
            x: pdfX,
            y: pdfY,
            size: fontSize,
            font: customFont,
            opacity: 0, // Invisible text for selection only
          });
        } catch {
          // Skip text that can't be rendered (e.g., unsupported characters)
        }
      }
    }

    const pdfBytes = await pdfDoc.save();
    const filename = getPresentationTitle(slug);

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF 생성 오류:", error);
    if (browser) {
      try {
        await browser.close();
      } catch {
        // ignore close error
      }
    }

    return NextResponse.json(
      { error: "PDF 생성에 실패했습니다", details: String(error) },
      { status: 500 }
    );
  }
}
