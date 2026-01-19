import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { Lightbulb, CheckCircle, XCircle } from 'lucide-react';

const TOTAL_PAGES = 20;

export default function Slide14() {
  return (
    <SlideLayout currentPage={14} totalPages={TOTAL_PAGES} track={2}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 2 · Competition 2/2</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            니치 플레이어 & <span className="slide-header-track-2">기회 영역</span>
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            소규모 경쟁사 분석
          </p>
        </div>

        <div className="slide-content-area" style={{ width: 888, margin: '0 auto' }}>
          <div className="animate-slide-in stagger-3">
          <table className="slide-table">
            <thead>
              <tr>
                <th>회사</th>
                <th>규모</th>
                <th>특징</th>
                <th>UA 시각화</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>Equidox</td>
                <td>32-200명</td>
                <td>Zone 기반 편집</td>
                <td>
                  <XCircle size={18} color="var(--status-negative)" />
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Continual Engine</td>
                <td>66-92명</td>
                <td>교육 분야 특화</td>
                <td>
                  <CheckCircle size={18} color="var(--status-positive)" />
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>DocAxess</td>
                <td>~20명</td>
                <td>파리 대학 R&D</td>
                <td>
                  <XCircle size={18} color="var(--status-negative)" />
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>PDFix</td>
                <td>8명</td>
                <td>슬로바키아</td>
                <td>
                  <CheckCircle size={18} color="var(--status-positive)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="slide-card slide-card-track-2 animate-slide-in stagger-4" style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Lightbulb size={24} color="var(--track-2-primary)" />
            <div>
              <p style={{
                fontFamily: 'var(--slide-font-display)',
                fontWeight: 600,
                color: 'var(--slide-text-primary)',
                marginBottom: 4
              }}>
                인사이트
              </p>
              <p style={{ color: 'var(--slide-text-secondary)', fontSize: '0.9375rem' }}>
                UA 시각화/편집 기능 미제공 업체 다수 → <strong style={{ color: 'var(--track-2-primary)' }}>기회 영역</strong>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
