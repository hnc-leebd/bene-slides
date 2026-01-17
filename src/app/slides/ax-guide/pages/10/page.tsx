import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide10() {
  return (
    <SlideLayout currentPage={10} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 3: 사례 1 - 성공</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          실전 사례 1: PDF 파싱 <span className="ax-header-glow">벤치마크 1등</span>
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          복잡한 문제도 컨텍스트 엔지니어링으로 해결 가능
        </p>

        <div className="ax-columns ax-animate-up ax-stagger-3">
          <div className="ax-card ax-card-danger">
            <h4 style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              color: 'var(--ax-neon-red)',
              marginBottom: '16px'
            }}>
              문제 상황
            </h4>
            <ul className="ax-list">
              <li>오픈소스 PDF 파서의 테이블 인식 정확도 한계</li>
              <li>기존 방식: Java 휴리스틱 vs AI 백엔드 양자택일</li>
              <li>둘 다 장단점이 명확함</li>
            </ul>
          </div>

          <div className="ax-card ax-card-success">
            <h4 style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              color: 'var(--ax-neon-green)',
              marginBottom: '16px'
            }}>
              목표
            </h4>
            <ul className="ax-list">
              <li>두 방식의 장점을 결합한 하이브리드 시스템</li>
              <li>글로벌 벤치마크에서 검증 가능한 성과</li>
            </ul>
          </div>
        </div>

        <div className="ax-mt-10 ax-animate-up ax-stagger-4">
          <div style={{
            fontFamily: 'var(--ax-font-mono)',
            fontSize: '0.75rem',
            color: 'var(--ax-neon-cyan)',
            marginBottom: '12px',
            letterSpacing: '0.1em'
          }}>
            WHY THIS MATTERS
          </div>
          <div className="ax-card ax-card-glow">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                fontFamily: 'var(--ax-font-mono)',
                fontSize: '3rem',
                color: 'var(--ax-neon-cyan)',
                textShadow: 'var(--ax-glow-text-cyan)'
              }}>
                13
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--ax-font-display)',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                  color: 'var(--ax-text-bright)',
                  marginBottom: '4px'
                }}>
                  개의 Sub-agent + 루프 설계
                </div>
                <div style={{
                  fontFamily: 'var(--ax-font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--ax-text-secondary)'
                }}>
                  Claude Code를 활용한 체계적 분할 정복
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
