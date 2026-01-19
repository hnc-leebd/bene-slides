import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Users, Building2, Package } from 'lucide-react';

const TOTAL_PAGES = 20;

const options = [
  {
    name: 'SI 통합',
    icon: Building2,
    description: 'SI 업체와 협력하여 DMS/ECM 시스템에 통합 납품',
    requirements: ['SI 영업/구축 조직', '기술지원 인력', '레퍼런스 구축'],
    resources: '5명+',
    timeline: '12개월+',
    fit: 'low',
    note: '조직 확대 필요',
    pros: ['대규모 계약 가능', '안정적 매출'],
    cons: []
  },
  {
    name: '단독 SaaS',
    icon: Users,
    description: '자체 SaaS 플랫폼 구축 및 직접 고객 확보',
    requirements: ['플랫폼 개발', '운영/CS 조직', '마케팅/세일즈'],
    resources: '3명+',
    timeline: '9개월+',
    fit: 'low',
    note: '운영 부담 발생',
    pros: ['반복 매출(MRR)', '높은 마진'],
    cons: []
  },
  {
    name: 'SDK B2B2B',
    icon: Package,
    description: '오픈코어 모델로 SDK 라이선스 판매',
    requirements: ['SDK 패키징', '문서화', '기술 지원'],
    resources: '현행 유지',
    timeline: '3개월',
    fit: 'high',
    note: '현 리소스 적합',
    pros: [],
    cons: ['파트너 의존', '계약 규모 작음']
  }
];

export default function Slide18() {
  return (
    <SlideLayout currentPage={18} totalPages={TOTAL_PAGES} track={3}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 3 · Go-to-Market Options</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            시장 진입 옵션 비교
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            PDF → HTML 렌더링 사업화 방안별 요구 조건
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20
          }}>
            {options.map((option, idx) => {
              const Icon = option.icon;

              return (
                <div
                  key={option.name}
                  className="slide-card"
                  style={{
                    borderTop: '4px solid var(--slide-border-default)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: 'var(--slide-bg-elevated)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={22} color="var(--slide-text-secondary)" />
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--slide-font-display)',
                        fontWeight: 700,
                        fontSize: '1.125rem',
                        color: 'var(--slide-text-primary)'
                      }}>
                        옵션 {idx + 1}: {option.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-secondary)',
                    lineHeight: 1.5,
                    marginBottom: 16
                  }}>
                    {option.description}
                  </p>

                  {/* Requirements */}
                  <div style={{ marginBottom: 16, flex: 1 }}>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--slide-text-tertiary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 8
                    }}>
                      요구 조건
                    </div>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      fontSize: '0.8125rem',
                      color: 'var(--slide-text-secondary)'
                    }}>
                      {option.requirements.map(req => (
                        <li key={req} style={{
                          padding: '4px 0',
                          paddingLeft: 12,
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--slide-text-muted)'
                          }}>•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 12,
                    paddingTop: 16,
                    borderTop: '1px solid var(--slide-border-subtle)'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--slide-text-tertiary)', marginBottom: 4 }}>
                        추가 인력
                      </div>
                      <div style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: option.fit === 'low' ? 'var(--status-negative)' : 'var(--status-positive)'
                      }}>
                        {option.resources}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--slide-text-tertiary)', marginBottom: 4 }}>
                        예상 기간
                      </div>
                      <div style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--slide-text-primary)'
                      }}>
                        {option.timeline}
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {/* For low fit: Note (red) -> Pros (green) */}
                    {/* For high fit: Cons (red) -> Note (green) */}
                    {option.fit === 'low' ? (
                      <>
                        {/* Note Badge (red for low fit) */}
                        <span style={{
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: 100,
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          background: 'rgba(239, 68, 68, 0.15)',
                          color: 'var(--status-negative)',
                          border: '1px solid rgba(239, 68, 68, 0.3)'
                        }}>
                          {option.note}
                        </span>
                        {/* Pros Badges */}
                        {option.pros.map(pro => (
                          <span key={pro} style={{
                            display: 'inline-block',
                            padding: '4px 10px',
                            borderRadius: 100,
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            background: 'rgba(34, 197, 94, 0.15)',
                            color: 'var(--status-positive)',
                            border: '1px solid rgba(34, 197, 94, 0.3)'
                          }}>
                            {pro}
                          </span>
                        ))}
                      </>
                    ) : (
                      <>
                        {/* Cons Badges first for high fit */}
                        {option.cons.map(con => (
                          <span key={con} style={{
                            display: 'inline-block',
                            padding: '4px 10px',
                            borderRadius: 100,
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            background: 'rgba(239, 68, 68, 0.15)',
                            color: 'var(--status-negative)',
                            border: '1px solid rgba(239, 68, 68, 0.3)'
                          }}>
                            {con}
                          </span>
                        ))}
                        {/* Note Badge (green for high fit) */}
                        <span style={{
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: 100,
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          background: 'rgba(34, 197, 94, 0.15)',
                          color: 'var(--status-positive)',
                          border: '1px solid rgba(34, 197, 94, 0.3)'
                        }}>
                          {option.note}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="animate-slide-in stagger-4" style={{
            marginTop: 24,
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
              fontSize: '0.875rem',
              color: 'var(--slide-text-secondary)',
              lineHeight: 1.5,
              margin: 0
            }}>
              <strong style={{ color: 'var(--slide-text-primary)' }}>단계적 접근 가능:</strong> 옵션 3(SDK B2B2B)으로 시장 검증 후,
              성과에 따라 옵션 1(SI 통합) 또는 옵션 2(단독 SaaS)로 확장하는 단계적 전략도 고려할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
