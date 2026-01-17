import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { XCircle } from 'lucide-react';

const TOTAL_PAGES = 24;

export default function Slide9() {
  return (
    <SlideLayout currentPage={9} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Conclusion</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 1 결론
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            문서 파서 포맷 확장 전략 평가
          </p>
        </div>

        <div className="slide-content-area">
          <div className="slide-columns-3 animate-slide-in stagger-3" style={{ marginBottom: 32 }}>
          <div className="slide-card slide-card-danger">
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(239, 68, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16
            }}>
              <XCircle size={20} color="var(--status-negative)" />
            </div>
            <h3 className="slide-card-title" style={{ color: 'var(--status-negative)' }}>레드오션</h3>
            <p className="slide-card-text">
              오픈소스는 무료, 상용은 대형 플레이어
            </p>
          </div>

          <div className="slide-card slide-card-danger">
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(239, 68, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16
            }}>
              <XCircle size={20} color="var(--status-negative)" />
            </div>
            <h3 className="slide-card-title" style={{ color: 'var(--status-negative)' }}>OCR 99.9%+ 정확도</h3>
            <p className="slide-card-text">
              IDP 시장 40%가 BFSI(금융/보험)<br />
              금액/계좌 오류 무관용, SLA 필수
            </p>
          </div>

          <div className="slide-card slide-card-danger">
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(239, 68, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16
            }}>
              <XCircle size={20} color="var(--status-negative)" />
            </div>
            <h3 className="slide-card-title" style={{ color: 'var(--status-negative)' }}>추가 투자 필요</h3>
            <p className="slide-card-text">
              ML/AI 전문 인력 확보 필수
            </p>
          </div>
        </div>

        <div className="animate-slide-in stagger-4" style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '2px solid rgba(239, 68, 68, 0.4)',
          borderRadius: 16,
          padding: 24,
          width: 888,
          margin: '0 auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'var(--status-negative)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <XCircle size={24} color="white" />
            </div>
            <div>
              <h3 style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--status-negative)',
                marginBottom: 8
              }}>
                비권고
              </h3>
              <p style={{
                fontFamily: 'var(--slide-font-body)',
                fontSize: '1rem',
                color: 'var(--slide-text-primary)',
                lineHeight: 1.6
              }}>
                단순 포맷 확장은 차별화 어려움<br />
                <span style={{ color: 'var(--slide-text-secondary)' }}>
                  OCR/ML 역량 확보 없이는 ROI 확보 어려움
                </span>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
