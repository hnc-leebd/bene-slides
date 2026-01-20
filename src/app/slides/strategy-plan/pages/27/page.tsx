import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Lock, ArrowRight, DollarSign, Users, Star, CheckCircle, XCircle } from 'lucide-react';

const TOTAL_PAGES = 33;

const evaluation = [
  { item: '계약 강제력', rating: 3, ratingLabel: '높음', desc: '법적 의무로 구매 유도' },
  { item: '확산성', rating: 1, ratingLabel: '낮음', desc: 'AGPL 기피 기업 다수 (Google 등)' },
  { item: '수익 모델', rating: 0, ratingLabel: '—', desc: '단기 라이선스 판매' },
];

const successCases = [
  { company: 'MongoDB', product: 'MongoDB', license: 'SSPL (AGPL 파생)', revenue: '$1B+' },
  { company: 'Grafana Labs', product: 'Grafana', license: 'AGPL', revenue: '$200M+ ARR' },
  { company: 'Artifex', product: 'PyMuPDF', license: 'AGPL', revenue: '—' },
  { company: 'Datalab', product: 'Marker', license: 'GPL', revenue: '$1M+ ARR' },
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3].map(i => (
        <Star
          key={i}
          size={12}
          fill={i <= rating ? 'var(--status-warning)' : 'transparent'}
          color={i <= rating ? 'var(--status-warning)' : 'var(--slide-border-default)'}
        />
      ))}
    </div>
  );
}

export default function Slide27() {
  return (
    <SlideLayout currentPage={27} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 2 · Scenario A</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            시나리오 A: <span style={{ color: 'var(--status-negative)' }}>AGPL 듀얼 라이선스</span>
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            전략: 카피레프트 강제 → 상용 라이선스 판매
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24
          }}>
            {/* Flow Diagram */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-negative)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <Lock size={20} color="var(--status-negative)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  전략 흐름
                </h3>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                padding: '16px',
                background: 'var(--slide-bg-elevated)',
                borderRadius: 12
              }}>
                {[
                  '기업이 opendataloader-pdf 사용',
                  'AGPL 조건: SaaS 제공 시 전체 소스 공개 의무',
                  '선택: 소스 공개 vs 상용 라이선스 구매',
                  '대부분 기업: 상용 라이선스 구매 (소스 공개 회피)'
                ].map((step, idx) => (
                  <div key={idx}>
                    <div style={{
                      padding: '12px 14px',
                      background: idx === 3 ? 'rgba(239, 68, 68, 0.1)' : 'var(--slide-bg-tertiary)',
                      borderRadius: 8,
                      borderLeft: `3px solid ${idx === 3 ? 'var(--status-negative)' : 'var(--slide-border-default)'}`,
                      fontSize: '0.875rem',
                      color: idx === 3 ? 'var(--status-negative)' : 'var(--slide-text-secondary)'
                    }}>
                      {step}
                    </div>
                    {idx < 3 && (
                      <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
                        <ArrowRight size={16} color="var(--slide-text-muted)" style={{ transform: 'rotate(90deg)' }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Evaluation */}
              <div style={{ marginTop: 16 }}>
                {evaluation.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: idx < evaluation.length - 1 ? '1px solid var(--slide-border-subtle)' : 'none'
                  }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)' }}>{item.item}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      {item.rating > 0 && <RatingStars rating={item.rating} />}
                      <span style={{ fontSize: '0.8125rem', color: item.rating === 1 ? 'var(--status-negative)' : 'var(--slide-text-muted)' }}>
                        {item.rating === 0 ? item.desc : item.ratingLabel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Cases */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-positive)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <DollarSign size={20} color="var(--status-positive)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  성공 사례
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {successCases.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '14px 16px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 8,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.company}</span>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', marginTop: 2 }}>{item.product} · {item.license}</p>
                    </div>
                    <span style={{
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: item.revenue === '—' ? 'var(--slide-text-muted)' : 'var(--status-positive)'
                    }}>{item.revenue}</span>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div style={{
                marginTop: 20,
                padding: '14px 16px',
                background: 'rgba(239, 68, 68, 0.08)',
                borderRadius: 8,
                borderLeft: '3px solid var(--status-negative)'
              }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <CheckCircle size={14} color="var(--status-positive)" style={{ marginBottom: 4 }} />
                    <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-muted)' }}>강점</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', marginTop: 2 }}>계약 강제력 높음</p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <XCircle size={14} color="var(--status-negative)" style={{ marginBottom: 4 }} />
                    <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-muted)' }}>약점</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', marginTop: 2 }}>확산 제한 (AGPL 기피)</p>
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
