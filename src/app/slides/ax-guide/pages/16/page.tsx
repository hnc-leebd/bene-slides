import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide16() {
  return (
    <SlideLayout currentPage={16} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 5: 사례 3 - 전파</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          동료의 <span className="ax-header-glow">결과물</span>
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          개발자가 아닌데 가능했습니다
        </p>

        <div className="ax-columns ax-animate-up ax-stagger-3">
          <div className="ax-card" style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 245, 0.05), rgba(255, 0, 255, 0.03))',
            borderColor: 'var(--ax-border-glow)'
          }}>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--ax-neon-cyan)',
              marginBottom: '16px',
              letterSpacing: '0.1em'
            }}>
              보고서 내용
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: 'var(--ax-bg-elevated)',
                borderRadius: '8px',
                borderLeft: '3px solid var(--ax-neon-cyan)'
              }}>
                <span style={{ fontSize: '1.25rem' }}>📈</span>
                <span style={{
                  fontFamily: 'var(--ax-font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--ax-text-primary)'
                }}>
                  시장 트렌드 예측
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: 'var(--ax-bg-elevated)',
                borderRadius: '8px',
                borderLeft: '3px solid var(--ax-neon-magenta)'
              }}>
                <span style={{ fontSize: '1.25rem' }}>🔮</span>
                <span style={{
                  fontFamily: 'var(--ax-font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--ax-text-primary)'
                }}>
                  3가지 시나리오 시뮬레이션
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: 'var(--ax-bg-elevated)',
                borderRadius: '8px',
                borderLeft: '3px solid var(--ax-neon-green)'
              }}>
                <span style={{ fontSize: '1.25rem' }}>💡</span>
                <span style={{
                  fontFamily: 'var(--ax-font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--ax-text-primary)'
                }}>
                  최적 투자 방안 제안
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="ax-stat ax-mb-6">
              <div className="ax-stat-value ax-stat-value-green">✓</div>
              <div className="ax-stat-label">경영진 보고 완료</div>
            </div>

            <div className="ax-card ax-card-success">
              <div style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--ax-neon-green)',
                marginBottom: '12px',
                letterSpacing: '0.1em'
              }}>
                배운 것
              </div>
              <div style={{
                fontFamily: 'var(--ax-font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--ax-text-bright)',
                marginBottom: '12px'
              }}>
                전파가 가능합니다
              </div>
              <ul className="ax-list">
                <li><strong style={{ color: 'var(--ax-neon-cyan)' }}>1시간 교육</strong>으로 시작 가능</li>
                <li>AX는 개인이 아닌 <strong style={{ color: 'var(--ax-neon-yellow)' }}>조직 역량</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ax-mt-8 ax-animate-up ax-stagger-4" style={{
          textAlign: 'center',
          fontFamily: 'var(--ax-font-mono)',
          fontSize: '0.8125rem',
          color: 'var(--ax-text-muted)'
        }}>
          &quot;저보다 잘했어요&quot; - 전파력의 증거
        </div>
      </div>
    </SlideLayout>
  );
}
