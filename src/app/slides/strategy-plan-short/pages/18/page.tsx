import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { User, ArrowDown } from 'lucide-react';

const TOTAL_PAGES = 18;

// Person icon grid component
function PersonGrid({
  count,
  color,
  size = 14,
  columns = 10,
  opacity = 1
}: Readonly<{
  count: number;
  color: string;
  size?: number;
  columns?: number;
  opacity?: number;
}>) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: 3,
      opacity
    }}>
      {Array.from({ length: count }).map((_, i) => (
        <User
          key={i}
          size={size}
          color={color}
          fill={color}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function Slide18() {
  return (
    <SlideLayout currentPage={18} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 2 · Funnel Analysis</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            오픈코어 모델 퍼널 비교
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            전환율 10% 가정
          </p>
        </div>

        <div className="slide-content-area">
          {/* Main Comparison Area - 3x4 Grid */}
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gridTemplateRows: 'auto auto auto auto',
            gap: '12px 8px',
            alignItems: 'center',
            justifyItems: 'center'
          }}>
            {/* Row 1: Headers */}
            {/* Permissive Header */}
            <div style={{
              gridColumn: 1,
              gridRow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              background: 'rgba(34, 197, 94, 0.1)',
              borderRadius: 20,
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--status-positive)'
              }} />
              <span style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 600,
                fontSize: '0.875rem',
                color: 'var(--status-positive)'
              }}>Permissive</span>
            </div>

            {/* VS Badge */}
            <div style={{
              gridColumn: 2,
              gridRow: '1 / 5',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              height: '100%'
            }}>
              <div style={{
                width: 2,
                height: 80,
                background: 'linear-gradient(to bottom, transparent, rgba(148, 163, 184, 0.4), rgba(148, 163, 184, 0.6))',
                borderRadius: 1
              }} />
              <div style={{
                padding: '12px 18px',
                background: 'linear-gradient(135deg, var(--slide-bg-secondary) 0%, var(--slide-bg-tertiary) 100%)',
                borderRadius: 12,
                border: '1px solid var(--slide-border)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}>
                <span style={{
                  fontFamily: 'var(--slide-font-display)',
                  fontSize: '1rem',
                  color: 'var(--slide-text-secondary)',
                  fontWeight: 700,
                  letterSpacing: '0.05em'
                }}>VS</span>
              </div>
              <div style={{
                width: 2,
                height: 80,
                background: 'linear-gradient(to bottom, rgba(148, 163, 184, 0.6), rgba(148, 163, 184, 0.4), transparent)',
                borderRadius: 1
              }} />
            </div>

            {/* Copyleft Header */}
            <div style={{
              gridColumn: 3,
              gridRow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              background: 'rgba(239, 68, 68, 0.1)',
              borderRadius: 20,
              border: '1px solid rgba(239, 68, 68, 0.3)'
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--status-negative)'
              }} />
              <span style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 600,
                fontSize: '0.875rem',
                color: 'var(--status-negative)'
              }}>Copyleft</span>
            </div>

            {/* Row 2: 입구 (Top Funnel) */}
            {/* Permissive 입구 - 100명 */}
            <div style={{
              gridColumn: 1,
              gridRow: 2,
              padding: 20,
              background: 'rgba(34, 197, 94, 0.08)',
              borderRadius: 16,
              border: '2px solid rgba(34, 197, 94, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginBottom: 12
              }}>
                <span style={{
                  fontFamily: 'var(--slide-font-mono)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--status-positive)'
                }}>100명</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-muted)' }}>시도</span>
              </div>
              <PersonGrid count={100} color="rgb(34, 197, 94)" size={14} columns={10} />
            </div>

            {/* Copyleft 입구 - 15명 */}
            <div style={{
              gridColumn: 3,
              gridRow: 2,
              padding: 20,
              background: 'rgba(239, 68, 68, 0.08)',
              borderRadius: 16,
              border: '2px solid rgba(239, 68, 68, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginBottom: 12
              }}>
                <span style={{
                  fontFamily: 'var(--slide-font-mono)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--status-negative)'
                }}>15명</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-muted)' }}>시도</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <PersonGrid count={15} color="rgb(239, 68, 68)" size={14} columns={5} />
              </div>
            </div>

            {/* Row 3: Arrows */}
            <ArrowDown size={24} color="var(--status-positive)" style={{ gridColumn: 1, gridRow: 3 }} />
            <ArrowDown size={24} color="var(--status-negative)" style={{ gridColumn: 3, gridRow: 3 }} />

            {/* Row 4: 출구 (Bottom Funnel) */}
            {/* Permissive 출구 - 10명 */}
            <div style={{
              gridColumn: 1,
              gridRow: 4,
              padding: 16,
              background: 'rgba(34, 197, 94, 0.15)',
              borderRadius: 12,
              border: '2px solid var(--status-positive)',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginBottom: 10
              }}>
                <span style={{
                  fontFamily: 'var(--slide-font-mono)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--status-positive)'
                }}>10명</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-muted)' }}>전환</span>
              </div>
              <PersonGrid count={10} color="rgb(34, 197, 94)" size={14} columns={5} />
            </div>

            {/* Copyleft 출구 - 1~2명 */}
            <div style={{
              gridColumn: 3,
              gridRow: 4,
              padding: 16,
              background: 'rgba(239, 68, 68, 0.15)',
              borderRadius: 12,
              border: '2px solid var(--status-negative)',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginBottom: 10
              }}>
                <span style={{
                  fontFamily: 'var(--slide-font-mono)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--status-negative)'
                }}>1~2명</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-muted)' }}>전환</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
                <User size={14} color="rgb(239, 68, 68)" fill="rgb(239, 68, 68)" strokeWidth={0} />
                <User size={14} color="rgb(239, 68, 68)" fill="rgb(239, 68, 68)" strokeWidth={0} style={{ opacity: 0.4 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
