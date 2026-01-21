import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Code, ArrowRight, Users, Package, Handshake } from 'lucide-react';

const TOTAL_PAGES = 18;

const characteristics = [
  { label: 'SDK 형태', desc: '라이브러리로 제공', benefit: '통합 용이' },
  { label: '오픈코어', desc: '코어 무료 + 프리미엄 유료', benefit: '확산 + 수익' },
  { label: '파트너 의존', desc: '직접 고객 접점 없음', benefit: '영업 부담 없음' },
];

export default function Slide10() {
  return (
    <SlideLayout currentPage={10} totalPages={TOTAL_PAGES} track={3}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 3 · Overview</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            <span className="slide-header-track-3">트랙 3:</span> PDF→HTML 렌더링
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            DMS/ECM 시장 일부 · SDK B2B2B 모델 · 신규 추진
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24
          }}>
            {/* Overview */}
            <div className="slide-card slide-card-track-3">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: 'var(--track-3-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Code size={22} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-primary)'
                  }}>타겟 시장</h3>
                  <span style={{ fontSize: '0.875rem', color: 'var(--track-3-primary)' }}>DMS/ECM 시장 일부</span>
                </div>
              </div>

              <div style={{
                padding: '16px',
                background: 'var(--slide-bg-elevated)',
                borderRadius: 8,
                marginBottom: 16
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', textTransform: 'uppercase' }}>파트너</span>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--track-3-primary)', marginTop: 4 }}>PDF Association Duallab</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', textTransform: 'uppercase' }}>제품</span>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)', marginTop: 4 }}>PDF→HTML 렌더링 SDK</p>
                  </div>
                </div>
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--slide-border-subtle)' }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', textTransform: 'uppercase' }}>모델</span>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)', marginTop: 4 }}>B2B2B (SDK → 파트너 → 최종 고객)</p>
                </div>
              </div>

              {/* Product Characteristics */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {characteristics.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '10px 12px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 6,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.label}</span>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', marginTop: 2 }}>{item.desc}</p>
                    </div>
                    <span style={{
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.875rem',
                      color: 'var(--status-positive)',
                      background: 'rgba(34, 197, 94, 0.1)',
                      padding: '3px 8px',
                      borderRadius: 4
                    }}>{item.benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* B2B2B Structure */}
            <div className="slide-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <Handshake size={20} color="var(--track-3-primary)" />
                <h3 style={{
                  fontFamily: 'var(--slide-font-display)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: 'var(--slide-text-primary)'
                }}>B2B2B 구조</h3>
              </div>

              {/* Visual Flow */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                padding: '20px',
                background: 'var(--slide-bg-elevated)',
                borderRadius: 12
              }}>
                {/* Level 1 */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    padding: '16px 24px',
                    background: 'var(--track-3-gradient)',
                    borderRadius: 12,
                    textAlign: 'center'
                  }}>
                    <Package size={24} color="white" style={{ marginBottom: 8 }} />
                    <p style={{ fontWeight: 700, color: 'white', fontSize: '0.875rem' }}>opendataloader</p>
                    <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.8)' }}>SDK 제공</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ArrowRight size={20} color="var(--slide-text-muted)" style={{ transform: 'rotate(90deg)' }} />
                </div>

                {/* Level 2 */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    padding: '14px 20px',
                    background: 'var(--slide-bg-tertiary)',
                    borderRadius: 10,
                    border: '1px solid var(--track-3-border)',
                    textAlign: 'center'
                  }}>
                    <Handshake size={20} color="var(--track-3-primary)" style={{ marginBottom: 6 }} />
                    <p style={{ fontWeight: 600, color: 'var(--slide-text-primary)', fontSize: '0.8125rem' }}>Duallab / SI 파트너</p>
                    <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>통합/커스터마이징</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ArrowRight size={20} color="var(--slide-text-muted)" style={{ transform: 'rotate(90deg)' }} />
                </div>

                {/* Level 3 */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    padding: '14px 20px',
                    background: 'var(--slide-bg-tertiary)',
                    borderRadius: 10,
                    textAlign: 'center'
                  }}>
                    <Users size={20} color="var(--slide-text-secondary)" style={{ marginBottom: 6 }} />
                    <p style={{ fontWeight: 600, color: 'var(--slide-text-primary)', fontSize: '0.8125rem' }}>최종 고객</p>
                    <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>DMS/ECM 사용</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
