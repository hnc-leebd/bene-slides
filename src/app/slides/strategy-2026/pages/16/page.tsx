import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { CheckCircle, AlertTriangle, Zap, Target } from 'lucide-react';

const TOTAL_PAGES = 24;

export default function Slide16() {
  return (
    <SlideLayout currentPage={16} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Conclusion</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 2 결론
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            SWOT 스타일 분석
          </p>
        </div>

        <div className="slide-content-area">
          <div className="slide-grid-2x2 animate-slide-in stagger-3" style={{ width: 888, margin: '0 auto' }}>
          <div className="slide-card" style={{ borderTop: '4px solid var(--status-positive)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Zap size={20} color="var(--status-positive)" />
              <h3 style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 600,
                color: 'var(--status-positive)'
              }}>
                강점
              </h3>
            </div>
            <ul className="slide-list" style={{ marginBottom: 0 }}>
              <li>veraPDF 파트너십</li>
              <li>웹앱 개발 역량</li>
            </ul>
          </div>

          <div className="slide-card" style={{ borderTop: '4px solid var(--track-2-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Target size={20} color="var(--track-2-primary)" />
              <h3 style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 600,
                color: 'var(--track-2-primary)'
              }}>
                시장 기회
              </h3>
            </div>
            <ul className="slide-list track-2" style={{ marginBottom: 0 }}>
              <li>EAA 단기 수요급증</li>
              <li>SMB 가격경쟁력</li>
            </ul>
          </div>

          <div className="slide-card" style={{ borderTop: '4px solid var(--status-warning)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <AlertTriangle size={20} color="var(--status-warning)" />
              <h3 style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 600,
                color: 'var(--status-warning)'
              }}>
                약점/리스크
              </h3>
            </div>
            <ul className="slide-list track-3" style={{ marginBottom: 0 }}>
              <li>AI Auto-Tagging: 자체 ML 없음</li>
              <li>기존 플레이어 (Adobe, Allyant)</li>
            </ul>
          </div>

          <div className="slide-card slide-card-track-2" style={{ borderTop: '4px solid var(--track-1-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <CheckCircle size={20} color="var(--track-1-primary)" />
              <h3 style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 600,
                color: 'var(--track-1-primary)'
              }}>
                권고사항
              </h3>
            </div>
            <ul className="slide-list" style={{ marginBottom: 0 }}>
              <li style={{ color: 'var(--status-positive)' }}>
                <strong>현재 리소스와 가장 적합한 전략</strong>
              </li>
              <li>veraPDF 협력강화</li>
              <li>SMB 타겟 권장</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
