import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Trophy } from 'lucide-react';

const TOTAL_PAGES = 33;

const criteria = [
  { name: '커뮤니티 확산', a: 1, b1: 2, b2: 5, note: 'PyPI top10% permissive 84-90%' },
  { name: '기업 채택', a: 1, b1: 3, b2: 5, note: 'AGPL: 금지, MPL: 조건부, Apache: 자동' },
  { name: '글로벌 확산 가속', a: 1, b1: 2, b2: 5, note: '라이선스 장벽이 낮을수록 채택 속도 향상' },
  { name: 'AI 중심 수익화', a: 2, b1: 5, b2: 5, note: 'AGPL: 라이선스 판매 주력, 오픈코어: AI SaaS' },
];

const totals = {
  a: criteria.reduce((sum, c) => sum + c.a, 0),
  b1: criteria.reduce((sum, c) => sum + c.b1, 0),
  b2: criteria.reduce((sum, c) => sum + c.b2, 0),
};

export default function Slide31() {
  return (
    <SlideLayout currentPage={31} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 2 · Decision Matrix</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            라이선스 의사결정 매트릭스
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            평가 기준 (1-5점, 높을수록 유리)
          </p>
        </div>

        <div className="slide-content-area">
          {/* Decision Matrix Table */}
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
                  <th style={{ width: '15%', padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', borderBottom: '1px solid var(--slide-border-default)' }}>기준</th>
                  <th style={{ width: '17%', padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'center', color: 'var(--status-negative)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', borderBottom: '2px solid var(--status-negative)' }}>A. AGPL 듀얼</th>
                  <th style={{ width: '17%', padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'center', color: 'var(--track-1-primary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', borderBottom: '2px solid var(--track-1-primary)' }}>B-1. 오픈코어 (MPL)</th>
                  <th style={{ width: '17%', padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'center', color: 'var(--status-positive)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', borderBottom: '2px solid var(--status-positive)' }}>B-2. 오픈코어 (Apache)</th>
                  <th style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', borderBottom: '1px solid var(--slide-border-default)' }}>근거</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: '10px 14px', color: 'var(--slide-text-primary)', fontWeight: 500, borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.name}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'center', fontFamily: 'var(--slide-font-mono)', color: 'var(--status-negative)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.a}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'center', fontFamily: 'var(--slide-font-mono)', color: 'var(--track-1-primary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.b1}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'center', fontFamily: 'var(--slide-font-mono)', color: 'var(--status-positive)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.b2}</td>
                    <td style={{ padding: '10px 14px', fontSize: '0.875rem', color: 'var(--slide-text-muted)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.note}</td>
                  </tr>
                ))}
                {/* Total Row */}
                <tr>
                  <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--slide-text-primary)', background: 'var(--slide-bg-tertiary)', borderTop: '2px solid var(--slide-border-default)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Trophy size={14} color="var(--status-positive)" />
                      합계
                    </div>
                  </td>
                  <td style={{ padding: '12px 14px', textAlign: 'center', fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--status-negative)', background: 'var(--slide-bg-tertiary)', borderTop: '2px solid var(--slide-border-default)' }}>{totals.a}</td>
                  <td style={{ padding: '12px 14px', textAlign: 'center', fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--track-1-primary)', background: 'var(--slide-bg-tertiary)', borderTop: '2px solid var(--slide-border-default)' }}>{totals.b1}</td>
                  <td style={{ padding: '12px 14px', textAlign: 'center', fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--status-positive)', background: 'var(--slide-bg-tertiary)', borderTop: '2px solid var(--slide-border-default)' }}>{totals.b2}</td>
                  <td style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', borderTop: '2px solid var(--slide-border-default)' }}></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
