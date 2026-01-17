import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide10() {
  return (
    <SlideLayout currentPage={10} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Part 4: Trade-off 분석</div>
        <h2 className="slide-header animate-slide-in stagger-1">자체 개발 시 예상되는 리스크</h2>
        <p className="slide-subheader animate-slide-in stagger-2">레거시 업그레이드가 &quot;안전한 길&quot;이 아닌 이유</p>

        <div className="grid grid-cols-3 gap-6 animate-slide-in stagger-3">
          <div className="slide-card" style={{ borderTop: '3px solid var(--slide-accent-primary)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--slide-accent-primary)] bg-opacity-15 flex items-center justify-center text-[var(--slide-accent-primary)] font-bold text-sm">1</div>
              <h3 className="text-base font-semibold text-[var(--slide-text-primary)]">통합 공수는 동일</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>한글팀 Export 로직은 어떤 옵션이든 필요</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>Structure 생성, Tagging 코드 개발</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>SDK든 자체개발이든 이 공수는 동일</span>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-[var(--slide-border-subtle)]">
              <span className="text-xs text-[var(--slide-text-muted)]">예상 소요:</span>
              <span className="text-sm font-semibold text-[var(--slide-accent-tertiary)] ml-2">모듈 1개월, 개발 4개월, 검증 2개월</span>
            </div>
          </div>

          <div className="slide-card" style={{ borderTop: '3px solid var(--slide-accent-primary)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--slide-accent-primary)] bg-opacity-15 flex items-center justify-center text-[var(--slide-accent-primary)] font-bold text-sm">2</div>
              <h3 className="text-base font-semibold text-[var(--slide-text-primary)]">기술적 난이도</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>PDF/A-1b → PDF/UA-1 구조적 변경</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>Structure Tree, MCID 태깅 신규 구현</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>접근성 메타데이터 전면 추가</span>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-[var(--slide-border-subtle)]">
              <span className="text-xs text-[var(--slide-text-muted)]">예상 소요:</span>
              <span className="text-sm font-semibold text-[var(--slide-accent-tertiary)] ml-2">개발 3개월, 검증 2개월</span>
            </div>
          </div>

          <div className="slide-card" style={{ borderTop: '3px solid var(--slide-accent-primary)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--slide-accent-primary)] bg-opacity-15 flex items-center justify-center text-[var(--slide-accent-primary)] font-bold text-sm">3</div>
              <h3 className="text-base font-semibold text-[var(--slide-text-primary)]">일정 불확실성</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>표준 준수 검증까지 반복 개발 필요</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>100% 준수 달성 시점 예측 어려움</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>규제 시행일까지 완료 보장 불가</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 animate-slide-in stagger-4">
          <div className="slide-card" style={{ borderLeft: '3px solid var(--slide-accent-tertiary)' }}>
            <h4 className="text-sm font-semibold text-[var(--slide-accent-tertiary)] mb-4">SDK 도입의 매력: 부가 기능</h4>
            <table className="slide-table">
              <thead>
                <tr>
                  <th>기능</th>
                  <th>Apryse</th>
                  <th>Foxit</th>
                  <th>자체 개발 시 추가 기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-sm font-semibold">PDF/UA 100% 준수</td>
                  <td className="text-center text-[var(--slide-accent-tertiary)]">✓</td>
                  <td className="text-center text-[var(--slide-text-muted)]">92.5%</td>
                  <td className="text-[var(--slide-accent-primary)] font-semibold">9개월+</td>
                </tr>
                <tr>
                  <td className="text-sm font-semibold">표준 변경 시 업데이트</td>
                  <td className="text-center text-[var(--slide-accent-tertiary)]">✓</td>
                  <td className="text-center text-[var(--slide-accent-tertiary)]">✓</td>
                  <td className="text-[var(--slide-accent-primary)] font-semibold">지속 발생</td>
                </tr>
                <tr>
                  <td className="text-sm">OTF 폰트</td>
                  <td className="text-center text-[var(--slide-accent-tertiary)]">✓</td>
                  <td className="text-center text-[var(--slide-accent-tertiary)]">✓</td>
                  <td className="text-[var(--slide-accent-primary)] font-semibold">2-3개월</td>
                </tr>
                <tr>
                  <td className="text-sm">PDF/A-3</td>
                  <td className="text-center text-[var(--slide-accent-tertiary)]">✓</td>
                  <td className="text-center text-[var(--slide-accent-tertiary)]">✓</td>
                  <td className="text-[var(--slide-accent-primary)] font-semibold">2개월</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
