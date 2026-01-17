import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide19() {
  return (
    <SlideLayout currentPage={19} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Implementation Guide</div>
        <h2 className="slide-header animate-slide-in stagger-1">좌표 변환 & 실무 팁</h2>
        <p className="slide-subheader animate-slide-in stagger-2">웹 → PDF 좌표계 변환 및 주의사항</p>

        <div className="grid grid-cols-2 gap-10 animate-slide-in stagger-3">
          {/* Coordinate System - Left Panel */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'var(--slide-bg-secondary)',
              border: '1px solid var(--slide-border-subtle)',
            }}
          >
            <h3 className="text-lg font-bold text-[var(--slide-text-primary)] mb-6 tracking-tight">
              좌표계 비교
            </h3>

            <div className="flex gap-5 mb-6">
              {/* Web Canvas */}
              <div className="flex-1">
                <div
                  className="relative w-full aspect-square rounded-lg overflow-hidden"
                  style={{
                    background: 'var(--slide-bg-tertiary)',
                    border: '1px solid var(--slide-border-subtle)'
                  }}
                >
                  {/* Origin label */}
                  <div
                    className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[10px] font-mono"
                    style={{ background: 'var(--slide-bg-secondary)' }}
                  >
                    <span className="text-[var(--slide-text-primary)]">(0,0)</span>
                  </div>

                  {/* X axis */}
                  <div className="absolute top-2 left-14 flex items-center">
                    <div className="w-10 h-px bg-[var(--slide-text-muted)]"></div>
                    <span className="text-[10px] font-mono text-[var(--slide-text-muted)] ml-1">X</span>
                  </div>

                  {/* Y axis */}
                  <div className="absolute top-8 left-4 flex flex-col items-center">
                    <div className="w-px h-10 bg-[var(--slide-text-muted)]"></div>
                    <span className="text-[10px] font-mono text-[var(--slide-text-muted)] mt-1">Y</span>
                  </div>

                  {/* Direction indicator */}
                  <div className="absolute bottom-2 right-2 text-[10px] text-[var(--slide-text-muted)]">↘</div>
                </div>
                <div className="text-center mt-3">
                  <div className="text-sm font-medium text-[var(--slide-text-primary)]">Web Canvas</div>
                  <div className="text-xs text-[var(--slide-text-muted)] mt-0.5">좌상단 원점, Y↓</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center px-2">
                <svg className="w-6 h-6 text-[var(--slide-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* PDF */}
              <div className="flex-1">
                <div
                  className="relative w-full aspect-square rounded-lg overflow-hidden"
                  style={{
                    background: 'var(--slide-bg-tertiary)',
                    border: '1px solid var(--slide-border-subtle)'
                  }}
                >
                  {/* Origin label */}
                  <div
                    className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded text-[10px] font-mono"
                    style={{ background: 'var(--slide-bg-secondary)' }}
                  >
                    <span className="text-[var(--slide-text-primary)]">(0,0)</span>
                  </div>

                  {/* X axis */}
                  <div className="absolute bottom-2 left-14 flex items-center">
                    <div className="w-10 h-px bg-[var(--slide-text-muted)]"></div>
                    <span className="text-[10px] font-mono text-[var(--slide-text-muted)] ml-1">X</span>
                  </div>

                  {/* Y axis */}
                  <div className="absolute bottom-8 left-4 flex flex-col-reverse items-center">
                    <div className="w-px h-10 bg-[var(--slide-text-muted)]"></div>
                    <span className="text-[10px] font-mono text-[var(--slide-text-muted)] mb-1">Y</span>
                  </div>

                  {/* Direction indicator */}
                  <div className="absolute top-2 right-2 text-[10px] text-[var(--slide-text-muted)]">↗</div>
                </div>
                <div className="text-center mt-3">
                  <div className="text-sm font-medium text-[var(--slide-text-primary)]">PDF</div>
                  <div className="text-xs text-[var(--slide-text-muted)] mt-0.5">좌하단 원점, Y↑</div>
                </div>
              </div>
            </div>

            {/* Formula */}
            <div
              className="rounded-lg p-4"
              style={{
                background: 'var(--slide-bg-tertiary)',
                border: '1px solid var(--slide-border-subtle)'
              }}
            >
              <div className="text-xs text-[var(--slide-text-muted)] mb-2 uppercase tracking-wider">변환 공식</div>
              <div className="font-mono text-sm text-[var(--slide-text-primary)]">
                pdfY = pageHeight - canvasY - elementHeight
              </div>
            </div>
          </div>

          {/* Practical Tips - Right Panel */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[var(--slide-text-primary)] mb-4 tracking-tight">
              실무 체크리스트
            </h3>

            {[
              {
                num: '01',
                title: 'CID 폰트 사용',
                desc: 'Unicode/한글 지원을 위해 필수'
              },
              {
                num: '02',
                title: 'JPEG 압축 품질 85',
                desc: '파일 크기와 품질의 최적 균형점'
              },
              {
                num: '03',
                title: '예외 처리 필수',
                desc: 'pdftron::Common::Exception catch'
              },
              {
                num: '04',
                title: 'veraPDF 검증',
                desc: 'PDF/UA 규격 준수 여부 확인'
              },
            ].map((tip, index) => (
              <div
                key={tip.num}
                className="rounded-lg p-4 flex items-start gap-4 transition-all duration-200 hover:translate-x-1"
                style={{
                  background: 'var(--slide-bg-secondary)',
                  border: '1px solid var(--slide-border-subtle)',
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center font-mono text-xs"
                  style={{
                    background: 'var(--slide-bg-tertiary)',
                    color: 'var(--slide-text-muted)',
                  }}
                >
                  {tip.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-[var(--slide-text-primary)] text-sm">{tip.title}</h4>
                  <p className="text-xs text-[var(--slide-text-muted)] mt-0.5 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
