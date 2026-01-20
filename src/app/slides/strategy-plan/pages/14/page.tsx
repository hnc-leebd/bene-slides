import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Brain, Workflow, Eye, TableProperties, Image, ListOrdered, FileCheck, BarChart, Layers } from 'lucide-react';

const TOTAL_PAGES = 33;

const aiFeatures = [
  { icon: Eye, name: 'AI 기반 레이아웃 분석', desc: '문서 구조 자동 인식', tech: 'Vision AI' },
  { icon: TableProperties, name: '복잡한 표/그래프 처리', desc: '병합셀, 다중헤더 구조화', tech: '테이블 파서' },
  { icon: Image, name: '대체 텍스트 자동 생성', desc: '이미지 설명 자동 생성', tech: 'Image Captioning' },
  { icon: ListOrdered, name: '읽기 순서 최적화', desc: '스크린 리더 최적화', tech: '구조 분석' },
];

const workflowFeatures = [
  { icon: Workflow, name: 'Auto Tagging 후처리 웹앱', desc: '자동 태깅 결과 수정 UI', integration: '자체 개발' },
  { icon: FileCheck, name: 'veraPDF 연동 검증', desc: 'PDF/UA 표준 준수 검증', integration: 'veraPDF API' },
  { icon: BarChart, name: '접근성 리포트 생성', desc: 'EAA 컴플라이언스 리포트', integration: '자동 생성' },
  { icon: Layers, name: '배치 처리', desc: '대량 문서 일괄 처리', integration: '백엔드' },
];

export default function Slide14() {
  return (
    <SlideLayout currentPage={14} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Products</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 2 제품 구성
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            AI 기반 PDF/UA + End-to-end 워크플로우
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24
          }}>
            {/* AI-based PDF/UA */}
            <div className="slide-card slide-card-track-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: 'var(--track-2-gradient)',
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
                    color: 'var(--track-2-primary)'
                  }}>PRODUCT 1</span>
                  <h3 style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-primary)'
                  }}>AI 기반 고품질 PDF/UA</h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {aiFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} style={{
                      padding: '10px 12px',
                      background: 'var(--slide-bg-elevated)',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12
                    }}>
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: 6,
                        background: 'rgba(168, 85, 247, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Icon size={16} color="var(--track-2-primary)" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{feature.name}</span>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', marginTop: 2 }}>{feature.desc}</p>
                      </div>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        color: 'var(--track-2-primary)',
                        background: 'rgba(168, 85, 247, 0.1)',
                        padding: '2px 6px',
                        borderRadius: 3
                      }}>{feature.tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PDF/UA Workflow */}
            <div className="slide-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: 'var(--slide-bg-elevated)',
                  border: '2px solid var(--track-2-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Workflow size={22} color="var(--track-2-primary)" />
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--slide-font-mono)',
                    fontSize: '0.875rem',
                    color: 'var(--track-2-primary)'
                  }}>PRODUCT 2</span>
                  <h3 style={{
                    fontFamily: 'var(--slide-font-display)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--slide-text-primary)'
                  }}>PDF/UA 워크플로우</h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {workflowFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} style={{
                      padding: '10px 12px',
                      background: 'var(--slide-bg-elevated)',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12
                    }}>
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: 6,
                        background: 'var(--slide-bg-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Icon size={16} color="var(--slide-text-secondary)" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{feature.name}</span>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--slide-text-tertiary)', marginTop: 2 }}>{feature.desc}</p>
                      </div>
                      <span style={{
                        fontFamily: 'var(--slide-font-mono)',
                        fontSize: '0.875rem',
                        color: 'var(--slide-text-muted)',
                        background: 'var(--slide-bg-tertiary)',
                        padding: '2px 6px',
                        borderRadius: 3
                      }}>{feature.integration}</span>
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
