import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide13() {
  return (
    <SlideLayout currentPage={13} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Implementation Guide</div>
        <h2 className="slide-header animate-slide-in stagger-1">C++ Serializer 아키텍처</h2>
        <p className="slide-subheader animate-slide-in stagger-2">DocumentBuilder + StructureTreeBuilder 설계</p>

        {/* Architecture Diagram */}
        <div className="animate-slide-in stagger-3">
          <div className="relative w-full max-w-5xl mx-auto">

            {/* Top Layer: main.cpp */}
            <div
              className="relative rounded-2xl p-5 mb-6"
              style={{
                background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.05) 100%)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
              }}
            >
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[rgba(124,58,237,0.2)] text-[var(--slide-accent-secondary)] mb-2">
                  Entry Point
                </span>
                <h3 className="text-lg font-bold text-[var(--slide-text-primary)]">PDF Serializer</h3>
                <p className="text-sm text-[var(--slide-text-secondary)] mt-1">
                  렌더링 및 시멘틱 요소 처리 오케스트레이션
                </p>
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="flex justify-center gap-32 mb-2">
              <div className="flex flex-col items-center">
                <div className="w-px h-8 bg-gradient-to-b from-[var(--slide-accent-secondary)] to-[var(--slide-accent-primary)]"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-px h-8 bg-gradient-to-b from-[var(--slide-accent-secondary)] to-[var(--slide-accent-success)]"></div>
              </div>
            </div>

            {/* Middle Layer: Two Builders with MCID Bridge */}
            <div className="flex items-stretch gap-0 mb-6">
              {/* DocumentBuilder */}
              <div
                className="relative rounded-2xl p-5 overflow-hidden flex-1"
                style={{
                  background: 'linear-gradient(180deg, rgba(0, 212, 255, 0.12) 0%, rgba(0, 212, 255, 0.04) 100%)',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--slide-accent-primary)] to-transparent"></div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(0,212,255,0.2)] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--slide-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--slide-text-primary)]">DocumentBuilder</h4>
                    <span className="text-xs text-[var(--slide-accent-primary)]">텍스트/이미지 렌더링</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {['createPage()', 'addTextWithTag()', 'addImageWithTag()', 'save()'].map((method, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--slide-accent-primary)]"></span>
                      <code className="font-mono text-[var(--slide-text-primary)]">{method}</code>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MCID Connection Bridge */}
              <div className="flex flex-col items-center justify-center px-3">
                <div
                  className="h-px w-8 mb-2"
                  style={{ background: 'linear-gradient(90deg, rgba(0, 212, 255, 0.6) 0%, rgba(245, 158, 11, 0.6) 100%)' }}
                ></div>
                <div
                  className="px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(239, 68, 68, 0.15) 100%)',
                    border: '1px solid rgba(245, 158, 11, 0.5)',
                    boxShadow: '0 0 24px rgba(245, 158, 11, 0.25)'
                  }}
                >
                  <span className="text-[var(--slide-accent-tertiary)]">MCID</span>
                </div>
                <div
                  className="h-px w-8 mt-2"
                  style={{ background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.6) 0%, rgba(16, 185, 129, 0.6) 100%)' }}
                ></div>
              </div>

              {/* StructureTreeBuilder */}
              <div
                className="relative rounded-2xl p-5 overflow-hidden flex-1"
                style={{
                  background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.04) 100%)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--slide-accent-success)] to-transparent"></div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(16,185,129,0.2)] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--slide-accent-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--slide-text-primary)]">StructureTreeBuilder</h4>
                    <span className="text-xs text-[var(--slide-accent-success)]">접근성 구조 관리</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {['initialize()', 'addParagraph()', 'addFigure()', 'finalize()'].map((method, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--slide-accent-success)]"></span>
                      <code className="font-mono text-[var(--slide-text-primary)]">{method}</code>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Connecting Lines to SDK */}
            <div className="flex justify-center gap-32 mb-2 mt-4">
              <div className="flex flex-col items-center">
                <div className="w-px h-8 bg-gradient-to-b from-[var(--slide-accent-primary)] to-[var(--slide-accent-tertiary)]"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-px h-8 bg-gradient-to-b from-[var(--slide-accent-success)] to-[var(--slide-accent-tertiary)]"></div>
              </div>
            </div>

            {/* Bottom Layer: PDFNet SDK */}
            <div
              className="relative rounded-2xl p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.04) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
              }}
            >
              <div className="text-center">
                <h3 className="text-lg font-bold text-[var(--slide-text-primary)]">Apryse PDFNet SDK</h3>
                <div className="flex justify-center gap-4 mt-3">
                  {['PDFDoc', 'ElementWriter', 'STree'].map((api, i) => (
                    <code
                      key={i}
                      className="px-3 py-1 rounded-lg text-sm font-mono bg-[rgba(245,158,11,0.15)] text-[var(--slide-accent-tertiary)]"
                    >
                      {api}
                    </code>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
