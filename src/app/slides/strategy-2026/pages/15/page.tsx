import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { CheckCircle, AlertTriangle, Link } from 'lucide-react';

const TOTAL_PAGES = 24;

export default function Slide15() {
  return (
    <SlideLayout currentPage={15} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Validation</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            니치마켓 검증
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            수요/공급 분석 및 veraPDF 시너지
          </p>
        </div>

        <div className="slide-content-area" style={{ width: 888, margin: '0 auto' }}>
          <div className="slide-columns" style={{ marginBottom: 24 }}>
          <div className="slide-card slide-card-success animate-slide-in stagger-3">
            <h3 style={{
              fontFamily: 'var(--slide-font-display)',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--status-positive)',
              marginBottom: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              <CheckCircle size={20} />
              수요 측면
            </h3>
            <ul className="slide-list" style={{ marginBottom: 0 }}>
              <li style={{ color: 'var(--slide-text-primary)' }}>
                EAA 시행 → EU 기업 필수 대응
              </li>
              <li style={{ color: 'var(--slide-text-primary)' }}>
                대량 문서 보유 기업 자동화 필수
              </li>
              <li style={{ color: 'var(--slide-text-primary)' }}>
                수동 비용: <strong style={{ color: 'var(--track-3-primary)' }}>$30K-$80K/사이트</strong>
              </li>
            </ul>
          </div>

          <div className="slide-card slide-card-warning animate-slide-in stagger-4">
            <h3 style={{
              fontFamily: 'var(--slide-font-display)',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--status-warning)',
              marginBottom: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              <AlertTriangle size={20} />
              공급 측면 갭
            </h3>
            <ul className="slide-list track-3" style={{ marginBottom: 0 }}>
              <li style={{ color: 'var(--slide-text-primary)' }}>
                100% 자동화 솔루션 부재
              </li>
              <li style={{ color: 'var(--slide-text-primary)' }}>
                대기업 솔루션 고가
              </li>
              <li style={{ color: 'var(--slide-text-primary)' }}>
                <strong style={{ color: 'var(--track-3-primary)' }}>SMB 시장 기회 존재</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="animate-slide-in stagger-5" style={{
          background: 'linear-gradient(135deg, var(--track-1-bg) 0%, var(--track-2-bg) 100%)',
          border: '2px solid rgba(6, 182, 212, 0.3)',
          borderRadius: 16,
          padding: 24
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'var(--track-1-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Link size={24} color="white" />
            </div>
            <div>
              <h3 style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--track-1-primary)',
                marginBottom: 8
              }}>
                veraPDF 시너지
              </h3>
              <ul className="slide-list" style={{ marginBottom: 0 }}>
                <li style={{ color: 'var(--slide-text-primary)' }}>
                  PDF/UA 검증 및 태깅 기술 보유
                </li>
                <li style={{ color: 'var(--slide-text-primary)' }}>
                  웹앱 + veraPDF 연동 = <strong style={{ color: 'var(--track-2-primary)' }}>End-to-end 솔루션</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
