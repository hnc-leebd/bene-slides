import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { CheckCircle } from 'lucide-react';

const TOTAL_PAGES = 33;

const tiers = [
  { name: 'Community', license: 'MPL/Apache', features: [
    { name: '로컬 PDF 파싱', isNew: false },
    { name: '기본 Auto Tagging', isNew: true },
  ], price: '무료', target: '개발자, SMB', type: 'community' as const },
  { name: 'Pro', license: '상용', features: [
    { name: 'Community 전체 기능', isNew: false },
    { name: '문서AI 연동', isNew: false },
    { name: 'AI 기반 고품질 PDF/UA', isNew: true },
    { name: '후처리 웹앱', isNew: true },
    { name: 'PDF/UA 검증', isNew: true },
  ], price: '구독', target: '중견기업', type: 'commercial' as const },
  { name: 'Enterprise', license: '상용', features: [
    { name: 'Pro 전체 기능', isNew: false },
    { name: '커스텀 OCR 모델', isNew: false },
    { name: 'SLA 보장', isNew: false },
    { name: '전담 컨설팅', isNew: false },
    { name: '온프레미스 배포', isNew: false },
  ], price: '협의', target: '대기업/금융', type: 'commercial' as const },
];

const premiumFeatures = [
  { feature: '문서 AI 연동', desc: 'Hancom 문서AI API 연동, 구조 인식 정확도 향상', diff: 'Hancom AI 전략 연결', status: '기존 진행' },
  { feature: '커스텀 OCR 모델', desc: '99.5%+ 인식률, SLA 99.9%+, 감사 추적', diff: '엔터프라이즈 요건', status: '기존 진행' },
  { feature: 'AI 기반 고품질 PDF/UA', desc: '레이아웃 분석, 복잡한 표/그래프 처리', diff: '품질 차별화', status: '신규 추진' },
  { feature: 'PDF/UA 워크플로우', desc: '웹앱 + veraPDF 검증 + 리포트', diff: 'End-to-end', status: '신규 추진' },
];

export default function Slide30() {
  return (
    <SlideLayout currentPage={30} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 2 · Tier Structure</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            오픈코어 제품 구성
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            Community · Pro · Enterprise 티어
          </p>
        </div>

        <div className="slide-content-area">
          {/* Tier Cards */}
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginBottom: 24
          }}>
            {tiers.map((tier, idx) => {
              const isCommunity = tier.type === 'community';
              const accentColor = isCommunity ? 'var(--status-positive)' : 'var(--track-2-primary)';
              const bgGradient = isCommunity
                ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.02) 100%)'
                : 'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.02) 100%)';

              return (
              <div key={idx} className="slide-card" style={{
                borderTop: `4px solid ${accentColor}`,
                background: bgGradient,
                position: 'relative'
              }}>

                <div style={{ marginBottom: 16 }}>
                  <span style={{
                    fontFamily: 'var(--slide-font-mono)',
                    fontSize: '0.875rem',
                    color: accentColor
                  }}>{tier.license}</span>
                  <h3 style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: accentColor,
                    marginTop: 4
                  }}>{tier.name}</h3>
                </div>

                <ul style={{
                  fontSize: '0.8125rem',
                  color: 'var(--slide-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: 16,
                  minHeight: 80,
                  paddingLeft: 16,
                  listStyle: 'none'
                }}>
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} style={{ marginBottom: 4, display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                      <CheckCircle size={12} color={accentColor} style={{ marginTop: 3, flexShrink: 0 }} />
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        {feature.name}
                        {feature.isNew && (
                          <span style={{
                            fontFamily: 'var(--slide-font-mono)',
                            fontSize: '0.625rem',
                            color: 'var(--status-warning)',
                            background: 'rgba(245, 158, 11, 0.15)',
                            padding: '1px 5px',
                            borderRadius: 4,
                            fontWeight: 600
                          }}>NEW</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <div style={{
                  paddingTop: 16,
                  borderTop: '1px solid var(--slide-border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: tier.price === '무료' ? 'var(--status-positive)' : 'var(--slide-text-primary)'
                  }}>{tier.price}</span>
                  <span style={{
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-muted)',
                    background: 'var(--slide-bg-elevated)',
                    padding: '4px 8px',
                    borderRadius: 4
                  }}>{tier.target}</span>
                </div>
              </div>
            );
            })}
          </div>

          {/* Premium Features Table */}
          <div className="animate-slide-in stagger-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <CheckCircle size={16} color="var(--track-2-primary)" />
              <span style={{ fontFamily: 'var(--slide-font-display)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>프리미엄 차별화 기능</span>
            </div>

            <table style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: 0,
              borderRadius: 12,
              overflow: 'hidden',
              background: 'var(--slide-bg-secondary)',
              fontSize: '0.875rem'
            }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase' }}>기능</th>
                  <th style={{ padding: '10px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase' }}>설명</th>
                  <th style={{ padding: '10px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase' }}>차별화</th>
                  <th style={{ padding: '10px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'center', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase' }}>상태</th>
                </tr>
              </thead>
              <tbody>
                {premiumFeatures.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: '10px 14px', fontWeight: 500, color: 'var(--slide-text-primary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.feature}</td>
                    <td style={{ padding: '10px 14px', color: 'var(--slide-text-secondary)', fontSize: '0.8125rem', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.desc}</td>
                    <td style={{ padding: '10px 14px', color: 'var(--track-2-primary)', fontSize: '0.8125rem', fontWeight: 500, borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.diff}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'center', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        color: item.status === '신규 추진' ? 'var(--status-warning)' : 'var(--slide-text-muted)',
                        background: item.status === '신규 추진' ? 'rgba(245, 158, 11, 0.1)' : 'var(--slide-bg-tertiary)',
                        padding: '2px 8px',
                        borderRadius: 4
                      }}>{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
