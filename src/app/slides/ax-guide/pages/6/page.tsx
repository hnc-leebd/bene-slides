import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide6() {
  return (
    <SlideLayout currentPage={6} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 1: 전략</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          AX가 추구해야 할 <span className="ax-header-glow">비즈니스 가치</span>
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          자동화에서 멈추면 안 됩니다
        </p>

        {/* Value Pyramid */}
        <div className="ax-animate-up ax-stagger-3" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          marginTop: '24px'
        }}>
          {/* Level 4 - Top */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 245, 0.2), rgba(255, 0, 255, 0.15))',
            border: '2px solid var(--ax-neon-cyan)',
            borderRadius: '8px',
            padding: '16px 32px',
            width: '280px',
            textAlign: 'center',
            boxShadow: 'var(--ax-glow-cyan)'
          }}>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--ax-neon-cyan)',
              marginBottom: '4px'
            }}>
              LEVEL 4
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--ax-text-bright)'
            }}>
              최적화
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-body)',
              fontSize: '0.8125rem',
              color: 'var(--ax-text-secondary)',
              marginTop: '4px'
            }}>
              최고 이익을 내는 방안 수립
            </div>
          </div>

          {/* Level 3 */}
          <div style={{
            background: 'var(--ax-bg-card)',
            border: '1px solid var(--ax-border-default)',
            borderRadius: '8px',
            padding: '14px 32px',
            width: '360px',
            textAlign: 'center'
          }}>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--ax-neon-magenta)',
              marginBottom: '4px'
            }}>
              LEVEL 3
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--ax-text-primary)'
            }}>
              시뮬레이션
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-body)',
              fontSize: '0.8125rem',
              color: 'var(--ax-text-muted)',
              marginTop: '4px'
            }}>
              전략 반영한 시나리오 분석
            </div>
          </div>

          {/* Level 2 */}
          <div style={{
            background: 'var(--ax-bg-card)',
            border: '1px solid var(--ax-border-subtle)',
            borderRadius: '8px',
            padding: '14px 32px',
            width: '440px',
            textAlign: 'center'
          }}>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--ax-neon-orange)',
              marginBottom: '4px'
            }}>
              LEVEL 2
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--ax-text-primary)'
            }}>
              예측
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-body)',
              fontSize: '0.8125rem',
              color: 'var(--ax-text-muted)',
              marginTop: '4px'
            }}>
              모든 분야에서 향후 예측 가능
            </div>
          </div>

          {/* Level 1 - Bottom */}
          <div style={{
            background: 'var(--ax-bg-elevated)',
            border: '1px solid var(--ax-border-subtle)',
            borderRadius: '8px',
            padding: '14px 32px',
            width: '520px',
            textAlign: 'center'
          }}>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--ax-text-muted)',
              marginBottom: '4px'
            }}>
              LEVEL 1
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--ax-text-secondary)'
            }}>
              자동화
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-body)',
              fontSize: '0.8125rem',
              color: 'var(--ax-text-muted)',
              marginTop: '4px'
            }}>
              단순 생산성 향상, 비즈니스 가치 낮음
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '40px'
        }} className="ax-animate-up ax-stagger-4">
          <div style={{
            fontFamily: 'var(--ax-font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ax-text-muted)'
          }}>
            ← 기술 난이도 낮음
          </div>
          <div style={{
            fontFamily: 'var(--ax-font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ax-neon-cyan)'
          }}>
            비즈니스 가치 높음 →
          </div>
        </div>

        <div className="ax-mt-8 ax-animate-up ax-stagger-5" style={{
          fontFamily: 'var(--ax-font-mono)',
          fontSize: '0.75rem',
          color: 'var(--ax-text-muted)',
          textAlign: 'center'
        }}>
          참고: Palantir AIP, ARGONOS
        </div>
      </div>
    </SlideLayout>
  );
}
