import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide1() {
  return (
    <SlideLayout currentPage={1} totalPages={20}>
      <div className="slide-cover">
        <div className="slide-section-label animate-fade-in">2026.01.13</div>
        <h1 className="slide-cover-title animate-slide-in stagger-1">
          PDF/UA 대응 방안 검토
        </h1>
        <p className="slide-cover-subtitle animate-slide-in stagger-2">
          레거시 PDF Writer 업그레이드 의사결정
        </p>
        <div className="slide-cover-meta animate-slide-in stagger-3">
          <span>발표일: 2026년 1월 13일</span>
        </div>
      </div>
    </SlideLayout>
  );
}
