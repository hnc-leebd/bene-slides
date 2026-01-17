'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Download, Loader2 } from 'lucide-react';

interface ExportPdfDialogProps {
  isOpen: boolean;
  onClose: () => void;
  basePath: string;
  totalPages: number;
  presentationTitle: string;
}

export function ExportPdfDialog({
  isOpen,
  onClose,
  basePath,
  totalPages,
  presentationTitle,
}: ExportPdfDialogProps) {
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(totalPages);
  const [status, setStatus] = useState<'idle' | 'exporting' | 'done' | 'error'>('idle');
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const abortControllerRef = useRef<AbortController | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Reset state when dialog opens
  useEffect(() => {
    if (isOpen) {
      setStartPage(1);
      setEndPage(totalPages);
      setStatus('idle');
      setCurrentPage(0);
      setErrorMessage('');
    }
  }, [isOpen, totalPages]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  const handleExport = async () => {
    setStatus('exporting');
    setCurrentPage(0);
    setErrorMessage('');

    const pageCount = endPage - startPage + 1;
    abortControllerRef.current = new AbortController();

    // Simulated progress (roughly 1 page per second)
    intervalRef.current = setInterval(() => {
      setCurrentPage((prev) => Math.min(prev + 1, pageCount));
    }, 1000);

    try {
      // basePath is like "/slides/strategy-2026", extract slug
      const slug = basePath.replace('/slides/', '');
      const res = await fetch(
        `/api/slides/${slug}/export-pdf?start=${startPage}&end=${endPage}`,
        { signal: abortControllerRef.current.signal }
      );

      if (intervalRef.current) clearInterval(intervalRef.current);
      setCurrentPage(pageCount);

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'PDF 생성 실패');
      }

      // Download the blob
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${presentationTitle}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setStatus('done');
    } catch (err) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (err instanceof Error && err.name === 'AbortError') {
        setStatus('idle');
      } else {
        setStatus('error');
        setErrorMessage(err instanceof Error ? err.message : 'PDF 생성 실패');
      }
    }
  };

  const handleCancel = () => {
    if (status === 'exporting') {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (abortControllerRef.current) abortControllerRef.current.abort();
      setStatus('idle');
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  const pageCount = endPage - startPage + 1;
  const progress = pageCount > 0 ? (currentPage / pageCount) * 100 : 0;

  const dialogContent = (
    <div className="export-dialog-overlay" onClick={status === 'exporting' ? undefined : onClose}>
      <div className="export-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="export-dialog-header">
          <h2>PDF 내보내기</h2>
          {status !== 'exporting' && (
            <button className="export-dialog-close" onClick={onClose}>
              <X size={20} />
            </button>
          )}
        </div>

        <div className="export-dialog-content">
          {status === 'idle' && (
            <>
              <div className="export-range">
                <label>페이지 범위</label>
                <div className="export-range-inputs">
                  <input
                    type="number"
                    min={1}
                    max={endPage}
                    value={startPage}
                    onChange={(e) => setStartPage(Math.max(1, Math.min(Number(e.target.value), endPage)))}
                  />
                  <span>~</span>
                  <input
                    type="number"
                    min={startPage}
                    max={totalPages}
                    value={endPage}
                    onChange={(e) => setEndPage(Math.max(startPage, Math.min(Number(e.target.value), totalPages)))}
                  />
                  <span className="export-range-total">/ {totalPages}</span>
                </div>
                <p className="export-range-info">{pageCount}장 내보내기</p>
              </div>
            </>
          )}

          {status === 'exporting' && (
            <div className="export-progress">
              <Loader2 className="export-spinner" size={32} style={{ animation: 'spin 1s linear infinite' }} />
              <div className="export-progress-bar">
                <div className="export-progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <p className="export-progress-text">
                {currentPage} / {pageCount} 페이지 처리 중...
              </p>
            </div>
          )}

          {status === 'done' && (
            <div className="export-done">
              <Download size={32} />
              <p>PDF 내보내기 완료!</p>
            </div>
          )}

          {status === 'error' && (
            <div className="export-error">
              <p>{errorMessage}</p>
            </div>
          )}
        </div>

        <div className="export-dialog-footer">
          <button
            className="export-btn export-btn-secondary"
            onClick={handleCancel}
          >
            {status === 'exporting' ? '취소' : '닫기'}
          </button>
          {(status === 'idle' || status === 'error') && (
            <button
              className="export-btn export-btn-primary"
              onClick={handleExport}
            >
              <Download size={16} />
              내보내기
            </button>
          )}
          {status === 'done' && (
            <button
              className="export-btn export-btn-primary"
              onClick={onClose}
            >
              완료
            </button>
          )}
        </div>
      </div>

      <style jsx global>{`
        .export-dialog-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }

        .export-dialog {
          background: #1a1a24;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          width: 400px;
          max-width: 90vw;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
        }

        .export-dialog-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .export-dialog-header h2 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #f8f8fa;
          margin: 0;
        }

        .export-dialog-close {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          padding: 4px;
          display: flex;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .export-dialog-close:hover {
          color: #f8f8fa;
          background: rgba(255, 255, 255, 0.1);
        }

        .export-dialog-content {
          padding: 24px;
          min-height: 120px;
        }

        .export-range label {
          display: block;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 12px;
        }

        .export-range-inputs {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .export-range-inputs input {
          width: 72px;
          height: 40px;
          background: #12121a;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          color: #f8f8fa;
          font-size: 1rem;
          text-align: center;
          outline: none;
        }

        .export-range-inputs input:focus {
          border-color: #00d4ff;
          box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
        }

        .export-range-inputs span {
          color: rgba(255, 255, 255, 0.4);
        }

        .export-range-total {
          font-size: 0.875rem;
        }

        .export-range-info {
          margin-top: 12px;
          font-size: 0.875rem;
          color: #00d4ff;
        }

        .export-progress {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .export-spinner {
          color: #00d4ff;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .export-progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .export-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00d4ff, #7c3aed);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .export-progress-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
        }

        .export-done {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: #22c55e;
        }

        .export-done p {
          font-size: 1rem;
          font-weight: 500;
        }

        .export-error {
          color: #ef4444;
          text-align: center;
        }

        .export-dialog-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 16px 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .export-btn-secondary {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.7);
        }

        .export-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .export-btn-primary {
          background: linear-gradient(135deg, #00d4ff, #7c3aed);
          border: none;
          color: white;
        }

        .export-btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );

  return createPortal(dialogContent, document.body);
}
