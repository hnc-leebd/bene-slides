import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Brain, FileText, Languages, Clock, Search, Cpu, Cloud, Shield } from 'lucide-react';

const TOTAL_PAGES = 33;

const docAIFeatures = [
  { icon: Cpu, req: 'Hancom AI Model', spec: 'OCR/표/차트/수식', target: 'AI 조직 연계' },
  { icon: Cloud, req: 'Hancom AI Service', spec: '한컴피디아/한컴어시스턴트 등', target: '기존 서비스 연동' },
  { icon: Shield, req: '감사 추적', spec: 'Audit Trail, 처리 이력 로깅', target: '금융/법률' },
];

const ocrRequirements = [
  { icon: Search, req: '문자 인식률', spec: '99.5%+', target: '전 산업' },
  { icon: Clock, req: '가용성 SLA', spec: '99.9%+', target: '금융, 의료' },
  { icon: FileText, req: '도메인 특화', spec: '금융 서식, 법률 문서, 의료 차트', target: '각 산업별' },
  { icon: Languages, req: '다국어 지원', spec: '한/영/일/중 등', target: '글로벌 기업' },
];

export default function Slide8() {
  return (
    <SlideLayout currentPage={8} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Products</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 1 제품 구성
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            문서 AI 연동 + 커스텀 OCR 모델
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24
          }}>
            {/* Document AI Integration */}
            <div className="slide-card slide-card-track-1">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: 'var(--track-1-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Brain size={22} color="white" />
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--slide-font-mono)',
                    fontSize: '0.875rem',
                    color: 'var(--track-1-primary)'
                  }}>PRODUCT 1</span>
                  <h3 style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-primary)'
                  }}>문서 AI 연동</h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {docAIFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} style={{
                      padding: '10px 12px',
                      background: 'var(--slide-bg-elevated)',
                      borderRadius: 6,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12
                    }}>
                      <Icon size={16} color="var(--track-1-primary)" />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{feature.req}</span>
                        <span style={{
                          fontFamily: 'var(--slide-font-mono)',
                          fontSize: '0.875rem',
                          color: 'var(--track-1-primary)',
                          marginLeft: 8
                        }}>{feature.spec}</span>
                      </div>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        color: 'var(--slide-text-muted)'
                      }}>{feature.target}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Custom OCR Model */}
            <div className="slide-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: 'var(--slide-bg-elevated)',
                  border: '2px solid var(--track-1-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FileText size={22} color="var(--track-1-primary)" />
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--slide-font-mono)',
                    fontSize: '0.875rem',
                    color: 'var(--track-1-primary)'
                  }}>PRODUCT 2</span>
                  <h3 style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-primary)'
                  }}>커스텀 OCR 모델</h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {ocrRequirements.map((req, idx) => {
                  const Icon = req.icon;
                  return (
                    <div key={idx} style={{
                      padding: '10px 12px',
                      background: 'var(--slide-bg-elevated)',
                      borderRadius: 6,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12
                    }}>
                      <Icon size={16} color="var(--track-1-primary)" />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{req.req}</span>
                        <span style={{
                          fontFamily: 'var(--slide-font-mono)',
                          fontSize: '0.875rem',
                          color: 'var(--track-1-primary)',
                          marginLeft: 8
                        }}>{req.spec}</span>
                      </div>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        color: 'var(--slide-text-muted)'
                      }}>{req.target}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
