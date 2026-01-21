import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Target, Eye, Compass, FileText, Accessibility, Code } from 'lucide-react';

const TOTAL_PAGES = 18;

export default function Slide2() {
  return (
    <SlideLayout currentPage={2} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Overview</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            핵심 목표와 주제
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            전략 방향 및 고려사항
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: 32
          }}>
            {/* Left: Strategy Direction */}
            <div className="slide-card" style={{ borderLeft: '4px solid var(--track-1-primary)' }}>
              <h3 style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 700,
                fontSize: '0.875rem',
                color: 'var(--track-1-primary)',
                marginBottom: 20
              }}>
                2026 핵심 목표
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'var(--slide-bg-elevated)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Target size={18} color="var(--track-1-primary)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>비전</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>"5년 내 글로벌 빅테크"</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'var(--slide-bg-elevated)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Eye size={18} color="var(--track-1-primary)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>핵심 목표</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>AI 비즈니스 수익화 + 전사 AI 내재화</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'var(--slide-bg-elevated)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Compass size={18} color="var(--track-1-primary)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>타겟 지역</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>일본, 동남아, 유럽, 미국, 중국</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Report Topics */}
            <div className="slide-card" style={{ borderLeft: '4px solid var(--track-2-primary)' }}>
              <h3 style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 700,
                fontSize: '0.875rem',
                color: 'var(--track-2-primary)',
                marginBottom: 16
              }}>
                주요 주제
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: FileText, title: '3개 기술 트랙', desc: 'IDP(기존) + 접근성/PDF렌더링(신규)', section: '파트 1' },
                  { icon: Code, title: '오픈소스 라이선스 전략', desc: '확산과 수익화 균형', section: '파트 2' },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    padding: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 8
                  }}>
                    <item.icon size={20} color="var(--track-2-primary)" />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.title}</p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>{item.desc}</p>
                    </div>
                    <span style={{
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.8125rem',
                      color: 'var(--slide-text-muted)',
                      background: 'var(--slide-bg-tertiary)',
                      padding: '4px 8px',
                      borderRadius: 4
                    }}>{item.section}</span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 16,
                padding: '14px 16px',
                background: 'rgba(168, 85, 247, 0.08)',
                borderRadius: 8
              }}>
                <p style={{
                  fontSize: '0.8125rem',
                  color: 'var(--slide-text-secondary)',
                  lineHeight: 1.6
                }}>
                  <strong style={{ color: 'var(--track-2-primary)' }}>목적:</strong> 3개 기술 트랙의 시장 분석 및 우선순위 결정, 오픈소스 라이선스 전략 결정을 위한 정보 제공
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
