import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide12() {
  return (
    <SlideLayout currentPage={12} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Part 5: 의사결정</div>
        <h2 className="slide-header animate-slide-in stagger-1">Next Steps</h2>
        <p className="slide-subheader animate-slide-in stagger-2">다음 단계 체크리스트</p>

        <div className="animate-slide-in stagger-3">
          <div className="slide-card slide-card-highlight">
            <table className="slide-table">
              <thead>
                <tr>
                  <th className="w-24">담당</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="slide-badge" style={{ background: 'rgba(56, 189, 248, 0.15)', color: 'rgb(56, 189, 248)' }}>개발</span></td>
                  <td className="text-[var(--slide-text-primary)]">
                    <div className="font-semibold">레거시 업그레이드 기술 검토</div>
                    <div className="text-xs text-[var(--slide-text-tertiary)] mt-1">PDF/UA 구현 가능성</div>
                  </td>
                </tr>
                <tr>
                  <td><span className="slide-badge" style={{ background: 'rgba(56, 189, 248, 0.15)', color: 'rgb(56, 189, 248)' }}>개발</span></td>
                  <td className="text-[var(--slide-text-primary)]">
                    <div className="font-semibold">SDK 도입 기술 검토</div>
                    <div className="text-xs text-[var(--slide-text-tertiary)] mt-1">통합 복잡도, 파이프라인 연결</div>
                  </td>
                </tr>
                <tr>
                  <td><span className="slide-badge" style={{ background: 'rgba(129, 140, 248, 0.15)', color: 'rgb(129, 140, 248)' }}>구매</span></td>
                  <td className="text-[var(--slide-text-primary)]">
                    <div className="font-semibold">SDK 업체 견적 요청</div>
                    <div className="text-xs text-[var(--slide-text-tertiary)] mt-1">Apryse, Foxit</div>
                  </td>
                </tr>
                <tr>
                  <td><span className="slide-badge" style={{ background: 'rgba(244, 114, 182, 0.15)', color: 'rgb(244, 114, 182)' }}>법무</span></td>
                  <td className="text-[var(--slide-text-primary)]">
                    <div className="font-semibold">법무 리스크 검토</div>
                    <div className="text-xs text-[var(--slide-text-tertiary)] mt-1">장차법 제재 수준</div>
                  </td>
                </tr>
                <tr>
                  <td><span className="slide-badge" style={{ background: 'rgba(52, 211, 153, 0.15)', color: 'rgb(52, 211, 153)' }}>재무</span></td>
                  <td className="text-[var(--slide-text-primary)]">
                    <div className="font-semibold">예산 확보 가능성 검토</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 animate-slide-in stagger-4">
          <div className="slide-card" style={{ borderLeft: '3px solid var(--slide-accent-primary)' }}>
            <h4 className="text-sm font-semibold text-[var(--slide-accent-primary)] mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              의사결정
            </h4>
            <div className="text-[var(--slide-text-primary)] font-semibold">
              기술 내재화 영역 결정 (PDF vs AI)
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
