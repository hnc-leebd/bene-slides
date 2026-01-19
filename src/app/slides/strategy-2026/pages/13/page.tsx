import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { CheckCircle, XCircle } from 'lucide-react';

const TOTAL_PAGES = 20;

export default function Slide13() {
  return (
    <SlideLayout currentPage={13} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Competition 1/2</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            경쟁사 분석 - <span className="slide-header-track-2">대기업</span>
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            시장 주요 플레이어
          </p>
        </div>

        <div className="slide-content-area">
          <div className="slide-grid-2x2 animate-slide-in stagger-3" style={{ width: 888, margin: '0 auto' }}>
          <div className="slide-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <h3 className="slide-card-title" style={{ fontSize: '1.25rem' }}>Adobe</h3>
              <span className="slide-badge slide-badge-danger">PDF 창시자</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>PDF 경력</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>~32년</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>규모</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>~30,700명</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle size={16} color="var(--status-positive)" />
              <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)' }}>UA 시각화 지원</span>
            </div>
          </div>

          <div className="slide-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <h3 className="slide-card-title" style={{ fontSize: '1.25rem' }}>Apryse (PDFTron)</h3>
              <span className="slide-badge slide-badge-purple">공격적 인수</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>PDF 경력</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>~27년</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>규모</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>500-670명</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slide-text-tertiary)' }}>
                iText · PDFlib · Solid Documents 등
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <XCircle size={16} color="var(--status-negative)" />
              <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)' }}>UA 시각화 미지원</span>
            </div>
          </div>

          <div className="slide-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <h3 className="slide-card-title" style={{ fontSize: '1.25rem' }}>Foxit</h3>
              <span className="slide-badge slide-badge-primary">PDFium 기반</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>PDF 경력</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>~24년</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>규모</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>550-1,500명</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle size={16} color="var(--status-positive)" />
              <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)' }}>UA 시각화 지원</span>
            </div>
          </div>

          <div className="slide-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <h3 className="slide-card-title" style={{ fontSize: '1.25rem' }}>CommonLook (Allyant)</h3>
              <span className="slide-badge slide-badge-gold">업계 최초</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>PDF 경력</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>~30년</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>규모</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>~80명</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--track-3-primary)' }}>ISO PDF/UA 위원회</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
