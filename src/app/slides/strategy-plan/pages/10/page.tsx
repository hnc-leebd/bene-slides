import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { ArrowRight, Zap, FileText, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const TOTAL_PAGES = 33;

const strategies = [
  {
    name: '전략 A: 포맷 확장',
    approach: '지원 포맷 확대로 사용자 유치',
    implementation: 'Apache POI 연동, docx/pptx/xlsx 지원',
    investment: '2~4주',
    pros: '다양한 포맷으로 사용자 접점 확대',
    cons: '오픈소스 10개+ 존재, 차별화 어려움'
  },
  {
    name: '전략 B: PDF 품질 집중',
    approach: '코어 기술(PDF) 품질 향상으로 사용자 유치',
    implementation: 'PDF 파싱 정확도 개선',
    investment: '2~4주',
    pros: '코어 기술 차별화, 프리미엄 전환 용이',
    cons: '멀티 포맷 사용자 유입 제한'
  }
];

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
            트랙 1 확산 전략 비교
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            핵심 질문: 오픈소스 사용자를 어떻게 확보할 것인가?
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20
          }}>
            {strategies.map((strategy, idx) => (
              <div key={idx} className="slide-card" style={{
                borderTop: `4px solid ${idx === 0 ? 'var(--status-warning)' : 'var(--track-1-primary)'}`
              }}>
                <h3 style={{
                  fontFamily: 'var(--slide-font-display)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: 'var(--slide-text-primary)',
                  marginBottom: 16
                }}>{strategy.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ padding: '10px 12px', background: 'var(--slide-bg-elevated)', borderRadius: 6 }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', textTransform: 'uppercase' }}>접근 방식</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', marginTop: 4 }}>{strategy.approach}</p>
                  </div>
                  <div style={{ padding: '10px 12px', background: 'var(--slide-bg-elevated)', borderRadius: 6 }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', textTransform: 'uppercase' }}>구현</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', marginTop: 4, fontFamily: 'var(--slide-font-mono)' }}>{strategy.implementation}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <div style={{ flex: 1, padding: '10px 12px', background: 'rgba(34, 197, 94, 0.08)', borderRadius: 6, borderLeft: '3px solid var(--status-positive)' }}>
                      <CheckCircle size={12} color="var(--status-positive)" style={{ marginBottom: 4 }} />
                      <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', lineHeight: 1.4 }}>{strategy.pros}</p>
                    </div>
                    <div style={{ flex: 1, padding: '10px 12px', background: 'rgba(239, 68, 68, 0.08)', borderRadius: 6, borderLeft: '3px solid var(--status-negative)' }}>
                      <XCircle size={12} color="var(--status-negative)" style={{ marginBottom: 4 }} />
                      <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', lineHeight: 1.4 }}>{strategy.cons}</p>
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: 12,
                  paddingTop: 12,
                  borderTop: '1px solid var(--slide-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}>
                  <Zap size={14} color="var(--track-1-primary)" />
                  <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>투자 규모:</span>
                  <span style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', color: 'var(--track-1-primary)', fontWeight: 600 }}>{strategy.investment}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Market Comparison Table */}
          <div className="animate-slide-in stagger-4" style={{ marginTop: 20 }}>
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
