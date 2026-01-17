import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide8() {
  return (
    <SlideLayout currentPage={8} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 2: 가이드</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          Claude Code <span className="ax-header-glow">Plan 모드</span>로 멀티 에이전트 만들기
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          자연어 요청만으로 자동 구성되는 서브에이전트
        </p>

        {/* Terminal Demo */}
        <div className="ax-terminal ax-animate-up ax-stagger-3">
          <div className="ax-terminal-header">
            <div className="ax-terminal-dot ax-terminal-dot-red"></div>
            <div className="ax-terminal-dot ax-terminal-dot-yellow"></div>
            <div className="ax-terminal-dot ax-terminal-dot-green"></div>
            <span className="ax-terminal-title">claude-code</span>
          </div>
          <div className="ax-terminal-body">
            <div className="ax-terminal-line">
              <span className="ax-terminal-prompt">$</span>
              <span className="ax-terminal-cmd">&quot;OOO 분석해서 보고서 만들어줘&quot;</span>
            </div>
            <div className="ax-terminal-output" style={{ marginTop: '12px', color: 'var(--ax-neon-cyan)' }}>
              Plan 모드 실행 중...
            </div>
          </div>
        </div>

        {/* Agent Architecture */}
        <div className="ax-mt-8 ax-animate-up ax-stagger-4" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: 'var(--ax-bg-card)',
            border: '1px solid var(--ax-border-default)',
            borderRadius: '12px',
            padding: '20px',
            width: '180px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              margin: '0 auto 12px',
              background: 'linear-gradient(135deg, rgba(0, 255, 245, 0.2), rgba(0, 255, 245, 0.05))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--ax-neon-cyan)'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🔍</span>
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.875rem',
              color: 'var(--ax-neon-cyan)',
              marginBottom: '4px'
            }}>
              Explore Agent
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-body)',
              fontSize: '0.8125rem',
              color: 'var(--ax-text-muted)'
            }}>
              코드베이스 탐색
            </div>
          </div>

          <div style={{
            background: 'var(--ax-bg-card)',
            border: '1px solid var(--ax-border-default)',
            borderRadius: '12px',
            padding: '20px',
            width: '180px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              margin: '0 auto 12px',
              background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.05))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--ax-neon-magenta)'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🧠</span>
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.875rem',
              color: 'var(--ax-neon-magenta)',
              marginBottom: '4px'
            }}>
              General Purpose
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-body)',
              fontSize: '0.8125rem',
              color: 'var(--ax-text-muted)'
            }}>
              분석 / 작성
            </div>
          </div>

          <div style={{
            background: 'var(--ax-bg-card)',
            border: '1px solid var(--ax-border-default)',
            borderRadius: '12px',
            padding: '20px',
            width: '180px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              margin: '0 auto 12px',
              background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.2), rgba(255, 102, 0, 0.05))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--ax-neon-orange)'
            }}>
              <span style={{ fontSize: '1.5rem' }}>⚡</span>
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '0.875rem',
              color: 'var(--ax-neon-orange)',
              marginBottom: '4px'
            }}>
              Bash Agent
            </div>
            <div style={{
              fontFamily: 'var(--ax-font-body)',
              fontSize: '0.8125rem',
              color: 'var(--ax-text-muted)'
            }}>
              명령 실행
            </div>
          </div>
        </div>

        <div className="ax-mt-10 ax-animate-up ax-stagger-5">
          <ul className="ax-list">
            <li>
              <strong>자동 선택</strong>: 검색, 분석, 실행 등 작업에 맞는 에이전트를 Claude가 자동 선택/위임
            </li>
            <li>
              <strong>자연어 요청</strong>: 사용자는 자연어로 요청만 하면 됨
            </li>
            <li>
              <strong style={{ color: 'var(--ax-neon-cyan)' }}>5분이면 시작할 수 있습니다</strong>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
}
