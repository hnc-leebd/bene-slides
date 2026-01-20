import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';

const TOTAL_PAGES = 33;

export default function Slide1() {
  return (
    <SlideLayout currentPage={1} totalPages={TOTAL_PAGES}>
      <div className="slide-cover">
        <h1 className="slide-cover-title animate-slide-in">
          2026 전략 방향
        </h1>
        <div className="slide-cover-divider animate-fade-in stagger-2" />
        <p className="slide-cover-subtitle animate-slide-in stagger-3">
          비즈니스 트랙 분석 및 오픈소스 라이선스 전략
        </p>
        <p className="slide-cover-meta animate-fade-in stagger-4" style={{ marginTop: 48 }}>
          2026년 1월
        </p>
      </div>
    </SlideLayout>
  );
}
