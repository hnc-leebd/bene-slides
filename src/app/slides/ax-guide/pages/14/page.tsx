import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide14() {
  return (
    <SlideLayout currentPage={14} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 4: 사례 2 - 실패</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          왜 폐기했나?
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          도구보다 워크플로우 설계가 핵심이었습니다
        </p>

        <div className="ax-highlight-box ax-animate-up ax-stagger-3" style={{
          borderColor: 'var(--ax-neon-red)',
          background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.08), rgba(255, 51, 102, 0.02))'
        }}>
          <div style={{
            fontFamily: 'var(--ax-font-display)',
            fontSize: '2rem',
            fontWeight: 700,
            color: 'var(--ax-text-bright)',
            marginBottom: '16px'
          }}>
            실제 워크플로우와 맞지 않았습니다
          </div>
          <ul className="ax-list" style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
            <li>도구는 바꿨지만, 문제는 그대로</li>
            <li>n8n → LangGraph: 같은 실패</li>
            <li style={{ color: 'var(--ax-neon-yellow)', fontWeight: 600 }}>
              기술이 아니라 설계가 문제였음
            </li>
          </ul>
        </div>

        <div className="ax-columns ax-mt-10 ax-animate-up ax-stagger-4">
          <div className="ax-card ax-card-danger">
            <h4 style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              color: 'var(--ax-neon-red)',
              marginBottom: '16px'
            }}>
              잘못된 접근
            </h4>
            <div style={{
              fontFamily: 'var(--ax-font-body)',
              color: 'var(--ax-text-secondary)',
              lineHeight: 1.8
            }}>
              &quot;좋은 도구를 쓰면 해결되겠지&quot;<br/>
              → 도구만 바꾸고 같은 설계 반복<br/>
              → 같은 실패 반복
            </div>
          </div>

          <div className="ax-card ax-card-success">
            <h4 style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              color: 'var(--ax-neon-green)',
              marginBottom: '16px'
            }}>
              올바른 접근
            </h4>
            <div style={{
              fontFamily: 'var(--ax-font-body)',
              color: 'var(--ax-text-secondary)',
              lineHeight: 1.8
            }}>
              &quot;워크플로우를 먼저 이해하자&quot;<br/>
              → Knowledge Base 먼저 정리<br/>
              → 그 다음 도구 선택
            </div>
          </div>
        </div>

        <div className="ax-card ax-card-glow ax-mt-10 ax-animate-up ax-stagger-5">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div style={{
              fontFamily: 'var(--ax-font-mono)',
              fontSize: '2.5rem',
              color: 'var(--ax-neon-cyan)',
              textShadow: 'var(--ax-glow-text-cyan)'
            }}>
              →
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--ax-font-body)',
                fontSize: '1.125rem',
                color: 'var(--ax-text-bright)',
                marginBottom: '4px'
              }}>
                도구보다 <strong style={{ color: 'var(--ax-neon-yellow)' }}>워크플로우 설계(Knowledge Base)</strong>가 핵심
              </div>
              <div style={{
                fontFamily: 'var(--ax-font-body)',
                fontSize: '0.9375rem',
                color: 'var(--ax-text-muted)'
              }}>
                다시 개발 예정: 워크플로우 재설계부터
              </div>
            </div>
          </div>
        </div>

        <div className="ax-mt-8 ax-animate-up ax-stagger-6" style={{
          textAlign: 'center',
          fontFamily: 'var(--ax-font-mono)',
          fontSize: '0.8125rem',
          color: 'var(--ax-text-muted)'
        }}>
          &quot;저도 실패했습니다&quot; - 실패에서 배운 것이 핵심 메시지를 강화합니다
        </div>
      </div>
    </SlideLayout>
  );
}
