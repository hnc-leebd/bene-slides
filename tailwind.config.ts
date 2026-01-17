import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
        document: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Legacy element colors (keep for compatibility)
        'element-paragraph': '#3b82f6',
        'element-figure': '#22c55e',
        'selection-bg': '#fef08a',
        'selection-border': '#eab308',

        // Glass system colors
        glass: {
          white: 'rgba(255, 255, 255, 0.7)',
          'white-strong': 'rgba(255, 255, 255, 0.85)',
          'tint-blue': 'rgba(219, 234, 254, 0.6)',
          'tint-purple': 'rgba(237, 233, 254, 0.6)',
          border: 'rgba(255, 255, 255, 0.3)',
          'border-strong': 'rgba(255, 255, 255, 0.4)',
          shadow: 'rgba(59, 130, 246, 0.1)',
          dark: 'rgba(15, 23, 42, 0.6)',
          'dark-border': 'rgba(255, 255, 255, 0.1)',
        },

        // Accent colors - Chromatic Jewels
        sapphire: {
          DEFAULT: '#3b82f6',
          deep: '#2563eb',
        },
        amethyst: {
          DEFAULT: '#8b5cf6',
          deep: '#7c3aed',
        },
        emerald: {
          DEFAULT: '#10b981',
          deep: '#059669',
        },
        amber: {
          DEFAULT: '#f59e0b',
          deep: '#d97706',
        },
        ruby: {
          DEFAULT: '#ef4444',
          deep: '#dc2626',
        },
      },
      width: {
        panel: '320px',
        'panel-tablet': '240px',
        a4: '794px',
      },
      minWidth: {
        panel: '320px',
      },
      maxWidth: {
        panel: '320px',
      },
      height: {
        a4: '1123px',
        toolbar: '64px',
        statusbar: '32px',
      },
      boxShadow: {
        'glass-sm': '0 2px 8px rgba(59, 130, 246, 0.04)',
        'glass-md': '0 4px 16px rgba(59, 130, 246, 0.06)',
        'glass-lg': '0 8px 32px rgba(59, 130, 246, 0.08)',
        'glass-xl': '0 16px 48px rgba(59, 130, 246, 0.12)',
        'glass-primary': '0 8px 32px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        'glass-floating': '0 12px 48px rgba(59, 130, 246, 0.12), 0 0 0 1px rgba(99, 179, 237, 0.1)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-amber': '0 0 20px rgba(234, 179, 8, 0.4)',
      },
      backdropBlur: {
        glass: '24px',
        'glass-md': '20px',
        'glass-sm': '16px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'atmosphere-shift': 'atmosphereShift 20s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(234, 179, 8, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(234, 179, 8, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        atmosphereShift: {
          '0%, 100%': { backgroundPosition: '0% 50%', opacity: '1' },
          '50%': { backgroundPosition: '100% 50%', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
