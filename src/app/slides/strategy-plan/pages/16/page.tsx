import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { CheckCircle, Handshake, Target, TrendingUp } from 'lucide-react';

const TOTAL_PAGES = 33;

const demandFactors = [
  { factor: 'EAA 시행', scope: 'EU 27개국 기업 필수 대응', urgency: '즉시' },
  { factor: '대량 문서 보유 기업', scope: '자동화 필수 (수동 불가)', urgency: '즉시' },
  { factor: '수동 Remediation 비용', scope: '$30K-$80K/사이트', urgency: '비용 절감' },
];

const supplyGaps = [
  { gap: '100% 자동화', current: '솔루션 부재', opportunity: 'AI 기반 솔루션' },
  { gap: '대기업 솔루션', current: '고가 (SMB 진입 장벽)', opportunity: '가격 경쟁력' },
];

const veraPDFSynergy = [
  { area: 'PDF/UA 검증', theyProvide: '검증 엔진', weProvide: '웹앱 UI', result: 'End-to-end 솔루션' },
  { area: '태깅 기술', theyProvide: '기술 자문', weProvide: '개발', result: '품질 향상' },
  { area: '표준 참여', theyProvide: 'ISO 위원회 연결', weProvide: '구현', result: '표준 준수' },
];

export default function Slide16() {
  return (
    <SlideLayout currentPage={16} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Validation</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 2 시장 검증
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            수요 vs 공급 갭 + veraPDF 시너지
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16
          }}>
            {/* Demand */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--track-2-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <TrendingUp size={18} color="var(--track-2-primary)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  수요 측면
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {demandFactors.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '10px 12px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 6
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.factor}</span>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--track-2-primary)',
                        background: 'rgba(168, 85, 247, 0.1)',
                        padding: '2px 6px',
                        borderRadius: 3
                      }}>{item.urgency}</span>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>{item.scope}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Supply Gap */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--track-2-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <Target size={18} color="var(--track-2-primary)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  공급 측면 갭
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {supplyGaps.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '10px 12px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 6,
                    borderLeft: '3px solid var(--track-2-primary)'
                  }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{item.gap}</span>
                    <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-muted)' }}>현황:</span>
                        <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>{item.current}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--status-positive)' }}>기회:</span>
                        <span style={{ fontSize: '0.8125rem', color: 'var(--status-positive)', fontWeight: 500 }}>{item.opportunity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* veraPDF Synergy */}
            <div className="slide-card slide-card-track-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <Handshake size={18} color="var(--track-2-primary)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  veraPDF 시너지
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {veraPDFSynergy.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '10px 12px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 6
                  }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--track-2-primary)' }}>{item.area}</span>
                    <div style={{ marginTop: 6, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-muted)' }}>veraPDF</span>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>{item.theyProvide}</p>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--slide-text-muted)' }}>우리</span>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)' }}>{item.weProvide}</p>
                      </div>
                    </div>
                    <div style={{ marginTop: 6, paddingTop: 6, borderTop: '1px solid var(--slide-border-subtle)' }}>
                      <CheckCircle size={10} color="var(--status-positive)" style={{ display: 'inline', marginRight: 4 }} />
                      <span style={{ fontSize: '0.8125rem', color: 'var(--status-positive)' }}>{item.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
