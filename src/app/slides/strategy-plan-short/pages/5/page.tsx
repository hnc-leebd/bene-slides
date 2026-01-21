import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { BarChart3, TrendingUp } from 'lucide-react';

const TOTAL_PAGES = 18;

const marketSources = [
  { source: 'Grand View Research', current: '$2.3B', future: '$12.35B (2030)', cagr: '33.1%', note: '보수적 추정' },
  { source: 'Fortune Business Insights', current: '$7.89B', future: '$66.68B (2032)', cagr: '30.1%', note: '낙관적 추정' },
  { source: 'Precedence Research', current: '$3.22B', future: '$43.92B (2034)', cagr: '33.68%', note: '중간 추정' },
  { source: 'GMI', current: '$2.3B', future: '—', cagr: '24.7%', note: '보수적 추정' },
];

const subMarkets = [
  { name: '인보이스 OCR', current: '$2.8B', future: '$47.1B', cagr: '32.6%', feature: '고성장' },
  { name: 'BFSI (금융/보험)', current: '전체의 ~40%', future: '—', cagr: '—', feature: '최대 수요' },
];

export default function Slide5() {
  return (
    <SlideLayout currentPage={5} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Market Size</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 1: IDP 시장 규모 (2030s): <span className="slide-header-track-1">$12B ~ $67B</span>
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            복수 리서치 기관 전망 비교
          </p>
        </div>

        <div className="slide-content-area">
          {/* Main Market Table */}
          <div className="animate-slide-in stagger-3">
            <table style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: 0,
              borderRadius: 12,
              overflow: 'hidden',
              background: 'var(--slide-bg-secondary)'
            }}>
              <thead>
                <tr>
                  <th style={{ padding: '14px 16px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>출처</th>
                  <th style={{ padding: '14px 16px', background: 'var(--slide-bg-tertiary)', textAlign: 'right', fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>현재 규모</th>
                  <th style={{ padding: '14px 16px', background: 'var(--slide-bg-tertiary)', textAlign: 'right', fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>미래 전망</th>
                  <th style={{ padding: '14px 16px', background: 'var(--slide-bg-tertiary)', textAlign: 'right', fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>CAGR</th>
                  <th style={{ padding: '14px 16px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>비고</th>
                </tr>
              </thead>
              <tbody>
                {marketSources.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: '12px 16px', fontSize: '0.8125rem', color: 'var(--slide-text-primary)', fontWeight: 500, borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.source}</td>
                    <td style={{ padding: '12px 16px', fontSize: '0.8125rem', color: 'var(--slide-text-secondary)', textAlign: 'right', fontFamily: 'var(--slide-font-mono)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.current}</td>
                    <td style={{ padding: '12px 16px', fontSize: '0.8125rem', color: 'var(--track-1-primary)', textAlign: 'right', fontFamily: 'var(--slide-font-mono)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.future}</td>
                    <td style={{ padding: '12px 16px', fontSize: '0.8125rem', color: 'var(--status-positive)', textAlign: 'right', fontFamily: 'var(--slide-font-mono)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.cagr}</td>
                    <td style={{ padding: '12px 16px', fontSize: '0.875rem', color: 'var(--slide-text-muted)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sub Markets */}
          <div className="animate-slide-in stagger-4" style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <BarChart3 size={16} color="var(--track-1-primary)" />
              <span style={{ fontFamily: 'var(--slide-font-display)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>세부 시장</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {subMarkets.map((market, idx) => (
                <div key={idx} className="slide-card" style={{
                  padding: 16,
                  borderLeft: '3px solid var(--track-1-primary)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{market.name}</span>
                      <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
                        <div>
                          <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>현재</span>
                          <p style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', color: 'var(--slide-text-secondary)' }}>{market.current}</p>
                        </div>
                        <div>
                          <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>전망</span>
                          <p style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', color: 'var(--track-1-primary)', fontWeight: 600 }}>{market.future}</p>
                        </div>
                        {market.cagr !== '—' && (
                          <div>
                            <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>CAGR</span>
                            <p style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', color: 'var(--status-positive)', fontWeight: 600 }}>{market.cagr}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <span style={{
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.875rem',
                      color: 'var(--track-1-primary)',
                      background: 'rgba(6, 182, 212, 0.1)',
                      padding: '4px 8px',
                      borderRadius: 4
                    }}>{market.feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
