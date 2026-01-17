import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide18() {
  return (
    <SlideLayout currentPage={18} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Implementation Guide</div>
        <h2 className="slide-header animate-slide-in stagger-1">이미지 추가 예제</h2>
        <p className="slide-subheader animate-slide-in stagger-2">Alt 텍스트 필수 - PDF/UA 핵심 요구사항</p>

        <div className="grid grid-cols-2 gap-6 animate-slide-in stagger-3">
          {/* StructureTreeBuilder */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'var(--slide-bg-secondary)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
            }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--slide-border-subtle)]" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
              <div className="w-2 h-2 rounded-full bg-[var(--slide-accent-success)]"></div>
              <span className="text-xs font-mono text-[var(--slide-accent-success)]">StructureTreeBuilder</span>
              <span className="text-xs text-[var(--slide-text-muted)] ml-auto">구조 요소 + Alt</span>
            </div>

            <div className="p-5 font-mono text-xs leading-[1.7]" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
              <pre className="text-[#e4e4e7]">{`\
`}<span className="text-[#6b7280] italic">// Figure 구조 요소를 생성하고 Alt 텍스트를 설정하는 함수</span>{`
`}<span className="text-[#6b7280] italic">// 반환값: 콘텐츠 스트림에서 사용할 MCID</span>{`
`}<span className="text-[#c084fc] font-semibold">int</span> <span className="text-[#67e8f9]">addFigure</span>{`(`}<span className="text-[#4ade80]">Page</span>{` page, `}<span className="text-[#f472b6]">const</span>{` std::string& altText) {

    `}<span className="text-[#6b7280] italic">// 1. Structure Tree에 Figure 요소 생성</span>{`
    `}<span className="text-[#4ade80]">SElement</span>{` figure = `}<span className="text-[#4ade80]">SElement</span>{`::`}<span className="text-[#67e8f9]">Create</span>{`(doc, `}<span className="text-[#fbbf24]">&quot;Figure&quot;</span>{`);

    `}<span className="text-[#6b7280] italic">// 2. Content Item 생성 → MCID 할당</span>{`
    `}<span className="text-[#c084fc] font-semibold">int</span>{` mcid = figure.`}<span className="text-[#67e8f9]">CreateContentItem</span>{`(doc, page, `}<span className="text-[#fb7185]">-1</span>{`);

    `}<span className="text-[#6b7280] italic">// 3. Alt 텍스트 설정 (PDF/UA 필수!)</span>{`
    `}<span className="text-[#4ade80]">Obj</span>{` figureObj = figure.`}<span className="text-[#67e8f9]">GetSDFObj</span>{`();
    figureObj.`}<span className="text-[#67e8f9]">PutString</span>{`(`}<span className="text-[#fbbf24]">&quot;Alt&quot;</span>{`, altText.c_str());

    `}<span className="text-[#f472b6]">return</span>{` mcid;  `}<span className="text-[#6b7280] italic">// DocumentBuilder에 전달</span>{`
}`}</pre>
            </div>

            {/* Alt Text Highlight */}
            <div className="px-5 pb-5">
              <div
                className="rounded-lg p-3 flex items-center gap-3"
                style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}
              >
                <span className="slide-badge slide-badge-warning text-xs">필수</span>
                <span className="text-sm text-[var(--slide-text-secondary)]">Alt 텍스트 없으면 검증 실패</span>
              </div>
            </div>
          </div>

          {/* DocumentBuilder */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'var(--slide-bg-secondary)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
            }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--slide-border-subtle)]" style={{ background: 'rgba(0, 212, 255, 0.1)' }}>
              <div className="w-2 h-2 rounded-full bg-[var(--slide-accent-primary)]"></div>
              <span className="text-xs font-mono text-[var(--slide-accent-primary)]">DocumentBuilder</span>
              <span className="text-xs text-[var(--slide-text-muted)] ml-auto">이미지 렌더링</span>
            </div>

            <div className="p-5 font-mono text-xs leading-[1.7]" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
              <pre className="text-[#e4e4e7]">{`\
`}<span className="text-[#6b7280] italic">// 이미지를 태그와 함께 콘텐츠 스트림에 추가</span>{`
`}<span className="text-[#c084fc] font-semibold">void</span> <span className="text-[#67e8f9]">addImageWithTag</span>{`(`}<span className="text-[#f472b6]">const</span>{` std::string& path, `}<span className="text-[#f472b6]">const</span>{` BBox& bbox, `}<span className="text-[#c084fc] font-semibold">int</span>{` mcid) {

    `}<span className="text-[#6b7280] italic">// 1. Marked Content 시작 태그</span>{`
    `}<span className="text-[#4ade80]">Element</span>{` mcBegin = builder.`}<span className="text-[#67e8f9]">CreateMarkedContentBeginInlineProperties</span>{`(`}<span className="text-[#fbbf24]">&quot;Figure&quot;</span>{`);
    mcBegin.GetMCPropertyDict().`}<span className="text-[#67e8f9]">PutNumber</span>{`(`}<span className="text-[#fbbf24]">&quot;MCID&quot;</span>{`, mcid);
    writer.`}<span className="text-[#67e8f9]">WriteElement</span>{`(mcBegin);

    `}<span className="text-[#6b7280] italic">// 2. 실제 이미지 콘텐츠 렌더링</span>{`
    `}<span className="text-[#4ade80]">Image</span>{` img = `}<span className="text-[#4ade80]">Image</span>{`::`}<span className="text-[#67e8f9]">Create</span>{`(doc.GetSDFDoc(), path.c_str());
    `}<span className="text-[#4ade80]">Element</span>{` imgElement = builder.`}<span className="text-[#67e8f9]">CreateImage</span>{`(img, Matrix2D(...));
    writer.`}<span className="text-[#67e8f9]">WriteElement</span>{`(imgElement);

    `}<span className="text-[#6b7280] italic">// 3. Marked Content 종료 태그</span>{`
    writer.`}<span className="text-[#67e8f9]">WriteElement</span>{`(builder.`}<span className="text-[#67e8f9]">CreateMarkedContentEnd</span>{`());
}`}</pre>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="mt-6 animate-slide-in stagger-4">
          <div className="flex items-center justify-center gap-4">
            <div
              className="px-4 py-3 rounded-xl text-center"
              style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}
            >
              <div className="text-xs text-[var(--slide-accent-success)] font-mono mb-1">addFigure()</div>
              <div className="text-sm text-[var(--slide-text-primary)]">MCID + Alt 생성</div>
            </div>

            <svg className="w-6 h-6 text-[var(--slide-accent-tertiary)]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 17l5-5-5-5v10z"/>
            </svg>

            <div
              className="px-4 py-3 rounded-xl text-center"
              style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}
            >
              <div className="text-xs text-[var(--slide-accent-tertiary)] font-mono mb-1">mcid</div>
              <div className="text-sm text-[var(--slide-text-primary)]">연결 키</div>
            </div>

            <svg className="w-6 h-6 text-[var(--slide-accent-tertiary)]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 17l5-5-5-5v10z"/>
            </svg>

            <div
              className="px-4 py-3 rounded-xl text-center"
              style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.2)' }}
            >
              <div className="text-xs text-[var(--slide-accent-primary)] font-mono mb-1">addImageWithTag()</div>
              <div className="text-sm text-[var(--slide-text-primary)]">이미지 렌더링</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
