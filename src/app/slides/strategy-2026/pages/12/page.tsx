import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Zap } from 'lucide-react';

const TOTAL_PAGES = 24;

export default function Slide12() {
  return (
    <SlideLayout currentPage={12} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Regulation</p>
          <h1 className="slide-header animate-slide-in stagger-1" style={{ marginBottom: 32 }}>
            규제 드라이버 - <span className="slide-header-track-2">EAA</span>
          </h1>
        </div>

        <div className="slide-content-area">
          <div className="slide-alert slide-alert-danger animate-slide-in stagger-2" style={{ marginBottom: 32 }}>
          <Zap size={20} />
          <span><strong>2025년 6월 28일</strong> European Accessibility Act 시행</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="animate-slide-in stagger-3">
          {/* 1행: 해외 규제 */}
          <div className="slide-card" style={{ borderTop: '4px solid var(--track-2-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: '1.25rem' }}>🇪🇺</span>
              <span className="slide-badge slide-badge-purple">EAA</span>
            </div>
            <h3 className="slide-card-title" style={{ fontSize: '0.9rem' }}>European Accessibility Act</h3>
            <div style={{ marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>시행일</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--status-negative)', fontWeight: 600 }}>2025.6.28</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>대상</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-primary)' }}>EU 서비스 기업</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>리스크</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--status-negative)', fontWeight: 600 }}>€3M, 시장 퇴출</span>
              </div>
            </div>
          </div>

          <div className="slide-card" style={{ borderTop: '4px solid var(--track-1-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: '1.25rem' }}>🇺🇸</span>
              <span className="slide-badge slide-badge-primary">Section 508</span>
            </div>
            <h3 className="slide-card-title" style={{ fontSize: '0.9rem' }}>Section 508</h3>
            <div style={{ marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>시행일</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--status-positive)', fontWeight: 600 }}>시행 중</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>대상</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-primary)' }}>연방 정부/계약</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>리스크</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--status-warning)', fontWeight: 600 }}>계약 배제</span>
              </div>
            </div>
          </div>

          <div className="slide-card" style={{ borderTop: '4px solid var(--track-3-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: '1.25rem' }}>🇺🇸</span>
              <span className="slide-badge slide-badge-gold">ADA Title II</span>
            </div>
            <h3 className="slide-card-title" style={{ fontSize: '0.9rem' }}>ADA Title II</h3>
            <div style={{ marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>시행일</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--status-warning)', fontWeight: 600 }}>2026.4</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>대상</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-primary)' }}>미국 공공기관</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>리스크</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--status-negative)', fontWeight: 600 }}>소송</span>
              </div>
            </div>
          </div>

          {/* 2행: 국내 규제 */}
          <div className="slide-card" style={{ borderTop: '4px solid var(--slide-text-tertiary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: '1.25rem' }}>🇰🇷</span>
              <span className="slide-badge" style={{ background: 'var(--slide-bg-tertiary)', color: 'var(--slide-text-secondary)' }}>법률</span>
            </div>
            <h3 className="slide-card-title" style={{ fontSize: '0.9rem' }}>장애인차별금지법</h3>
            <div style={{ marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>시행일</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--status-positive)', fontWeight: 600 }}>시행 중</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>대상</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-primary)' }}>전자정보 제공자</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>리스크</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--status-negative)', fontWeight: 600 }}>3년/3천만원</span>
              </div>
            </div>
          </div>

          <div className="slide-card" style={{ borderTop: '4px solid var(--slide-text-tertiary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: '1.25rem' }}>🇰🇷</span>
              <span className="slide-badge" style={{ background: 'var(--slide-bg-tertiary)', color: 'var(--slide-text-secondary)' }}>법률</span>
            </div>
            <h3 className="slide-card-title" style={{ fontSize: '0.9rem' }}>디지털포용법</h3>
            <div style={{ marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>시행일</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--status-warning)', fontWeight: 600 }}>2026.1</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>대상</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-primary)' }}>공공기관·전자출판</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>리스크</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--status-warning)', fontWeight: 600 }}>컴플라이언스 리스크</span>
              </div>
            </div>
          </div>

          <div className="slide-card" style={{ borderTop: '4px solid var(--slide-text-tertiary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: '1.25rem' }}>🇰🇷</span>
              <span className="slide-badge" style={{ background: 'var(--slide-bg-tertiary)', color: 'var(--slide-text-secondary)' }}>TTA 표준</span>
            </div>
            <h3 className="slide-card-title" style={{ fontSize: '0.9rem' }}>PDF 접근성 가이드라인</h3>
            <div style={{ marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>시행일</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-primary)', fontWeight: 600 }}>2025.4</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>대상</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-primary)' }}>공공기관 (권장)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>리스크</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--status-warning)', fontWeight: 600 }}>컴플라이언스 리스크</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
