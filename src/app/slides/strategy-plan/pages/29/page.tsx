import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Scale, Star, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

const TOTAL_PAGES = 33;

const comparison = [
  { item: '확산성', apache: 3, apacheNote: '기업 채택 장벽 없음', mpl: 2, mplNote: '파일 공개 의무 인식' },
  { item: '특허권', apache: 0, apacheNote: '명시적 부여', mpl: 0, mplNote: '명시적 부여' },
  { item: '기업 선호도', apache: 0, apacheNote: '1위 (~25% 점유율)', mpl: 0, mplNote: '낮음 (~1-2%)' },
  { item: '경쟁사 사례', apache: 0, apacheNote: 'docling (IBM)', mpl: 0, mplNote: 'veraPDF (비영리)' },
  { item: '전환 비용', apache: 0, apacheNote: 'CLA 확보 완료 → 가능', mpl: 0, mplNote: '없음 (현상 유지)' },
];

const marketShare = [
  { ecosystem: 'npm top 1%', permissive: '99%+', copyleft: '<1%' },
  { ecosystem: 'npm top 10%', permissive: '98%', copyleft: '2%' },
  { ecosystem: 'PyPI top 1%', permissive: '92%', copyleft: '8%' },
  { ecosystem: 'PyPI top 10%', permissive: '84-90%', copyleft: '10-16%' },
];

function RatingStars({ rating }: { rating: number }) {
  if (rating === 0) return null;
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3].map(i => (
        <Star
          key={i}
          size={12}
          fill={i <= rating ? 'var(--status-warning)' : 'transparent'}
          color={i <= rating ? 'var(--status-warning)' : 'var(--slide-border-default)'}
        />
      ))}
    </div>
  );
}

export default function Slide29() {
  return (
    <SlideLayout currentPage={29} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 2 · Base License Comparison</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            오픈코어 시 Base 라이선스 비교
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            Apache 2.0 vs MPL 2.0 · 확산성 차이
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24
          }}>
            {/* Comparison Table */}
            <div className="slide-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Scale size={18} color="var(--track-1-primary)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  Apache 2.0 vs MPL 2.0
                </h3>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px 10px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', borderBottom: '1px solid var(--slide-border-default)' }}>항목</th>
                    <th style={{ padding: '8px 10px', textAlign: 'center', color: 'var(--status-positive)', fontWeight: 600, fontSize: '0.875rem', borderBottom: '2px solid var(--status-positive)' }}>Apache 2.0</th>
                    <th style={{ padding: '8px 10px', textAlign: 'center', color: 'var(--track-1-primary)', fontWeight: 600, fontSize: '0.875rem', borderBottom: '2px solid var(--track-1-primary)' }}>MPL 2.0 (현재)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{ padding: '10px', color: 'var(--slide-text-secondary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.item}</td>
                      <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                          {item.apache > 0 && <RatingStars rating={item.apache} />}
                          <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>{item.apacheNote}</span>
                        </div>
                      </td>
                      <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                          {item.mpl > 0 && <RatingStars rating={item.mpl} />}
                          <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>{item.mplNote}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Market Share Data */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--track-1-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <TrendingUp size={18} color="var(--track-1-primary)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  인기 패키지 라이선스 분포
                </h3>
              </div>

              <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-muted)', marginBottom: 12 }}>다운로드 수 기준 · Sonar 2024</p>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px 10px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, fontSize: '0.875rem', borderBottom: '1px solid var(--slide-border-default)' }}>생태계</th>
                    <th style={{ padding: '8px 10px', textAlign: 'right', color: 'var(--status-positive)', fontWeight: 600, fontSize: '0.875rem', borderBottom: '1px solid var(--slide-border-default)' }}>Permissive</th>
                    <th style={{ padding: '8px 10px', textAlign: 'right', color: 'var(--status-warning)', fontWeight: 600, fontSize: '0.875rem', borderBottom: '1px solid var(--slide-border-default)' }}>Copyleft</th>
                  </tr>
                </thead>
                <tbody>
                  {marketShare.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{ padding: '10px', color: 'var(--slide-text-secondary)', fontFamily: 'var(--slide-font-mono)', fontSize: '0.8125rem', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.ecosystem}</td>
                      <td style={{ padding: '10px', textAlign: 'right', fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', color: 'var(--status-positive)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.permissive}</td>
                      <td style={{ padding: '10px', textAlign: 'right', fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', color: 'var(--status-warning)', borderBottom: '1px solid var(--slide-border-subtle)' }}>{item.copyleft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Insight */}
              <div style={{
                marginTop: 16,
                padding: '12px 14px',
                background: 'rgba(6, 182, 212, 0.08)',
                borderRadius: 8,
                borderLeft: '3px solid var(--track-1-primary)'
              }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--track-1-primary)' }}>해석:</strong> 다운로드 상위 패키지일수록 permissive 비중 증가. 인과관계는 불명확하나 <strong>상관관계 존재</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
