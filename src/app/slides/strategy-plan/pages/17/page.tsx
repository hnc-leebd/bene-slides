import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Plus, Minus, TrendingUp, AlertTriangle } from 'lucide-react';

const TOTAL_PAGES = 33;

const swotData = {
  strengths: [
    'veraPDF 파트너십 확보',
    '내부 AI 기술 연계 가능',
    '웹서비스/PDF 파싱 기술 보유'
  ],
  weaknesses: [
    '시장 규모/단가가 IDP 대비 제한적',
    '글로벌 브랜드 인지도 구축 중',
    '글로벌 영업 파이프라인 확대 필요'
  ],
  opportunities: [
    'EAA 2025.6 시행 → 단기 수요 급증',
    'SMB 시장 가격 경쟁력 확보 가능',
    '규제 확대 추세 (WCAG, Section 508)'
  ],
  threats: [
    'Adobe: 시장 지배력 + 번들 전략',
    'Acrobat Pro 기본 탑재로 진입 장벽',
    'AI 기반 자동화 도구 경쟁 심화'
  ]
};

export default function Slide17() {
  return (
    <SlideLayout currentPage={17} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · SWOT</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 2 SWOT 분석
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            내부 역량과 외부 환경 종합 분석
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: 16
          }}>
            {/* Strengths */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-positive)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Plus size={14} color="white" />
                </div>
                <div>
                  <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>내부 · 긍정적</span>
                  <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--status-positive)' }}>
                    강점 (S)
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {swotData.strengths.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '8px 10px',
                    background: 'rgba(34, 197, 94, 0.08)',
                    borderRadius: 6,
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}>
                    <span style={{ color: 'var(--status-positive)' }}>•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Weaknesses */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-negative)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: 'rgba(239, 68, 68, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Minus size={14} color="var(--status-negative)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>내부 · 부정적</span>
                  <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--status-negative)' }}>
                    약점 (W)
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {swotData.weaknesses.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '8px 10px',
                    background: 'rgba(239, 68, 68, 0.08)',
                    borderRadius: 6,
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}>
                    <span style={{ color: 'var(--status-negative)' }}>•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-positive)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <TrendingUp size={14} color="white" />
                </div>
                <div>
                  <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>외부 · 긍정적</span>
                  <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--status-positive)' }}>
                    기회 (O)
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {swotData.opportunities.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '8px 10px',
                    background: 'rgba(34, 197, 94, 0.08)',
                    borderRadius: 6,
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}>
                    <span style={{ color: 'var(--status-positive)' }}>•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Threats */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-negative)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: 'rgba(239, 68, 68, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <AlertTriangle size={14} color="var(--status-negative)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>외부 · 부정적</span>
                  <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--status-negative)' }}>
                    위협 (T)
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {swotData.threats.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '8px 10px',
                    background: 'rgba(239, 68, 68, 0.08)',
                    borderRadius: 6,
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}>
                    <span style={{ color: 'var(--status-negative)' }}>•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategic Implication */}
          <div className="animate-slide-in stagger-4" style={{
            marginTop: 16,
            padding: '14px 18px',
            background: 'var(--slide-bg-tertiary)',
            borderRadius: 12,
            borderLeft: '4px solid var(--track-2-primary)'
          }}>
            <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-secondary)', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--track-2-primary)' }}>전략적 시사점:</strong> veraPDF 파트너십 + EAA 규제 시행 = 시장 진입 적기. SMB 타겟으로 진입 시 대기업과의 직접 경쟁 회피 가능
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
