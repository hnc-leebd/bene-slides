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
      // Ignore if user is typing in input
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
    <header className="slide-appbar">
      <div className="flex items-center">
        <span className="slide-appbar-title">{title}</span>
        <span className="slide-appbar-subtitle">{subtitle}</span>
      </div>

      <nav className="slide-nav">
        <button
          className="slide-nav-btn"
          onClick={handlePrevious}
          disabled={currentPage <= 1}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex items-center gap-2">
          <input
            type="text"
            className="slide-nav-input"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            onBlur={handleInputBlur}
            aria-label="Page number"
          />
          <span className="slide-nav-total">/ {totalPages}</span>
        </div>

        <button
          className="slide-nav-btn"
          onClick={handleNext}
          disabled={currentPage >= totalPages}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="slide-nav-divider" />

        <button
          className="slide-nav-btn"
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
