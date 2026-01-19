import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';

const TOTAL_PAGES = 20;

export default function Slide1() {
  return (
    <SlideLayout currentPage={1} totalPages={TOTAL_PAGES}>
      <div className="slide-cover">
        <h1 className="slide-cover-title animate-slide-in">
          2026 전략 방향<br />시장 조사
        </h1>
        <div className="slide-cover-divider animate-fade-in stagger-2" />
        <p className="slide-cover-subtitle animate-slide-in stagger-3">
          3가지 전략 트랙 분석 및 권고
        </p>
      </div>
    </SlideLayout>
  );
}
