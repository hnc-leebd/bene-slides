import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide7() {
  return (
    <SlideLayout currentPage={7} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 2: 가이드</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          에이전트 개발, <span className="ax-header-glow">얼마나 쉬워졌나?</span>
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          에이전트 진입장벽의 급격한 하락
        </p>

        <div className="ax-timeline ax-animate-up ax-stagger-3">
          <div className="ax-timeline-item">
            <div className="ax-timeline-date">2024</div>
            <div className="ax-timeline-title">수백억 투자 필요</div>
            <div className="ax-timeline-desc">OpenAI, Anthropic급 기업만 가능</div>
          </div>
          <div className="ax-timeline-item">
            <div className="ax-timeline-date">2025 초</div>
            <div className="ax-timeline-title">개발 프레임워크 시대</div>
            <div className="ax-timeline-desc">LangGraph, LangChain - 개발자 전용</div>
          </div>
          <div className="ax-timeline-item">
            <div className="ax-timeline-date">2025 말</div>
            <div className="ax-timeline-title">로우코드 도구 시대</div>
            <div className="ax-timeline-desc">Dify, n8n - 학습 곡선 존재</div>
          </div>
          <div className="ax-timeline-item" style={{ paddingBottom: 0 }}>
            <div className="ax-timeline-date" style={{ color: 'var(--ax-neon-magenta)' }}>2026 현재</div>
            <div className="ax-timeline-title" style={{ color: 'var(--ax-neon-cyan)', fontSize: '1.125rem' }}>
              자연어로 5분
            </div>
            <div className="ax-timeline-desc">Claude Code Subagent</div>
          </div>
        </div>

        <div className="ax-highlight-box ax-mt-10 ax-animate-up ax-stagger-4">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '24px',
            alignItems: 'center',
            textAlign: 'left'
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--ax-text-muted)',
                marginBottom: '8px'
              }}>
                기존 접근
              </div>
              <div style={{
                fontFamily: 'var(--ax-font-body)',
                fontSize: '0.9375rem',
                color: 'var(--ax-text-secondary)'
              }}>
                모델 구축 → 워크플로우 개발<br/>
                <span style={{ color: 'var(--ax-text-muted)' }}>AI 전문가가 만들어서 현업에 전달</span>
              </div>
            </div>
            <div style={{
              fontSize: '2rem',
              color: 'var(--ax-neon-cyan)'
            }}>
              →
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--ax-neon-cyan)',
                marginBottom: '8px'
              }}>
                새로운 접근
              </div>
              <div style={{
                fontFamily: 'var(--ax-font-body)',
                fontSize: '0.9375rem',
                color: 'var(--ax-text-bright)'
              }}>
                현업 담당자가 직접 활용<br/>
                <span style={{ color: 'var(--ax-neon-yellow)' }}>→ 진짜 문제 해결 → 그 과정이 KB가 됨</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ax-mt-8 ax-animate-up ax-stagger-5" style={{
          textAlign: 'center',
          fontFamily: 'var(--ax-font-display)',
          fontSize: '1.25rem',
          color: 'var(--ax-text-primary)'
        }}>
          에이전트는 누구나 만듭니다.<br/>
          현업이 직접 문제를 해결하고,<br/>
          <span style={{ color: 'var(--ax-neon-cyan)' }}>그 과정이 Knowledge Base가 됩니다.</span>
        </div>
      </div>
    </SlideLayout>
  );
}
