import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { AlertTriangle, ExternalLink, Star } from 'lucide-react';

const TOTAL_PAGES = 33;

const openSourceCompetitors = [
  { name: 'IBM Docling', pdf: true, office: true, ocr: 'Self-tuning', license: 'MIT', stars: '50.6k', feature: 'watsonx 연계' },
  { name: 'Marker', pdf: true, office: false, ocr: 'Self-tuning', license: 'GPL', stars: '31.1k', feature: 'PDF→MD 특화' },
  { name: 'MinerU', pdf: true, office: false, ocr: 'Self-tuning', license: 'AGPL', stars: '52.4k', feature: '고품질 파싱' },
];

const paidSolutions = [
  { name: 'Google Document AI', pdf: true, office: true, ocr: 'SLA 보장', feature: 'Enterprise급', price: '$$$' },
  { name: 'AWS Textract', pdf: true, office: true, ocr: 'SLA 보장', feature: '테이블/폼 특화', price: '$$$' },
  { name: 'Upstage', pdf: true, office: true, ocr: 'SLA 보장', feature: '한글 특화', price: '$$' },
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
            기존 PDF 외 포맷 파싱은 이미 레드오션 - 대형 플레이어 진입 완료
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
                    <th style={{ padding: '8px 10px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>License</th>
                    <th style={{ padding: '8px 10px', textAlign: 'right', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>Stars</th>
                  </tr>
                </thead>
                <tbody>
                  {openSourceCompetitors.map((comp, idx) => (
                    <tr key={idx}>
                      <td style={{ padding: '10px', color: 'var(--slide-text-primary)', fontWeight: 500, borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        <div>{comp.name}</div>
                        <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>{comp.feature}</span>
                      </td>
                      <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {comp.pdf ? '✓' : '—'}
                      </td>
                      <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {comp.office ? '✓' : '—'}
                      </td>
                      <td style={{ padding: '10px', fontFamily: 'var(--slide-font-mono)', fontSize: '0.8125rem', color: 'var(--track-1-primary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {comp.license}
                      </td>
                      <td style={{ padding: '10px', textAlign: 'right', fontFamily: 'var(--slide-font-mono)', color: 'var(--status-warning)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {comp.stars}
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
                    <th style={{ padding: '8px 10px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>특징</th>
                    <th style={{ padding: '8px 10px', textAlign: 'right', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>가격</th>
                  </tr>
                </thead>
                <tbody>
                  {paidSolutions.map((sol, idx) => (
                    <tr key={idx}>
                      <td style={{ padding: '10px', color: 'var(--slide-text-primary)', fontWeight: 500, borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {sol.name}
                      </td>
                      <td style={{ padding: '10px', textAlign: 'center', color: 'var(--status-positive)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        ✓
                      </td>
                      <td style={{ padding: '10px', textAlign: 'center', color: 'var(--status-positive)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        ✓
                      </td>
                      <td style={{ padding: '10px', fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {sol.feature}
                      </td>
                      <td style={{ padding: '10px', textAlign: 'right', fontFamily: 'var(--slide-font-mono)', color: 'var(--status-negative)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {sol.price}
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
            alignItems: 'center',
            gap: 12
          }}>
            <AlertTriangle size={20} color="var(--status-negative)" />
            <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-primary)', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--status-negative)' }}>핵심 인사이트:</strong> 6+ 대형 플레이어(Google, AWS, IBM, Upstage 등)가 이미 시장 선점. 오픈소스 솔루션만 10개+ 존재로 차별화 어려움.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
