import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Star, TrendingUp, Shield, Zap, Target } from 'lucide-react';

const TOTAL_PAGES = 33;

const marketOpportunity = [
  { item: '시장 규모', rating: 3, rationale: '$12B~$67B (CAGR 30%+)' },
  { item: '인보이스 OCR', rating: 3, rationale: '$2.8B → $47.1B (CAGR 32.6%)' },
  { item: 'BFSI 수요', rating: 3, rationale: '~40% (고부가 타겟 고객)' },
  { item: '핵심 니즈', rating: 3, rationale: 'OCR 99.9%+ (악조건 문서, 복잡한 표)' },
];

const entryRequirements = [
  { item: '경쟁 강도', rating: 1, rationale: '6+ 대형 플레이어 (Google, AWS, Upstage, Docling 등)' },
  { item: '필수 역량', rating: 2, rationale: 'OCR/ML 역량 필수' },
  { item: '고객 요건', rating: 2, rationale: 'SLA 보장, 온프레미스, 다국어' },
  { item: '차별화 조건', rating: 2, rationale: 'OCR 정확도 99.9%+ 필수' },
];

const insights = [
  { text: '오피스 포맷: 오픈소스 10개+ 존재로 차별화 어려움', type: 'negative' },
  { text: 'PDF는 여전히 어려운 문제 → 고품질 파서에 대한 수요 존재', type: 'positive' },
  { text: 'OCR/ML 역량이 시장 진입 성공의 핵심 변수', type: 'warning' },
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3].map(i => (
        <Star
          key={i}
          size={14}
          fill={i <= rating ? 'var(--status-warning)' : 'transparent'}
          color={i <= rating ? 'var(--status-warning)' : 'var(--slide-border-default)'}
        />
      ))}
    </div>
  );
}

export default function Slide11() {
  return (
    <SlideLayout currentPage={11} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Summary</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 1 종합 평가
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            시장 기회 vs 진입 요건 분석
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20
          }}>
            {/* Market Opportunity */}
            <div className="slide-card slide-card-track-1">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'var(--track-1-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <TrendingUp size={18} color="white" />
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

            {/* Entry Requirements */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-warning)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'var(--status-warning-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Shield size={18} color="white" />
                </div>
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  진입 요건
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {entryRequirements.map((item, idx) => (
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
              <Target size={16} color="var(--track-1-primary)" />
              <span style={{ fontFamily: 'var(--slide-font-display)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>핵심 인사이트</span>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {insights.map((insight, idx) => (
                <div key={idx} style={{
                  flex: 1,
                  padding: '12px 14px',
                  borderRadius: 8,
                  background: insight.type === 'negative' ? 'rgba(239, 68, 68, 0.1)' : insight.type === 'positive' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                  borderLeft: `3px solid ${insight.type === 'negative' ? 'var(--status-negative)' : insight.type === 'positive' ? 'var(--status-positive)' : 'var(--status-warning)'}`
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
