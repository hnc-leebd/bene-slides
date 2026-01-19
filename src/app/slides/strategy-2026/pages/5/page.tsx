import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { TrendingUp, DollarSign } from 'lucide-react';

const TOTAL_PAGES = 20;

// 시장 규모 색상 (Blue 계열) - 밝기로 기관 구분
const sizeColors = [
  { primary: '#38bdf8', gradient: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)' }, // Sky
  { primary: '#60a5fa', gradient: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)' }, // Blue
  { primary: '#818cf8', gradient: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)' }, // Indigo
  { primary: '#93c5fd', gradient: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 100%)' }, // Light Blue
];

const marketData = [
  {
    source: 'Grand View Research',
    current: 2.3,
    future: 12.35,
    futureYear: 2030,
    cagr: 33.1,
  },
  {
    source: 'Fortune Business Insights',
    current: 7.89,
    future: 66.68,
    futureYear: 2032,
    cagr: 30.1,
  },
  {
    source: 'Precedence Research',
    current: 3.22,
    future: 43.92,
    futureYear: 2034,
    cagr: 33.68,
  },
  {
    source: 'GMI',
    current: 2.3,
    future: null,
    futureYear: null,
    cagr: 24.7,
  },
];

// 정규화 함수: min~max를 minBar%~100%로 변환
function normalize(value: number, min: number, max: number, minBar = 30) {
  if (max === min) return 100;
  return minBar + ((value - min) / (max - min)) * (100 - minBar);
}

