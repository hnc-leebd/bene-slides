import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide5() {
  return (
    <SlideLayout currentPage={5} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 1: 전략</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          AX의 핵심 병목
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          빅테크가 절대 만들어줄 수 없는 것
        </p>

        <div className="ax-highlight-box ax-animate-up ax-stagger-3" style={{ marginBottom: '40px' }}>
          <div style={{
            fontFamily: 'var(--ax-font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ax-neon-cyan)',
            marginBottom: '16px',
            letterSpacing: '0.1em'
          }}>
            CORE BOTTLENECK
          </div>
          <div style={{
            fontFamily: 'var(--ax-font-display)',
            fontSize: '2rem',
            fontWeight: 700,
            color: 'var(--ax-text-bright)',
            marginBottom: '8px'
          }}>
            AI가 실제 업무 맥락을 이해하지 못함
          </div>
        </div>

        <div className="ax-animate-up ax-stagger-4">
          <ul className="ax-list" style={{ fontSize: '1.125rem' }}>
            <li style={{ marginBottom: '20px' }}>
              모델은 똑똑해졌지만, <strong style={{ color: 'var(--ax-neon-cyan)' }}>우리 회사</strong>를 모릅니다
            </li>
            <li style={{ marginBottom: '20px' }}>
              RAG를 붙여도, <strong style={{ color: 'var(--ax-neon-cyan)' }}>우리 워크플로우</strong>를 모릅니다
            </li>
            <li style={{ marginBottom: '20px' }}>
              에이전트를 만들어도, <strong style={{ color: 'var(--ax-neon-cyan)' }}>우리 도메인</strong>을 모릅니다
            </li>
          </ul>
        </div>

        <div className="ax-flow ax-mt-10 ax-animate-up ax-stagger-5">
          <div className="ax-flow-box">공통화 불가능</div>
          <div className="ax-flow-arrow">→</div>
          <div className="ax-flow-box">도구가 발전해도 변하지 않음</div>
          <div className="ax-flow-arrow">→</div>
          <div className="ax-flow-box ax-flow-box-highlight">기업의 핵심 자산</div>
        </div>

        <div className="ax-card ax-card-glow ax-mt-10 ax-animate-up ax-stagger-6">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '2rem',
              color: 'var(--ax-neon-magenta)',
              textShadow: 'var(--ax-glow-text-magenta)'
            }}>
              ★
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--ax-font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--ax-text-bright)',
                marginBottom: '4px'
              }}>
                Domain Context = Knowledge Base
              </div>
              <div style={{
                fontFamily: 'var(--ax-font-body)',
                fontSize: '0.9375rem',
                color: 'var(--ax-text-secondary)'
              }}>
                우리 회사의 도메인 지식, 워크플로우, 데이터와 맥락
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
