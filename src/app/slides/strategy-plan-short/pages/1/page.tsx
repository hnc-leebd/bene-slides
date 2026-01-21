import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';

const TOTAL_PAGES = 18;

export default function Slide1() {
  return (
    <SlideLayout currentPage={1} totalPages={TOTAL_PAGES}>
      <div className="slide-cover">
        <h1 className="slide-cover-title animate-slide-in">
          오픈데이터로더 기술 검토
        </h1>
        <div className="slide-cover-divider animate-fade-in stagger-2" />
        <p className="slide-cover-subtitle animate-slide-in stagger-3">
          기술 분석 및 오픈소스 라이선스 전략
        </p>
        <p className="slide-cover-meta animate-fade-in stagger-4" style={{ marginTop: 48 }}>
          2026년 1월
        </p>
      </div>
    </SlideLayout>
  );
}
