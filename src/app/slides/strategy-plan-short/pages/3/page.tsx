import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { FileText, Accessibility, Code } from 'lucide-react';

const TOTAL_PAGES = 18;

const tracks = [
  {
    num: 1,
    name: 'IDP (Intelligent Document Processing)',
    product: '문서 AI + 커스텀 OCR',
    status: '기존 진행',
    market: '$12B~$67B (2030s)',
    icon: FileText,
    color: 'var(--track-1-primary)',
    gradient: 'var(--track-1-gradient)',
    bg: 'var(--track-1-bg)',
    statusType: 'neutral'
  },
  {
    num: 2,
    name: 'Digital Accessibility & Remediation',
    product: 'PDF/UA Auto-Tagging',
    status: '신규 추진',
    market: '$1.7B~$2.6B (2033)',
    icon: Accessibility,
    color: 'var(--track-2-primary)',
    gradient: 'var(--track-2-gradient)',
    bg: 'var(--track-2-bg)',
    statusType: 'new'
  },
  {
    num: 3,
    name: 'DMS/ECM 시장 일부',
    product: 'PDF→HTML SDK',
    status: '신규 추진',
    market: '니치',
    icon: Code,
    color: 'var(--track-3-primary)',
    gradient: 'var(--track-3-gradient)',
    bg: 'var(--track-3-bg)',
    statusType: 'new'
  }
];

export default function Slide3() {
  return (
    <SlideLayout currentPage={3} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 1 · Track Overview</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            기술 트랙
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            3개 트랙 개요 및 포지셔닝
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20
          }}>
            {tracks.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.num}
                  className="slide-card"
                  style={{
                    borderTop: `4px solid ${track.color}`,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: track.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={22} color="white" />
                    </div>
                    <div>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.8125rem',
                        color: track.color
                      }}>Track {track.num}</span>
                      <h3 style={{
                        fontFamily: 'var(--slide-font-display)',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        color: 'var(--slide-text-primary)'
                      }}>
                        {track.name}
                      </h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>핵심 제품</span>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-primary)', fontWeight: 500, marginTop: 4 }}>{track.product}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>시장 규모</span>
                      <p style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.8125rem',
                        color: track.color,
                        fontWeight: 600,
                        marginTop: 4
                      }}>{track.market}</p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--slide-border-subtle)' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '6px 12px',
                      borderRadius: 100,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      background: track.statusType === 'new' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(107, 114, 128, 0.15)',
                      color: track.statusType === 'new' ? 'var(--track-2-primary)' : 'var(--slide-text-tertiary)',
                      border: `1px solid ${track.statusType === 'new' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(107, 114, 128, 0.3)'}`
                    }}>
                      {track.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
