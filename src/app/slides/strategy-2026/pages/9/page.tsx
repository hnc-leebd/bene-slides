import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { TrendingUp, Target, Users, Shield, AlertCircle } from 'lucide-react';

const TOTAL_PAGES = 20;

export default function Slide9() {
  return (
    <SlideLayout currentPage={9} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Executive Summary</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            시장 진입 분석 요약
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2" style={{ marginBottom: 28 }}>
            IDP/문서 파서 시장 기회 vs 진입 요건
          </p>
        </div>

        <div className="slide-content-area">
          {/* Two Column Layout */}
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
            marginBottom: 20
          }}>
            {/* Left: Market Opportunity */}
            <div style={{
              background: 'var(--slide-bg-card)',
              border: '1px solid var(--slide-border-subtle)',
              borderRadius: 16,
              overflow: 'hidden'
            }}>
              {/* Header */}
              <div style={{
                padding: '14px 20px',
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(14, 165, 233, 0.06) 100%)',
                borderBottom: '1px solid var(--track-1-border)',
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}>
                <TrendingUp size={18} color="var(--track-1-primary)" />
                <span style={{
                  fontFamily: 'var(--slide-font-display)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: 'var(--track-1-primary)'
                }}>
                  시장 기회
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '16px 20px' }}>
                {/* Market Size */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 8,
                    marginBottom: 4
                  }}>
                    <span style={{
                      fontFamily: 'var(--slide-font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: 'var(--track-1-primary)'
                    }}>
                      $12B~$67B
                    </span>
                    <span style={{
                      fontFamily: 'var(--slide-font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--status-positive)',
                      background: 'rgba(34, 197, 94, 0.15)',
                      padding: '2px 6px',
                      borderRadius: 4
                    }}>
                      CAGR 30%+
                    </span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--slide-font-body)',
                    fontSize: '0.75rem',
                    color: 'var(--slide-text-tertiary)'
                  }}>
                    IDP 전체 시장 규모 (2030s 전망)
                  </p>
                </div>

                {/* Key Metrics */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10
                }}>
                  <MetricRow
                    label="인보이스 OCR"
                    value="$2.8B → $47.1B"
                    subtext="CAGR 32.6%"
                    color="var(--track-1-primary)"
                  />
                  <MetricRow
                    label="BFSI 점유율"
                    value="~40%"
                    subtext="고부가 타겟 고객"
                    color="var(--track-1-primary)"
                  />
                  <MetricRow
                    label="핵심 수요"
                    value="OCR 99.9%+"
                    subtext="악조건 문서, 복잡한 표"
                    color="var(--track-1-primary)"
                  />
                </div>
              </div>
            </div>

            {/* Right: Entry Requirements */}
            <div style={{
              background: 'var(--slide-bg-card)',
              border: '1px solid var(--slide-border-subtle)',
              borderRadius: 16,
              overflow: 'hidden'
            }}>
              {/* Header */}
              <div style={{
                padding: '14px 20px',
                background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.12) 0%, rgba(100, 116, 139, 0.06) 100%)',
                borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}>
                <Target size={18} color="var(--slide-text-tertiary)" />
                <span style={{
                  fontFamily: 'var(--slide-font-display)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: 'var(--slide-text-secondary)'
                }}>
                  진입 요건
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '16px 20px' }}>
                {/* Competition */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 8,
                    marginBottom: 4
                  }}>
                    <span style={{
                      fontFamily: 'var(--slide-font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: 'var(--slide-text-secondary)'
                    }}>
                      6+
                    </span>
                    <span style={{
                      fontFamily: 'var(--slide-font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--slide-text-tertiary)'
                    }}>
                      주요 경쟁사
                    </span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--slide-font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--slide-text-muted)'
                  }}>
                    Google · AWS · Upstage · Docling · Marker · MinerU
                  </p>
                </div>

                {/* Requirements */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10
                }}>
                  <RequirementRow
                    icon={<Users size={14} />}
                    label="필수 인력"
                    value="ML 3+ / 인프라 2+ / 운영 2+"
                  />
                  <RequirementRow
                    icon={<Shield size={14} />}
                    label="고객 요건"
                    value="SLA 보장, 온프레미스, 다국어"
                  />
                  <RequirementRow
                    icon={<AlertCircle size={14} />}
                    label="차별화 조건"
                    value="OCR 정확도 99.9%+ 필수"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Insight Box */}
          <div className="animate-slide-in stagger-4" style={{
            background: 'var(--slide-bg-tertiary)',
            border: '1px solid var(--slide-border-subtle)',
            borderRadius: 12,
            padding: '16px 20px',
            display: 'flex',
            gap: 16,
            alignItems: 'flex-start'
          }}>
            {/* Accent Bar */}
            <div style={{
              width: 4,
              height: 48,
              borderRadius: 2,
              background: 'var(--track-1-gradient)',
              flexShrink: 0
            }} />

            <div style={{ flex: 1 }}>
              <p style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                color: 'var(--slide-text-primary)',
                marginBottom: 6
              }}>
                핵심 인사이트
              </p>
              <p style={{
                fontFamily: 'var(--slide-font-body)',
                fontSize: '0.8125rem',
                color: 'var(--slide-text-secondary)',
                lineHeight: 1.6,
                margin: 0
              }}>
                <strong style={{ color: 'var(--slide-text-primary)' }}>단순 오피스 포맷 지원</strong>은
                오픈소스 10개+ 존재로 차별화 불가.{' '}
                <strong style={{ color: 'var(--track-1-primary)' }}>OCR/ML 역량 확보 여부</strong>가
                시장 진입 성공의 핵심 변수.
              </p>
            </div>

            {/* Quick Reference */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              paddingLeft: 16,
              borderLeft: '1px solid var(--slide-border-subtle)'
            }}>
              <CompareItem label="Office 포맷" value="2~4주" note="차별화 ✕" negative />
              <CompareItem label="OCR/ML" value="ML 3명+" note="차별화 ○" />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Metric Row Component
