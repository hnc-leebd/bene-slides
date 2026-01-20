import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { CheckCircle, XCircle, Users, Building2, Package, ArrowRight, AlertTriangle } from 'lucide-react';

const TOTAL_PAGES = 33;

const pros = [
  { label: '현행 리소스 실행', desc: '추가 인력 불필요', impact: '비용 최소화' },
  { label: '빠른 시장 진입', desc: '3개월 내 출시 가능', impact: '기회 선점' },
  { label: '파트너십 레버리지', desc: 'Duallab 네트워크 활용', impact: '영업 부담 감소' },
  { label: '리스크 분산', desc: '파트너와 리스크 공유', impact: '안정성' },
];

const cons = [
  { label: '파트너 의존', desc: '파트너 성과에 종속', mitigation: '다수 파트너 확보' },
  { label: '계약 규모 작음', desc: 'SDK 라이선스는 소액', mitigation: '볼륨 확대' },
  { label: '직접 고객 관계 없음', desc: '최종 고객 접점 부재', mitigation: '장기적으로 SaaS 전환' },
  { label: '시장 규모 제한', desc: 'DMS 일부만 타겟', mitigation: '시장 검증 목적' },
];

export default function Slide20() {
  return (
    <SlideLayout currentPage={20} totalPages={TOTAL_PAGES} track={3}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 3 · Trade-offs</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 3 SDK B2B2B 트레이드오프
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            장점과 단점의 균형 · 완화 전략
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20
          }}>
            {/* Pros */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-positive)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'var(--status-positive-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircle size={18} color="white" />
                </div>
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  장점
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {pros.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '12px 14px',
                    background: 'rgba(34, 197, 94, 0.08)',
                    borderRadius: 8,
                    borderLeft: '3px solid var(--status-positive)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.label}</span>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        color: 'var(--status-positive)',
                        background: 'rgba(34, 197, 94, 0.15)',
                        padding: '2px 8px',
                        borderRadius: 100
                      }}>{item.impact}</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cons */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-negative)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'var(--status-negative-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <XCircle size={18} color="white" />
                </div>
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  단점
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {cons.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '12px 14px',
                    background: 'rgba(239, 68, 68, 0.08)',
                    borderRadius: 8,
                    borderLeft: '3px solid var(--status-negative)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.label}</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', marginBottom: 6 }}>{item.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>완화:</span>
                      <span style={{
                        fontSize: '0.8125rem',
                        color: 'var(--status-positive)',
                        fontWeight: 500
                      }}>{item.mitigation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="animate-slide-in stagger-4" style={{
            marginTop: 20,
            padding: '16px 20px',
            background: 'var(--slide-bg-tertiary)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
            <div style={{
              width: 4,
              height: 32,
              borderRadius: 2,
              background: 'var(--track-3-gradient)'
            }} />
            <p style={{
              fontSize: '0.8125rem',
              color: 'var(--slide-text-secondary)',
              lineHeight: 1.5,
              margin: 0
            }}>
              <strong style={{ color: 'var(--slide-text-primary)' }}>단계적 접근 가능:</strong> SDK B2B2B로 시장 검증 후,
              성과에 따라 SI 통합 또는 단독 SaaS로 확장하는 단계적 전략 고려 가능
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
