import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide5() {
  return (
    <SlideLayout currentPage={5} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Part 2: 요구사항 정의</div>
        <h2 className="slide-header animate-slide-in stagger-1">레거시 PDF Writer 현황</h2>
        <p className="slide-subheader animate-slide-in stagger-2">현재 레거시 상태</p>

        <div className="slide-columns animate-slide-in stagger-3">
          <div className="slide-card slide-card-success">
            <h3 className="text-lg font-semibold text-[var(--slide-accent-success)] mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              지원
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[var(--slide-text-primary)]">
                <span className="text-[var(--slide-accent-success)]">✓</span>
                PDF 1.4
              </li>
              <li className="flex items-center gap-3 text-[var(--slide-text-primary)]">
                <span className="text-[var(--slide-accent-success)]">✓</span>
                PDF/A-1b
              </li>
            </ul>
          </div>

          <div className="slide-card slide-card-danger">
            <h3 className="text-lg font-semibold text-[var(--slide-accent-danger)] mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              미지원
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[var(--slide-text-primary)]">
                <span className="text-[var(--slide-accent-danger)]">✗</span>
                <span className="font-semibold">PDF/UA-1, PDF/UA-2</span>
                <span className="slide-badge slide-badge-danger text-xs">접근성</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-accent-danger)]">✗</span>
                PDF/A-3, PDF/X-4
              </li>
              <li className="flex items-center gap-3 text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-accent-danger)]">✗</span>
                OTF 폰트 임베딩
              </li>
              <li className="flex items-center gap-3 text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-accent-danger)]">✗</span>
                투명도 (Alpha Channel)
              </li>
              <li className="flex items-center gap-3 text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-accent-danger)]">✗</span>
                이미지 압축 최적화
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 animate-slide-in stagger-4">
          <div className="slide-card">
            <h4 className="text-sm font-semibold text-[var(--slide-text-secondary)] mb-3">핵심 포인트</h4>
            <ul className="slide-list">
              <li>PDF/UA 지원을 위해서는 <span className="cell-highlight">Structure Tree(태그 구조)</span> 생성 기능 필요</li>
              <li>현재 엔진 구조상 부분 수정이 아닌 <span className="cell-warning">상당한 개선 필요</span></li>
              <li>접근성 메타데이터 삽입, 태그 구조 생성 등 근본적 변경 필요</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
