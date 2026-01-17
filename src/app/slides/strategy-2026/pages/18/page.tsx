import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Building, Lock, Monitor } from 'lucide-react';

const TOTAL_PAGES = 24;

export default function Slide18() {
  return (
    <SlideLayout currentPage={18} totalPages={TOTAL_PAGES} track={3}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 3 · Market Segments</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            시장 세그먼트
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            3가지 주요 시장 영역
          </p>
        </div>

        <div className="slide-content-area">
          <div className="slide-columns-3">
          <div className="slide-card animate-scale-in stagger-3" style={{ borderTop: '4px solid var(--track-1-primary)' }}>
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
              <Building size={24} color="white" />
            </div>
            <h3 className="slide-card-title">Enterprise DMS/ECM</h3>
            <p className="slide-card-text" style={{ marginBottom: 16 }}>
              SI 통합 필수<br />
              대기업 타겟
            </p>
            <div style={{
              paddingTop: 16,
              borderTop: '1px solid var(--slide-border-subtle)'
            }}>
              <p style={{
                fontFamily: 'var(--slide-font-mono)',
                fontSize: '0.75rem',
                color: 'var(--slide-text-tertiary)',
                marginBottom: 8
              }}>
                주요 플레이어
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                <span className="slide-badge slide-badge-primary">IBM FileNet</span>
                <span className="slide-badge slide-badge-primary">M-Files</span>
                <span className="slide-badge slide-badge-primary">DocuWare</span>
              </div>
            </div>
          </div>

          <div className="slide-card animate-scale-in stagger-4" style={{ borderTop: '4px solid var(--track-3-primary)' }}>
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
              <Lock size={24} color="white" />
            </div>
            <h3 className="slide-card-title">PDF DRM 전문</h3>
            <p className="slide-card-text" style={{ marginBottom: 16 }}>
              단일 기능 가능<br />
              중소기업 가능
            </p>
            <div style={{
              paddingTop: 16,
              borderTop: '1px solid var(--slide-border-subtle)'
            }}>
              <p style={{
                fontFamily: 'var(--slide-font-mono)',
                fontSize: '0.75rem',
                color: 'var(--slide-text-tertiary)',
                marginBottom: 8
              }}>
                주요 플레이어
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                <span className="slide-badge slide-badge-gold">Locklizard</span>
                <span className="slide-badge slide-badge-gold">Vitrium</span>
                <span className="slide-badge slide-badge-gold">VeryPDF</span>
              </div>
            </div>
          </div>

          <div className="slide-card animate-scale-in stagger-5" style={{ borderTop: '4px solid var(--track-2-primary)' }}>
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
              <Monitor size={24} color="white" />
            </div>
            <h3 className="slide-card-title">HTML5 Document Viewer</h3>
            <p className="slide-card-text" style={{ marginBottom: 16 }}>
              웹 기반 뷰어<br />
              컴포넌트
            </p>
            <div style={{
              paddingTop: 16,
              borderTop: '1px solid var(--slide-border-subtle)'
            }}>
              <p style={{
                fontFamily: 'var(--slide-font-mono)',
                fontSize: '0.75rem',
                color: 'var(--slide-text-tertiary)',
                marginBottom: 8
              }}>
                주요 플레이어
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                <span className="slide-badge slide-badge-purple">MS Technology</span>
                <span className="slide-badge slide-badge-purple">VectorViewer</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
