import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Layers, ArrowRight, Star, CheckCircle, XCircle, DollarSign } from 'lucide-react';

const TOTAL_PAGES = 33;

const evaluation = [
  { item: '계약 강제력', rating: 1, ratingLabel: '없음', desc: 'AI 가치로 전환 유도 필요' },
  { item: '확산성', rating: 2.5, ratingLabel: '2~3', desc: 'Base 라이선스에 따라 다름' },
  { item: '수익 모델', rating: 0, ratingLabel: '—', desc: 'AI 서비스 장기 전략' },
];

const successCases = [
  { company: 'IBM', openSource: 'Docling (MIT)', premium: 'watsonx.ai', connection: 'AI SaaS' },
  { company: 'Hugging Face', openSource: 'Transformers (Apache)', premium: 'HF Hub Pro', connection: 'AI 인프라' },
  { company: 'GitLab', openSource: 'GitLab CE (MIT)', premium: 'GitLab EE', connection: '기능 차별화' },
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3].map(i => (
        <Star
          key={i}
          size={12}
          fill={i <= rating ? 'var(--status-warning)' : i - 0.5 <= rating ? 'var(--status-warning)' : 'transparent'}
          color={i <= rating || i - 0.5 <= rating ? 'var(--status-warning)' : 'var(--slide-border-default)'}
        />
      ))}
    </div>
  );
}

export default function Slide28() {
  return (
    <SlideLayout currentPage={28} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 2 · Scenario B</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            시나리오 B: <span style={{ color: 'var(--track-1-primary)' }}>오픈코어 전략</span>
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            전략: 코어 무료 + Hancom AI 프리미엄
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24
          }}>
            {/* Flow Diagram */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--track-1-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <Layers size={20} color="var(--track-1-primary)" />
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
                  { text: 'opendataloader-pdf (MPL 또는 Apache, 무료)', highlight: false },
                  { text: '기본 기능: 로컬 PDF 파싱, 룰 기반 처리', highlight: false },
                  { text: '프리미엄 옵션: Hancom AI 연동', highlight: true },
                  { text: 'AI 엔터프라이즈 및 컨설팅 수익화', highlight: true }
                ].map((step, idx) => (
                  <div key={idx}>
                    <div style={{
                      padding: '12px 14px',
                      background: step.highlight ? 'rgba(6, 182, 212, 0.1)' : 'var(--slide-bg-tertiary)',
                      borderRadius: 8,
                      borderLeft: `3px solid ${step.highlight ? 'var(--track-1-primary)' : 'var(--slide-border-default)'}`,
                      fontSize: '0.875rem',
                      color: step.highlight ? 'var(--track-1-primary)' : 'var(--slide-text-secondary)',
                      fontWeight: step.highlight ? 600 : 400
                    }}>
                      {step.text}
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
                    borderRadius: 8
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.company}</span>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        color: 'var(--track-1-primary)',
                        background: 'rgba(6, 182, 212, 0.1)',
                        padding: '2px 8px',
                        borderRadius: 4
                      }}>{item.connection}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <div style={{
                        flex: 1,
                        padding: '8px 10px',
                        background: 'rgba(34, 197, 94, 0.08)',
                        borderRadius: 6,
                        borderLeft: '2px solid var(--status-positive)'
                      }}>
                        <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>무료</span>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-secondary)', marginTop: 2 }}>{item.openSource}</p>
                      </div>
                      <div style={{
                        flex: 1,
                        padding: '8px 10px',
                        background: 'rgba(6, 182, 212, 0.08)',
                        borderRadius: 6,
                        borderLeft: '2px solid var(--track-1-primary)'
                      }}>
                        <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>프리미엄</span>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--track-1-primary)', marginTop: 2, fontWeight: 500 }}>{item.premium}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div style={{
                marginTop: 20,
                padding: '14px 16px',
                background: 'rgba(6, 182, 212, 0.08)',
                borderRadius: 8,
                borderLeft: '3px solid var(--track-1-primary)'
              }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <CheckCircle size={14} color="var(--status-positive)" style={{ marginBottom: 4 }} />
                    <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-muted)' }}>강점</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', marginTop: 2 }}>확산 + AI 연결</p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <XCircle size={14} color="var(--status-negative)" style={{ marginBottom: 4 }} />
                    <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-muted)' }}>약점</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', marginTop: 2 }}>계약 강제력 없음</p>
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
