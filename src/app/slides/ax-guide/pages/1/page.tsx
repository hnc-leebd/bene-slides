import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide1() {
  return (
    <SlideLayout currentPage={1} totalPages={17}>
      <div className="ax-cover">
        <div className="ax-section-tag ax-animate-fade">2026.01.XX</div>
        <h1 className="ax-cover-title ax-animate-up ax-stagger-1">
          AX는 왜 실패하는가?
        </h1>
        <p className="ax-cover-subtitle ax-animate-up ax-stagger-2">
          오픈소스에서 배운 것들
        </p>
        <div className="ax-cover-meta ax-animate-up ax-stagger-3">
          <span>Claude Code</span>
          <span>Knowledge Base</span>
          <span>Context Engineering</span>
        </div>
      </div>
    </SlideLayout>
  );
}
