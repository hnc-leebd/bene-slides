import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';

const TOTAL_PAGES = 20;

export default function Slide10() {
  return (
    <SlideLayout currentPage={10} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-section-divider">
        <div className="section-number track-2 animate-scale-in">
          02
        </div>
        <h1 className="section-title animate-slide-in stagger-1">
          AI Auto-Tagging 및<br />Tagged PDF 후처리
        </h1>
        <p className="section-subtitle animate-slide-in stagger-2">
          PDF/UA 접근성 솔루션
        </p>
        <div className="section-accent-bar track-2 animate-slide-in stagger-3" />
      </div>
    </SlideLayout>
  );
}
