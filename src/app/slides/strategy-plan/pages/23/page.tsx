import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { FileCode, Settings, AlertTriangle } from 'lucide-react';

const TOTAL_PAGES = 33;

export default function Slide23() {
  return (
    <SlideLayout currentPage={23} totalPages={TOTAL_PAGES}>
      <div className="slide-section-divider">
        <div className="section-number" style={{
          background: 'linear-gradient(135deg, var(--track-1-primary), var(--track-2-primary))'
        }}>
          2
        </div>
        <h1 className="section-title animate-slide-in">
          오픈소스 라이선스 전략
        </h1>
        <p className="section-subtitle animate-slide-in stagger-2">
          확산과 수익화의 균형 · 시나리오 비교
        </p>
        <div className="section-accent-bar animate-fade-in stagger-3" style={{
          background: 'linear-gradient(90deg, var(--track-1-primary), var(--track-2-primary))'
        }} />
      </div>
    </SlideLayout>
  );
}
