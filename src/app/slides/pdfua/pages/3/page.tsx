import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide3() {
  return (
    <SlideLayout currentPage={3} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Part 1: 상황 인식</div>
        <h2 className="slide-header animate-slide-in stagger-1">규제 타임라인</h2>
        <p className="slide-subheader animate-slide-in stagger-2">국내외 접근성 법규 현황</p>

        <div className="animate-slide-in stagger-3">
          <div className="slide-card">
            <table className="slide-table">
              <thead>
                <tr>
                  <th>법규/표준</th>
                  <th>시행일</th>
                  <th>적용 대상</th>
                  <th>제재</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-(--slide-accent)/10">
                  <td className="font-semibold">TTA PDF 접근성 가이드라인</td>
                  <td className="cell-warning">2025.06.27</td>
                  <td>PDF 저작 도구</td>
                  <td>품질인증 기준</td>
                </tr>
                <tr className="bg-(--slide-accent)/10">
                  <td className="font-semibold">KS 국가표준 (제안 중)</td>
                  <td className="cell-warning">2025~</td>
                  <td>PDF 접근성 저작 지침</td>
                  <td>국가표준 인증</td>
                </tr>
                <tr className="bg-(--slide-accent)/10">
                  <td className="font-semibold">EU EAA</td>
                  <td className="cell-warning">2025.06.28</td>
                  <td>디지털 제품/서비스 (SW 포함)</td>
                  <td className="cell-danger">국가별 상이 (최대 €3M)</td>
                </tr>
                <tr className="bg-(--slide-accent)/10">
                  <td className="font-semibold">US Section 508</td>
                  <td>현행</td>
                  <td>연방 ICT 조달 (SW 포함)</td>
                  <td className="cell-danger">입찰 배제/계약 해지</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 animate-slide-in stagger-4">
          <div className="slide-card">
            <h4 className="text-sm font-semibold text-[var(--slide-text-secondary)] mb-3">국내</h4>
            <ul className="slide-list">
              <li><span className="cell-warning">TTA 표준</span> PDF 접근성 가이드라인 제정 (2025.06)</li>
              <li><span className="cell-warning">KS 국가표준</span> 제안 진행 중</li>
              <li>PDF/UA 기반 저작 도구 품질인증 기준</li>
            </ul>
          </div>
          <div className="slide-card">
            <h4 className="text-sm font-semibold text-[var(--slide-text-secondary)] mb-3">해외</h4>
            <ul className="slide-list">
              <li><span className="cell-warning">EU EAA</span> 데스크탑 SW 포함, 2025.06 시행</li>
              <li><span className="cell-warning">US 508</span> 연방 조달 시 필수</li>
              <li>PDF/UA 준수가 글로벌 표준으로 부상</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
