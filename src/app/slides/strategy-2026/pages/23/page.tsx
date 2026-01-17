import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Trophy, Medal, Award, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const TOTAL_PAGES = 24;

export default function Slide23() {
  return (
    <SlideLayout currentPage={23} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Recommendation</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            최종 권고사항
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            우선순위별 전략 권고
          </p>
        </div>

        <div className="slide-content-area" style={{ width: 888, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* 1st Place */}
          <div className="rank-card gold animate-slide-in stagger-3">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Trophy size={28} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    color: '#fbbf24'
                  }}>
                    1순위
                  </span>
                  <span style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: 'var(--slide-text-primary)'
                  }}>
                    트랙 2 - PDF 접근성
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <CheckCircle size={16} color="var(--status-positive)" />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--slide-text-secondary)' }}>현재 리소스와 가장 적합</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <CheckCircle size={16} color="var(--status-positive)" />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--slide-text-secondary)' }}>veraPDF 외주 시너지 극대화</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <CheckCircle size={16} color="var(--status-positive)" />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--slide-text-secondary)' }}>EAA 규제로 단기 수요 확실</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <CheckCircle size={16} color="var(--status-positive)" />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--slide-text-secondary)' }}>SMB 타겟으로 진입 가능</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd Place */}
          <div className="rank-card silver animate-slide-in stagger-4">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Medal size={28} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    color: '#94a3b8'
                  }}>
                    2순위
                  </span>
                  <span style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: 'var(--slide-text-primary)'
                  }}>
                    트랙 3 - PDF→HTML (조건부)
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <AlertTriangle size={16} color="var(--status-warning)" />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--slide-text-secondary)' }}>B2B2B 파트너십 확보 시 고려</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <AlertTriangle size={16} color="var(--status-warning)" />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--slide-text-secondary)' }}>특정 버티컬 집중 전략 필요</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="rank-card bronze animate-slide-in stagger-5">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: 'linear-gradient(135deg, #b45309 0%, #92400e 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Award size={28} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    color: '#b45309'
                  }}>
                    3순위
                  </span>
                  <span style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: 'var(--slide-text-primary)'
                  }}>
                    트랙 1 - 포맷 확장 (비권고)
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <XCircle size={16} color="var(--status-negative)" />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--slide-text-secondary)' }}>ML/OCR 추가 투자 필요</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <XCircle size={16} color="var(--status-negative)" />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--slide-text-secondary)' }}>레드오션 시장, ROI 불확실</span>
                  </div>
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
