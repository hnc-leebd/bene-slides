import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';

const TOTAL_PAGES = 20;

export default function Slide17() {
  return (
    <SlideLayout currentPage={17} totalPages={TOTAL_PAGES} track={3}>
      <div className="slide-section-divider">
        <div className="section-number track-3 animate-scale-in">
          03
        </div>
        <h1 className="section-title animate-slide-in stagger-1">
          PDF → HTML<br />렌더링
        </h1>
        <p className="section-subtitle animate-slide-in stagger-2">
          SDK 사업화 전략
        </p>
        <div className="section-accent-bar track-3 animate-slide-in stagger-3" />
      </div>
    </SlideLayout>
  );
}