export default function Slide5() {
  const futureValues = marketData.map(d => d.future).filter((v): v is number => v !== null);
  const minFuture = Math.min(...futureValues);
  const maxFuture = Math.max(...futureValues);
  const cagrValues = marketData.map(d => d.cagr);
  const minCagr = Math.min(...cagrValues);
  const maxCagr = Math.max(...cagrValues);

  return (
    <SlideLayout currentPage={5} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Market Overview</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            IDP 시장 개요
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2" style={{ marginBottom: 24 }}>
            Intelligent Document Processing 시장
          </p>
        </div>

        <div className="slide-content-area" style={{ width: 1000, margin: '0 auto' }}>
          {/* Summary Banner - 두 개의 명확한 색상 구분 */}
        <div
          className="animate-slide-in stagger-2"
          style={{
            display: 'flex',
            gap: 0,
            marginBottom: 28,
            borderRadius: 12,
            overflow: 'hidden',
            border: '1px solid var(--slide-border-subtle)',
          }}
        >
          {/* 시장 규모 - Blue */}
          <div style={{
            flex: 1,
            padding: '14px 20px',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <DollarSign size={18} color="#38bdf8" />
            <div>
              <p style={{ fontFamily: 'var(--slide-font-body)', fontSize: '0.6875rem', color: 'var(--slide-text-tertiary)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                시장 규모 (2030s)
              </p>
              <p style={{ fontFamily: 'var(--slide-font-display)', fontSize: '1.125rem', fontWeight: 700, color: '#38bdf8' }}>
                $12B ~ $67B
              </p>
            </div>
          </div>
          {/* 성장률 - Green */}
          <div style={{
            flex: 1,
            padding: '14px 20px',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(22, 163, 74, 0.08) 100%)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <TrendingUp size={18} color="var(--status-positive)" />
            <div>
              <p style={{ fontFamily: 'var(--slide-font-body)', fontSize: '0.6875rem', color: 'var(--slide-text-tertiary)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                평균 CAGR
              </p>
              <p style={{ fontFamily: 'var(--slide-font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--status-positive)' }}>
                30%+
              </p>
            </div>
          </div>
        </div>

        {/* Research Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {marketData.map((item, idx) => {
            const hasFuture = item.future !== null;
            const futureBarWidth = hasFuture ? normalize(item.future, minFuture, maxFuture, 25) : 0;
            const cagrBarWidth = normalize(item.cagr, minCagr, maxCagr, 50);
            const growthMultiple = hasFuture ? (item.future / item.current).toFixed(1) : null;
            const colorSet = sizeColors[idx];

            return (
              <div
                key={item.source}
                className={`animate-slide-in stagger-${idx + 3}`}
                style={{
                  background: 'var(--slide-bg-card)',
                  border: '1px solid var(--slide-border-subtle)',
                  borderRadius: 12,
                  padding: '14px 20px',
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr 200px',
                  gap: 16,
                  alignItems: 'center',
                }}
              >
                {/* Source Info */}
                <div>
                  <p style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--slide-text-primary)',
                    marginBottom: 2
                  }}>
                    {item.source}
                  </p>
                  <p style={{
                    fontFamily: 'var(--slide-font-mono)',
                    fontSize: '0.5625rem',
                    color: 'var(--slide-text-muted)',
                  }}>
                    {hasFuture ? `~${item.futureYear} 전망` : '2024 기준'}
                  </p>
                </div>

                {/* Market Size - Blue 계열 */}
                <div>
                  {hasFuture ? (
                    <>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 5 }}>
                        <span style={{
                          fontFamily: 'var(--slide-font-mono)',
                          fontSize: '0.6875rem',
                          color: 'var(--slide-text-tertiary)',
                        }}>
                          ${item.current}B
                        </span>
                        <svg width="14" height="7" viewBox="0 0 14 7">
                          <path d="M0 3.5 L10 3.5 M8 1 L10 3.5 L8 6" stroke="var(--slide-text-muted)" strokeWidth="1.2" fill="none" />
                        </svg>
                        <span style={{
                          fontFamily: 'var(--slide-font-display)',
                          fontSize: '1.125rem',
                          fontWeight: 700,
                          color: colorSet.primary,
                        }}>
                          ${item.future}B
                        </span>
                        <span style={{
                          fontFamily: 'var(--slide-font-mono)',
                          fontSize: '0.5625rem',
                          color: colorSet.primary,
                          background: `${colorSet.primary}15`,
                          padding: '1px 4px',
                          borderRadius: 3,
                        }}>
                          ×{growthMultiple}
                        </span>
                      </div>
                      <div style={{
                        height: 4,
                        background: 'var(--slide-bg-tertiary)',
                        borderRadius: 2,
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${futureBarWidth}%`,
                          background: colorSet.gradient,
                          borderRadius: 2,
                        }} />
                      </div>
                    </>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{
                        fontFamily: 'var(--slide-font-display)',
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: colorSet.primary,
                      }}>
                        ${item.current}B
                      </span>
                      <span style={{
                        fontFamily: 'var(--slide-font-body)',
                        fontSize: '0.625rem',
                        color: 'var(--slide-text-muted)',
                      }}>
                        현재 규모
                      </span>
                    </div>
                  )}
                </div>

                {/* CAGR - Green 계열 */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 5, marginBottom: 4 }}>
                    <span style={{
                      fontFamily: 'var(--slide-font-body)',
                      fontSize: '0.5625rem',
                      color: 'var(--slide-text-tertiary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                    }}>
                      CAGR
                    </span>
                    <span style={{
                      fontFamily: 'var(--slide-font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--status-positive)',
                    }}>
                      {item.cagr}%
                    </span>
                  </div>
                  <div style={{
                    height: 4,
                    background: 'var(--slide-bg-tertiary)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${cagrBarWidth}%`,
                      background: 'var(--status-positive-gradient)',
                      borderRadius: 2,
                    }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 출처 */}
        <p className="animate-fade-in" style={{
          fontFamily: 'var(--slide-font-mono)',
          fontSize: '0.5625rem',
          color: 'var(--slide-text-muted)',
          marginTop: 20,
          lineHeight: 1.6,
        }}>
          출처: Grand View Research, Fortune Business Insights, Precedence Research, GMI
        </p>
        </div>
      </div>
    </SlideLayout>
  );
}
