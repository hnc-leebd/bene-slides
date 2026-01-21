import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Accessibility, TrendingUp, Shield, Handshake } from 'lucide-react';

const TOTAL_PAGES = 18;

const marketData = [
  { segment: 'Digital Accessibility Software', current: '$721M', future: '$2.6B', cagr: '~14%' },
  { segment: 'Remediation Platform', current: '$644M', future: '$1.73B', cagr: '13.2%' },
];

const products = [
  { name: 'AI 기반 고품질 PDF/UA', features: '레이아웃 분석 + 자동 태깅', diff: 'AI 정확도' },
  { name: 'PDF/UA 워크플로우', features: '웹앱 + veraPDF 검증', diff: 'End-to-end' },
];

const drivers = [
  { label: '규제 강제', desc: 'EAA 2025.6.28 시행 → 미준수 시 €3M 벌금, 시장 퇴출' },
  { label: '파트너십', desc: 'veraPDF MoU → 기술 협력 기반 확보' },
];

export default function Slide7() {
  return (
    <SlideLayout currentPage={7} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Overview</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            <span className="slide-header-track-2">트랙 2:</span> PDF 접근성 시장
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            Digital Accessibility & Remediation · 신규 추진
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24
          }}>
            {/* Market Size */}
            <div className="slide-card slide-card-track-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'var(--track-2-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <TrendingUp size={20} color="white" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                    타겟 시장
                  </h3>
                  <span style={{ fontSize: '0.875rem', color: 'var(--track-2-primary)' }}>Digital Accessibility & Remediation</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {marketData.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '14px 16px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 8,
                    borderLeft: '3px solid var(--track-2-primary)'
                  }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>{item.segment}</span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6 }}>
                      <span style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.8125rem', color: 'var(--slide-text-secondary)' }}>{item.current}</span>
                      <span style={{ color: 'var(--slide-text-muted)' }}>→</span>
                      <span style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--track-2-primary)' }}>{item.future}</span>
                      <span style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', color: 'var(--status-positive)' }}>({item.cagr})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Products & Drivers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Products */}
              <div className="slide-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <Accessibility size={18} color="var(--track-2-primary)" />
                  <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                    제품 구성
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {products.map((product, idx) => (
                    <div key={idx} style={{
                      padding: '10px 12px',
                      background: 'var(--slide-bg-elevated)',
                      borderRadius: 6,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{product.name}</span>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', marginTop: 2 }}>{product.features}</p>
                      </div>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        color: 'var(--track-2-primary)',
                        background: 'rgba(168, 85, 247, 0.1)',
                        padding: '3px 8px',
                        borderRadius: 4
                      }}>{product.diff}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Drivers */}
              <div className="slide-card" style={{ borderTop: '4px solid var(--status-positive)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <Shield size={18} color="var(--status-positive)" />
                  <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                    핵심 드라이버
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {drivers.map((driver, idx) => (
                    <div key={idx} style={{
                      padding: '10px 12px',
                      background: 'rgba(34, 197, 94, 0.08)',
                      borderRadius: 6,
                      borderLeft: '3px solid var(--status-positive)'
                    }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--status-positive)' }}>{driver.label}</span>
                      <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', marginTop: 4, lineHeight: 1.4 }}>{driver.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
