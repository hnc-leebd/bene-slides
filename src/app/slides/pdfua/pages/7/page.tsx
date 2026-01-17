import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide7() {
  return (
    <SlideLayout currentPage={7} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Implementation Guide</div>
        <h2 className="slide-header animate-slide-in stagger-1">PoC 아키텍처</h2>
        <p className="slide-subheader animate-slide-in stagger-2">PDF/UA 생성 파이프라인</p>

        {/* Dark Theme Pipeline */}
        <div className="animate-slide-in stagger-3 mt-12">
          <div className="flex items-start justify-center gap-8">

            {/* Node 1: 한글데이터로더 */}
            <div className="flex flex-col items-center w-[200px]">
              <div
                className="w-full rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(100, 116, 139, 0.4)',
                  boxShadow: '0 0 20px rgba(100, 116, 139, 0.1)',
                }}
              >
                <div className="text-[11px] font-mono text-slate-500 tracking-wider mb-3">01</div>
                <h3 className="text-base font-semibold text-slate-200">한글데이터로더</h3>
                <p className="text-xs text-slate-500 mt-2">VisualInfo JSON</p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-slate-600">BACKEND</div>
            </div>

            {/* Arrow 1 with label */}
            <div className="flex flex-col items-center justify-center pt-10">
              <svg className="w-10 h-10 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              <span className="text-[10px] font-mono text-slate-600 mt-2">JSON</span>
            </div>

            {/* Node 2: C++ Engine - HERO with Emerald glow */}
            <div className="flex flex-col items-center w-[220px]">
              <div
                className="w-full rounded-xl p-6 relative transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(16, 185, 129, 0.5)',
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.15), inset 0 0 20px rgba(16, 185, 129, 0.03)',
                }}
              >
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden rounded-tr-xl">
                  <div
                    className="absolute top-0 right-0 w-14 h-14 -translate-y-1/2 translate-x-1/2 rotate-45"
                    style={{ background: 'rgba(16, 185, 129, 0.15)' }}
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-[11px] font-mono text-emerald-500/70 tracking-wider">02</div>
                  <span className="px-2 py-1 text-[10px] font-medium bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">CORE</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-100">C++ Serializer</h3>
                <p className="text-xs text-emerald-400/60 mt-2">Apryse PDFNet SDK</p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-emerald-500/50">ENGINE</div>
            </div>

            {/* Arrow 2 with label */}
            <div className="flex flex-col items-center justify-center pt-10">
              <svg className="w-10 h-10 text-emerald-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              <span className="text-[10px] font-mono text-emerald-500/50 mt-2">.pdf</span>
            </div>

            {/* Node 3: veraPDF */}
            <div className="flex flex-col items-center w-[200px]">
              <div
                className="w-full rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(100, 116, 139, 0.4)',
                  boxShadow: '0 0 20px rgba(100, 116, 139, 0.1)',
                }}
              >
                <div className="text-[11px] font-mono text-slate-500 tracking-wider mb-3">03</div>
                <h3 className="text-base font-semibold text-slate-200">veraPDF</h3>
                <p className="text-xs text-slate-500 mt-2">PDF/UA 검증</p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-slate-600">VALIDATION</div>
            </div>

          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 animate-slide-in stagger-4">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-[10px] text-slate-500">PDF/UA 생성 핵심</span>
            </div>
            <span className="text-slate-700">|</span>
            <span className="text-[10px] text-slate-600">PoC 구조 · 운영 환경에서 변형 가능</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
