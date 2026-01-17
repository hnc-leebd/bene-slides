import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';

const TOTAL_PAGES = 24;

export default function Slide20() {
  return (
    <SlideLayout currentPage={20} totalPages={TOTAL_PAGES} track={3}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 3 · Approaches</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            접근 방식 비교
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2">
            3가지 전략 옵션
          </p>
        </div>

        <div className="slide-content-area" style={{ width: 888, margin: '0 auto' }}>
          <div className="animate-slide-in stagger-3">
          <table className="slide-table">
            <thead>
              <tr>
                <th style={{ width: '20%' }}>옵션</th>
                <th style={{ width: '30%' }}>추가 투자 항목</th>
                <th style={{ width: '15%', textAlign: 'center' }}>규모</th>
                <th style={{ width: '17.5%' }}>장점</th>
                <th style={{ width: '17.5%' }}>단점</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ opacity: 0.7 }}>
                <td style={{ fontWeight: 600 }}>옵션 1<br /><span style={{ fontSize: '0.8125rem', fontWeight: 400, color: 'var(--slide-text-tertiary)' }}>SI 통합</span></td>
                <td>SI 영업/구축 조직<br />플랫폼 + DRM 개발</td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-warning">5명+</span>
                </td>
                <td style={{ fontSize: '0.875rem' }}>높은 단가, lock-in</td>
                <td style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>긴 영업 사이클</td>
              </tr>
              <tr style={{ opacity: 0.7 }}>
                <td style={{ fontWeight: 600 }}>옵션 2<br /><span style={{ fontSize: '0.8125rem', fontWeight: 400, color: 'var(--slide-text-tertiary)' }}>단독 SaaS</span></td>
                <td>플랫폼 개발<br />운영/CS 조직</td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-warning">3명+</span>
                </td>
                <td style={{ fontSize: '0.875rem' }}>빠른 출시, SMB 타겟</td>
                <td style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>지속 운영 비용</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>옵션 3<br /><span style={{ fontSize: '0.8125rem', fontWeight: 400, color: 'var(--slide-text-tertiary)' }}>SDK B2B2B</span></td>
                <td>현행 유지</td>
                <td style={{ textAlign: 'center' }}>
                  <span className="slide-badge slide-badge-success">현행 유지</span>
                </td>
                <td style={{ fontSize: '0.875rem' }}>오픈코어 모델 적합<br />SDK 레이어 집중</td>
                <td style={{ fontSize: '0.875rem', color: 'var(--slide-text-tertiary)' }}>낮은 개별 단가<br />고객사 기술력 필요</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
