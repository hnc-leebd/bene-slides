import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { TrendingUp, Shield, Target, Trophy } from 'lucide-react';

const TOTAL_PAGES = 33;

const scoreData = {
  opportunity: {
    label: '시장 기회',
    icon: TrendingUp,
    metrics: [
      { name: '시장 규모', track1: { score: 3, label: '$12B~$67B' }, track2: { score: 2, label: '$1.7B~$2.6B' }, track3: { score: 1, label: '제한적' } },
      { name: '성장률', track1: { score: 3, label: '30%+ CAGR' }, track2: { score: 2, label: '8~14% CAGR' }, track3: { score: 1, label: '제한적' } },
      { name: '규제 드라이버', track1: { score: 0, label: '—' }, track2: { score: 3, label: 'EAA 2025.6' }, track3: { score: 0, label: '—' } },
    ]
  },
  risk: {
    label: '실행 가능성',
    icon: Shield,
    metrics: [
      { name: '경쟁 강도 (낮을수록 ★↑)', track1: { score: 0, label: '매우 높음' }, track2: { score: 2, label: '중간' }, track3: { score: 1, label: '높음' } },
      { name: '추가 투자 (적을수록 ★↑)', track1: { score: 2, label: 'ML/OCR 필요' }, track2: { score: 3, label: '현행 유지' }, track3: { score: 3, label: '현행 유지' } },
      { name: '기술/시너지 적합도', track1: { score: 2, label: '중간' }, track2: { score: 3, label: '높음' }, track3: { score: 2, label: '중간' } },
    ]
  }
};

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

function ScoreCell({ score, label, trackColor }: { score: number; label: string; trackColor: string }) {
  const opacity = score === 0 ? 0.2 : score === 1 ? 0.4 : score === 2 ? 0.7 : 1;
  const bgOpacity = score === 0 ? 0.03 : score === 1 ? 0.06 : score === 2 ? 0.12 : 0.2;

  return (
    <td style={{
      padding: '8px 10px',
      background: `rgba(${trackColor}, ${bgOpacity})`,
      borderBottom: '1px solid var(--slide-border-subtle)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ display: 'flex', gap: 2 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              width: 6,
              height: 16,
              borderRadius: 2,
              background: i <= score ? `rgba(${trackColor}, ${opacity})` : 'rgba(255, 255, 255, 0.06)'
            }} />
          ))}
        </div>
        <span style={{
          fontSize: '0.875rem',
          color: score === 0 ? 'var(--slide-text-muted)' : score >= 2 ? 'var(--slide-text-primary)' : 'var(--slide-text-tertiary)',
          fontWeight: score === 3 ? 600 : 400
        }}>{label}</span>
      </div>
    </td>
  );
}

export default function Slide22() {
  const tracks = [
    { key: 'track1' as const, name: '트랙 1', subtitle: 'IDP', color: '6, 182, 212', total: track1Total, cssVar: 'var(--track-1-primary)' },
    { key: 'track2' as const, name: '트랙 2', subtitle: 'PDF 접근성', color: '168, 85, 247', total: track2Total, cssVar: 'var(--track-2-primary)' },
    { key: 'track3' as const, name: '트랙 3', subtitle: 'PDF→HTML', color: '245, 158, 11', total: track3Total, cssVar: 'var(--track-3-primary)' },
  ];

  return (
    <SlideLayout currentPage={22} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Summary · Scorecard</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            전략 스코어카드
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            3개 트랙 종합 평가
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3">
            <table style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: 0,
              borderRadius: 12,
              overflow: 'hidden',
              background: 'var(--slide-bg-secondary)',
              fontSize: '0.875rem'
            }}>
              <thead>
                <tr>
                  <th style={{ width: '10%', padding: '12px', background: 'var(--slide-bg-tertiary)', textAlign: 'center', fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid var(--slide-border-default)' }}>분류</th>
                  <th style={{ width: '16%', padding: '12px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid var(--slide-border-default)' }}>평가 항목</th>
                  {tracks.map(track => (
                    <th key={track.key} style={{
                      width: '24.67%',
                      padding: '12px 10px',
                      background: 'var(--slide-bg-tertiary)',
                      borderBottom: `3px solid ${track.cssVar}`,
                      textAlign: 'center'
                    }}>
                      <div style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: track.cssVar }}>{track.name}</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>{track.subtitle}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(scoreData).map(([catKey, category]) => {
                  const Icon = category.icon;
                  const rowSpan = category.metrics.length;

                  return category.metrics.map((metric, metricIdx) => (
                    <tr key={`${catKey}-${metricIdx}`}>
                      {metricIdx === 0 && (
                        <td rowSpan={rowSpan} style={{
                          padding: '10px',
                          borderBottom: '1px solid var(--slide-border-default)',
                          background: 'rgba(255, 255, 255, 0.02)',
                          verticalAlign: 'middle'
                        }}>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                            <Icon size={16} color="var(--slide-text-secondary)" />
                            <div style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', textTransform: 'uppercase', textAlign: 'center' }}>{category.label}</div>
                          </div>
                        </td>
                      )}
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 500 }}>{metric.name}</span>
                      </td>
                      {tracks.map(track => (
                        <ScoreCell key={track.key} score={metric[track.key].score} label={metric[track.key].label} trackColor={track.color} />
                      ))}
                    </tr>
                  ));
                })}

                {/* Total Row */}
                <tr>
                  <td colSpan={2} style={{ padding: '12px', background: 'var(--slide-bg-tertiary)', borderTop: '2px solid var(--slide-border-default)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Trophy size={16} color="var(--track-2-primary)" />
                      <span style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>종합 점수</span>
                    </div>
                  </td>
                  {tracks.map(track => {
                    const isWinner = track.total === maxTotal;
                    return (
                      <td key={track.key} style={{
                        padding: '12px',
                        background: isWinner ? `rgba(${track.color}, 0.15)` : 'var(--slide-bg-tertiary)',
                        borderTop: `2px solid ${isWinner ? track.cssVar : 'var(--slide-border-default)'}`,
                        textAlign: 'center'
                      }}>
                        <div style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 800, fontSize: '1.5rem', color: track.cssVar }}>{track.total}</div>
                        <div style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>/ 18점</div>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="animate-slide-in stagger-4" style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 24 }}>
            {[{ bars: 3, label: '유리 (3점)', color: 'var(--status-positive)' }, { bars: 2, label: '보통 (2점)', color: 'var(--status-warning)' }, { bars: 1, label: '불리 (1점)', color: 'var(--status-negative)' }].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1, 2, 3].map(i => (
                    <div key={i} style={{ width: 5, height: 12, borderRadius: 1, background: i <= item.bars ? item.color : 'rgba(255, 255, 255, 0.1)' }} />
                  ))}
                </div>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
