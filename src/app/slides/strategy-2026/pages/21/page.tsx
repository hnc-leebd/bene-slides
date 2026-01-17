import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const TOTAL_PAGES = 24;

export default function Slide21() {
  return (
    <SlideLayout currentPage={21} totalPages={TOTAL_PAGES} track={3}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 3 · Conclusion</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 3 결론
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            PDF → HTML 렌더링 전략 권장
          </p>
        </div>

        <div className="slide-content-area" style={{ width: 888, margin: '0 auto' }}>
          <div className="slide-columns-3 animate-slide-in stagger-3" style={{ marginBottom: 32 }}>
          <div className="slide-card" style={{ borderTop: '4px solid var(--status-warning)' }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(245, 158, 11, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16
            }}>
              <AlertTriangle size={20} color="var(--status-warning)" />
            </div>
            <h3 className="slide-card-title">SI 통합</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', marginTop: 8 }}>
              SI 영업/구축 조직 필요<br />
              <span className="slide-badge slide-badge-warning" style={{ marginTop: 8, display: 'inline-block' }}>5명+</span>
            </p>
          </div>

          <div className="slide-card" style={{ borderTop: '4px solid var(--status-warning)' }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(245, 158, 11, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16
            }}>
              <AlertTriangle size={20} color="var(--status-warning)" />
            </div>
            <h3 className="slide-card-title">단독 SaaS</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', marginTop: 8 }}>
              플랫폼 + 운영/CS 필요<br />
              <span className="slide-badge slide-badge-warning" style={{ marginTop: 8, display: 'inline-block' }}>3명+</span>
            </p>
          </div>

          <div className="slide-card slide-card-success" style={{ borderTop: '4px solid var(--status-positive)' }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(34, 197, 94, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16
            }}>
              <CheckCircle size={20} color="var(--status-positive)" />
            </div>
            <h3 className="slide-card-title" style={{ color: 'var(--status-positive)' }}>SDK B2B2B</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', marginTop: 8 }}>
              오픈코어 모델 적합<br />
              <span className="slide-badge slide-badge-success" style={{ marginTop: 8, display: 'inline-block' }}>현행 유지</span>
            </p>
          </div>
        </div>

        <div className="animate-slide-in stagger-4" style={{
          background: 'rgba(34, 197, 94, 0.1)',
          border: '2px solid rgba(34, 197, 94, 0.4)',
          borderRadius: 16,
          padding: 24
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <CheckCircle size={24} color="white" />
            </div>
            <div>
              <h3 style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--status-positive)',
                marginBottom: 8
              }}>
                권장: 옵션 3 — SDK B2B2B
              </h3>
              <p style={{
                fontFamily: 'var(--slide-font-body)',
                fontSize: '1rem',
                color: 'var(--slide-text-primary)',
                lineHeight: 1.6
              }}>
                <span style={{ color: 'var(--slide-text-secondary)' }}>
                  • 추가 투자 없이 현행 인력으로 실행 가능<br />
                  • 오픈코어(코어 오픈소스 + 엔터프라이즈 상용) 모델에 적합<br />
                  • SDK 레이어(PDF→HTML, Viewer, 워터마크)에 집중
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
