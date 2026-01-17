import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide17() {
  return (
    <SlideLayout currentPage={17} totalPages={17}>
      <div className="ax-cover">
        <div className="ax-section-tag ax-animate-fade">CLOSING</div>

        <div className="ax-highlight-box ax-animate-up ax-stagger-1" style={{
          maxWidth: '700px',
          margin: '0 auto 48px'
        }}>
          <div style={{
            fontFamily: 'var(--ax-font-mono)',
            fontSize: '0.6875rem',
            color: 'var(--ax-neon-cyan)',
            marginBottom: '20px',
            letterSpacing: '0.15em'
          }}>
            오늘의 핵심
          </div>
          <div style={{
            fontFamily: 'var(--ax-font-display)',
            fontSize: '2rem',
            fontWeight: 700,
            color: 'var(--ax-text-bright)',
            lineHeight: 1.4,
            marginBottom: '16px'
          }}>
            AI 모델은 빅테크가 만들어줍니다.
          </div>
          <div style={{
            fontFamily: 'var(--ax-font-display)',
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.4
          }}>
            <span style={{ color: 'var(--ax-text-secondary)' }}>우리가 할 일은</span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--ax-neon-cyan), var(--ax-neon-magenta))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              우리만의 Knowledge Base를
            </span>
            <br />
            <span style={{ color: 'var(--ax-text-secondary)' }}>정리하는 것입니다.</span>
          </div>
        </div>

        <div className="ax-animate-up ax-stagger-2" style={{
          fontSize: '5rem',
          marginBottom: '32px'
        }}>
          🙏
        </div>

        <div className="ax-animate-up ax-stagger-3" style={{
          fontFamily: 'var(--ax-font-display)',
          fontSize: '1.5rem',
          fontWeight: 600,
          color: 'var(--ax-text-primary)',
          marginBottom: '48px'
        }}>
          감사합니다.
        </div>

        <div className="ax-animate-up ax-stagger-4" style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center'
        }}>
          <div style={{
            background: 'var(--ax-bg-card)',
            border: '1px solid var(--ax-border-default)',
            borderRadius: '12px',
            padding: '20px 24px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'var(--ax-bg-elevated)',
              borderRadius: '8px',
              margin: '0 auto 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--ax-border-subtle)'
            }}>
              <span style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--ax-text-muted)'
              }}>
                QR
              </span>
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.75rem',
              color: 'var(--ax-neon-cyan)'
            }}>
              설치 가이드
            </div>
          </div>
          <div style={{
            background: 'var(--ax-bg-card)',
            border: '1px solid var(--ax-border-default)',
            borderRadius: '12px',
            padding: '20px 24px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'var(--ax-bg-elevated)',
              borderRadius: '8px',
              margin: '0 auto 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--ax-border-subtle)'
            }}>
              <span style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--ax-text-muted)'
              }}>
                QR
              </span>
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.75rem',
              color: 'var(--ax-neon-magenta)'
            }}>
              발표 자료
            </div>
          </div>
        </div>

        <div className="ax-animate-up ax-stagger-5 ax-mt-12" style={{
          fontFamily: 'var(--ax-font-display)',
          fontSize: '1.75rem',
          fontWeight: 700,
          color: 'var(--ax-neon-cyan)',
          textShadow: 'var(--ax-glow-text-cyan)'
        }}>
          Q&A
        </div>
      </div>
    </SlideLayout>
  );
}
