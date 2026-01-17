import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide11() {
  return (
    <SlideLayout currentPage={11} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Part 5: 의사결정</div>
        <h2 className="slide-header animate-slide-in stagger-1">내재화 투자 우선순위</h2>
        <p className="slide-subheader animate-slide-in stagger-2">PDF 기술 vs AI 문서 기술</p>

        <div className="animate-slide-in stagger-3">
          <div className="slide-card" style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, rgba(251, 191, 36, 0.05) 100%)' }}>
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-[var(--slide-accent-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-sm font-semibold text-[var(--slide-accent-tertiary)]">공통 전제</span>
                </div>
                <p className="text-sm text-[var(--slide-text-secondary)]">
                  양쪽 모두 Trade-off가 있음 — 기술적으로 어느 쪽이 우월하다고 단정 어려움
                </p>
              </div>
              <div className="w-px bg-[var(--slide-border-subtle)] self-stretch" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-[var(--slide-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold text-[var(--slide-accent-primary)]">핵심 포인트</span>
                </div>
                <p className="text-sm text-[var(--slide-text-secondary)]">
                  어떤 옵션이든 한글팀의 Export 로직 개발 공수는 <span className="font-semibold text-[var(--slide-text-primary)]">동일</span>
                </p>
                <p className="text-xs text-[var(--slide-text-muted)] mt-1">→ 차이는 PDF 코어 엔진을 누가 만드느냐</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-columns mt-5 animate-slide-in stagger-4">
          {/* Option A - PDF 기술 내재화 */}
          <div className="slide-card" style={{ borderTop: '3px solid var(--slide-accent-tertiary)', padding: '20px' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
                <svg className="w-5 h-5 text-[var(--slide-accent-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-mono text-[var(--slide-accent-tertiary)]">Option A</span>
                <h3 className="text-base font-semibold text-[var(--slide-text-primary)]">PDF 기술 내재화</h3>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-2 rounded-lg" style={{ background: 'rgba(245, 158, 11, 0.05)' }}>
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                  <svg className="w-3 h-3 text-[var(--slide-accent-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--slide-text-primary)]">완전한 기술 통제권</p>
                  <p className="text-xs text-[var(--slide-text-tertiary)]">외부 벤더 의존 없이 자체 로드맵 운영</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-lg" style={{ background: 'rgba(245, 158, 11, 0.05)' }}>
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                  <svg className="w-3 h-3 text-[var(--slide-accent-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--slide-text-primary)]">라이선스 비용 절감</p>
                  <p className="text-xs text-[var(--slide-text-tertiary)]">장기적으로 SDK 비용($10K-$50K/년) 불필요</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-lg" style={{ background: 'rgba(245, 158, 11, 0.05)' }}>
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                  <svg className="w-3 h-3 text-[var(--slide-accent-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--slide-text-primary)]">커스터마이징 자유도</p>
                  <p className="text-xs text-[var(--slide-text-tertiary)]">한글 특화 요구사항 맞춤 최적화</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-lg" style={{ background: 'rgba(245, 158, 11, 0.05)' }}>
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                  <svg className="w-3 h-3 text-[var(--slide-accent-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--slide-text-primary)]">보안/규제 대응</p>
                  <p className="text-xs text-[var(--slide-text-tertiary)]">소스 통제로 공공조달 요건 충족 용이</p>
                </div>
              </div>
            </div>
          </div>

          {/* Option B - AI 문서 기술 내재화 */}
          <div className="slide-card" style={{ borderTop: '3px solid var(--slide-accent-primary)', padding: '20px' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0, 212, 255, 0.15)' }}>
                <svg className="w-5 h-5 text-[var(--slide-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-mono text-[var(--slide-accent-primary)]">Option B</span>
                <h3 className="text-base font-semibold text-[var(--slide-text-primary)]">AI 문서 기술 내재화</h3>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-2 rounded-lg" style={{ background: 'rgba(0, 212, 255, 0.05)' }}>
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(0, 212, 255, 0.2)' }}>
                  <svg className="w-3 h-3 text-[var(--slide-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--slide-text-primary)]">차별화 가능</p>
                  <p className="text-xs text-[var(--slide-text-tertiary)]">경쟁사가 따라하기 어려운 고유 영역</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-lg" style={{ background: 'rgba(0, 212, 255, 0.05)' }}>
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(0, 212, 255, 0.2)' }}>
                  <svg className="w-3 h-3 text-[var(--slide-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--slide-text-primary)]">빠른 시장 진입</p>
                  <p className="text-xs text-[var(--slide-text-tertiary)]">PDF/UA는 SDK로 해결, AI에 집중</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-lg" style={{ background: 'rgba(0, 212, 255, 0.05)' }}>
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(0, 212, 255, 0.2)' }}>
                  <svg className="w-3 h-3 text-[var(--slide-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--slide-text-primary)]">신사업 창출</p>
                  <p className="text-xs text-[var(--slide-text-tertiary)]">직접적 수익 기여 (규제 대응 vs 신제품)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-lg" style={{ background: 'rgba(0, 212, 255, 0.05)' }}>
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(0, 212, 255, 0.2)' }}>
                  <svg className="w-3 h-3 text-[var(--slide-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--slide-text-primary)]">시장 성장성</p>
                  <p className="text-xs text-[var(--slide-text-tertiary)]">AI 문서 시장은 초기 단계, 블루오션</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
