import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { ArrowRight, Shield, Lock, Unlock } from 'lucide-react';

const TOTAL_PAGES = 33;

const licenses = [
  { name: 'AGPL', position: 0, examples: ['mineru', 'pymupdf4llm'], color: 'var(--status-negative)' },
  { name: 'GPL', position: 25, examples: ['marker-pdf'], color: 'var(--status-warning)' },
  { name: 'MPL 2.0', position: 50, examples: ['opendataloader (현재)'], color: 'var(--track-1-primary)', highlight: true },
  { name: 'Apache', position: 75, examples: [], color: 'var(--status-positive)' },
  { name: 'MIT', position: 100, examples: ['docling (IBM)'], color: 'var(--status-positive)' },
];

const enterprisePolicies = [
  { category: 'Whitelist (자동 승인)', licenses: 'MIT, Apache, BSD', response: '즉시 사용 가능', companies: 'Google, Meta, MS', color: 'var(--status-positive)' },
  { category: 'Category B (조건부 허용)', licenses: 'MPL, LGPL', response: '법무 검토 후 사용', companies: '대부분 기업', color: 'var(--status-warning)' },
  { category: 'Category X (금지/별도 승인)', licenses: 'GPL, AGPL', response: '사용 금지 또는 특별 승인', companies: 'Google (AGPL 완전 금지)', color: 'var(--status-negative)' },
];

export default function Slide26() {
  return (
    <SlideLayout currentPage={26} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 2 · License Spectrum</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            오픈소스 라이선스 스펙트럼
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            강제력 높음 ← → 강제력 낮음 · 기업 정책 분류
          </p>
        </div>

        <div className="slide-content-area">
          {/* Spectrum Visualization */}
          <div className="animate-slide-in stagger-3" style={{
            padding: '16px 20px',
            background: 'var(--slide-bg-tertiary)',
            borderRadius: 12,
            marginBottom: 16
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Lock size={12} color="var(--status-negative)" />
                <span style={{ fontSize: '0.75rem', color: 'var(--status-negative)', fontWeight: 600 }}>강제력 높음 (기업 계약 필수)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--status-positive)', fontWeight: 600 }}>강제력 낮음 (기업 계약 선택)</span>
                <Unlock size={12} color="var(--status-positive)" />
              </div>
            </div>

            {/* Spectrum Bar */}
            <div style={{
              position: 'relative',
              height: 6,
              background: 'linear-gradient(90deg, var(--status-negative), var(--status-warning), var(--track-1-primary), var(--status-positive))',
              borderRadius: 3,
              marginBottom: 56
            }}>
              {licenses.map((lic, idx) => (
                <div key={idx} style={{
                  position: 'absolute',
                  left: `${lic.position}%`,
                  top: '100%',
                  transform: 'translateX(-50%)',
                  marginTop: 8,
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: lic.highlight ? 'var(--track-1-primary)' : lic.color,
                    border: lic.highlight ? '2px solid white' : 'none',
                    boxShadow: lic.highlight ? '0 0 8px var(--track-1-primary)' : 'none',
                    margin: '0 auto 4px'
                  }} />
                  <span style={{
                    fontFamily: 'var(--slide-font-mono)',
                    fontSize: lic.highlight ? '0.75rem' : '0.6875rem',
                    fontWeight: lic.highlight ? 700 : 500,
                    color: lic.highlight ? 'var(--track-1-primary)' : lic.color
                  }}>{lic.name}</span>
                  {lic.examples.length > 0 && (
                    <div style={{ marginTop: 2 }}>
                      {lic.examples.map((ex, i) => (
                        <div key={i} style={{
                          fontSize: '0.6875rem',
                          color: 'var(--slide-text-muted)',
                          whiteSpace: 'nowrap'
                        }}>{ex}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Policies Table */}
          <div className="animate-slide-in stagger-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <Shield size={14} color="var(--track-1-primary)" />
              <span style={{ fontFamily: 'var(--slide-font-display)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>기업 라이선스 정책 분류</span>
            </div>

            <table style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: 0,
              borderRadius: 10,
              overflow: 'hidden',
              background: 'var(--slide-bg-secondary)',
              fontSize: '0.8125rem'
            }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 12px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' }}>분류</th>
                  <th style={{ padding: '8px 12px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' }}>라이선스</th>
                  <th style={{ padding: '8px 12px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' }}>기업 대응</th>
                  <th style={{ padding: '8px 12px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' }}>대표 기업 정책</th>
                </tr>
              </thead>
              <tbody>
                {enterprisePolicies.map((policy, idx) => (
                  <tr key={idx}>
                    <td style={{
                      padding: '8px 12px',
                      fontWeight: 600,
                      color: policy.color,
                      borderBottom: '1px solid var(--slide-border-subtle)'
                    }}>{policy.category}</td>
                    <td style={{
                      padding: '8px 12px',
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--slide-text-secondary)',
                      borderBottom: '1px solid var(--slide-border-subtle)'
                    }}>{policy.licenses}</td>
                    <td style={{ padding: '8px 12px', color: 'var(--slide-text-secondary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{policy.response}</td>
                    <td style={{ padding: '8px 12px', fontSize: '0.75rem', color: 'var(--slide-text-muted)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{policy.companies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Difference Note */}
          <div className="animate-slide-in stagger-5" style={{
            marginTop: 12,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10
          }}>
            <div style={{ padding: '10px', background: 'rgba(34, 197, 94, 0.08)', borderRadius: 6, borderLeft: '3px solid var(--status-positive)' }}>
              <span style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--status-positive)' }}>Apache</span>
              <p style={{ fontSize: '0.75rem', color: 'var(--slide-text-secondary)', marginTop: 3 }}>"그냥 쓰면 됨" → 기업 whitelist → 즉시 채택</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(6, 182, 212, 0.08)', borderRadius: 6, borderLeft: '3px solid var(--track-1-primary)' }}>
              <span style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--track-1-primary)' }}>MPL</span>
              <p style={{ fontSize: '0.75rem', color: 'var(--slide-text-secondary)', marginTop: 3 }}>기술적으로 관대, 그러나 "copyleft = 검토 필요" 인식</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(239, 68, 68, 0.08)', borderRadius: 6, borderLeft: '3px solid var(--status-negative)' }}>
              <span style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--status-negative)' }}>AGPL</span>
              <p style={{ fontSize: '0.75rem', color: 'var(--slide-text-secondary)', marginTop: 3 }}>SaaS 시 전체 소스 공개 의무 → 대부분 기업 기피</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
