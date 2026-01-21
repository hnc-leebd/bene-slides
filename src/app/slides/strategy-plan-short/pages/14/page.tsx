import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { FileCode, Scale, CheckCircle, AlertTriangle } from 'lucide-react';

const TOTAL_PAGES = 18;

const currentState = [
  { label: '프로젝트', value: 'opendataloader-pdf', note: 'PDF 파싱 오픈소스' },
  { label: '현재 라이선스', value: 'MPL 2.0', note: '파일 단위 카피레프트' },
  { label: 'CLA 확보', value: '완료', note: '라이선스 전환 가능' },
];

const decisions = [
  { label: 'Base 라이선스', options: 'MPL 유지 vs Apache 전환', impact: '확산성 vs 통제력' },
];

const mplBackground = [
  'veraPDF(validation-model, wcag-validation)가 GPL-3.0/MPL-2.0 듀얼 라이선스',
  '의존성 일관성 위해 MPL 선택',
  'CLA 확보 후 전환 옵션 열어둠'
];

export default function Slide14() {
  return (
    <SlideLayout currentPage={14} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Part 2 · Background</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            오픈소스 라이선스 전략 - 배경
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            현재 상태 및 의사결정 필요 사항
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24
          }}>
            {/* Current State */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--track-1-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'var(--track-1-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FileCode size={20} color="white" />
                </div>
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  현재 상태
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {currentState.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '14px 16px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 8
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>{item.label}</span>
                      {item.label === 'CLA 확보' && (
                        <CheckCircle size={14} color="var(--status-positive)" />
                      )}
                    </div>
                    <p style={{
                      fontFamily: item.label === '현재 라이선스' || item.label === '프로젝트' ? 'var(--slide-font-mono)' : 'var(--slide-font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: item.label === 'CLA 확보' ? 'var(--status-positive)' : 'var(--track-1-primary)',
                      marginTop: 4
                    }}>
                      {item.value}
                    </p>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--slide-text-muted)' }}>{item.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decision Needed */}
            <div>
              <div className="slide-card" style={{ borderTop: '4px solid var(--status-warning)', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'var(--status-warning-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Scale size={20} color="white" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                    결정 필요
                  </h3>
                </div>

                {decisions.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '14px 16px',
                    background: 'rgba(245, 158, 11, 0.1)',
                    borderRadius: 8,
                    borderLeft: '3px solid var(--status-warning)'
                  }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>{item.label}</span>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)', marginTop: 4, marginBottom: 6 }}>{item.options}</p>
                    <span style={{ fontSize: '0.875rem', color: 'var(--status-warning)' }}>영향: {item.impact}</span>
                  </div>
                ))}
              </div>

              {/* MPL Background */}
              <div className="slide-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <AlertTriangle size={16} color="var(--slide-text-tertiary)" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>MPL 2.0 채택 배경</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {mplBackground.map((item, idx) => (
                    <li key={idx} style={{
                      padding: '8px 0',
                      paddingLeft: 16,
                      position: 'relative',
                      fontSize: '0.875rem',
                      color: 'var(--slide-text-secondary)',
                      lineHeight: 1.5
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--slide-text-muted)' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
