# My Slides

마크다운 문서를 HTML 슬라이드로 변환하여 브라우저에서 프레젠테이션하고, PDF로 내보낼 수 있는 Next.js 애플리케이션입니다.

## Features

- **마크다운 → 슬라이드 변환**: Claude Code를 사용하여 마크다운 문서를 React 슬라이드 컴포넌트로 변환
- **브라우저 프레젠테이션**: 키보드 네비게이션(←, →, Space) 지원
- **PDF 내보내기**: Puppeteer를 통한 고품질 PDF 생성 (16:9, 2x 해상도)
- **테마 시스템**: 프레젠테이션별 독립적인 CSS 테마

## Quick Start

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 브라우저에서 http://localhost:3000 접속
```

## Usage

### 슬라이드 보기

1. `http://localhost:3000`에서 프레젠테이션 목록 확인
2. 원하는 프레젠테이션 클릭
3. 키보드로 네비게이션:
   - `←` / `↑`: 이전 슬라이드
   - `→` / `↓` / `Space`: 다음 슬라이드

### PDF 내보내기

AppBar의 다운로드 버튼 클릭 또는 `/api/slides/export-pdf` 엔드포인트 호출

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Puppeteer (PDF 내보내기)
- pdf-lib (PDF 생성)

## Project Structure

```
src/app/
├── page.tsx                    # 프레젠테이션 목록
├── globals.css                 # 글로벌 스타일
├── api/slides/export-pdf/      # PDF 내보내기 API
└── slides/
    └── {presentation}/
        ├── page.tsx            # 첫 슬라이드로 리다이렉트
        ├── slides.css          # 프레젠테이션 테마
        ├── components/         # SlideLayout, SlideAppBar
        └── pages/{n}/page.tsx  # 개별 슬라이드
```

## License

Private
