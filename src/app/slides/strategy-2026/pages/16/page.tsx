import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Zap, Target, AlertTriangle, Lightbulb } from 'lucide-react';

const TOTAL_PAGES = 20;

const swotData = [
  {
    title: '강점 (Strengths)',
    icon: Zap,
    color: 'var(--status-positive)',
    bgColor: 'rgba(34, 197, 94, 0.15)',
    items: [
      { text: 'veraPDF 파트너십 확보', highlight: true },
      { text: '웹앱 프론트엔드 개발 역량', highlight: false },
      { text: 'PDF 파싱 기술 보유', highlight: false }
    ]
  },
  {
    title: '기회 (Opportunities)',
    icon: Target,
    color: 'var(--track-2-primary)',
    bgColor: 'rgba(168, 85, 247, 0.15)',
    items: [
      { text: 'EAA 2025.6 시행 → 단기 수요 급증', highlight: true },
      { text: 'SMB 시장 가격 경쟁력 확보 가능', highlight: false },
      { text: '규제 확대 추세 (WCAG, Section 508)', highlight: false }
    ]
  },
  {
    title: '약점 (Weaknesses)',
    icon: AlertTriangle,
    color: 'var(--status-warning)',
    bgColor: 'rgba(245, 158, 11, 0.15)',
    items: [
      { text: 'AI Auto-Tagging 자체 ML 역량 없음', highlight: true },
      { text: '엔터프라이즈 영업 조직 미보유', highlight: false },
      { text: '브랜드 인지도 부족', highlight: false }
    ]
  },
  {
    title: '위협 (Threats)',
    icon: AlertTriangle,
    color: 'var(--status-negative)',
    bgColor: 'rgba(239, 68, 68, 0.15)',
    items: [
      { text: 'Adobe: 시장 지배력 + 번들 전략', highlight: true },
      { text: 'Acrobat Pro 기본 탑재로 진입 장벽', highlight: false },
      { text: 'AI 기반 자동화 도구 경쟁 심화', highlight: false }
    ]
  }
];

export default function Slide16() {
  return (
    <SlideLayout currentPage={16} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Strategic Analysis</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            SWOT 분석
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            PDF 접근성 시장 진입 시 내·외부 환경 분석
          </p>
        </div>

        <div className="slide-content-area">
          <div className="slide-grid-2x2 animate-slide-in stagger-3" style={{ width: 920, margin: '0 auto', gap: 16 }}>
            {swotData.map((quadrant) => {
              const Icon = quadrant.icon;
              return (
                <div
                  key={quadrant.title}
                  className="slide-card"
                  style={{
                    borderTop: `4px solid ${quadrant.color}`,
                    padding: 20
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: quadrant.bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={16} color={quadrant.color} />
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--slide-font-display)',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      color: quadrant.color
                    }}>
                      {quadrant.title}
                    </h3>
                  </div>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '0.8125rem',
                    color: 'var(--slide-text-secondary)'
                  }}>
                    {quadrant.items.map((item, idx) => (
                      <li key={idx} style={{
                        padding: '5px 0',
                        paddingLeft: 12,
                        position: 'relative',
                        lineHeight: 1.4,
                        fontWeight: item.highlight ? 500 : 400,
                        color: item.highlight ? 'var(--slide-text-primary)' : 'var(--slide-text-secondary)'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: quadrant.color
                        }}>•</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="animate-slide-in stagger-4" style={{
            marginTop: 20,
            padding: '14px 20px',
            background: 'var(--slide-bg-tertiary)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            width: 920,
            margin: '20px auto 0'
          }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: 'rgba(168, 85, 247, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Lightbulb size={16} color="var(--track-2-primary)" />
            </div>
            <p style={{
              fontSize: '0.8125rem',
              color: 'var(--slide-text-secondary)',
              lineHeight: 1.5,
              margin: 0
            }}>
              <strong style={{ color: 'var(--slide-text-primary)' }}>전략적 고려사항:</strong> veraPDF 파트너십과 EAA 규제 시행이 맞물리는 시점입니다.
              SMB 타겟으로 진입 시 기존 플레이어와의 직접 경쟁을 피하면서 시장 검증이 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
