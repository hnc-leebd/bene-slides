import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { TrendingUp, Shield, Target, Trophy } from 'lucide-react';

const TOTAL_PAGES = 20;

// Score data: 3 = excellent, 2 = moderate, 1 = poor, 0 = unknown/N/A
const scoreData = {
  opportunity: {
    label: '시장 기회',
    icon: TrendingUp,
    metrics: [
      {
        name: '시장 규모',
        track1: { score: 3, label: '$2.3B~$7.9B' },
        track2: { score: 2, label: '$644M~$1.2B' },
        track3: { score: 1, label: 'DMS 일부' }
      },
      {
        name: '성장률',
        track1: { score: 3, label: '30%+ CAGR' },
        track2: { score: 2, label: '8~14% CAGR' },
        track3: { score: 1, label: '—' }
      },
      {
        name: '규제 드라이버',
        track1: { score: 0, label: '없음' },
        track2: { score: 3, label: 'EAA 2025.6' },
        track3: { score: 1, label: '산업별' }
      },
    ]
  },
  risk: {
    label: '리스크',
    icon: Shield,
    metrics: [
      {
        name: '경쟁 강도',
        track1: { score: 1, label: '매우 높음' },
        track2: { score: 2, label: '중간' },
        track3: { score: 2, label: '중간~높음' }
      },
      {
        name: '추가 투자',
        track1: { score: 1, label: 'ML/OCR 필요' },
        track2: { score: 3, label: '현행 유지' },
        track3: { score: 3, label: '현행 유지' }
      },
    ]
  },
  fit: {
    label: '전략 적합도',
    icon: Target,
    metrics: [
      {
        name: '기술 적합도',
        track1: { score: 1, label: '낮음' },
        track2: { score: 2, label: '중간' },
        track3: { score: 2, label: '중간' }
      },
      {
        name: 'veraPDF 시너지',
        track1: { score: 1, label: '낮음' },
        track2: { score: 3, label: '높음' },
        track3: { score: 2, label: '중간' }
      },
    ]
  }
};

// Calculate totals
const calculateTotal = (trackKey: 'track1' | 'track2' | 'track3') => {
  let total = 0;
  Object.values(scoreData).forEach(category => {
    category.metrics.forEach(metric => {
      total += metric[trackKey].score;
    });
  });
  return total;
};

const track1Total = calculateTotal('track1');
const track2Total = calculateTotal('track2');
const track3Total = calculateTotal('track3');
const maxTotal = Math.max(track1Total, track2Total, track3Total);

