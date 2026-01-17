import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';

const TOTAL_PAGES = 24;

export default function Slide4() {
  return (
    <SlideLayout currentPage={4} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-section-divider">
        <div className="section-number track-1 animate-scale-in">
          01
        </div>
        <h1 className="section-title animate-slide-in stagger-1">
          문서 파서<br />포맷 확장
        </h1>
        <p className="section-subtitle animate-slide-in stagger-2">
          PDF, 오피스, 이미지/OCR
        </p>
        <div className="section-accent-bar track-1 animate-slide-in stagger-3" />
      </div>
    </SlideLayout>
  );
}
