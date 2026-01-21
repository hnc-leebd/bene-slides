import Link from 'next/link';

const presentations = [
  {
    id: 'strategy-plan',
    title: '2026 전략 방향',
    subtitle: '트랙 + 라이선스',
    description: '트랙 우선순위 + 오픈소스 라이선스 전략',
    href: '/slides/strategy-plan/pages/1',
    slides: 33,
    accent: 'violet',
    year: '2026',
  },
  {
    id: 'strategy-plan-short',
    title: '오픈데이터로더',
    subtitle: '기술 검토',
    description: '기술 분석 및 오픈소스 라이선스 전략',
    href: '/slides/strategy-plan-short/pages/1',
    slides: 20,
    accent: 'violet',
    year: '2026',
  },
  {
    id: 'strategy-2026',
    title: '2026 전략 방향',
    subtitle: '시장 조사',
    description: '3가지 전략 트랙 분석 및 권고',
    href: '/slides/strategy-2026/pages/1',
    slides: 24,
    accent: 'cyan',
    year: '2026',
  },
  {
    id: 'pdfua',
    title: 'PDF/UA',
    subtitle: '전략',
    description: 'PDF/UA 문서 접근성 전략 프레젠테이션',
    href: '/slides/pdfua/pages/1',
    slides: 20,
    accent: 'violet',
    year: '2026',
  },
  {
    id: 'ax-guide',
    title: 'AX Guide',
    subtitle: 'AX는 왜 실패하는가',
    description: '성공사례와 실패사례 분석을 통한 AX 가이드라인',
    href: '/slides/ax-guide/pages/1',
    slides: 17,
    accent: 'amber',
    year: '2026',
  },
];

const accentStyles = {
  cyan: {
    gradient: 'from-cyan-400 via-cyan-500 to-teal-500',
    glow: 'hover:shadow-[0_0_60px_rgba(6,182,212,0.3)]',
    border: 'hover:border-cyan-500/40',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    line: 'bg-gradient-to-r from-cyan-400 to-teal-500',
  },
  violet: {
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-500',
    glow: 'hover:shadow-[0_0_60px_rgba(139,92,246,0.3)]',
    border: 'hover:border-violet-500/40',
    text: 'text-violet-400',
    bg: 'bg-violet-500/10',
    line: 'bg-gradient-to-r from-violet-400 to-fuchsia-500',
  },
  amber: {
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    glow: 'hover:shadow-[0_0_60px_rgba(245,158,11,0.3)]',
    border: 'hover:border-amber-500/40',
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
    line: 'bg-gradient-to-r from-amber-400 to-orange-500',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white overflow-hidden relative">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/[0.07] blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-500/[0.07] blur-[120px]" />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-amber-500/[0.05] blur-[100px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className="pt-16 pb-24 px-8 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-20">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase font-medium">
                  Active
                </span>
              </div>
              <span className="text-xs tracking-[0.2em] text-neutral-600 font-mono">
                {presentations.length} Presentations
              </span>
            </div>

            {/* Main title - Editorial typography */}
            <div className="relative">
              <h1 className="text-[clamp(4rem,12vw,11rem)] font-extralight tracking-[-0.04em] leading-[0.85] text-white/90">
                My
              </h1>
              <h1 className="text-[clamp(4rem,12vw,11rem)] font-extralight tracking-[-0.04em] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-white to-neutral-500">
                Slides
              </h1>

              {/* Decorative accent line */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="w-px h-32 bg-gradient-to-b from-transparent via-neutral-700 to-transparent" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="mt-8 text-neutral-500 text-lg md:text-xl max-w-md font-light tracking-wide">
              프레젠테이션 아카이브
            </p>
          </div>
        </header>

        {/* Presentations Grid */}
        <section className="px-8 md:px-16 lg:px-24 pb-32">
          <div className="max-w-[1400px] mx-auto">
            {/* Section label */}
            <div className="flex items-center gap-6 mb-12">
              <span className="text-[10px] tracking-[0.4em] text-neutral-600 uppercase font-medium">
                Collection
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-neutral-800 to-transparent" />
            </div>

            {/* Presentation cards - Asymmetric grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {presentations.map((pres, index) => {
                const accent = accentStyles[pres.accent as keyof typeof accentStyles];
                const isLarge = index === 0;

                return (
                  <Link
                    key={pres.id}
                    href={pres.href}
                    className={`
                      group relative block
                      ${isLarge ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'}
                    `}
                  >
                    <article
                      className={`
                        relative h-full min-h-[280px] ${isLarge ? 'lg:min-h-[580px]' : 'lg:min-h-[280px]'}
                        p-8 lg:p-10
                        bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-950/80
                        border border-neutral-800/60 rounded-2xl
                        backdrop-blur-sm
                        transition-all duration-500 ease-out
                        ${accent.glow} ${accent.border}
                        hover:border-opacity-60
                        hover:translate-y-[-4px]
                        overflow-hidden
                      `}
                    >
                      {/* Background accent glow */}
                      <div
                        className={`
                          absolute -top-32 -right-32 w-64 h-64
                          bg-gradient-to-br ${accent.gradient}
                          opacity-0 group-hover:opacity-[0.08]
                          blur-3xl transition-opacity duration-700
                          rounded-full
                        `}
                      />

                      {/* Year badge - Top right */}
                      <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                        <span className={`
                          text-xs font-mono tracking-wider
                          ${accent.text} opacity-60 group-hover:opacity-100
                          transition-opacity duration-300
                        `}>
                          {pres.year}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Index number */}
                        <span className="text-[10px] font-mono text-neutral-600 tracking-widest mb-auto">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        {/* Title block */}
                        <div className="mt-auto">
                          {/* Main title */}
                          <h2 className={`
                            ${isLarge ? 'text-4xl lg:text-6xl' : 'text-3xl lg:text-4xl'}
                            font-light tracking-[-0.02em] leading-[1.1]
                            text-white/90 group-hover:text-white
                            transition-colors duration-300
                            mb-1
                          `}>
                            {pres.title}
                          </h2>

                          {/* Subtitle */}
                          <h3 className={`
                            ${isLarge ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}
                            font-light tracking-[-0.01em]
                            text-neutral-500 group-hover:text-neutral-400
                            transition-colors duration-300
                            mb-6
                          `}>
                            {pres.subtitle}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-neutral-600 group-hover:text-neutral-500 transition-colors duration-300 mb-6 max-w-sm">
                            {pres.description}
                          </p>

                          {/* Footer info */}
                          <div className="flex items-center gap-4">
                            {/* Slide count */}
                            <div className={`
                              px-3 py-1.5 rounded-full text-xs font-medium
                              ${accent.bg} ${accent.text}
                              border border-current/20
                            `}>
                              {pres.slides} slides
                            </div>

                            {/* Arrow indicator */}
                            <div className={`
                              w-8 h-8 rounded-full
                              border border-neutral-700 group-hover:border-neutral-600
                              flex items-center justify-center
                              transition-all duration-300
                              group-hover:translate-x-1
                            `}>
                              <svg
                                className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300 transition-colors"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className={`
                        absolute bottom-0 left-0 right-0 h-px
                        ${accent.line}
                        opacity-0 group-hover:opacity-40
                        transition-opacity duration-500
                      `} />
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 md:px-16 lg:px-24 pb-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center justify-between pt-8 border-t border-neutral-900">
              <span className="text-[10px] tracking-[0.3em] text-neutral-700 uppercase">
                Benedict&apos;s Archive
              </span>
              <span className="text-[10px] text-neutral-800 font-mono">
                2025
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
