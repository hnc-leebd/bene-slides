import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Users, Server, FileText } from 'lucide-react';

const TOTAL_PAGES = 33;

const teamMembers = [
  { role: 'PO/PM', count: '1명', skills: '기획, 사업개발, 프로젝트관리' },
  { role: 'Senior Engineer', count: '1명', skills: 'AI Agent, Full-Stack, DevOps' },
  { role: 'Junior Engineer', count: '1명', skills: 'C/C++/C#, Python, Cross-Platform' },
];

const partners = [
  { name: 'veraPDF', cooperation: 'PDF/UA·접근성, PDF/A, WTPDF 검증' },
  { name: 'PDF Association Duallab', cooperation: 'PDF→HTML 렌더링 협력' },
];

const internalOrgs = [
  { name: 'AI 조직', role: 'AI 및 OCR 기반 문서 처리' },
  { name: '영업 조직', role: '기업 고객 영업' },
];

export default function Slide5() {
  return (
    <SlideLayout currentPage={5} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 1 · Resources</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            현재 리소스 현황
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            오픈기술생태계확산팀 및 협력 파트너
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 20
          }}>
            {/* Team */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--slide-text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'var(--slide-bg-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Users size={18} color="var(--slide-text-muted)" />
                </div>
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  오픈기술생태계확산팀
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {teamMembers.map((member, idx) => (
                  <div key={idx} style={{
                    padding: '10px 12px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 6
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{member.role}</span>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.8125rem',
                        color: 'var(--slide-text-secondary)'
                      }}>{member.count}</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>{member.skills}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--slide-text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'var(--slide-bg-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Server size={18} color="var(--slide-text-muted)" />
                </div>
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  외부 파트너십
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {partners.map((partner, idx) => (
                  <div key={idx} style={{
                    padding: '12px 14px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 6
                  }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)', marginBottom: 6, display: 'block' }}>{partner.name}</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>{partner.cooperation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Orgs */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--slide-text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'var(--slide-bg-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FileText size={18} color="var(--slide-text-muted)" />
                </div>
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  연계 가능 내부 조직
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {internalOrgs.map((org, idx) => (
                  <div key={idx} style={{
                    padding: '12px 14px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 6
                  }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)', marginBottom: 6, display: 'block' }}>{org.name}</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>{org.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
