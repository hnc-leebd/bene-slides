import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Shield } from 'lucide-react';

const TOTAL_PAGES = 18;

const enterprisePolicies = [
  { category: 'Whitelist (자동 승인)', licenses: 'MIT, Apache, BSD', response: '즉시 사용 가능', companies: 'Google, Meta, MS', color: 'var(--status-positive)' },
  { category: 'Category B (조건부 허용)', licenses: 'MPL, LGPL', response: '법무 검토 후 사용', companies: '대부분 기업', color: 'var(--status-warning)' },
  { category: 'Category X (금지/별도 승인)', licenses: 'GPL, AGPL', response: '사용 금지 또는 특별 승인', companies: 'Google (AGPL 완전 금지)', color: 'var(--status-negative)' },
];

const competitors = [
  { name: 'docling', release: '2024-07', monthly: '1,580k', total: '12.81M', stars: '50.6k', license: 'MIT', model: '오픈코어 (watsonx 연계)' },
  { name: 'pymupdf4llm', release: '2024-04', monthly: '1,168k', total: '8.62M', stars: '1.2k', license: 'AGPL', model: '상용 라이선스 판매' },
  { name: 'marker-pdf', release: '2023-12', monthly: '184k', total: '1.96M', stars: '31.1k', license: 'GPL', model: '상용 라이선스 판매' },
  { name: 'mineru', release: '2024-06', monthly: '166k', total: '589k', stars: '52.4k', license: 'AGPL', model: '정부 펀딩 (비영리)' },
  { name: 'opendataloader-pdf', release: '2025-09', monthly: '2.5k', total: '10.6k', stars: '823', license: 'MPL 2.0', model: '오픈코어', highlight: true },
];

export default function Slide15() {
  return (
    <SlideLayout currentPage={15} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 2 · Market Analysis</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            경쟁 오픈소스 분석 (2026년 1월)
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            다운로드 수, Stars, 라이선스, 수익 모델 비교
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3">
            <table style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: 0,
              borderRadius: 12,
              overflow: 'hidden',
              background: 'var(--slide-bg-secondary)',
              fontSize: '0.875rem'
            }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>프로젝트</th>
                  <th style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>첫 릴리스</th>
                  <th style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'right', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>월간 다운로드</th>
                  <th style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'right', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>총 다운로드</th>
                  <th style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'right', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>Stars</th>
                  <th style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'center', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>라이선스</th>
                  <th style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--slide-border-default)' }}>수익 모델</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp, idx) => (
                  <tr key={idx} style={{ background: comp.highlight ? 'rgba(6, 182, 212, 0.08)' : 'transparent' }}>
                    <td style={{ padding: '10px 14px', fontWeight: comp.highlight ? 700 : 500, color: comp.highlight ? 'var(--track-1-primary)' : 'var(--slide-text-primary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                      {comp.name}
                    </td>
                    <td style={{ padding: '10px 14px', fontFamily: 'var(--slide-font-mono)', fontSize: '0.8125rem', color: 'var(--slide-text-secondary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{comp.release}</td>
                    <td style={{ padding: '10px 14px', fontFamily: 'var(--slide-font-mono)', fontSize: '0.8125rem', color: 'var(--slide-text-secondary)', textAlign: 'right', borderBottom: '1px solid var(--slide-border-subtle)' }}>{comp.monthly}</td>
                    <td style={{ padding: '10px 14px', fontFamily: 'var(--slide-font-mono)', fontSize: '0.8125rem', color: 'var(--track-1-primary)', fontWeight: 600, textAlign: 'right', borderBottom: '1px solid var(--slide-border-subtle)' }}>{comp.total}</td>
                    <td style={{ padding: '10px 14px', fontFamily: 'var(--slide-font-mono)', fontSize: '0.8125rem', color: 'var(--status-warning)', fontWeight: 600, textAlign: 'right', borderBottom: '1px solid var(--slide-border-subtle)' }}>{comp.stars}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'center', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        color: comp.license === 'MIT' ? 'var(--status-positive)' : comp.license === 'AGPL' ? 'var(--status-negative)' : 'var(--status-warning)',
                        background: comp.license === 'MIT' ? 'rgba(34, 197, 94, 0.1)' : comp.license === 'AGPL' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                        padding: '2px 8px',
                        borderRadius: 4
                      }}>{comp.license}</span>
                    </td>
                    <td style={{ padding: '10px 14px', fontSize: '0.8125rem', color: comp.model === '미정' ? 'var(--status-warning)' : 'var(--slide-text-tertiary)', fontWeight: comp.model === '미정' ? 600 : 400, borderBottom: '1px solid var(--slide-border-subtle)' }}>{comp.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Enterprise Policies Table */}
          <div className="animate-slide-in stagger-4" style={{ marginTop: 16 }}>
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
        </div>
      </div>
    </SlideLayout>
  );
}
