'use client';

import { ReactNode } from 'react';
import { SlideAppBar } from './SlideAppBar';

interface SlideLayoutProps {
  children: ReactNode;
  currentPage: number;
  totalPages: number;
}

const SLIDE_TITLE = 'PDF/UA 대응 방안 검토';
const SLIDE_SUBTITLE = '레거시 PDF Writer 업그레이드 의사결정 + 구현 가이드';
const BASE_PATH = '/slides/pdfua';

export function SlideLayout({ children, currentPage, totalPages }: SlideLayoutProps) {
  return (
    <div className="slide-container">
      <SlideAppBar
        currentPage={currentPage}
        totalPages={totalPages}
        title={SLIDE_TITLE}
        subtitle={SLIDE_SUBTITLE}
        basePath={BASE_PATH}
      />
      <main className="slide-content">
        {children}
      </main>
      <div className="keyboard-hint">
        <span className="keyboard-key">←</span>
        <span className="keyboard-key">→</span>
        <span>슬라이드 이동</span>
      </div>
    </div>
  );
}
