import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Building2, Users, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const TOTAL_PAGES = 18;

const bigPlayers = [
  { company: 'Adobe', size: '~30,700명', feature: 'PDF 창시자', uaVis: '✓', uaNote: '유일한 완성도', sdkQuality: '✓ 우수', price: '$$$ (고가)' },
  { company: 'Apryse (PDFTron)', size: '500-670명', feature: 'iText, PDFlib 인수', uaVis: '✗', uaNote: '없음', sdkQuality: '✓ 우수', price: '$$' },
  { company: 'Foxit', size: '550-1,500명', feature: 'PDFium 기반', uaVis: '△', uaNote: '미흡', sdkQuality: '△', price: '$' },
];

const nichePlayers = [
  { company: 'CommonLook', size: '~80명', hq: '미국', feature: 'ISO PDF/UA 위원회', uaVis: '△' },
  { company: 'Equidox', size: '32-200명', hq: '미국', feature: 'Zone 기반 편집', uaVis: '✗' },
  { company: 'Continual Engine', size: '66-92명', hq: '인도', feature: '교육 특화, AI 기반', uaVis: '△' },
  { company: 'DocAxess', size: '~20명', hq: '프랑스', feature: '대학 R&D 기반', uaVis: '✗' },
  { company: 'PDFix', size: '8명', hq: '슬로바키아', feature: '저가 포지셔닝', uaVis: '△' },
];

export default function Slide9() {
  return (
    <SlideLayout currentPage={9} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Competition</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            트랙 2 경쟁 환경 분석
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            대기업 vs 니치 플레이어 · UA 시각화 = 핵심 차별화
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 20
          }}>
            {/* Big Players */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--status-negative)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <Building2 size={18} color="var(--status-negative)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  대기업
                </h3>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '6px 8px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>회사</th>
                    <th style={{ padding: '6px 8px', textAlign: 'left', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>규모</th>
                    <th style={{ padding: '6px 8px', textAlign: 'center', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>UA 시각화</th>
                    <th style={{ padding: '6px 8px', textAlign: 'center', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>SDK</th>
                    <th style={{ padding: '6px 8px', textAlign: 'right', color: 'var(--slide-text-tertiary)', fontWeight: 600, borderBottom: '1px solid var(--slide-border-subtle)' }}>가격</th>
                  </tr>
                </thead>
                <tbody>
                  {bigPlayers.map((player, idx) => (
                    <tr key={idx}>
                      <td style={{ padding: '8px', color: 'var(--slide-text-primary)', fontWeight: 500, borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        <div>{player.company}</div>
                        <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>{player.feature}</span>
                      </td>
                      <td style={{ padding: '8px', fontFamily: 'var(--slide-font-mono)', fontSize: '0.875rem', color: 'var(--slide-text-secondary)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {player.size}
                      </td>
                      <td style={{ padding: '8px', textAlign: 'center', color: player.uaVis === '✓' ? 'var(--status-positive)' : player.uaVis === '✗' ? 'var(--status-negative)' : 'var(--status-warning)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        <div>{player.uaVis}</div>
                        <span style={{ fontSize: '0.875rem', color: 'var(--slide-text-muted)' }}>{player.uaNote}</span>
                      </td>
                      <td style={{ padding: '8px', textAlign: 'center', color: player.sdkQuality === '✓ 우수' ? 'var(--status-positive)' : 'var(--slide-text-muted)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {player.sdkQuality}
                      </td>
                      <td style={{ padding: '8px', textAlign: 'right', fontFamily: 'var(--slide-font-mono)', color: 'var(--status-negative)', borderBottom: '1px solid var(--slide-border-subtle)' }}>
                        {player.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Niche Players */}
            <div className="slide-card" style={{ borderTop: '4px solid var(--track-2-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <Users size={18} color="var(--track-2-primary)" />
                <h3 style={{ fontFamily: 'var(--slide-font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--slide-text-primary)' }}>
                  니치 플레이어
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                {nichePlayers.map((player, idx) => (
                  <div key={idx} style={{
                    padding: '6px 8px',
                    background: 'var(--slide-bg-elevated)',
                    borderRadius: 5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--slide-text-primary)' }}>{player.company}</span>
                      <div style={{ fontSize: '0.75rem', color: 'var(--slide-text-muted)', marginTop: 1 }}>{player.size} · {player.hq}</div>
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: player.uaVis === '✗' ? 'var(--status-negative)' : 'var(--status-warning)',
                      whiteSpace: 'nowrap'
                    }}>UA {player.uaVis}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="animate-slide-in stagger-4" style={{
            marginTop: 16,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12
          }}>
            <div style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', borderRadius: 8, borderLeft: '3px solid var(--track-2-primary)' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--track-2-primary)', fontWeight: 600 }}>UA 시각화</span>
              <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', marginTop: 4 }}>Adobe만 완성도 있음, 나머지는 미제공/버그</p>
            </div>
            <div style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', borderRadius: 8, borderLeft: '3px solid var(--status-positive)' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--status-positive)', fontWeight: 600 }}>가격 갭</span>
              <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', marginTop: 4 }}>Adobe 고가 → 합리적 가격의 고품질 솔루션 부재</p>
            </div>
            <div style={{ padding: '12px 14px', background: 'var(--slide-bg-tertiary)', borderRadius: 8, borderLeft: '3px solid var(--status-warning)' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--status-warning)', fontWeight: 600 }}>기회 영역</span>
              <p style={{ fontSize: '0.875rem', color: 'var(--slide-text-secondary)', marginTop: 4 }}>100% 자동 태깅 AI 솔루션 현재 부재</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
