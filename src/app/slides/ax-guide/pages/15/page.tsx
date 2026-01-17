import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide15() {
  return (
    <SlideLayout currentPage={15} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 5: 사례 3 - 전파</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          실전 사례 3: 동료 <span className="ax-header-glow">1시간 학습</span> → 성과
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          AX는 개인이 아닌 조직 역량입니다
        </p>

        <div className="ax-columns ax-animate-up ax-stagger-3">
          <div className="ax-card">
            <h4 style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              color: 'var(--ax-neon-cyan)',
              marginBottom: '16px'
            }}>
              배경
            </h4>
            <ul className="ax-list">
              <li><strong>동료</strong>: 개발자 아님 (기획/PM 직군)</li>
              <li><strong>과제</strong>: CTO 대상 기술 전략 보고서 작성</li>
              <li><strong>요구사항</strong>: 예측, 시뮬레이션, 최적화 포함</li>
            </ul>
          </div>

          <div className="ax-card ax-card-glow">
            <h4 style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              color: 'var(--ax-neon-magenta)',
              marginBottom: '16px'
            }}>
              제가 한 것
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--ax-bg-elevated)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--ax-font-mono)',
                  fontSize: '0.875rem',
                  color: 'var(--ax-neon-green)'
                }}>
                  5분
                </div>
                <div style={{
                  fontFamily: 'var(--ax-font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--ax-text-primary)'
                }}>
                  Claude Code 설치
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--ax-bg-elevated)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--ax-font-mono)',
                  fontSize: '0.875rem',
                  color: 'var(--ax-neon-cyan)'
                }}>
                  55분
                </div>
                <div style={{
                  fontFamily: 'var(--ax-font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--ax-text-primary)'
                }}>
                  Subagent 개념 + Skill 설정
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ax-mt-10 ax-animate-up ax-stagger-4">
          <div className="ax-stat" style={{ maxWidth: '300px', margin: '0 auto' }}>
            <div className="ax-stat-value ax-stat-value-cyan">1시간</div>
            <div className="ax-stat-label">총 교육 시간</div>
          </div>
        </div>

        <div className="ax-mt-8 ax-animate-up ax-stagger-5" style={{
          textAlign: 'center',
          fontFamily: 'var(--ax-font-body)',
          fontSize: '1.125rem',
          color: 'var(--ax-text-secondary)'
        }}>
          이후는 <span style={{ color: 'var(--ax-neon-yellow)', fontWeight: 600 }}>동료가 직접 수행</span>
        </div>
      </div>
    </SlideLayout>
  );
}
