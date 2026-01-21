import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { FileText, AlertTriangle } from 'lucide-react';

const TOTAL_PAGES = 33;

const marketComparison = [
  { type: 'Office 포맷 (docx/xlsx/pptx)', difficulty: '낮음 (XML 기반 반정형)', maturity: '높음 (Apache POI 등)', paidAPI: '없음' },
  { type: 'PDF/이미지', difficulty: '높음 (비정형, 레이아웃 복잡)', maturity: '중간 (개선 여지 존재)', paidAPI: '있음 (Textract, Document AI, Upstage)' },
];

export default function Slide10() {
  return (
    <SlideLayout currentPage={10} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Strategy</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 1 시장 분석
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            Office는 해결된 문제, PDF/이미지는 수익화 가능한 시장
          </p>
        </div>

        <div className="slide-content-area">
          {/* Market Comparison Table */}
          <div className="animate-slide-in stagger-3">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <FileText size={16} color="var(--track-1-primary)" />
              <span style={{ fontFamily: 'var(--slide-font-display)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>시장 특성 비교</span>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', background: 'var(--slide-bg-secondary)', borderRadius: 8, overflow: 'hidden' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px 14px', textAlign: 'left', background: 'var(--slide-bg-tertiary)', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.8125rem', textTransform: 'uppercase' }}>구분</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', background: 'var(--slide-bg-tertiary)', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.8125rem', textTransform: 'uppercase' }}>문제 난이도</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', background: 'var(--slide-bg-tertiary)', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.8125rem', textTransform: 'uppercase' }}>오픈소스 성숙도</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', background: 'var(--slide-bg-tertiary)', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.8125rem', textTransform: 'uppercase' }}>클라우드 유료 API</th>
                </tr>
              </thead>
              <tbody>
                {marketComparison.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: '10px 14px', color: 'var(--slide-text-primary)', fontWeight: 500, borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.type}</td>
                    <td style={{ padding: '10px 14px', color: 'var(--slide-text-secondary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.difficulty}</td>
                    <td style={{ padding: '10px 14px', color: 'var(--slide-text-secondary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.maturity}</td>
                    <td style={{ padding: '10px 14px', fontWeight: 600, color: item.paidAPI === '없음' ? 'var(--status-negative)' : 'var(--status-positive)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.paidAPI}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{
              marginTop: 12,
              padding: '12px 16px',
              background: 'var(--slide-bg-tertiary)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 10
            }}>
              <AlertTriangle size={16} color="var(--status-warning)" />
              <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)' }}>
                <strong style={{ color: 'var(--slide-text-primary)' }}>시사점:</strong> 클라우드 빅테크가 유료 API를 제공하는 영역 = <strong style={{ color: 'var(--track-1-primary)' }}>수익화 가능한 시장</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
