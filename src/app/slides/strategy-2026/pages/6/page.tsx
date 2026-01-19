import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { TrendingUp, Building2, Scan, Table2, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

const TOTAL_PAGES = 20;

export default function Slide6() {
  return (
    <SlideLayout currentPage={6} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Market Demand</p>
          <h1 className="slide-header animate-slide-in stagger-1" style={{ marginBottom: 24 }}>
            <span className="slide-header-track-1">OCR</span> 엔터프라이즈 수요
          </h1>
        </div>

        <div className="slide-content-area">
          {/* Demo Images - 먼저 시각적 예시 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
          marginBottom: 20,
        }}>
          {/* Image 1: 악조건 OCR */}
          <div className="animate-slide-in stagger-2">
            <div style={{
              background: 'var(--slide-bg-card)',
              border: '1px solid var(--slide-border-subtle)',
              borderRadius: 12,
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '10px 14px',
                borderBottom: '1px solid var(--slide-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <Scan size={14} color="var(--track-1-primary)" />
                <span style={{
                  fontFamily: 'var(--slide-font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--slide-text-secondary)',
                }}>
                  악조건 문서 OCR
                </span>
                <span style={{
                  fontFamily: 'var(--slide-font-mono)',
                  fontSize: '0.5625rem',
                  color: 'var(--slide-text-muted)',
                  marginLeft: 'auto',
                }}>
                  곡면 · 비닐 · 손상
                </span>
              </div>
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '925 / 548',
              }}>
                <Image
                  src="/791f81dc-79d7-41c3-9cae-f1c31b3c93a9.png"
                  alt="악조건 문서 OCR 데모 - 곡면/비닐 포장 상품 정보 추출"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Image 2: 복잡한 표 추출 */}
          <div className="animate-slide-in stagger-3">
            <div style={{
              background: 'var(--slide-bg-card)',
              border: '1px solid var(--slide-border-subtle)',
              borderRadius: 12,
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '10px 14px',
                borderBottom: '1px solid var(--slide-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <Table2 size={14} color="var(--track-1-primary)" />
                <span style={{
                  fontFamily: 'var(--slide-font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--slide-text-secondary)',
                }}>
                  복잡한 표 구조 추출
                </span>
                <span style={{
                  fontFamily: 'var(--slide-font-mono)',
                  fontSize: '0.5625rem',
                  color: 'var(--slide-text-muted)',
                  marginLeft: 'auto',
                }}>
                  병합셀 · 다중헤더
                </span>
              </div>
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '925 / 548',
              }}>
                <Image
                  src="/debf6b7f-71dd-4869-986e-c1eac947b69f.png"
                  alt="복잡한 표 구조 추출 데모 - 스프레드시트 형태 데이터"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 하단 2열 레이아웃: 시장 규모 | 핵심 니즈 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
        }}>
          {/* 좌측: 시장 규모 */}
          <div
            className="animate-slide-in stagger-4"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid var(--slide-border-subtle)',
            }}
          >
            {/* 인보이스 OCR 시장 */}
            <div style={{
              padding: '12px 20px',
              background: 'var(--track-1-bg)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <TrendingUp size={18} color="var(--track-1-primary)" />
              <div>
                <p style={{ fontFamily: 'var(--slide-font-body)', fontSize: '0.625rem', color: 'var(--slide-text-tertiary)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  인보이스 OCR 시장
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontFamily: 'var(--slide-font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--track-1-primary)' }}>
                    $2.8B → $47.1B
                  </span>
                  <span style={{ fontFamily: 'var(--slide-font-mono)', fontSize: '0.6875rem', color: 'var(--status-positive)' }}>
                    CAGR 32.6%
                  </span>
                </div>
              </div>
            </div>
            {/* BFSI 점유율 */}
            <div style={{
              padding: '12px 20px',
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <Building2 size={18} color="var(--track-2-primary)" />
              <div>
                <p style={{ fontFamily: 'var(--slide-font-body)', fontSize: '0.625rem', color: 'var(--slide-text-tertiary)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  BFSI (금융/보험) 점유율
                </p>
                <span style={{ fontFamily: 'var(--slide-font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--track-2-primary)' }}>
                  ~40%
                </span>
              </div>
            </div>
          </div>

          {/* 우측: 핵심 니즈 */}
          <div className="slide-alert slide-alert-warning animate-slide-in stagger-5" style={{ margin: 0, height: '100%', alignItems: 'flex-start' }}>
            <AlertTriangle size={20} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontWeight: 600 }}>핵심 니즈</span>
              <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 2, listStyleType: 'decimal' }}>
                <li>손상/저품질/수기 문서 처리</li>
                <li>복잡한 레이아웃의 정확한 구조화</li>
                <li>정확도 99.9%+ (금액/계좌 오류 무관용)</li>
              </ol>
            </div>
          </div>
        </div>
        </div>

      </div>
    </SlideLayout>
  );
}
