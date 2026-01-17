import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide4() {
  return (
    <SlideLayout currentPage={4} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Part 2: 요구사항 정의</div>
        <h2 className="slide-header animate-slide-in stagger-1">무엇을 해야 하는가?</h2>
        <p className="slide-subheader animate-slide-in stagger-2">필수 vs 선택</p>

        <div className="animate-slide-in stagger-3">
          <div className="slide-card slide-card-highlight mb-6">
            <table className="slide-table">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>기능</th>
                  <th>근거</th>
                  <th>우선순위</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="slide-badge slide-badge-danger">필수</span>
                  </td>
                  <td className="font-semibold">PDF/UA-1</td>
                  <td>법적 의무 (장차법)</td>
                  <td className="cell-highlight">1</td>
                </tr>
                <tr>
                  <td>
                    <span className="slide-badge slide-badge-primary">선택</span>
                  </td>
                  <td>PDF/UA-2</td>
                  <td>현재 법규 요구 없음</td>
                  <td className="text-[var(--slide-text-muted)]">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 animate-slide-in stagger-4">
          <div className="slide-card">
            <h4 className="text-sm font-semibold text-[var(--slide-accent-secondary)] mb-3">PDF/UA-2 현황</h4>
            <ul className="slide-list text-sm">
              <li>2024년 3월 발표된 신규 표준</li>
              <li>현재 어떤 법규도 명시적으로 요구하지 않음</li>
            </ul>
          </div>
          <div className="slide-card">
            <h4 className="text-sm font-semibold text-[var(--slide-accent-tertiary)] mb-3">TTA (한국정보통신기술협회) 표준 (2025.04)</h4>
            <ul className="slide-list text-sm">
              <li>PDF/UA-1 (유지된 부분) + PDF/UA-2 중 구현 가능 요소</li>
              <li>법적 강제성: <span className="cell-warning">없음</span> (권장 가이드라인)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 animate-slide-in stagger-5">
          <div className="slide-card slide-card-success">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-[var(--slide-accent-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div className="font-semibold text-[var(--slide-text-primary)]">현 시점 권장</div>
                <div className="text-sm text-[var(--slide-text-secondary)]">
                  PDF/UA-1 100% 준수 필수, TTA 가이드라인의 PDF/UA-2 요소는 SDK 지원 범위 내에서 점진적 대응
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