// Score cell component with visual bar
function ScoreCell({ score, label, trackColor }: { score: number; label: string; trackColor: string }) {
  const opacity = score === 0 ? 0.2 : score === 1 ? 0.4 : score === 2 ? 0.7 : 1;
  const bgOpacity = score === 0 ? 0.03 : score === 1 ? 0.06 : score === 2 ? 0.12 : 0.2;

  return (
    <td style={{
      padding: '10px 12px',
      background: `rgba(${trackColor}, ${bgOpacity})`,
      position: 'relative',
      borderBottom: '1px solid var(--slide-border-subtle)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Score bar */}
        <div style={{
          display: 'flex',
          gap: 3,
        }}>
          {[1, 2, 3].map(i => (
            <div
              key={i}
              style={{
                width: 8,
                height: 20,
                borderRadius: 2,
                background: i <= score
                  ? `rgba(${trackColor}, ${opacity})`
                  : 'rgba(255, 255, 255, 0.06)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
        {/* Label */}
        <span style={{
          fontSize: '0.8125rem',
          color: score === 0
            ? 'var(--slide-text-muted)'
            : score >= 2
              ? 'var(--slide-text-primary)'
              : 'var(--slide-text-tertiary)',
          fontWeight: score === 3 ? 600 : 400,
          fontFamily: 'var(--slide-font-body)'
        }}>
          {label}
        </span>
      </div>
    </td>
  );
}

export default function Slide19() {
  const tracks = [
    { key: 'track1' as const, name: '트랙 1', subtitle: '포맷 확장 (PDF, 오피스, 이미지/OCR)', color: '6, 182, 212', total: track1Total, cssVar: 'var(--track-1-primary)' },
    { key: 'track2' as const, name: '트랙 2', subtitle: 'PDF 접근성', color: '168, 85, 247', total: track2Total, cssVar: 'var(--track-2-primary)' },
    { key: 'track3' as const, name: '트랙 3', subtitle: 'PDF→HTML', color: '245, 158, 11', total: track3Total, cssVar: 'var(--track-3-primary)' },
  ];

  const categories = Object.entries(scoreData);

  return (
    <SlideLayout currentPage={19} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Summary</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            전략 스코어카드
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2" style={{ marginBottom: 32 }}>
            3개 트랙 종합 평가
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3">
          <table style={{
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
            borderRadius: 16,
            overflow: 'hidden',
            background: 'var(--slide-bg-secondary)'
          }}>
            <thead>
              <tr>
                <th style={{
                  width: '12%',
                  padding: '16px 16px',
                  background: 'var(--slide-bg-tertiary)',
                  borderBottom: '1px solid var(--slide-border-default)',
                  textAlign: 'center',
                  fontFamily: 'var(--slide-font-display)',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  color: 'var(--slide-text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  분류
                </th>
                <th style={{
                  width: '14%',
                  padding: '16px 16px',
                  background: 'var(--slide-bg-tertiary)',
                  borderBottom: '1px solid var(--slide-border-default)',
                  textAlign: 'left',
                  fontFamily: 'var(--slide-font-display)',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  color: 'var(--slide-text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  평가 항목
                </th>
                {tracks.map(track => (
                  <th key={track.key} style={{
                    width: '24.67%',
                    padding: '16px 12px',
                    background: 'var(--slide-bg-tertiary)',
                    borderBottom: `3px solid ${track.cssVar}`,
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontFamily: 'var(--slide-font-display)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: track.cssVar,
                      marginBottom: 2
                    }}>
                      {track.name}
                    </div>
                    <div style={{
                      fontFamily: 'var(--slide-font-body)',
                      fontSize: '0.75rem',
                      color: 'var(--slide-text-tertiary)'
                    }}>
                      {track.subtitle}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map(([catKey, category]) => {
                const Icon = category.icon;
                const rowSpan = category.metrics.length;

                return category.metrics.map((metric, metricIdx) => (
                  <tr key={`${catKey}-${metricIdx}`}>
                    {metricIdx === 0 && (
                      <td rowSpan={rowSpan} style={{
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--slide-border-default)',
                        background: 'rgba(255, 255, 255, 0.02)',
                        verticalAlign: 'middle'
                      }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                          <div style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: 'var(--slide-bg-elevated)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <Icon size={16} color="var(--slide-text-secondary)" />
                          </div>
                          <div style={{
                            fontFamily: 'var(--slide-font-mono)',
                            fontSize: '0.6875rem',
                            color: 'var(--slide-text-tertiary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            textAlign: 'center'
                          }}>
                            {category.label}
                          </div>
                        </div>
                      </td>
                    )}
                    <td style={{
                      padding: '10px 16px',
                      borderBottom: '1px solid var(--slide-border-subtle)',
                      background: 'transparent'
                    }}>
                      <div style={{
                        fontFamily: 'var(--slide-font-body)',
                        fontSize: '0.875rem',
                        color: 'var(--slide-text-primary)',
                        fontWeight: 500
                      }}>
                        {metric.name}
                      </div>
                    </td>
                    {tracks.map(track => (
                      <ScoreCell
                        key={track.key}
                        score={metric[track.key].score}
                        label={metric[track.key].label}
                        trackColor={track.color}
                      />
                    ))}
                  </tr>
                ));
              })}

              {/* Total Score Row */}
              <tr>
                <td colSpan={2} style={{
                  padding: '16px 16px',
                  background: 'var(--slide-bg-tertiary)',
                  borderTop: '2px solid var(--slide-border-default)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      background: 'linear-gradient(135deg, var(--track-1-primary), var(--track-2-primary))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Trophy size={14} color="white" />
                    </div>
                    <span style={{
                      fontFamily: 'var(--slide-font-display)',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      color: 'var(--slide-text-primary)'
                    }}>
                      종합 점수
                    </span>
                  </div>
                </td>
                {tracks.map(track => {
                  const isWinner = track.total === maxTotal;
                  const percentage = Math.round((track.total / 21) * 100); // max possible = 7 metrics * 3 points

                  return (
                    <td key={track.key} style={{
                      padding: '16px 12px',
                      background: isWinner
                        ? `rgba(${track.color}, 0.15)`
                        : 'var(--slide-bg-tertiary)',
                      borderTop: `2px solid ${isWinner ? track.cssVar : 'var(--slide-border-default)'}`,
                      textAlign: 'center',
                      position: 'relative'
                    }}>
                      {/* Score bar */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'rgba(255, 255, 255, 0.05)'
                      }}>
                        <div style={{
                          width: `${percentage}%`,
                          height: '100%',
                          background: track.cssVar,
                          transition: 'width 0.5s ease'
                        }} />
                      </div>

                      <div style={{
                        fontFamily: 'var(--slide-font-display)',
                        fontWeight: 800,
                        fontSize: '1.75rem',
                        color: track.cssVar,
                        lineHeight: 1,
                        marginBottom: 4
                      }}>
                        {track.total}
                      </div>
                      <div style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--slide-text-tertiary)'
                      }}>
                        / 21점
                      </div>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="animate-slide-in stagger-4" style={{
          marginTop: 20,
          display: 'flex',
          justifyContent: 'center',
          gap: 32
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{
                  width: 6,
                  height: 14,
                  borderRadius: 1,
                  background: 'var(--status-positive)'
                }} />
              ))}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-tertiary)' }}>유리 (3점)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{
                  width: 6,
                  height: 14,
                  borderRadius: 1,
                  background: i <= 2 ? 'var(--status-warning)' : 'rgba(255, 255, 255, 0.1)'
                }} />
              ))}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-tertiary)' }}>보통 (2점)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{
                  width: 6,
                  height: 14,
                  borderRadius: 1,
                  background: i <= 1 ? 'var(--status-negative)' : 'rgba(255, 255, 255, 0.1)'
                }} />
              ))}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-tertiary)' }}>불리 (1점)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{
                  width: 6,
                  height: 14,
                  borderRadius: 1,
                  background: 'rgba(255, 255, 255, 0.1)'
                }} />
              ))}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-tertiary)' }}>해당없음 (0점)</span>
          </div>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
