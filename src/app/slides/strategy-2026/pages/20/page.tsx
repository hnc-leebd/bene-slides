import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';

const TOTAL_PAGES = 20;

const links = [
  'https://www.grandviewresearch.com/industry-analysis/intelligent-document-processing-market-report',
  'https://www.fortunebusinessinsights.com/intelligent-document-processing-market-108590',
  'https://www.precedenceresearch.com/intelligent-document-processing-market',
  'https://www.grandviewresearch.com/industry-analysis/digital-accessibility-software-market-report',
  'https://dataintelo.com/report/digital-accessibility-remediation-platform-market',
  'https://www.marketgrowthreports.com/market-reports/digital-accessibility-software-market-105034',
  'https://accessible-eu-centre.ec.europa.eu/content-corner/news/eaa-comes-effect-june-2025-are-you-ready-2025-01-31_en',
  'https://www.levelaccess.com/compliance-overview/european-accessibility-act-eaa/',
  'https://abilitynet.org.uk/resources/european-accessibility-act',
  'https://github.com/docling-project/docling',
  'https://www.locklizard.com/pdf-digital-rights-management/',
  'https://itextpdf.com/solutions/universal-accessibility-pdfua',
];

export default function Slide20() {
  return (
    <SlideLayout currentPage={20} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">References</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            데이터 출처
          </h1>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-2" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          fontFamily: 'var(--slide-font-mono)',
          fontSize: '0.75rem',
          lineHeight: 1.6,
        }}>
          {links.map((url) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--slide-text-primary)',
                textDecoration: 'none',
              }}
            >
              {url}
            </a>
          ))}
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
