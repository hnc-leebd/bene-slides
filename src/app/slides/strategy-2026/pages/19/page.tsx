import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { AlertTriangle } from 'lucide-react';

const TOTAL_PAGES = 24;

export default function Slide19() {
  return (
    <SlideLayout currentPage={19} totalPages={TOTAL_PAGES} track={3}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 3 · Requirements</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            기술 요구사항
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            기능별 구현 난이도
          </p>
        </div>

        <div className="slide-content-area" style={{ width: 888, margin: '0 auto' }}>
          <div className="animate-slide-in stagger-3">
          <table className="slide-table">
            <thead>
              <tr>
                <th>기능</th>
                <th>설명</th>
                <th style={{ textAlign: 'center' }}>레이어</th>
                <th style={{ textAlign: 'center' }}>난이도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>PDF → HTML 변환</td>
                <td>원본 레이아웃 유지</td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-primary">SDK</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-warning">중간</span>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>HTML5 Viewer</td>
                <td>브라우저 기반 뷰어</td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-primary">SDK</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-warning">중간</span>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>워터마크</td>
                <td>동적 워터마크</td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-primary">SDK</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-warning">중간</span>
                </td>
              </tr>
              <tr style={{ background: 'rgba(139, 92, 246, 0.05)' }}>
                <td style={{ fontWeight: 600 }}>웹앱 플랫폼</td>
                <td>사용자 인증 + Audit Trail</td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-purple">플랫폼</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-warning">중간</span>
                </td>
              </tr>
              <tr style={{ background: 'rgba(239, 68, 68, 0.05)' }}>
                <td style={{ fontWeight: 600, color: 'var(--status-negative)' }}>복사/인쇄 방지</td>
                <td style={{ color: 'var(--status-negative)' }}>브라우저 제약 우회 필요</td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-danger">DRM</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-danger">높음</span>
                </td>
              </tr>
              <tr style={{ background: 'rgba(239, 68, 68, 0.05)' }}>
                <td style={{ fontWeight: 600, color: 'var(--status-negative)' }}>권한 회수/만료</td>
                <td style={{ color: 'var(--status-negative)' }}>원격 접근 차단</td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-danger">DRM</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-danger">높음</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="slide-alert slide-alert-warning animate-slide-in stagger-4" style={{ marginTop: 24 }}>
          <AlertTriangle size={20} />
          <span><strong>핵심 난제:</strong> 진정한 DRM은 구현 난이도 높음 (브라우저 제약, 우회 방지)</span>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
