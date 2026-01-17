import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide13() {
  return (
    <SlideLayout currentPage={13} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 4: 사례 2 - 실패</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          실전 사례 2: GitHub Issue 자동화 <span style={{ color: 'var(--ax-neon-red)' }}>(실패)</span>
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          기술적 성공 ≠ 실제 성공
        </p>

        <div className="ax-columns ax-animate-up ax-stagger-3">
          <div className="ax-card">
            <h4 style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              color: 'var(--ax-neon-cyan)',
              marginBottom: '16px'
            }}>
              목표
            </h4>
            <ul className="ax-list">
              <li>GitHub Issue 자동 분류 및 처리</li>
              <li>반복 업무 자동화로 생산성 향상</li>
            </ul>
          </div>

          <div className="ax-card">
            <h4 style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              color: 'var(--ax-neon-orange)',
              marginBottom: '16px'
            }}>
              시도한 것
            </h4>
            <ul className="ax-list">
              <li>1차: n8n으로 워크플로우 구축</li>
              <li>2차: LangGraph로 재개발</li>
              <li style={{ color: 'var(--ax-neon-green)' }}>기술적으로는 동작함 ✓</li>
            </ul>
          </div>
        </div>

        <div className="ax-mt-10 ax-animate-up ax-stagger-4">
          <div className="ax-flow">
            <div className="ax-flow-box">
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>📋</div>
              <div style={{ fontSize: '0.875rem' }}>n8n</div>
            </div>
            <div className="ax-flow-arrow">→</div>
            <div className="ax-flow-box" style={{ borderColor: 'var(--ax-neon-red)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>❌</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--ax-neon-red)' }}>실패</div>
            </div>
            <div className="ax-flow-arrow">→</div>
            <div className="ax-flow-box">
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🔗</div>
              <div style={{ fontSize: '0.875rem' }}>LangGraph</div>
            </div>
            <div className="ax-flow-arrow">→</div>
            <div className="ax-flow-box" style={{ borderColor: 'var(--ax-neon-red)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>❌</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--ax-neon-red)' }}>같은 실패</div>
            </div>
          </div>
        </div>

        <div className="ax-highlight-box ax-mt-10 ax-animate-up ax-stagger-5" style={{
          borderColor: 'var(--ax-neon-red)',
          background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.08), rgba(255, 51, 102, 0.02))',
          boxShadow: '0 0 60px rgba(255, 51, 102, 0.2)'
        }}>
          <div style={{
            fontFamily: 'var(--ax-font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ax-neon-red)',
            marginBottom: '12px',
            letterSpacing: '0.1em'
          }}>
            CRITICAL QUESTION
          </div>
          <div style={{
            fontFamily: 'var(--ax-font-display)',
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'var(--ax-text-bright)'
          }}>
            왜 폐기했나?
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
