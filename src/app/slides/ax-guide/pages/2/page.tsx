import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide2() {
  return (
    <SlideLayout currentPage={2} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Opening</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          AI 프로젝트 <span className="ax-header-glow">95%</span> 실패
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          MIT 보고서가 말하는 기업 AI의 현실
        </p>

        <div className="ax-columns ax-animate-up ax-stagger-3">
          <div className="ax-stat">
            <div className="ax-stat-value ax-stat-value-red">95%</div>
            <div className="ax-stat-label">측정 가능한 영향이 거의 없음</div>
          </div>
          <div className="ax-stat">
            <div className="ax-stat-value ax-stat-value-green">5%</div>
            <div className="ax-stat-label">수백만 달러 가치 창출</div>
          </div>
        </div>

        <div className="ax-quote ax-animate-up ax-stagger-4 ax-mt-10">
          핵심 원인: <strong>Domain Context Learning Gap</strong>
          <br />
          대부분의 AX 시스템은 피드백을 기억하거나 맥락에 적응하지 못합니다.
          <span className="ax-quote-source">MIT Report - State of AI in Business 2025</span>
        </div>

        <div className="ax-mt-8 ax-animate-up ax-stagger-5">
          <ul className="ax-list">
            <li>
              <strong>핵심 문제</strong>: 사용자들은 업무 맥락을 기억하지 못하고 매번 처음부터 다시 설정
            </li>
            <li>
              <strong>선두 5%</strong>: 지속적 메모리와 반복 학습 기능을 갖춘 에이전트형 AI 도입
            </li>
            <li>
              <strong>잘못된 투자</strong>: AI 예산 70%가 영업/마케팅에 집중, 실제 ROI는 백오피스 자동화
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
}
