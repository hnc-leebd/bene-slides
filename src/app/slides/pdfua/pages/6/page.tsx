import '../../../pdfua/slides.css';
import { SlideLayout } from '../../components';

export default function Slide6() {
  return (
    <SlideLayout currentPage={6} totalPages={20}>
      <div className="slide-main">
        <div className="slide-section-label animate-fade-in">Part 3: 선택지</div>
        <h2 className="slide-header animate-slide-in stagger-1">SDK 벤치마크 비교</h2>
        <p className="slide-subheader animate-slide-in stagger-2">Apryse vs Foxit</p>

        <div className="animate-slide-in stagger-3">
          <div className="slide-card slide-card-highlight">
            <table className="slide-table">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>Apryse</th>
                  <th>Foxit</th>
                  <th>승자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">PDF/UA 준수</td>
                  <td className="font-bold" style={{ color: 'var(--slide-accent-tertiary)' }}>100%</td>
                  <td style={{ color: 'var(--slide-text-muted)' }}>92.5%</td>
                  <td><span className="slide-badge slide-badge-primary">Apryse</span></td>
                </tr>
                <tr>
                  <td className="font-semibold">생성 시간</td>
                  <td className="font-bold" style={{ color: 'var(--slide-accent-tertiary)' }}>1.31초</td>
                  <td style={{ color: 'var(--slide-text-muted)' }}>2.56초</td>
                  <td><span className="slide-badge slide-badge-primary">Apryse</span></td>
                </tr>
                <tr>
                  <td className="font-semibold">파일 크기</td>
                  <td className="font-bold" style={{ color: 'var(--slide-accent-tertiary)' }}>718KB</td>
                  <td style={{ color: 'var(--slide-text-muted)' }}>1.9MB</td>
                  <td><span className="slide-badge slide-badge-primary">Apryse</span></td>
                </tr>
                <tr>
                  <td className="font-semibold">DLL 크기</td>
                  <td className="font-bold" style={{ color: 'var(--slide-accent-tertiary)' }}>48MB</td>
                  <td style={{ color: 'var(--slide-text-muted)' }}>76MB</td>
                  <td><span className="slide-badge slide-badge-primary">Apryse</span></td>
                </tr>
                <tr>
                  <td className="font-semibold">가격</td>
                  <td style={{ color: 'var(--slide-text-muted)' }}>$10K~$50K</td>
                  <td className="font-bold" style={{ color: 'var(--slide-accent-tertiary)' }}>30~50% 저렴</td>
                  <td><span className="slide-badge slide-badge-warning">Foxit</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6 animate-slide-in stagger-4">
          <div className="slide-card" style={{ borderLeft: '3px solid var(--slide-accent-primary)' }}>
            <h4 className="text-sm font-semibold text-[var(--slide-accent-primary)] mb-3">100% 준수가 필수인 경우</h4>
            <div className="text-[var(--slide-text-primary)]">
              <span className="font-bold text-lg">Apryse</span> 적합
            </div>
            <p className="text-sm text-[var(--slide-text-tertiary)] mt-2">
              기술적 우수성, 빠른 도입, 검증된 품질
            </p>
          </div>
          <div className="slide-card" style={{ borderLeft: '3px solid var(--slide-accent-tertiary)' }}>
            <h4 className="text-sm font-semibold text-[var(--slide-accent-tertiary)] mb-3">비용이 최우선인 경우</h4>
            <div className="text-[var(--slide-text-primary)]">
              <span className="font-bold text-lg">Foxit</span> 검토
            </div>
            <p className="text-sm text-[var(--slide-text-tertiary)] mt-2">
              단, 92.5% 준수율 리스크 감수 필요
            </p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
