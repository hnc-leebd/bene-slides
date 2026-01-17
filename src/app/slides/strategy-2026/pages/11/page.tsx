import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const TOTAL_PAGES = 24;

export default function Slide11() {
  return (
    <SlideLayout currentPage={11} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Market Size</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            <span className="slide-header-track-2">시장 규모</span> 및 성장
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            Digital Accessibility & Remediation 시장
          </p>
        </div>

        <div className="slide-content-area" style={{ width: 888, margin: '0 auto' }}>
          <div className="slide-columns">
          <div className="slide-card slide-card-track-2 animate-scale-in stagger-3" style={{ textAlign: 'center' }}>
            <TrendingUp size={32} color="var(--track-2-primary)" style={{ marginBottom: 16 }} />
            <p style={{
              fontFamily: 'var(--slide-font-mono)',
              fontSize: '0.75rem',
              color: 'var(--slide-text-tertiary)',
              marginBottom: 8
            }}>
              Remediation Platform Market
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
              <span className="slide-big-number" style={{ fontSize: '3rem', color: 'var(--slide-text-primary)' }}>
                $644M
              </span>
              <ArrowUpRight size={32} color="var(--track-2-primary)" />
              <span className="slide-big-number gradient" style={{ fontSize: '3rem' }}>
                $1.73B
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--slide-font-mono)',
              fontSize: '1rem',
              color: 'var(--status-positive)'
            }}>
              CAGR 13.2% (2033)
            </p>
          </div>

          <div className="animate-slide-in stagger-4">
            <h3 style={{
              fontFamily: 'var(--slide-font-display)',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--slide-text-secondary)',
              marginBottom: 20,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              세부 시장 전망
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="slide-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--slide-font-body)', color: 'var(--slide-text-primary)' }}>
                    Digital Accessibility Software
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: 'var(--track-2-primary)'
                  }}>
                    $721M → $2.6B
                  </span>
                  <span style={{
                    fontFamily: 'var(--slide-font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--slide-text-tertiary)'
                  }}>
                    (2033)
                  </span>
                </div>
              </div>

              <div className="slide-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--slide-font-body)', color: 'var(--slide-text-primary)' }}>
                    Remediation Platform
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: 'var(--track-1-primary)'
                  }}>
                    $644M → $1.73B
                  </span>
                  <span style={{
                    fontFamily: 'var(--slide-font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--slide-text-tertiary)'
                  }}>
                    (2033)
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
