import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Calendar, Shield, Handshake, FileCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const TOTAL_PAGES = 33;

const externalOpportunities = [
  { label: 'EAA (European Accessibility Act)', timing: '2025.6.28 시행', impact: 'EU 서비스 기업 필수 대응, €3M 벌금/시장 퇴출' },
  { label: '디지털포용법', timing: '2026.1 시행', impact: '국내 공공기관 컴플라이언스' },
  { label: 'PDF Association Duallab', timing: '협력 진행 중', impact: 'B2B2B SDK 사업 기회' },
];

const internalReadiness = [
  { label: 'veraPDF MoU', status: '체결 완료', usage: 'PDF/UA 검증, 접근성 기술 협력' },
  { label: 'Auto-Tagging 기술', status: '단기간 개발 가능', usage: '트랙 2 핵심 기능' },
  { label: 'PDF 파싱 엔진', status: '운영 중', usage: '트랙 1, 2, 3 공통 기반' },
  { label: 'CLA', status: '확보 완료', usage: '라이선스 전환 법적 장벽 없음' },
];

export default function Slide4() {
  return (
    <SlideLayout currentPage={4} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 1 · Why Now</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            신규 트랙 추진 배경
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            외부 기회와 내부 준비가 맞물리는 시점
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24
          }}>
            {/* External Opportunities */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--track-2-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'var(--track-2-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Calendar size={20} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-primary)'
                  }}>외부 기회</h3>
                  <span style={{ fontSize: '0.875rem', color: 'var(--track-2-primary)' }}>시장 창이 열림</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {externalOpportunities.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '12px 16px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 8,
                    borderLeft: '3px solid var(--track-2-primary)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.label}</span>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.8125rem',
                        color: 'var(--status-warning)',
                        background: 'rgba(245, 158, 11, 0.1)',
                        padding: '2px 8px',
                        borderRadius: 4
                      }}>{item.timing}</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', lineHeight: 1.4 }}>{item.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Readiness */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-positive)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'var(--status-positive-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircle size={20} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-primary)'
                  }}>내부 준비 완료</h3>
                  <span style={{ fontSize: '0.875rem', color: 'var(--status-positive)' }}>실행 가능 상태</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {internalReadiness.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '10px 14px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                  }}>
                    <CheckCircle size={16} color="var(--status-positive)" />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.label}</span>
                        <span style={{
                          fontFamily: 'var(--slide-font-mono)',
                          fontSize: '0.875rem',
                          color: 'var(--status-positive)',
                          background: 'rgba(34, 197, 94, 0.1)',
                          padding: '2px 6px',
                          borderRadius: 3
                        }}>{item.status}</span>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)', marginTop: 2 }}>{item.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="animate-slide-in stagger-4" style={{
            marginTop: 20,
            padding: '16px 20px',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)',
            borderRadius: 12,
            border: '1px solid rgba(168, 85, 247, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
            <AlertTriangle size={20} color="var(--track-3-primary)" />
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--slide-text-primary)',
              lineHeight: 1.5
            }}>
              <strong>핵심:</strong> 외부 기회와 내부 준비가 맞물리는 시점 → <strong style={{ color: 'var(--track-2-primary)' }}>신규 트랙 추진 적기</strong>
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
