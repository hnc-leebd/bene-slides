import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { AlertTriangle, Check, Minus, Wrench, Shield } from 'lucide-react';

const TOTAL_PAGES = 24;

// 지원 여부 아이콘 컴포넌트
function SupportIcon({ supported }: { supported: boolean }) {
  return supported ? (
    <Check size={16} color="var(--status-positive)" strokeWidth={3} />
  ) : (
    <Minus size={16} color="var(--slide-text-muted)" strokeWidth={2} />
  );
}

export default function Slide7() {
  const solutions = [
    { name: 'IBM Docling', pdf: true, office: true, ocr: true, license: 'MIT', licenseType: 'success', feature: '멀티포맷' },
    { name: 'Marker', pdf: true, office: false, ocr: true, license: 'GPL', licenseType: 'warning', feature: 'PDF→MD' },
    { name: 'MinerU', pdf: true, office: false, ocr: true, license: 'AGPL', licenseType: 'warning', feature: '고품질 파싱' },
    { name: 'Google Document AI', pdf: true, office: true, ocr: true, license: '유료', licenseType: 'purple', feature: 'Enterprise' },
    { name: 'AWS Textract', pdf: true, office: true, ocr: true, license: '유료', licenseType: 'purple', feature: '테이블/폼' },
    { name: 'Upstage', pdf: true, office: true, ocr: true, license: '유료', licenseType: 'purple', feature: '한글 특화' },
  ];

  return (
    <SlideLayout currentPage={7} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Competition</p>
          <h1 className="slide-header animate-slide-in stagger-1" style={{ marginBottom: 24 }}>
            경쟁 환경 - <span className="slide-header-track-1">레드오션</span>
          </h1>
        </div>

        <div className="slide-content-area" style={{ width: 888, margin: '0 auto' }}>
          <div className="slide-alert slide-alert-warning animate-slide-in stagger-2" style={{ marginBottom: 24 }}>
          <AlertTriangle size={20} />
          <span>기존 PDF 외 포맷 파싱은 이미 레드오션 - 대형 플레이어 진입 완료</span>
        </div>

        <div className="animate-slide-in stagger-3">
          <table className="slide-table" style={{ fontSize: '0.875rem' }}>
            <thead>
              <tr>
                <th style={{ padding: '12px 16px', width: '22%' }}>솔루션</th>
                <th style={{ padding: '12px 8px', width: '10%', textAlign: 'center' }}>PDF</th>
                <th style={{ padding: '12px 8px', width: '10%', textAlign: 'center' }}>오피스</th>
                <th style={{ padding: '12px 8px', width: '13%', textAlign: 'center' }}>이미지/OCR</th>
                <th style={{ padding: '12px 12px', width: '15%', textAlign: 'center' }}>유무료</th>
                <th style={{ padding: '12px 16px', width: '30%' }}>특징</th>
              </tr>
            </thead>
            <tbody>
              {solutions.map((sol, idx) => (
                <tr key={sol.name} style={{
                  background: idx < 3 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(168, 85, 247, 0.04)'
                }}>
                  <td style={{ padding: '10px 16px' }}>
                    <span style={{ fontWeight: 600 }}>{sol.name}</span>
                  </td>
                  <td style={{ padding: '10px 8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <SupportIcon supported={sol.pdf} />
                    </div>
                  </td>
                  <td style={{ padding: '10px 8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <SupportIcon supported={sol.office} />
                    </div>
                  </td>
                  <td style={{ padding: '10px 8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                      {idx < 3 ? (
                        <>
                          <Wrench size={14} color="var(--slide-text-muted)" />
                          <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-tertiary)' }}>셀프 튜닝</span>
                        </>
                      ) : (
                        <>
                          <Shield size={14} color="var(--status-positive)" />
                          <span style={{ fontSize: '0.75rem', color: 'var(--status-positive)' }}>SLA 보장</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                    <span className={`slide-badge slide-badge-${sol.licenseType}`} style={{ fontSize: '0.6875rem' }}>
                      {sol.license}
                    </span>
                  </td>
                  <td style={{ padding: '10px 16px', fontSize: '0.8125rem', color: 'var(--slide-text-secondary)' }}>
                    {sol.feature}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 범례 */}
        <div className="animate-slide-in stagger-4" style={{
          marginTop: 20,
          display: 'flex',
          justifyContent: 'center',
          gap: 32
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 12,
              height: 12,
              borderRadius: 2,
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--slide-border-subtle)'
            }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-tertiary)' }}>오픈소스</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 12,
              height: 12,
              borderRadius: 2,
              background: 'rgba(168, 85, 247, 0.04)',
              border: '1px solid var(--slide-border-subtle)'
            }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-tertiary)' }}>유료 솔루션</span>
          </div>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
