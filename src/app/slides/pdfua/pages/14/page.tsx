import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide14() {
  const requirements = [
    { key: 'tagged', label: 'Tagged PDF', code: 'MarkInfo/Marked = true' },
    { key: 'structure', label: 'Structure Tree', code: 'Document 루트 요소' },
    { key: 'lang', label: 'Language', code: 'Lang = "ko-KR"' },
    { key: 'alt', label: 'Figure Alt', code: '모든 이미지 대체 텍스트' },
    { key: 'title', label: 'Title', code: 'Title 메타데이터' },
  ];

  return (
    <SlideLayout currentPage={14} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Implementation Guide</div>
        <h2 className="slide-header animate-slide-in stagger-1">PDF/UA 필수 요구사항</h2>

        {/* Main Content: Two Column Layout */}
        <div className="grid grid-cols-2 gap-10 mt-8 animate-slide-in stagger-2">

          {/* Left: Visual Checklist */}
          <div>
            <h3 className="text-sm font-medium text-[var(--slide-text-muted)] uppercase tracking-wider mb-5">
              Compliance Checklist
            </h3>

            <div className="space-y-3">
              {requirements.map((req, index) => (
                <div
                  key={req.key}
                  className="flex items-center gap-4 group"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Checkbox */}
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  {/* Label & Code */}
                  <div className="flex-1 flex items-center justify-between py-2 border-b border-[var(--slide-border-subtle)]">
                    <span className="font-medium text-[var(--slide-text-primary)]">
                      {req.label}
                    </span>
                    <code className="text-xs font-mono text-[var(--slide-text-muted)] bg-[var(--slide-bg-tertiary)] px-2 py-1 rounded">
                      {req.code}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: API Mapping */}
          <div>
            <h3 className="text-sm font-medium text-[var(--slide-text-muted)] uppercase tracking-wider mb-5">
              OpenDoc API
            </h3>

            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: 'var(--slide-bg-secondary)',
                border: '1px solid var(--slide-border-subtle)',
              }}
            >
              {/* Code block header */}
              <div
                className="px-4 py-2 flex items-center gap-2"
                style={{
                  background: 'var(--slide-bg-tertiary)',
                  borderBottom: '1px solid var(--slide-border-subtle)',
                }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                <span className="text-xs text-[var(--slide-text-muted)] ml-2 font-mono">pdfua_engine</span>
              </div>

              {/* Code content */}
              <div className="p-4 font-mono text-sm leading-relaxed">
                <div className="text-[var(--slide-text-muted)]">// 문서 초기화</div>
                <div>
                  <span className="text-[#c678dd]">initialize</span>
                  <span className="text-[var(--slide-text-secondary)]">(</span>
                  <span className="text-[#98c379]">"title"</span>
                  <span className="text-[var(--slide-text-secondary)]">, </span>
                  <span className="text-[#98c379]">"ko-KR"</span>
                  <span className="text-[var(--slide-text-secondary)]">)</span>
                </div>
                <div className="h-3"></div>
                <div className="text-[var(--slide-text-muted)]">// 콘텐츠 추가</div>
                <div>
                  <span className="text-[#c678dd]">addFigure</span>
                  <span className="text-[var(--slide-text-secondary)]">(path, </span>
                  <span className="text-[#98c379]">"alt text"</span>
                  <span className="text-[var(--slide-text-secondary)]">)</span>
                </div>
                <div className="h-3"></div>
                <div className="text-[var(--slide-text-muted)]">// PDF/UA 마킹</div>
                <div>
                  <span className="text-[#c678dd]">finalize</span>
                  <span className="text-[var(--slide-text-secondary)]">()</span>
                  <span className="text-[var(--slide-text-muted)]"> // MarkInfo 설정</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Verification */}
        <div className="mt-8 animate-slide-in stagger-3">
          <div
            className="flex items-center justify-between px-5 py-4 rounded-xl"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.15)',
            }}
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[var(--slide-accent-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[var(--slide-text-primary)] font-medium">검증</span>
              <span className="text-[var(--slide-text-secondary)]">veraPDF로 PDF/UA 준수 여부 확인</span>
            </div>
            <code className="text-sm font-mono text-[var(--slide-accent-success)] bg-[var(--slide-bg-primary)] px-3 py-1.5 rounded-lg border border-[var(--slide-border-subtle)]">
              verapdf --flavour ua1 output.pdf
            </code>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
