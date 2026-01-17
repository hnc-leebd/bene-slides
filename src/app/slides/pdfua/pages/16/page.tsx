import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide16() {
  return (
    <SlideLayout currentPage={16} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Implementation Guide</div>
        <h2 className="slide-header animate-slide-in stagger-1">기본 구현 흐름</h2>
        <p className="slide-subheader animate-slide-in stagger-2">5단계 PDF/UA 생성 프로세스</p>

        {/* Code Flow with Visual Steps */}
        <div className="animate-slide-in stagger-3">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'var(--slide-bg-secondary)',
              border: '1px solid var(--slide-border-subtle)',
            }}
          >
            {/* Code Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--slide-border-subtle)]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27ca40]"></div>
              </div>
              <span className="text-xs font-mono text-[var(--slide-text-muted)] ml-2">main.cpp</span>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-[12px] space-y-5" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(103,232,249,0.15)] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#67e8f9]">1</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#67e8f9] mb-2 uppercase tracking-wider font-semibold">초기화</div>
                  <pre className="text-[#e4e4e7] leading-[1.7]"><span className="text-[#4ade80]">DocumentBuilder</span> docBuilder;{'\n'}<span className="text-[#4ade80]">StructureTreeBuilder</span> structBuilder(docBuilder.<span className="text-[#67e8f9]">getDocument</span>());</pre>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(255,255,255,0.1)]"></div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(103,232,249,0.15)] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#67e8f9]">2</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#67e8f9] mb-2 uppercase tracking-wider font-semibold">페이지 &amp; 구조 트리 생성</div>
                  <pre className="text-[#e4e4e7] leading-[1.7]">docBuilder.<span className="text-[#67e8f9]">createPage</span>(<span className="text-[#fb7185]">612</span>, <span className="text-[#fb7185]">792</span>);{'\n'}structBuilder.<span className="text-[#67e8f9]">initialize</span>();         <span className="text-[#6b7280] italic">// 구조 트리 루트 생성</span>{'\n'}structBuilder.<span className="text-[#67e8f9]">setLanguage</span>(<span className="text-[#fbbf24]">&quot;ko-KR&quot;</span>);  <span className="text-[#6b7280] italic">// 문서 언어 설정</span></pre>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(255,255,255,0.1)]"></div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(251,191,36,0.2)] flex items-center justify-center border border-[rgba(251,191,36,0.3)]">
                  <span className="text-xs font-bold text-[#fbbf24]">3</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-[#fbbf24] uppercase tracking-wider font-semibold">콘텐츠 추가</span>
                    <span className="px-2 py-0.5 rounded text-xs bg-[rgba(251,191,36,0.2)] text-[#fbbf24] font-medium border border-[rgba(251,191,36,0.3)]">MCID 연결이 핵심!</span>
                  </div>
                  <pre className="text-[#e4e4e7] leading-[1.7]"><span className="text-[#c084fc] font-semibold">int</span> mcid = structBuilder.<span className="text-[#67e8f9]">addParagraph</span>(page);  <span className="text-[#6b7280] italic">// 구조 요소 → MCID</span>{'\n'}docBuilder.<span className="text-[#67e8f9]">addTextWithTag</span>(text, bbox, mcid);   <span className="text-[#6b7280] italic">// 콘텐츠에 MCID 연결</span></pre>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(255,255,255,0.1)]"></div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(103,232,249,0.15)] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#67e8f9]">4</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#67e8f9] mb-2 uppercase tracking-wider font-semibold">마무리</div>
                  <pre className="text-[#e4e4e7] leading-[1.7]">structBuilder.<span className="text-[#67e8f9]">finalize</span>();              <span className="text-[#6b7280] italic">// 구조 트리 완성</span>{'\n'}doc.GetDocInfo().<span className="text-[#67e8f9]">SetTitle</span>(<span className="text-[#fbbf24]">&quot;문서 제목&quot;</span>);</pre>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(255,255,255,0.1)]"></div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(103,232,249,0.15)] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#67e8f9]">5</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#67e8f9] mb-2 uppercase tracking-wider font-semibold">저장</div>
                  <pre className="text-[#e4e4e7] leading-[1.7]">docBuilder.<span className="text-[#67e8f9]">save</span>(<span className="text-[#fbbf24]">&quot;output.pdf&quot;</span>);</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Summary */}
        <div className="mt-6 animate-slide-in stagger-4">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {['초기화', '페이지 생성', 'MCID 연결', '마무리', '저장'].map((step, i) => (
              <div key={step} className="flex items-center">
                <span
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                    i === 2
                      ? 'bg-[rgba(251,191,36,0.2)] text-[#fbbf24] border border-[rgba(251,191,36,0.3)]'
                      : 'bg-[rgba(103,232,249,0.1)] text-[#67e8f9]'
                  }`}
                >
                  {step}
                </span>
                {i < 4 && (
                  <svg className="w-4 h-4 mx-1 text-[var(--slide-text-muted)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 17l5-5-5-5v10z"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