function MetricRow({
  label,
  value,
  subtext,
  color
}: {
  label: string;
  value: string;
  subtext: string;
  color: string;
}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 12px',
      background: 'rgba(255, 255, 255, 0.02)',
      borderRadius: 8,
      border: '1px solid var(--slide-border-subtle)'
    }}>
      <span style={{
        fontFamily: 'var(--slide-font-body)',
        fontSize: '0.75rem',
        color: 'var(--slide-text-tertiary)'
      }}>
        {label}
      </span>
      <div style={{ textAlign: 'right' }}>
        <span style={{
          fontFamily: 'var(--slide-font-display)',
          fontSize: '0.875rem',
          fontWeight: 700,
          color: color
        }}>
          {value}
        </span>
        <span style={{
          fontFamily: 'var(--slide-font-mono)',
          fontSize: '0.625rem',
          color: 'var(--slide-text-muted)',
          marginLeft: 6
        }}>
          {subtext}
        </span>
      </div>
    </div>
  );
}

// Requirement Row Component
function RequirementRow({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 12px',
      background: 'rgba(255, 255, 255, 0.02)',
      borderRadius: 8,
      border: '1px solid var(--slide-border-subtle)'
    }}>
      <div style={{ color: 'var(--slide-text-muted)' }}>
        {icon}
      </div>
      <span style={{
        fontFamily: 'var(--slide-font-body)',
        fontSize: '0.75rem',
        color: 'var(--slide-text-tertiary)',
        minWidth: 60
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: 'var(--slide-font-mono)',
        fontSize: '0.75rem',
        color: 'var(--slide-text-secondary)',
        flex: 1,
        textAlign: 'right'
      }}>
        {value}
      </span>
    </div>
  );
}

// Compare Item Component
function CompareItem({
  label,
  value,
  note,
  negative
}: {
  label: string;
  value: string;
  note: string;
  negative?: boolean;
}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
      <span style={{
        fontFamily: 'var(--slide-font-body)',
        fontSize: '0.6875rem',
        color: 'var(--slide-text-muted)',
        minWidth: 56
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: 'var(--slide-font-mono)',
        fontSize: '0.6875rem',
        fontWeight: 600,
        color: negative ? 'var(--slide-text-tertiary)' : 'var(--track-1-primary)'
      }}>
        {value}
      </span>
      <span style={{
        fontFamily: 'var(--slide-font-mono)',
        fontSize: '0.5625rem',
        color: negative ? 'var(--status-negative)' : 'var(--status-positive)'
      }}>
        {note}
      </span>
    </div>
  );
}
