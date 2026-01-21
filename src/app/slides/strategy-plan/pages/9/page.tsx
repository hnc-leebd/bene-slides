import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { AlertTriangle, Check, ExternalLink, Star, Wrench } from 'lucide-react';

const TOTAL_PAGES = 33;

const openSourceCompetitors = [
  { name: 'IBM Docling', pdf: true, office: true, license: 'MIT' },
  { name: 'Marker', pdf: true, office: false, license: 'GPL' },
  { name: 'MinerU', pdf: true, office: false, license: 'AGPL' },
];

const paidSolutions = [
  { name: 'Google Document AI', pdf: true, office: false },
  { name: 'AWS Textract', pdf: true, office: false },
  { name: 'Upstage', pdf: true, office: false },
];

export default function Slide9() {
  return (
    <SlideLayout currentPage={9} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Competition</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 1 경쟁 환경 - <span style={{ color: 'var(--status-negative)' }}>레드오션</span>
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            유료 시장은 OCR/이미지/PDF, Office 파싱은 오픈소스로 충분
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20
          }}>
            {/* Open Source */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-warning)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Star size={20} color="var(--status-warning)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  오픈소스 경쟁
                </h3>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px 10px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>솔루션</th>
                    <th style={{ padding: '8px 10px', textAlign: 'center', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>PDF</th>
                    <th style={{ padding: '8px 10px', textAlign: 'center', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>Office</th>
                    <th style={{ padding: '8px 10px', textAlign: 'center', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>OCR/이미지</th>
                    <th style={{ padding: '8px 10px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>License</th>
                  </tr>
                </thead>
                <tbody>
                  {openSourceCompetitors.map((comp, idx) => (
                    <tr key={idx}>
                      <td style={{ padding: '10px', color: 'var(--slide-text-primary)', fontWeight: 500, borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {comp.name}
                      </td>
                      <td style={{ padding: '10px', textAlign: 'center', color: comp.pdf ? 'var(--status-positive)' : 'var(--slide-text-muted)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {comp.pdf ? '✓' : '—'}
                      </td>
                      <td style={{ padding: '10px', textAlign: 'center', color: comp.office ? 'var(--status-positive)' : 'var(--slide-text-muted)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {comp.office ? '✓' : '—'}
                      </td>
                      <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>
                          <Wrench size={12} /> 셀프 튜닝
                        </span>
                      </td>
                      <td style={{ padding: '10px', fontFamily: 'var(--slide-font-mono)', fontSize: '0.8125rem', color: 'var(--track-1-primary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {comp.license}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Paid Solutions */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-negative)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <ExternalLink size={20} color="var(--status-negative)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  유료 솔루션
                </h3>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px 10px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>솔루션</th>
                    <th style={{ padding: '8px 10px', textAlign: 'center', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>PDF</th>
                    <th style={{ padding: '8px 10px', textAlign: 'center', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>Office</th>
                    <th style={{ padding: '8px 10px', textAlign: 'center', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>OCR/이미지</th>
                  </tr>
                </thead>
                <tbody>
                  {paidSolutions.map((sol, idx) => (
                    <tr key={idx}>
                      <td style={{ padding: '10px', color: 'var(--slide-text-primary)', fontWeight: 500, borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {sol.name}
                      </td>
                      <td style={{ padding: '10px', textAlign: 'center', color: sol.pdf ? 'var(--status-positive)' : 'var(--slide-text-muted)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {sol.pdf ? '✓' : '—'}
                      </td>
                      <td style={{ padding: '10px', textAlign: 'center', color: sol.office ? 'var(--status-positive)' : 'var(--slide-text-muted)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {sol.office ? '✓' : '—'}
                      </td>
                      <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '0.8125rem', color: 'var(--status-positive)' }}>
                          <Check size={12} /> SLA 보장
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Warning Note */}
          <div className="animate-slide-in stagger-4" style={{
            marginTop: 20,
            padding: '16px 20px',
            background: 'rgba(239, 68, 68, 0.1)',
            borderRadius: 12,
            border: '1px solid rgba(239, 68, 68, 0.3)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12
          }}>
            <AlertTriangle size={20} color="var(--status-negative)" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <strong style={{ color: 'var(--status-negative)', fontSize: '0.8125rem' }}>핵심 인사이트</strong>
              <ul style={{ margin: '8px 0 0 0', padding: '0 0 0 16px', fontSize: '0.8125rem', color: 'var(--slide-text-primary)', lineHeight: 1.6, listStyleType: 'disc' }}>
                <li style={{ marginBottom: 4 }}>실제 매출이 발생하는 시장은 OCR/이미지/PDF 영역이며, 대형 플레이어들이 이미 선점</li>
                <li>Office 파싱은 우수한 오픈소스가 10개+ 존재하여 유료 제품화해도 차별화 어려움</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
