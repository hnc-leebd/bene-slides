# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

마크다운 문서를 HTML 슬라이드로 변환하여 프레젠테이션하고 PDF로 내보낼 수 있는 Next.js 애플리케이션입니다.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checking
```

## Workflow: 마크다운 → 슬라이드 변환

1. `docs/` 폴더에 마크다운 문서 작성
2. Claude Code에게 슬라이드 변환 요청
3. `src/app/slides/{name}/` 구조로 슬라이드 생성
4. `src/app/page.tsx`에 프레젠테이션 등록

## Architecture

### Slide Structure

Each presentation lives in `src/app/slides/{presentation-name}/`:
- `page.tsx` - Redirects to first slide
- `components/` - SlideLayout, SlideAppBar (네비게이션, PDF 다운로드 버튼)
- `slides.css` - Theme-specific styling (CSS 변수로 색상/폰트 정의)
- `pages/{n}/page.tsx` - Individual slide content (n = 1, 2, 3, ...)

### Creating a New Presentation

1. `src/app/slides/{name}/` 디렉토리 생성
2. 기존 프레젠테이션(`pdfua` 또는 `ax-guide`)에서 `components/`, `slides.css` 복사
3. `slides.css`에서 테마 색상 커스터마이징
4. `pages/1/page.tsx`부터 슬라이드 작성
5. `src/app/page.tsx`의 `presentations` 배열에 추가

### Adding a Slide to Existing Presentation

1. `src/app/slides/{name}/pages/{n}/page.tsx` 생성
2. Import: `import '../../../{name}/slides.css'` 및 `SlideLayout`
3. `<SlideLayout currentPage={n} totalPages={total}>` 래핑
4. 모든 슬라이드의 `totalPages` 업데이트

### Styling System

CSS classes (defined in each `slides.css`):
- Layout: `.slide-container`, `.slide-content`, `.slide-main`, `.slide-cover`
- Typography: `.slide-header`, `.slide-subheader`, `.slide-header-accent`
- Cards: `.slide-card`, `.slide-card-highlight`, `.slide-card-success`, `.slide-card-danger`
- Tables/Lists: `.slide-table`, `.slide-list`, `.slide-columns`
- Badges: `.slide-badge-primary`, `.slide-badge-success`, `.slide-badge-danger`, `.slide-badge-warning`
- Animations: `.animate-slide-in`, `.animate-fade-in`, `.stagger-{1-5}`

### PDF Export

- Endpoint: `GET /api/slides/[slug]/export-pdf` (동적 라우트)
- 예시: `/api/slides/pdfua/export-pdf`, `/api/slides/ax-guide/export-pdf`
- Puppeteer로 각 슬라이드 스크린샷 → pdf-lib로 PDF 생성
- 슬라이드 수 자동 감지 (pages 디렉토리 스캔)

**슬라이드 크기 설정** ([route.ts](src/app/api/slides/[slug]/export-pdf/route.ts)):
```
Viewport: 1600 x 900 (16:9 비율)
Device Scale Factor: 2 (실제 캡처: 3200 x 1800)
PDF 페이지 크기: 1600 x 900 pt
```

**주의사항**:
- 슬라이드 컨텐츠는 1600x900 뷰포트 기준으로 디자인해야 함
- 현재 CSS는 `min-height: 100vh`로 유동적 → PDF 출력 시 뷰포트 크기로 고정됨
- AppBar(64px)를 제외한 실제 컨텐츠 영역: 약 1600 x 836
- 컨텐츠 오버플로우 시 PDF에서 잘릴 수 있음

**새 프레젠테이션 PDF 제목 추가**:
[route.ts](src/app/api/slides/[slug]/export-pdf/route.ts)의 `getPresentationTitle()` 함수에 slug-title 매핑 추가

### Path Aliases

`@/*` → `./src/*`
