import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Star, TrendingUp, Shield, Zap, Target, CheckCircle } from 'lucide-react';

const TOTAL_PAGES = 33;

const marketOpportunity = [
  { item: '시장 규모', rating: 2, rationale: '$644M~$1.73B (CAGR 13.2%)' },
  { item: '규제 드라이버', rating: 3, rationale: 'EAA 2025.6 (강력, 시급)' },
  { item: '니치 기회', rating: 3, rationale: 'UA 시각화 미제공 업체 다수' },
  { item: '아시아 시장', rating: 3, rationale: '현지 솔루션 부재' },
];

const executability = [
  { item: '경쟁 강도', rating: 2, rationale: '중간 (니치 기회 존재)' },
  { item: '추가 투자', rating: 3, rationale: '현행 유지 가능' },
  { item: '기술 적합도', rating: 2, rationale: 'Auto-Tagging 단기간 개발 가능' },
  { item: 'veraPDF 시너지', rating: 3, rationale: 'MoU 체결, End-to-end 가능' },
];

const insights = [
  { text: 'veraPDF 파트너십과 EAA 규제 시행이 맞물리는 최적 타이밍', type: 'positive' },
  { text: 'SMB 타겟으로 진입 시 기존 플레이어와의 직접 경쟁 회피 가능', type: 'positive' },
  { text: '현행 리소스로 실행 가능 → 빠른 시장 검증 가능', type: 'positive' },
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3].map(i => (
        <Star
          key={i}
          size={14}
          fill={i <= rating ? 'var(--track-2-primary)' : 'transparent'}
          color={i <= rating ? 'var(--track-2-primary)' : 'var(--slide-border-default)'}
        />
      ))}
    </div>
  );
}

export default function Slide18() {
  return (
    <SlideLayout currentPage={18} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Summary</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 2 종합 평가
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            시장 기회 + 실행 가능성 = <span style={{ color: 'var(--track-2-primary)', fontWeight: 700 }}>최고 점수</span>
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20
          }}>
            {/* Market Opportunity */}
            <div className="slide-card slide-card-track-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'var(--track-2-gradient)',
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
              <Target size={16} color="var(--track-2-primary)" />
              <span style={{ fontFamily: 'var(--slide-font-display)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>핵심 인사이트</span>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {insights.map((insight, idx) => (
                <div key={idx} style={{
                  flex: 1,
                  padding: '12px 14px',
                  borderRadius: 8,
                  background: 'rgba(34, 197, 94, 0.1)',
                  borderLeft: '3px solid var(--status-positive)'
                }}>
                  <CheckCircle size={14} color="var(--status-positive)" style={{ marginBottom: 6 }} />
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
