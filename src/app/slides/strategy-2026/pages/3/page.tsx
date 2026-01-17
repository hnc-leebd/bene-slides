import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { AlertCircle } from 'lucide-react';

const TOTAL_PAGES = 24;

export default function Slide3() {
  return (
    <SlideLayout currentPage={3} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Resources</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            현재 리소스 현황
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            오픈기술생태계확산팀
          </p>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-3" style={{ maxWidth: 900, margin: '0 auto' }}>
          <table className="slide-table">
            <thead>
              <tr>
                <th>역할</th>
                <th>인원</th>
                <th>기술 스택</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PO/PM</td>
                <td>1명</td>
                <td>
                  <span className="slide-badge slide-badge-primary" style={{ marginRight: 4 }}>기획</span>
                  <span className="slide-badge slide-badge-primary" style={{ marginRight: 4 }}>사업개발</span>
                  <span className="slide-badge slide-badge-primary">프로젝트관리</span>
                </td>
              </tr>
              <tr>
                <td>Senior Engineer</td>
                <td>1명</td>
                <td>
                  <span className="slide-badge slide-badge-primary" style={{ marginRight: 4 }}>AI Agent</span>
                  <span className="slide-badge slide-badge-primary" style={{ marginRight: 4 }}>Full-Stack</span>
                  <span className="slide-badge slide-badge-primary">DevOps</span>
                </td>
              </tr>
              <tr>
                <td>Junior Engineer</td>
                <td>1명</td>
                <td>
                  <span className="slide-badge slide-badge-primary" style={{ marginRight: 4 }}>C/C++/C#</span>
                  <span className="slide-badge slide-badge-primary" style={{ marginRight: 4 }}>Python</span>
                  <span className="slide-badge slide-badge-primary">Cross-Platform</span>
                </td>
              </tr>
              <tr>
                <td className="cell-highlight">MoU</td>
                <td>veraPDF</td>
                <td>
                  <span className="slide-badge slide-badge-purple" style={{ marginRight: 4 }}>PDF/UA·접근성</span>
                  <span className="slide-badge slide-badge-purple" style={{ marginRight: 4 }}>PDF/A</span>
                  <span className="slide-badge slide-badge-purple">WTPDF</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="animate-slide-in stagger-4" style={{
          marginTop: 24,
          padding: '12px 16px',
          background: 'var(--slide-bg-card)',
          border: '1px solid var(--slide-border-subtle)',
          borderRadius: 8,
          maxWidth: 900,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <p style={{
            fontFamily: 'var(--slide-font-body)',
            fontSize: '0.8125rem',
            color: 'var(--slide-text-tertiary)',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            <AlertCircle size={14} color="var(--slide-text-muted)" />
            <span><strong style={{ color: 'var(--slide-text-secondary)' }}>스코프 외:</strong> OCR·ML 자체 개발 (IDP 본격 진출 시 별도 검토 필요)</span>
          </p>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
