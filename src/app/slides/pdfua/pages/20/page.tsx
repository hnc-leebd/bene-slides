import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide20() {
  return (
    <SlideLayout currentPage={20} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Implementation Guide</div>
        <h2 className="slide-header animate-slide-in stagger-1">veraPDF 검증</h2>
        <p className="slide-subheader animate-slide-in stagger-2">PDF/UA-1 규격 준수 확인</p>

        <div className="grid grid-cols-2 gap-6 animate-slide-in stagger-3">
          {/* Left: Commands */}
          <div className="space-y-4">
            {/* Installation */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: 'var(--slide-bg-secondary)', border: '1px solid var(--slide-border-subtle)' }}
            >
              <div className="px-4 py-2 border-b border-[var(--slide-border-subtle)]">
                <span className="text-xs font-mono text-[var(--slide-text-muted)]">설치</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <span className="text-[var(--slide-accent-success)]">$</span>
                <span className="text-[var(--slide-text-primary)] ml-2">brew install verapdf</span>
              </div>
            </div>

            {/* Validation Command */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: 'var(--slide-bg-secondary)', border: '1px solid var(--slide-border-subtle)' }}
            >
              <div className="px-4 py-2 border-b border-[var(--slide-border-subtle)]">
                <span className="text-xs font-mono text-[var(--slide-text-muted)]">PDF/UA-1 검증</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <span className="text-[var(--slide-accent-success)]">$</span>
                <span className="text-[var(--slide-text-primary)] ml-2">verapdf </span>
                <span className="text-[var(--slide-accent-primary)]">--flavour ua1</span>
                <span className="text-[var(--slide-text-primary)]"> output.pdf</span>
              </div>
            </div>

            {/* JSON Report */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: 'var(--slide-bg-secondary)', border: '1px solid var(--slide-border-subtle)' }}
            >
              <div className="px-4 py-2 border-b border-[var(--slide-border-subtle)]">
                <span className="text-xs font-mono text-[var(--slide-text-muted)]">JSON 리포트 출력</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <span className="text-[var(--slide-accent-success)]">$</span>
                <span className="text-[var(--slide-text-primary)] ml-2">verapdf </span>
                <span className="text-[var(--slide-accent-primary)]">--flavour ua1</span>
                <span className="text-[var(--slide-accent-tertiary)]"> --format json</span>
                <span className="text-[var(--slide-text-primary)]"> output.pdf </span>
                <span className="text-[var(--slide-text-muted)]">&gt; report.json</span>
              </div>
            </div>

            {/* Success Result */}
            <div
              className="rounded-xl p-4"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-[var(--slide-accent-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-[var(--slide-accent-success)]">실제 PoC 결과</span>
              </div>
              <div className="font-mono text-xs leading-relaxed text-[var(--slide-text-secondary)]">
                <pre>
{`{
  "profileName": "PDF/UA-1 validation profile",
  "compliant": `}<span className="text-[var(--slide-accent-success)]">true</span>{`,
  "details": {
    "passedRules": `}<span className="text-[var(--slide-accent-success)]">106</span>{`,
    "failedRules": `}<span className="text-[var(--slide-accent-success)]">0</span>{`,
    "passedChecks": `}<span className="text-[var(--slide-accent-success)]">1382</span>{`,
    "failedChecks": `}<span className="text-[var(--slide-accent-success)]">0</span>{`
  }
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Right: Error Table */}
          <div>
            <h3 className="text-lg font-bold text-[var(--slide-text-primary)] mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--slide-accent-danger)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              주요 실패 원인 &amp; 해결
            </h3>

            <div className="space-y-3">
              {/* Error 1 */}
              <div
                className="rounded-xl p-4"
                style={{ background: 'var(--slide-bg-secondary)', border: '1px solid rgba(239, 68, 68, 0.2)' }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <span className="slide-badge slide-badge-danger text-xs">에러</span>
                  </div>
                  <div className="flex-1">
                    <code className="text-sm font-mono text-[var(--slide-accent-danger)]">Figure missing Alt</code>
                    <p className="text-xs text-[var(--slide-text-muted)] mt-1">Figure에 Alt 텍스트 없음</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[var(--slide-border-subtle)]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[var(--slide-accent-success)]">해결:</span>
                    <code className="text-xs font-mono text-[var(--slide-text-primary)]">addFigure(page, altText)</code>
                  </div>
                </div>
              </div>

              {/* Error 2 */}
              <div
                className="rounded-xl p-4"
                style={{ background: 'var(--slide-bg-secondary)', border: '1px solid rgba(239, 68, 68, 0.2)' }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <span className="slide-badge slide-badge-danger text-xs">에러</span>
                  </div>
                  <div className="flex-1">
                    <code className="text-sm font-mono text-[var(--slide-accent-danger)]">Document language not set</code>
                    <p className="text-xs text-[var(--slide-text-muted)] mt-1">Lang 속성 미설정</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[var(--slide-border-subtle)]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[var(--slide-accent-success)]">해결:</span>
                    <code className="text-xs font-mono text-[var(--slide-text-primary)]">setLanguage(&quot;ko-KR&quot;)</code>
                  </div>
                </div>
              </div>

              {/* Error 3 */}
              <div
                className="rounded-xl p-4"
                style={{ background: 'var(--slide-bg-secondary)', border: '1px solid rgba(239, 68, 68, 0.2)' }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <span className="slide-badge slide-badge-danger text-xs">에러</span>
                  </div>
                  <div className="flex-1">
                    <code className="text-sm font-mono text-[var(--slide-accent-danger)]">Not tagged PDF</code>
                    <p className="text-xs text-[var(--slide-text-muted)] mt-1">MarkInfo 미설정</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[var(--slide-border-subtle)]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[var(--slide-accent-success)]">해결:</span>
                    <code className="text-xs font-mono text-[var(--slide-text-primary)]">finalize() 호출 확인</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
