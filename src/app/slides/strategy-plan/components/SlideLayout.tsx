'use client';

import { ReactNode } from 'react';
import { SlideAppBar } from './SlideAppBar';

interface SlideLayoutProps {
  children: ReactNode;
  currentPage: number;
  totalPages: number;
  track?: 1 | 2 | 3;
}

const SLIDE_TITLE = '2026 전략 방향 슬라이드';
const SLIDE_SUBTITLE = '트랙 우선순위 + 오픈소스 라이선스 전략';
const BASE_PATH = '/slides/strategy-plan';

export function SlideLayout({ children, currentPage, totalPages, track }: SlideLayoutProps) {
  const trackClass = track ? `track-${track}` : '';

  return (
    <div className={`slide-container ${trackClass}`}>
      <SlideAppBar
        currentPage={currentPage}
        totalPages={totalPages}
        title={SLIDE_TITLE}
        subtitle={SLIDE_SUBTITLE}
        basePath={BASE_PATH}
      />
      <main className="slide-content">
        <div className="slide-aspect-box">
          {children}
        </div>
      </main>
      <div className="keyboard-hint">
        <span className="keyboard-key">←</span>
        <span className="keyboard-key">→</span>
        <span>슬라이드 이동</span>
      </div>
    </div>
  );
}
