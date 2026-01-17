import '../../slides.css';
import { SlideLayout } from '../../components';

export default function Slide4() {
  return (
    <SlideLayout currentPage={4} totalPages={17}>
      <div className="ax-main">
        <div className="ax-section-tag ax-animate-fade">Part 1: 전략</div>
        <h2 className="ax-header ax-animate-up ax-stagger-1">
          우선 해결해야 하는 <span className="ax-header-glow">병목</span>
        </h2>
        <p className="ax-subheader ax-animate-up ax-stagger-2">
          Model과 Call은 빅테크가 해결합니다
        </p>

        <div className="ax-table-wrapper ax-animate-up ax-stagger-3">
          <table className="ax-table">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>영역</th>
                <th style={{ width: '35%' }}>현재 상황</th>
                <th style={{ width: '25%' }}>해결 주체</th>
                <th style={{ width: '15%' }}>우선순위</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ax-cell-cyan">Model</td>
                <td>GPT-4, Claude, Gemini 등 빠르게 발전</td>
                <td>빅테크 (OpenAI, Anthropic, Google)</td>
                <td>
                  <span className="ax-badge ax-badge-green">해결됨</span>
                </td>
              </tr>
              <tr style={{ background: 'rgba(0, 255, 245, 0.05)' }}>
                <td className="ax-cell-magenta">Domain Context</td>
                <td style={{ fontWeight: 600, color: 'var(--ax-text-bright)' }}>
                  AI가 우리 회사를 모름 - 해결 불가능한 문제
                </td>
                <td style={{ color: 'var(--ax-neon-yellow)', fontWeight: 700 }}>
                  기업이 직접 해야 함
                </td>
                <td>
                  <span className="ax-badge ax-badge-red">핵심</span>
                </td>
              </tr>
              <tr>
                <td className="ax-cell-orange">Call</td>
                <td>MCP, A2A, Skill 등 도구 연결 표준화 진행 중</td>
                <td>빅테크 + 커뮤니티</td>
                <td>
                  <span className="ax-badge ax-badge-green">진행 중</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ax-columns ax-mt-10 ax-animate-up ax-stagger-4">
          <div className="ax-card ax-card-success">
            <h4 style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              color: 'var(--ax-neon-green)',
              marginBottom: '12px'
            }}>
              빅테크가 해결하는 영역
            </h4>
            <ul className="ax-list">
              <li>모델 성능 향상 (매월 새 모델 출시)</li>
              <li>API 비용 지속 하락</li>
              <li>도구 연결 표준화 (MCP, A2A)</li>
            </ul>
          </div>

          <div className="ax-card ax-card-danger">
            <h4 style={{
              fontFamily: 'var(--ax-font-display)',
              fontWeight: 600,
              color: 'var(--ax-neon-red)',
              marginBottom: '12px'
            }}>
              기업만 해결할 수 있는 영역
            </h4>
            <ul className="ax-list">
              <li>우리 회사의 도메인 지식</li>
              <li>우리 조직의 워크플로우</li>
              <li>우리만의 데이터와 맥락</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
