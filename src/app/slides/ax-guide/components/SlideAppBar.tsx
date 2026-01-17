'use client';

import { useRouter } from 'next/navigation';
import { useState, useCallback, useEffect, KeyboardEvent } from 'react';
import { Download } from 'lucide-react';
import { ExportPdfDialog } from '@/components/ExportPdfDialog';

interface SlideAppBarProps {
  currentPage: number;
  totalPages: number;
  title: string;
  subtitle: string;
  basePath: string;
}

export function SlideAppBar({ currentPage, totalPages, title, subtitle, basePath }: SlideAppBarProps) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(currentPage.toString());
  const [showExportDialog, setShowExportDialog] = useState(false);

  useEffect(() => {
    setInputValue(currentPage.toString());
  }, [currentPage]);

  const navigateToPage = useCallback((page: number) => {
    const targetPage = Math.max(1, Math.min(page, totalPages));
    router.push(`${basePath}/pages/${targetPage}`);
  }, [router, totalPages, basePath]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      navigateToPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      navigateToPage(currentPage + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const page = parseInt(inputValue, 10);
      if (!isNaN(page)) {
        navigateToPage(page);
      }
    }
  };

  const handleInputBlur = () => {
    const page = parseInt(inputValue, 10);
    if (!isNaN(page)) {
      navigateToPage(page);
    } else {
      setInputValue(currentPage.toString());
    }
  };

  // Global keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;

      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  return (
    <header className="ax-appbar">
      <div className="ax-appbar-title">
        <span>{title}</span>
        <span className="ax-appbar-subtitle">{subtitle}</span>
      </div>

      <nav className="ax-nav">
        <button
          className="ax-nav-btn"
          onClick={handlePrevious}
          disabled={currentPage <= 1}
          aria-label="Previous slide"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 13L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="text"
            className="ax-nav-input"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            onBlur={handleInputBlur}
            aria-label="Page number"
          />
          <span className="ax-nav-total">/ {totalPages}</span>
        </div>

        <button
          className="ax-nav-btn"
          onClick={handleNext}
          disabled={currentPage >= totalPages}
          aria-label="Next slide"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 5L11 9L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="ax-nav-divider" />

        <button
          className="ax-nav-btn"
          onClick={() => setShowExportDialog(true)}
          aria-label="Download PDF"
          title="PDF 다운로드"
        >
          <Download size={18} />
        </button>
      </nav>

      <ExportPdfDialog
        isOpen={showExportDialog}
        onClose={() => setShowExportDialog(false)}
        basePath={basePath}
        totalPages={totalPages}
        presentationTitle={title}
      />
    </header>
  );
}
