import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { AlertTriangle, Globe, MapPin, Calendar } from 'lucide-react';

const TOTAL_PAGES = 18;

const internationalRegs = [
  { reg: 'EAA', region: 'EU 27개국', flag: '🇪🇺', date: '2025.6.28', target: 'EU에서 서비스하는 모든 기업', risk: '€3M 벌금, 시장 퇴출' },
  { reg: 'Section 508', region: '미국', flag: '🇺🇸', date: '시행 중', target: '연방 정부/계약업체', risk: '계약 배제' },
  { reg: 'ADA Title II', region: '미국', flag: '🇺🇸', date: '2026.4', target: '미국 공공기관', risk: '소송 리스크' },
];

const domesticRegs = [
  { reg: '장애인차별금지법', date: '시행 중', target: '전자정보 제공자', risk: '3년 이하 징역/3천만원 벌금' },
  { reg: '디지털포용법', date: '2026.1', target: '공공기관·전자출판', risk: '컴플라이언스 리스크' },
  { reg: 'TTA PDF 접근성 가이드라인', date: '2025.4', target: '공공기관 (권장)', risk: '컴플라이언스 리스크' },
];

export default function Slide8() {
  return (
    <SlideLayout currentPage={8} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Regulation</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 2 기회 - 규제 시행
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            <span style={{ color: 'var(--status-negative)', fontWeight: 700 }}>2025년 6월 28일</span> European Accessibility Act 시행
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: 20
          }}>
            {/* International Regulations */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--track-2-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Globe size={20} color="var(--track-2-primary)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  해외 규제
                </h3>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px 10px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>규제</th>
                    <th style={{ padding: '8px 10px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>지역</th>
                    <th style={{ padding: '8px 10px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>시행일</th>
                    <th style={{ padding: '8px 10px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>리스크</th>
                  </tr>
                </thead>
                <tbody>
                  {internationalRegs.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{ padding: '10px', color: 'var(--slide-text-primary)', fontWeight: 500, borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span>{item.flag}</span>
                          <span>{item.reg}</span>
                        </div>
                      </td>
                      <td style={{ padding: '10px', fontSize: '0.8125rem', color: 'var(--slide-text-secondary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {item.region}
                      </td>
                      <td style={{ padding: '10px', fontFamily: 'var(--slide-font-mono)', fontSize: '0.8125rem', color: item.date.includes('2025') ? 'var(--status-negative)' : 'var(--slide-text-secondary)', fontWeight: item.date.includes('2025') ? 700 : 400, borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {item.date}
                      </td>
                      <td style={{ padding: '10px', fontSize: '0.8125rem', color: 'var(--status-negative)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {item.risk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Domestic Regulations */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--track-3-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <MapPin size={20} color="var(--track-3-primary)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  국내 규제
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {domesticRegs.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '10px 12px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 6
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.reg}</span>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        color: item.date.includes('2026') ? 'var(--status-warning)' : 'var(--slide-text-muted)',
                        background: item.date.includes('2026') ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                        padding: '2px 6px',
                        borderRadius: 3
                      }}>{item.date}</span>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>{item.target}</p>
                    <span style={{
                      display: 'inline-block',
                      marginTop: 6,
                      fontSize: '0.875rem',
                      color: 'var(--status-negative)',
                      background: 'rgba(239, 68, 68, 0.1)',
                      padding: '2px 6px',
                      borderRadius: 3
                    }}>{item.risk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Market Opportunity Note */}
          <div className="animate-slide-in stagger-4" style={{
            marginTop: 20,
            padding: '16px 20px',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
            borderRadius: 12,
            border: '1px solid rgba(168, 85, 247, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
            <Calendar size={20} color="var(--track-2-primary)" />
            <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--track-2-primary)' }}>시장 기회:</strong> 규제 시행 전/후 = <strong style={{ color: 'var(--status-warning)' }}>솔루션 수요 급증 기간</strong>
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
