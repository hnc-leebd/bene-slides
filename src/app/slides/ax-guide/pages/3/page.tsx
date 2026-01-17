import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide3() {
  return (
    <SlideLayout currentPage={3} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 1: 전략</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          AX는 왜 실패하는가?
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          현장에서 만나는 세 가지 병목
        </p>

        <div className="ax-columns-3 ax-animate-up ax-stagger-3">
          <div className="ax-card">
            <div className="ax-badge ax-badge-cyan ax-mb-4">Model</div>
            <h3 className="ax-card-title">모델 선택의 어려움</h3>
            <ul className="ax-list" style={{ marginTop: '12px' }}>
              <li>빅테크: 보안/비용 이슈</li>
              <li>오픈소스: GPU 내재화 필요</li>
              <li>sLLM: 기업용으로 부적합</li>
            </ul>
          </div>

          <div className="ax-card ax-card-glow">
            <div className="ax-badge ax-badge-magenta ax-mb-4">Domain Context</div>
            <h3 className="ax-card-title" style={{ color: 'var(--ax-neon-cyan)' }}>
              AI가 업무 맥락을 이해 못함
            </h3>
            <ul className="ax-list" style={{ marginTop: '12px' }}>
              <li>레거시 DB 연동 복잡</li>
              <li>비정형 데이터 전처리</li>
              <li>RAG 구축 난이도</li>
            </ul>
          </div>

          <div className="ax-card">
            <div className="ax-badge ax-badge-orange ax-mb-4">Call</div>
            <h3 className="ax-card-title">워크플로우 구축</h3>
            <ul className="ax-list" style={{ marginTop: '12px' }}>
              <li>개발자: 도메인 지식 부재</li>
              <li>비개발자: AI 지식 부재</li>
              <li>에이전트 무한루프 → 비용 폭발</li>
            </ul>
          </div>
        </div>

        <div className="ax-highlight-box ax-mt-10 ax-animate-up ax-stagger-4">
          <div style={{
            fontFamily: 'var(--ax-font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ax-text-muted)',
            marginBottom: '8px'
          }}>
            핵심 질문
          </div>
          <div style={{
            fontFamily: 'var(--ax-font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--ax-text-bright)'
          }}>
            어디에 집중해야 하는가?
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
