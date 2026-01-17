'use client';

import { ReactNode } from 'react';
import { SlideAppBar } from './SlideAppBar';

interface SlideLayoutProps {
  children: ReactNode;
  currentPage: number;
  totalPages: number;
  track?: 1 | 2 | 3;
}

const SLIDE_TITLE = '2026 전략 방향 시장 조사';
const SLIDE_SUBTITLE = '3가지 전략 트랙 분석 및 권고';
const BASE_PATH = '/slides/strategy-2026';

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
