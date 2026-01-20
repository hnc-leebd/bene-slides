import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Star, Target, Zap, CheckCircle } from 'lucide-react';

const TOTAL_PAGES = 33;

const marketOpportunity = [
  { item: '시장 규모', rating: 1, rationale: 'DMS 일부 (규모 제한적)' },
  { item: '규제 드라이버', rating: 1, rationale: '산업별 (강하지 않음)' },
  { item: '파트너십', rating: 3, rationale: 'PDF Association Duallab' },
];

const executability = [
  { item: '경쟁 강도', rating: 2, rationale: '중간~높음' },
  { item: '추가 투자', rating: 3, rationale: '현행 유지' },
  { item: '실행 기간', rating: 3, rationale: '3개월' },
  { item: 'veraPDF 시너지', rating: 2, rationale: '중간' },
];

const insights = [
  { text: '시장 규모는 제한적이나 현행 리소스로 빠른 실행 가능', type: 'neutral' },
  { text: '파트너십 기반으로 리스크 분산', type: 'positive' },
  { text: '시장 검증 후 확장 전략 결정 (SI 통합 또는 SaaS)', type: 'neutral' },
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3].map(i => (
        <Star
          key={i}
          size={14}
          fill={i <= rating ? 'var(--track-3-primary)' : 'transparent'}
          color={i <= rating ? 'var(--track-3-primary)' : 'var(--slide-border-default)'}
        />
      ))}
    </div>
  );
}

export default function Slide21() {
  return (
    <SlideLayout currentPage={21} totalPages={TOTAL_PAGES} track={3}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 3 · Summary</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 3 종합 평가
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            시장 규모 제한적 but 빠른 실행 + 리스크 분산
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20
          }}>
            {/* Market Opportunity */}
            <div className="slide-card slide-card-track-3">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'var(--track-3-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Target size={18} color="white" />
                </div>
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  시장 기회
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {marketOpportunity.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '10px 12px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                  }}>
                    <RatingStars rating={item.rating} />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.item}</span>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', marginTop: 2 }}>{item.rationale}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Executability */}
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
                  <Zap size={18} color="white" />
                </div>
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  실행 가능성
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {executability.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '10px 12px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                  }}>
                    <RatingStars rating={item.rating} />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.item}</span>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', marginTop: 2 }}>{item.rationale}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="animate-slide-in stagger-4" style={{
            marginTop: 20,
            padding: '16px 20px',
            background: 'var(--slide-bg-tertiary)',
            borderRadius: 12
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <Target size={16} color="var(--track-3-primary)" />
              <span style={{ fontFamily: 'var(--slide-font-display)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>핵심 인사이트</span>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {insights.map((insight, idx) => (
                <div key={idx} style={{
                  flex: 1,
                  padding: '12px 14px',
                  borderRadius: 8,
                  background: insight.type === 'positive' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                  borderLeft: `3px solid ${insight.type === 'positive' ? 'var(--status-positive)' : 'var(--status-warning)'}`
                }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', lineHeight: 1.5 }}>{insight.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
