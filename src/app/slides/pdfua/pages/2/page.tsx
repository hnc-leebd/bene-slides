import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide2() {
  return (
    <SlideLayout currentPage={2} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Part 1: 상황 인식</div>
        <h2 className="slide-header animate-slide-in stagger-1">현재 상황</h2>
        <p className="slide-subheader animate-slide-in stagger-2">문제 정의</p>

        <div className="animate-slide-in stagger-3">
          <div className="slide-quote">
            "한컴오피스 PDF Writer는 접근성(PDF/UA) 기능 요청에<br />
            <strong>100% 대응할 수 없는</strong> 상황입니다."
          </div>
        </div>

        <div className="mt-10 animate-slide-in stagger-4">
          <ul className="slide-list">
            <li>레거시 PDF 엔진이 PDF/UA 태깅 구조를 지원하지 않음</li>
            <li>TTA PDF 접근성 가이드라인 제정 (2025.06) - 저작 도구 품질인증 기준</li>
            <li>글로벌 확장 시 EU EAA / US 508 준수 필수 - PDF/UA가 사실상 표준</li>
          </ul>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 animate-slide-in stagger-5">
          <div className="slide-card slide-card-danger">
            <div className="text-sm text-[var(--slide-text-tertiary)] mb-1">고객 요청 대응</div>
            <div className="text-2xl font-bold text-[var(--slide-accent-danger)]">0%</div>
          </div>
          <div className="slide-card slide-card-warning">
            <div className="text-sm text-[var(--slide-text-tertiary)] mb-1">TTA 표준</div>
            <div className="text-2xl font-bold text-[var(--slide-accent-warning)]">2025.06</div>
          </div>
          <div className="slide-card slide-card-warning">
            <div className="text-sm text-[var(--slide-text-tertiary)] mb-1">글로벌 확장</div>
            <div className="text-2xl font-bold text-[var(--slide-accent-warning)]">EU/US</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
