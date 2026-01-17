import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { FileText, Accessibility, Shield } from 'lucide-react';

const TOTAL_PAGES = 24;

export default function Slide2() {
  return (
    <SlideLayout currentPage={2} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Agenda</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            목차
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            3가지 전략 트랙 심층 분석
          </p>
        </div>

        <div className="slide-content-area">
          <div className="slide-columns-3">
            <div className="slide-card slide-card-track-1 animate-scale-in stagger-3">
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'var(--track-1-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16
            }}>
              <FileText size={24} color="white" />
            </div>
            <h3 className="slide-card-title">트랙 1</h3>
            <p className="slide-card-text" style={{ marginBottom: 16 }}>
              문서 파서<br />포맷 확장
            </p>
            <p style={{
              fontFamily: 'var(--slide-font-mono)',
              fontSize: '0.75rem',
              color: 'var(--track-1-primary)'
            }}>
              PDF, 오피스, 이미지/OCR
            </p>
            <div style={{
              marginTop: 16,
              paddingTop: 16,
              borderTop: '1px solid var(--slide-border-subtle)',
              fontFamily: 'var(--slide-font-mono)',
              fontSize: '0.8125rem',
              color: 'var(--slide-text-tertiary)'
            }}>
              Slides 5-9
            </div>
          </div>

          <div className="slide-card slide-card-track-2 animate-scale-in stagger-4">
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'var(--track-2-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16
            }}>
              <Accessibility size={24} color="white" />
            </div>
            <h3 className="slide-card-title">트랙 2</h3>
            <p className="slide-card-text" style={{ marginBottom: 16 }}>
              PDF 접근성<br />Auto-Tagging
            </p>
            <p style={{
              fontFamily: 'var(--slide-font-mono)',
              fontSize: '0.75rem',
              color: 'var(--track-2-primary)'
            }}>
              PDF/UA 접근성 솔루션
            </p>
            <div style={{
              marginTop: 16,
              paddingTop: 16,
              borderTop: '1px solid var(--slide-border-subtle)',
              fontFamily: 'var(--slide-font-mono)',
              fontSize: '0.8125rem',
              color: 'var(--slide-text-tertiary)'
            }}>
              Slides 10-16
            </div>
          </div>

          <div className="slide-card slide-card-track-3 animate-scale-in stagger-5">
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'var(--track-3-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16
            }}>
              <Shield size={24} color="white" />
            </div>
            <h3 className="slide-card-title">트랙 3</h3>
            <p className="slide-card-text" style={{ marginBottom: 16 }}>
              PDF → HTML<br />렌더링
            </p>
            <p style={{
              fontFamily: 'var(--slide-font-mono)',
              fontSize: '0.75rem',
              color: 'var(--track-3-primary)'
            }}>
              SDK B2B2B
            </p>
            <div style={{
              marginTop: 16,
              paddingTop: 16,
              borderTop: '1px solid var(--slide-border-subtle)',
              fontFamily: 'var(--slide-font-mono)',
              fontSize: '0.8125rem',
              color: 'var(--slide-text-tertiary)'
            }}>
              Slides 17-21
            </div>
          </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
