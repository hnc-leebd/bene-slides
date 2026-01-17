import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';
import { FileText, Pilcrow, Image } from 'lucide-react';

export default function Slide15() {
  return (
    <SlideLayout currentPage={15} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Implementation Guide</div>
        <h2 className="slide-header animate-slide-in stagger-1">
          MCID 연결 개념 <span className="text-[var(--slide-accent-tertiary)]">(핵심!)</span>
        </h2>
        <p className="slide-subheader animate-slide-in stagger-2">Marked Content ID: 구조와 콘텐츠를 연결하는 키</p>

        {/* MCID Diagram */}
        <div className="animate-slide-in stagger-3">
          <div className="flex gap-12 items-stretch justify-center">

            {/* Structure Tree Side - Image Style */}
            <div className="flex-1 max-w-sm flex flex-col">
              <div className="mb-3 text-center">
                <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-[rgba(16,185,129,0.15)] text-[var(--slide-accent-success)] border border-[rgba(16,185,129,0.3)]">
                  Structure Tree
                </span>
              </div>
              <div
                className="rounded-xl p-4 shadow-lg flex-1"
                style={{
                  background: 'var(--slide-bg-secondary)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {/* Tree Items */}
                <div>
                  {/* Document */}
                  <div className="flex items-center gap-2 py-1.5 px-2">
                    <span className="text-[var(--slide-text-muted)]">▾</span>
                    <FileText className="w-4 h-4 text-[var(--slide-accent-success)]" />
                    <span className="text-sm text-[var(--slide-text-primary)]">Document</span>
                  </div>

                  {/* Children with guide line */}
                  <div className="relative ml-[18px]">
                    {/* Vertical guide line */}
                    <div
                      className="absolute left-0 top-0 w-px h-[calc(100%-16px)]"
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    />

                    {/* P */}
                    <div className="flex items-center gap-2 py-1.5 pl-4 relative">
                      {/* Horizontal connector */}
                      <div
                        className="absolute left-0 top-1/2 w-3 h-px"
                        style={{ background: 'rgba(255,255,255,0.2)' }}
                      />
                      <Pilcrow className="w-4 h-4 text-[var(--slide-accent-primary)]" />
                      <span className="text-sm text-[var(--slide-text-primary)]">P</span>
                      <span className="text-xs text-[var(--slide-text-muted)]">(MCID=0)</span>
                    </div>

                    {/* P */}
                    <div className="flex items-center gap-2 py-1.5 pl-4 relative">
                      {/* Horizontal connector */}
                      <div
                        className="absolute left-0 top-1/2 w-3 h-px"
                        style={{ background: 'rgba(255,255,255,0.2)' }}
                      />
                      <Pilcrow className="w-4 h-4 text-[var(--slide-accent-primary)]" />
                      <span className="text-sm text-[var(--slide-text-primary)]">P</span>
                      <span className="text-xs text-[var(--slide-text-muted)]">(MCID=1)</span>
                    </div>

                    {/* Figure */}
                    <div className="flex items-center gap-2 py-1.5 pl-4 relative">
                      {/* Horizontal connector */}
                      <div
                        className="absolute left-0 top-1/2 w-3 h-px"
                        style={{ background: 'rgba(255,255,255,0.2)' }}
                      />
                      <Image className="w-4 h-4 text-[var(--slide-accent-tertiary)]" />
                      <span className="text-sm text-[var(--slide-text-primary)]">Figure</span>
                      <span className="text-xs text-[var(--slide-text-muted)]">(MCID=2)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Page Content Side - Text Viewer Style */}
            <div className="flex-1 max-w-md flex flex-col">
              <div className="mb-3 text-center">
                <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-[rgba(0,212,255,0.15)] text-[var(--slide-accent-primary)] border border-[rgba(0,212,255,0.3)]">
                  Page Content
                </span>
              </div>
              <div
                className="rounded-xl overflow-hidden shadow-lg flex-1"
                style={{
                  background: '#1e1e1e',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {/* Editor Header */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-[rgba(255,255,255,0.1)]" style={{ background: '#2d2d2d' }}>
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  <span className="ml-2 text-xs text-[var(--slide-text-muted)] font-mono">content-stream.txt</span>
                </div>

                {/* Code Content */}
                <div className="p-4 font-mono text-xs leading-relaxed">
                  {/* First P block */}
                  <div className="flex">
                    <span className="w-8 text-[var(--slide-text-muted)] select-none">1</span>
                    <span className="text-[#6a9955]">/P &lt;&lt;/MCID 0&gt;&gt; BDC</span>
                  </div>
                  <div className="flex">
                    <span className="w-8 text-[var(--slide-text-muted)] select-none">2</span>
                    <span className="text-[#d4d4d4] ml-4">Paragraph</span>
                  </div>
                  <div className="flex">
                    <span className="w-8 text-[var(--slide-text-muted)] select-none">3</span>
                    <span className="text-[#6a9955]">EMC</span>
                  </div>
                  <div className="h-2"></div>
                  {/* Second P block */}
                  <div className="flex">
                    <span className="w-8 text-[var(--slide-text-muted)] select-none">4</span>
                    <span className="text-[#6a9955]">/P &lt;&lt;/MCID 1&gt;&gt; BDC</span>
                  </div>
                  <div className="flex">
                    <span className="w-8 text-[var(--slide-text-muted)] select-none">5</span>
                    <span className="text-[#d4d4d4] ml-4">Paragraph</span>
                  </div>
                  <div className="flex">
                    <span className="w-8 text-[var(--slide-text-muted)] select-none">6</span>
                    <span className="text-[#6a9955]">EMC</span>
                  </div>
                  <div className="h-2"></div>
                  {/* Figure block */}
                  <div className="flex">
                    <span className="w-8 text-[var(--slide-text-muted)] select-none">7</span>
                    <span className="text-[#dcdcaa]">/Figure &lt;&lt;/MCID 2&gt;&gt; BDC</span>
                  </div>
                  <div className="flex">
                    <span className="w-8 text-[var(--slide-text-muted)] select-none">8</span>
                    <span className="text-[#d4d4d4] ml-4">Figure</span>
                  </div>
                  <div className="flex">
                    <span className="w-8 text-[var(--slide-text-muted)] select-none">9</span>
                    <span className="text-[#dcdcaa]">EMC</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Explanation */}
        <div className="mt-8 animate-slide-in stagger-4">
          <div
            className="rounded-xl p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(124, 58, 237, 0.05) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(245,158,11,0.15)] flex items-center justify-center">
                <span className="text-xl font-bold text-[var(--slide-accent-tertiary)]">!</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-[var(--slide-accent-tertiary)] mb-2">MCID = Marked Content ID</h4>
                <ul className="space-y-2 text-sm text-[var(--slide-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--slide-accent-tertiary)]">•</span>
                    <span>구조 요소(논리)와 콘텐츠(시각)를 연결하는 ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--slide-accent-tertiary)]">•</span>
                    <span>스크린 리더가 이 연결을 통해 콘텐츠를 읽음</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
