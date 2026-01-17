import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide8() {
  const months = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7'];

  return (
    <SlideLayout currentPage={8} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Implementation Guide</div>
        <h2 className="slide-header animate-slide-in stagger-1">PDF/UA 대응 일정</h2>
        <p className="slide-subheader animate-slide-in stagger-2">팀별 예상 소요 및 마일스톤</p>

        {/* Timeline Gantt Chart */}
        <div className="animate-slide-in stagger-3">
          <div className="slide-card" style={{ padding: '32px' }}>
            {/* Timeline Header - 각 구간 중앙에 라벨 배치 */}
            <div className="flex items-center mb-2">
              <div className="w-48 shrink-0"></div>
              <div className="flex-1 grid grid-cols-7 gap-0">
                {months.map((month) => (
                  <div
                    key={month}
                    className="text-center"
                    style={{
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--slide-text-muted)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {month}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Axis - 구간 구분선 */}
            <div className="flex items-center mb-6">
              <div className="w-48 shrink-0"></div>
              <div className="flex-1 relative h-px" style={{ background: 'var(--slide-border-strong)' }}>
                {/* 구간 시작점 마커 (0~7, 총 8개 포인트) */}
                {[...Array(8)].map((_, idx) => (
                  <div
                    key={idx}
                    className="absolute"
                    style={{
                      left: `${(idx / 7) * 100}%`,
                      top: '-4px',
                      width: '1px',
                      height: '9px',
                      background: idx === 0 || idx === 7
                        ? 'var(--slide-accent-primary)'
                        : 'var(--slide-border-strong)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Team 1: 오픈기술생태계확산팀 */}
            <div className="flex items-center mb-6">
              <div className="w-48 shrink-0 pr-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded"
                    style={{ background: 'var(--slide-accent-primary)' }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--slide-font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--slide-text-primary)',
                    }}
                  >
                    오픈기술생태계확산팀
                  </span>
                </div>
              </div>
              <div className="flex-1 relative h-12">
                {/* Bar: M1 (1 month) */}
                <div
                  className="absolute h-10 rounded-lg flex items-center justify-center"
                  style={{
                    left: '0%',
                    width: `${(1 / 7) * 100}%`,
                    background: 'linear-gradient(135deg, var(--slide-accent-primary), rgba(0, 212, 255, 0.7))',
                    boxShadow: 'var(--glow-cyan)',
                    top: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--slide-font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--slide-bg-primary)',
                    }}
                  >
                    중간 모듈 개발 (1MM)
                  </span>
                </div>
              </div>
            </div>

            {/* Team 2: 한글개발팀 */}
            <div className="flex items-center mb-6">
              <div className="w-48 shrink-0 pr-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded"
                    style={{ background: 'var(--slide-accent-secondary)' }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--slide-font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--slide-text-primary)',
                    }}
                  >
                    한글개발팀
                  </span>
                </div>
              </div>
              <div className="flex-1 relative h-12">
                {/* Bar: M2-M5 (4 months) - 필터 개발 */}
                <div
                  className="absolute h-10 rounded-l-lg flex items-center justify-center"
                  style={{
                    left: `${(1 / 7) * 100}%`,
                    width: `${(4 / 7) * 100}%`,
                    background: 'linear-gradient(135deg, var(--slide-accent-secondary), rgba(124, 58, 237, 0.7))',
                    boxShadow: 'var(--glow-purple)',
                    top: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--slide-font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'white',
                    }}
                  >
                    필터 개발 (4MM)
                  </span>
                </div>
                {/* Bar: M6-M7 (2 months) - 안정화 */}
                <div
                  className="absolute h-10 rounded-r-lg flex items-center justify-center"
                  style={{
                    left: `${(5 / 7) * 100}%`,
                    width: `${(2 / 7) * 100}%`,
                    background: 'linear-gradient(135deg, var(--slide-accent-success), rgba(16, 185, 129, 0.7))',
                    boxShadow: 'var(--glow-gold)',
                    top: '4px',
                    borderLeft: '2px solid var(--slide-bg-secondary)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--slide-font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'white',
                    }}
                  >
                    안정화 (2MM)
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline Note */}
            <div
              className="flex items-center gap-3 mt-6 pt-6"
              style={{ borderTop: '1px solid var(--slide-border-subtle)' }}
            >
              <span
                style={{
                  fontFamily: 'var(--slide-font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--slide-text-muted)',
                }}
              >
                ※
              </span>
              <span
                style={{
                  fontFamily: 'var(--slide-font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--slide-text-secondary)',
                }}
              >
                <span
                  style={{
                    color: 'var(--slide-accent-tertiary)',
                    fontWeight: 700,
                  }}
                >
                  2인
                </span>{' '}
                투입, 기존 업무 병행 기준 →{' '}
                <span
                  style={{
                    color: 'var(--slide-accent-primary)',
                    fontWeight: 700,
                    fontSize: '1rem',
                  }}
                >
                  7개월
                </span>{' '}
                일정
              </span>
            </div>
          </div>
        </div>

        {/* Accessibility Check Menu Section */}
        <div className="mt-6 animate-slide-in stagger-4">
          <div
            className="slide-card"
            style={{
              background: 'var(--slide-bg-tertiary)',
              borderLeft: '3px solid var(--slide-accent-tertiary)',
              padding: '24px 28px',
            }}
          >
            <h4
              className="mb-5"
              style={{
                fontFamily: 'var(--slide-font-body)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: 'var(--slide-accent-tertiary)',
              }}
            >
              접근성 검사 메뉴 (별도 일정)
            </h4>

            <div className="grid grid-cols-2 gap-5">
              {/* Card 1: 구현 가능 */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: 'var(--slide-bg-secondary)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--slide-accent-success)',
                      fontWeight: 600,
                    }}
                  >
                    구현 가능
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--slide-text-muted)',
                    }}
                  >
                    (3MM)
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <span style={{ color: 'var(--slide-accent-success)' }}>✓</span>
                    <span
                      style={{
                        fontFamily: 'var(--slide-font-body)',
                        fontSize: '0.875rem',
                        color: 'var(--slide-text-secondary)',
                      }}
                    >
                      색 및 대비
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span style={{ color: 'var(--slide-accent-success)' }}>✓</span>
                    <span
                      style={{
                        fontFamily: 'var(--slide-font-body)',
                        fontSize: '0.875rem',
                        color: 'var(--slide-text-secondary)',
                      }}
                    >
                      미디어 일러스트레이션
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span style={{ color: 'var(--slide-accent-success)' }}>✓</span>
                    <span
                      style={{
                        fontFamily: 'var(--slide-font-body)',
                        fontSize: '0.875rem',
                        color: 'var(--slide-text-secondary)',
                      }}
                    >
                      표
                    </span>
                  </li>
                </ul>
                <div
                  className="pt-3"
                  style={{ borderTop: '1px solid var(--slide-border-subtle)' }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--slide-text-muted)',
                    }}
                  >
                    ※ Addon 분리 시 별개
                  </span>
                </div>
              </div>

              {/* Card 2: 스펙 확인 필요 */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: 'var(--slide-bg-secondary)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(245, 158, 11, 0.15)',
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--slide-accent-warning)',
                      fontWeight: 600,
                    }}
                  >
                    스펙 확인 필요
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <span
                      style={{
                        color: 'var(--slide-accent-warning)',
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.75rem',
                      }}
                    >
                      ?
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--slide-font-body)',
                        fontSize: '0.875rem',
                        color: 'var(--slide-text-secondary)',
                      }}
                    >
                      문서 구조
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      style={{
                        color: 'var(--slide-accent-warning)',
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.75rem',
                      }}
                    >
                      ?
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--slide-font-body)',
                        fontSize: '0.875rem',
                        color: 'var(--slide-text-secondary)',
                      }}
                    >
                      문서 액세스
                    </span>
                  </li>
                </ul>
                <div
                  className="pt-3"
                  style={{ borderTop: '1px solid var(--slide-border-subtle)' }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--slide-font-body)',
                      fontSize: '0.8125rem',
                      color: 'var(--slide-text-muted)',
                    }}
                  >
                    복잡한 규칙, 상세 스펙 확인 불가
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
