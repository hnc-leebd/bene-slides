import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { FileText, TrendingUp, Target, Building } from 'lucide-react';

const TOTAL_PAGES = 33;

const marketData = [
  { metric: '현재 시장 규모', value: '$2.3B ~ $7.9B', source: 'Grand View / Fortune BI' },
  { metric: '2030s 전망', value: '$12B ~ $67B', source: '복수 리서치' },
  { metric: 'CAGR', value: '30%+', source: '업계 평균' },
  { metric: 'BFSI 점유율', value: '~40%', source: '최대 수요 산업' },
];

const products = [
  {
    name: '문서 AI 연동',
    desc: 'Hancom 문서AI API 연동, 구조 인식 정확도 향상',
    target: '일반 기업'
  },
  {
    name: '커스텀 OCR 모델',
    desc: '99.5%+ 인식률, SLA 99.9%+, 감사 추적',
    target: '금융/법률/의료'
  }
];

export default function Slide6() {
  return (
    <SlideLayout currentPage={6} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Overview</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            <span className="slide-header-track-1">트랙 1:</span> IDP 시장
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            문서 AI + 커스텀 OCR · Intelligent Document Processing
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 24
          }}>
            {/* Market Size */}
            <div className="slide-card slide-card-track-1">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'var(--track-1-gradient)',
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
                  <span style={{ fontSize: '0.875rem', color: 'var(--track-1-primary)' }}>Intelligent Document Processing</span>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 12
              }}>
                {marketData.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '14px 16px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 8
                  }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.metric}
                    </span>
                    <p style={{
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: 'var(--track-1-primary)',
                      marginTop: 4
                    }}>
                      {item.value}
                    </p>
                    <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>{item.source}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="slide-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'var(--slide-bg-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FileText size={20} color="var(--track-1-primary)" />
                </div>
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  제품 구성
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {products.map((product, idx) => (
                  <div key={idx} style={{
                    padding: '14px 16px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 8,
                    borderLeft: '3px solid var(--track-1-primary)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{product.name}</span>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        color: 'var(--track-1-primary)',
                        background: 'rgba(6, 182, 212, 0.1)',
                        padding: '2px 6px',
                        borderRadius: 3
                      }}>{product.target}</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', lineHeight: 1.4 }}>{product.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="animate-slide-in stagger-4" style={{
            marginTop: 20,
            padding: '16px 20px',
            background: 'var(--slide-bg-tertiary)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
            <Target size={20} color="var(--track-1-primary)" />
            <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-secondary)', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--slide-text-primary)' }}>핵심 니즈:</strong> 손상/저품질/수기 문서 처리, 복잡한 레이아웃 구조화, 정확도 99.9%+ (금액/계좌 오류 무관용)
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
