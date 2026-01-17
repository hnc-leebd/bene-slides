import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide12() {
  return (
    <SlideLayout currentPage={12} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 3: 사례 1 - 성공</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          결과: 글로벌 벤치마크 <span className="ax-header-glow">1등</span>
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          Average Score (NID + TEDS + MHS) / 3
        </p>

        <div className="ax-table-wrapper ax-animate-up ax-stagger-3">
          <table className="ax-table">
            <thead>
              <tr>
                <th style={{ width: '10%' }}>순위</th>
                <th style={{ width: '50%' }}>파서</th>
                <th style={{ width: '20%' }}>점수</th>
                <th style={{ width: '20%' }}></th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: 'rgba(0, 255, 245, 0.08)' }}>
                <td style={{
                  fontFamily: 'var(--ax-font-mono)',
                  fontWeight: 700,
                  color: 'var(--ax-neon-cyan)',
                  fontSize: '1.25rem'
                }}>
                  1
                </td>
                <td style={{ fontWeight: 600, color: 'var(--ax-text-bright)' }}>
                  OpenDataLoader (After)
                </td>
                <td>
                  <div className="ax-chart-bar" style={{ marginTop: 0 }}>
                    <div className="ax-chart-bar-fill" style={{ width: '88%' }}></div>
                  </div>
                  <span style={{
                    fontFamily: 'var(--ax-font-mono)',
                    color: 'var(--ax-neon-cyan)',
                    fontSize: '1.25rem',
                    fontWeight: 700
                  }}>
                    0.88
                  </span>
                </td>
                <td>
                  <span className="ax-badge ax-badge-cyan">NEW</span>
                </td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--ax-font-mono)', color: 'var(--ax-text-secondary)' }}>2</td>
                <td>Docling</td>
                <td>
                  <div className="ax-chart-bar" style={{ marginTop: 0 }}>
                    <div className="ax-chart-bar-fill" style={{ width: '86%', background: 'var(--ax-text-muted)' }}></div>
                  </div>
                  <span style={{ fontFamily: 'var(--ax-font-mono)', color: 'var(--ax-text-secondary)' }}>0.86</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--ax-font-mono)', color: 'var(--ax-text-secondary)' }}>3</td>
                <td>Marker</td>
                <td>
                  <div className="ax-chart-bar" style={{ marginTop: 0 }}>
                    <div className="ax-chart-bar-fill" style={{ width: '83%', background: 'var(--ax-text-muted)' }}></div>
                  </div>
                  <span style={{ fontFamily: 'var(--ax-font-mono)', color: 'var(--ax-text-secondary)' }}>0.83</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--ax-font-mono)', color: 'var(--ax-text-muted)' }}>5</td>
                <td style={{ color: 'var(--ax-text-muted)' }}>OpenDataLoader (Before)</td>
                <td>
                  <div className="ax-chart-bar" style={{ marginTop: 0 }}>
                    <div className="ax-chart-bar-fill ax-chart-bar-fill-red" style={{ width: '68%' }}></div>
                  </div>
                  <span style={{ fontFamily: 'var(--ax-font-mono)', color: 'var(--ax-neon-red)' }}>0.68</span>
                </td>
                <td>
                  <span className="ax-badge ax-badge-red">BEFORE</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ax-mt-10 ax-animate-up ax-stagger-4">
          <div style={{
            fontFamily: 'var(--ax-font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ax-neon-green)',
            marginBottom: '16px',
            letterSpacing: '0.1em'
          }}>
            배운 것
          </div>
          <div className="ax-columns-3">
            <div className="ax-card">
              <div style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '2rem',
                color: 'var(--ax-neon-cyan)',
                marginBottom: '8px'
              }}>
                01
              </div>
              <div style={{
                fontFamily: 'var(--ax-font-body)',
                fontSize: '0.9375rem',
                color: 'var(--ax-text-primary)'
              }}>
                모델을 바꾸지 않았습니다
                <span style={{ display: 'block', color: 'var(--ax-text-muted)', fontSize: '0.8125rem', marginTop: '4px' }}>
                  Claude Sonnet 4 그대로
                </span>
              </div>
            </div>
            <div className="ax-card">
              <div style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '2rem',
                color: 'var(--ax-neon-magenta)',
                marginBottom: '8px'
              }}>
                02
              </div>
              <div style={{
                fontFamily: 'var(--ax-font-body)',
                fontSize: '0.9375rem',
                color: 'var(--ax-text-primary)'
              }}>
                Knowledge Base가 핵심
                <span style={{ display: 'block', color: 'var(--ax-neon-yellow)', fontSize: '0.8125rem', marginTop: '4px' }}>
                  Task 설계 문서 = 성과의 70%
                </span>
              </div>
            </div>
            <div className="ax-card">
              <div style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '2rem',
                color: 'var(--ax-neon-orange)',
                marginBottom: '8px'
              }}>
                03
              </div>
              <div style={{
                fontFamily: 'var(--ax-font-body)',
                fontSize: '0.9375rem',
                color: 'var(--ax-text-primary)'
              }}>
                복잡한 문제도 분할하면 풀림
                <span style={{ display: 'block', color: 'var(--ax-text-muted)', fontSize: '0.8125rem', marginTop: '4px' }}>
                  13개 subagent
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
