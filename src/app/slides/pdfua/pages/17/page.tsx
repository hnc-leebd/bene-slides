import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide17() {
  return (
    <SlideLayout currentPage={17} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Implementation Guide</div>
        <h2 className="slide-header animate-slide-in stagger-1">텍스트 추가 예제</h2>
        <p className="slide-subheader animate-slide-in stagger-2">addTextWithTag() 함수 구현</p>

        <div className="grid grid-cols-3 gap-6 animate-slide-in stagger-3">
          {/* Code Block */}
          <div className="col-span-2">
            <div
              className="rounded-2xl overflow-hidden h-full"
              style={{
                background: 'var(--slide-bg-secondary)',
                border: '1px solid var(--slide-border-subtle)',
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--slide-border-subtle)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]"></div>
                </div>
                <span className="text-xs font-mono text-[var(--slide-text-muted)] ml-2">document_builder.cpp</span>
              </div>

              {/* Code */}
              <div className="p-5 font-mono text-xs leading-[1.7] overflow-x-auto" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                <pre className="text-[#e4e4e7]"><span className="text-[#c084fc] font-semibold">void</span> <span className="text-[#67e8f9]">addTextWithTag</span>(<span className="text-[#f472b6]">const</span> std::string&amp; text, <span className="text-[#f472b6]">const</span> BBox&amp; bbox, <span className="text-[#c084fc] font-semibold">int</span> mcid) {'{\n'}
{'\n'}    <span className="text-[#6b7280] italic">// 1. Marked Content 시작 (MCID 연결)</span>{'\n'}    <span className="text-[#4ade80]">Element</span> mcBegin = builder.<span className="text-[#67e8f9]">CreateMarkedContentBeginInlineProperties</span>(<span className="text-[#fbbf24]">&quot;P&quot;</span>);{'\n'}    mcBegin.GetMCPropertyDict().<span className="text-[#67e8f9]">PutNumber</span>(<span className="text-[#fbbf24]">&quot;MCID&quot;</span>, mcid);{'\n'}    writer.<span className="text-[#67e8f9]">WriteElement</span>(mcBegin);
{'\n'}
{'\n'}    <span className="text-[#6b7280] italic">// 2. 텍스트 렌더링</span>{'\n'}    <span className="text-[#4ade80]">Element</span> textBegin = builder.<span className="text-[#67e8f9]">CreateTextBegin</span>(font, <span className="text-[#fb7185]">12</span>);{'\n'}    writer.<span className="text-[#67e8f9]">WriteElement</span>(textBegin);
{'\n'}
{'\n'}    <span className="text-[#4ade80]">Element</span> textRun = builder.<span className="text-[#67e8f9]">CreateUnicodeTextRun</span>(text);{'\n'}    textRun.<span className="text-[#67e8f9]">SetTextMatrix</span>(<span className="text-[#fb7185]">1</span>, <span className="text-[#fb7185]">0</span>, <span className="text-[#fb7185]">0</span>, <span className="text-[#fb7185]">1</span>, x, y);{'\n'}    writer.<span className="text-[#67e8f9]">WriteElement</span>(textRun);
{'\n'}
{'\n'}    writer.<span className="text-[#67e8f9]">WriteElement</span>(builder.<span className="text-[#67e8f9]">CreateTextEnd</span>());
{'\n'}
{'\n'}    <span className="text-[#6b7280] italic">// 3. Marked Content 종료</span>{'\n'}    writer.<span className="text-[#67e8f9]">WriteElement</span>(builder.<span className="text-[#67e8f9]">CreateMarkedContentEnd</span>());{'\n'}{'}'}</pre>
              </div>
            </div>
          </div>

          {/* Visual Flow */}
          <div className="flex flex-col gap-4">
            {/* BMC -> Content -> EMC Flow */}
            <div
              className="rounded-xl p-5 flex-1 flex flex-col"
              style={{
                background: 'linear-gradient(180deg, rgba(0, 212, 255, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
              }}
            >
              <h4 className="text-xs font-mono text-[var(--slide-accent-primary)] uppercase tracking-wider text-center">구조</h4>

              <div className="space-y-3 flex-1 flex flex-col justify-center">
                {/* BMC */}
                <div
                  className="rounded-lg p-3 text-center"
                  style={{ background: 'rgba(0, 212, 255, 0.15)', border: '1px solid rgba(0, 212, 255, 0.3)' }}
                >
                  <span className="font-mono text-sm text-[var(--slide-accent-primary)]">BMC</span>
                  <div className="text-xs text-[var(--slide-text-muted)] mt-1">Marked Content Begin</div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-[var(--slide-text-muted)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12l-6 6z"/>
                  </svg>
                </div>

                {/* Content */}
                <div
                  className="rounded-lg p-3 text-center"
                  style={{ background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)' }}
                >
                  <span className="font-mono text-sm text-[var(--slide-accent-tertiary)]">콘텐츠</span>
                  <div className="text-xs text-[var(--slide-text-muted)] mt-1">Text / Image</div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-[var(--slide-text-muted)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12l-6 6z"/>
                  </svg>
                </div>

                {/* EMC */}
                <div
                  className="rounded-lg p-3 text-center"
                  style={{ background: 'rgba(0, 212, 255, 0.15)', border: '1px solid rgba(0, 212, 255, 0.3)' }}
                >
                  <span className="font-mono text-sm text-[var(--slide-accent-primary)]">EMC</span>
                  <div className="text-xs text-[var(--slide-text-muted)] mt-1">Marked Content End</div>
                </div>
              </div>
            </div>

            {/* Key Point */}
            <div
              className="rounded-xl p-4"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-[var(--slide-accent-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-semibold text-[var(--slide-accent-success)]">포인트</span>
              </div>
              <p className="text-sm text-[var(--slide-text-secondary)]">
                BMC → 콘텐츠 → EMC 구조로 감싸기
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
