'use client';

import { ReactNode } from 'react';
import { SlideAppBar } from './SlideAppBar';

interface SlideLayoutProps {
  children: ReactNode;
  currentPage: number;
  totalPages: number;
}

const SLIDE_TITLE = 'AX 시작 가이드';
const SLIDE_SUBTITLE = '오픈소스에서 배운 것들';
const BASE_PATH = '/slides/ax-guide';
const TOTAL_PAGES = 17;

export function SlideLayout({ children, currentPage }: SlideLayoutProps) {
  return (
    <div className="ax-slide-container">
      <SlideAppBar
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        title={SLIDE_TITLE}
        subtitle={SLIDE_SUBTITLE}
        basePath={BASE_PATH}
      />
      <main className="ax-content">
        {children}
      </main>
      <div className="ax-keyboard-hint">
        <span className="ax-keyboard-key">←</span>
        <span className="ax-keyboard-key">→</span>
        <span>슬라이드 이동</span>
      </div>
    </div>
  );
}
