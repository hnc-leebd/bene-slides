import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide11() {
  return (
    <SlideLayout currentPage={11} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 3: 사례 1 - 성공</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          접근 방법: <span className="ax-header-glow">AX 전략 설계</span>
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          체계적 설계가 핵심입니다
        </p>

        <div className="ax-columns ax-animate-up ax-stagger-3">
          <div>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.75rem',
              color: 'var(--ax-neon-cyan)',
              marginBottom: '16px',
              letterSpacing: '0.1em'
            }}>
              STEP 1: TASK 설계 문서 작성
            </div>
            <div className="ax-card">
              <div style={{
                fontFamily: 'var(--ax-font-display)',
                fontWeight: 600,
                color: 'var(--ax-neon-yellow)',
                marginBottom: '12px'
              }}>
                Knowledge Base 구축
              </div>
              <ul className="ax-list">
                <li>13개 세부 태스크로 분할</li>
                <li>각 태스크별 성공 기준 정의</li>
                <li>의존성 및 실행 순서 명시</li>
              </ul>
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.75rem',
              color: 'var(--ax-neon-magenta)',
              marginBottom: '16px',
              letterSpacing: '0.1em'
            }}>
              STEP 2: CLAUDE CODE + SUBAGENT
            </div>
            <div className="ax-card">
              <div style={{
                fontFamily: 'var(--ax-font-display)',
                fontWeight: 600,
                color: 'var(--ax-neon-magenta)',
                marginBottom: '12px'
              }}>
                실행 및 반복
              </div>
              <ul className="ax-list">
                <li>각 태스크를 독립적으로 실행</li>
                <li>결과를 다음 태스크에 전달</li>
                <li>실패 시 자동 재시도 루프</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Task Flow Diagram */}
        <div className="ax-mt-10 ax-animate-up ax-stagger-4">
          <div style={{
            fontFamily: 'var(--ax-font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ax-text-muted)',
            marginBottom: '12px',
            letterSpacing: '0.1em'
          }}>
            TASK FLOW
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--ax-bg-elevated)',
                  border: '1px solid var(--ax-neon-cyan)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--ax-font-mono)',
                  fontSize: '0.875rem',
                  color: 'var(--ax-neon-cyan)'
                }}>
                  T{n}
                </div>
                {n < 5 && (
                  <span style={{ color: 'var(--ax-text-muted)' }}>→</span>
                )}
              </div>
            ))}
            <span style={{ color: 'var(--ax-text-muted)' }}>...</span>
            <div style={{
              width: '48px',
              height: '40px',
              background: 'linear-gradient(135deg, rgba(0, 255, 245, 0.2), rgba(255, 0, 255, 0.1))',
              border: '1px solid var(--ax-neon-cyan)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.875rem',
              color: 'var(--ax-neon-cyan)',
              boxShadow: 'var(--ax-glow-cyan)'
            }}>
              T13
            </div>
          </div>
        </div>

        <div className="ax-card ax-mt-8 ax-animate-up ax-stagger-5" style={{
          background: 'rgba(0, 255, 136, 0.05)',
          borderColor: 'var(--ax-neon-green)'
        }}>
          <div style={{
            fontFamily: 'var(--ax-font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ax-neon-green)',
            marginBottom: '8px'
          }}>
            KEY INSIGHT
          </div>
          <div style={{
            fontFamily: 'var(--ax-font-body)',
            fontSize: '1rem',
            color: 'var(--ax-text-primary)'
          }}>
            Task 설계 문서(KB)가 전체 성과의 <strong style={{ color: 'var(--ax-neon-yellow)' }}>70%</strong>를 차지했습니다
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
