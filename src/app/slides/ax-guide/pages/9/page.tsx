import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide9() {
  return (
    <SlideLayout currentPage={9} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 2: 가이드</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          핵심: <span className="ax-header-glow">Context Engineering</span>
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          &quot;AI에게 일 시키기 전에, 필요한 배경지식을 잘 정리해서 주는 것&quot;
        </p>

        <div className="ax-table-wrapper ax-animate-up ax-stagger-3">
          <table className="ax-table">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>도구</th>
                <th style={{ width: '75%' }}>역할</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ax-cell-cyan">CLAUDE.md</td>
                <td>프로젝트 전체 컨텍스트 - 기술 스택, 컨벤션, 구조 설명</td>
              </tr>
              <tr>
                <td className="ax-cell-magenta">Skills</td>
                <td>도메인별 전문 지식 - 특정 작업 수행 방법 정의</td>
              </tr>
              <tr>
                <td className="ax-cell-orange">Subagents</td>
                <td>복잡한 작업 분할 - 각 에이전트가 독립 컨텍스트에서 실행</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ax-mt-10 ax-animate-up ax-stagger-4">
          <div style={{
            fontFamily: 'var(--ax-font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ax-neon-cyan)',
            marginBottom: '12px',
            letterSpacing: '0.1em'
          }}>
            SKILLS 예시
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px'
          }}>
            <div className="ax-card">
              <div style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '0.875rem',
                color: 'var(--ax-neon-cyan)',
                marginBottom: '8px'
              }}>
                /frontend-design
              </div>
              <div style={{
                fontFamily: 'var(--ax-font-body)',
                fontSize: '0.8125rem',
                color: 'var(--ax-text-secondary)'
              }}>
                UI 생성 시 디자인 가이드 자동 적용
              </div>
            </div>
            <div className="ax-card">
              <div style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '0.875rem',
                color: 'var(--ax-neon-magenta)',
                marginBottom: '8px'
              }}>
                /commit, /code-review
              </div>
              <div style={{
                fontFamily: 'var(--ax-font-body)',
                fontSize: '0.8125rem',
                color: 'var(--ax-text-secondary)'
              }}>
                커밋 메시지 생성, PR 코드 리뷰
              </div>
            </div>
            <div className="ax-card">
              <div style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '0.875rem',
                color: 'var(--ax-neon-orange)',
                marginBottom: '8px'
              }}>
                /pdf, /pptx, /xlsx
              </div>
              <div style={{
                fontFamily: 'var(--ax-font-body)',
                fontSize: '0.8125rem',
                color: 'var(--ax-text-secondary)'
              }}>
                문서 생성 / 분석 / 편집
              </div>
            </div>
          </div>
        </div>

        <div className="ax-highlight-box ax-mt-10 ax-animate-up ax-stagger-5">
          <div style={{
            fontFamily: 'var(--ax-font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--ax-text-bright)',
            marginBottom: '8px'
          }}>
            모델을 바꾸는 게 아니라, <span style={{ color: 'var(--ax-neon-cyan)' }}>맥락</span>을 잘 주는 것
          </div>
          <div style={{
            fontFamily: 'var(--ax-font-body)',
            fontSize: '1rem',
            color: 'var(--ax-text-secondary)'
          }}>
            이게 <strong style={{ color: 'var(--ax-neon-yellow)' }}>Knowledge Base</strong>의 시작
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
