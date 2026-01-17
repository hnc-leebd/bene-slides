import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide9() {
  return (
    <SlideLayout currentPage={9} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Part 4: Trade-off 분석</div>
        <h2 className="slide-header animate-slide-in stagger-1">외부 SDK 도입 시 우려되는 리스크</h2>
        <p className="slide-subheader animate-slide-in stagger-2">SDK 도입이 &quot;쉬운 길&quot;이 아닌 이유</p>

        <div className="grid grid-cols-3 gap-6 animate-slide-in stagger-3">
          <div className="slide-card" style={{ borderTop: '3px solid var(--slide-accent-tertiary)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--slide-accent-tertiary)] bg-opacity-15 flex items-center justify-center text-[var(--slide-accent-tertiary)] font-bold text-sm">1</div>
              <h3 className="text-base font-semibold text-[var(--slide-text-primary)]">통합 공수</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>기존 한컴오피스 렌더링 파이프라인과 연결</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>폰트/레이아웃/스타일 매핑</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>예외 처리, 에러 핸들링 전부 새로 설계</span>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-[var(--slide-border-subtle)]">
              <span className="text-xs text-[var(--slide-text-muted)]">예상 소요:</span>
              <span className="text-sm font-semibold text-[var(--slide-accent-tertiary)] ml-2">모듈 1개월, 개발 4개월, 검증 2개월</span>
            </div>
          </div>

          <div className="slide-card" style={{ borderTop: '3px solid var(--slide-accent-tertiary)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--slide-accent-tertiary)] bg-opacity-15 flex items-center justify-center text-[var(--slide-accent-tertiary)] font-bold text-sm">2</div>
              <h3 className="text-base font-semibold text-[var(--slide-text-primary)]">장기 리스크</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>외부 의존성 = 통제 불가 영역 증가</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>라이선스 비용 지속 발생</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>문제 생기면 벤더 대응 기다려야 함</span>
              </li>
            </ul>
          </div>

          <div className="slide-card" style={{ borderTop: '3px solid var(--slide-accent-tertiary)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--slide-accent-tertiary)] bg-opacity-15 flex items-center justify-center text-[var(--slide-accent-tertiary)] font-bold text-sm">3</div>
              <h3 className="text-base font-semibold text-[var(--slide-text-primary)]">내부 역량</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>PDF/UA 기술 내재화 기회 상실</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--slide-text-secondary)]">
                <span className="text-[var(--slide-text-muted)] mt-0.5">•</span>
                <span>장기적 기술 독립성 약화</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 animate-slide-in stagger-3">
          <div className="slide-card" style={{ borderLeft: '3px solid var(--slide-accent-primary)' }}>
            <h4 className="text-sm font-semibold text-[var(--slide-accent-primary)] mb-4">레거시 업그레이드의 매력</h4>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-[var(--slide-accent-primary)]">✓</span>
                <span className="text-sm text-[var(--slide-text-secondary)]">기존 인터페이스 유지, 호출부 변경 최소화</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--slide-accent-primary)]">✓</span>
                <span className="text-sm text-[var(--slide-text-secondary)]">이미 검증된 코드 위에 기능 추가</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--slide-accent-primary)]">✓</span>
                <span className="text-sm text-[var(--slide-text-secondary)]">기술 내재화, 책임 소재 명확</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
