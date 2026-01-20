import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';

const TOTAL_PAGES = 33;

const sources = [
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

export default function Slide32() {
  return (
    <SlideLayout currentPage={32} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Appendix</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            부록: 데이터 출처
          </h1>
        </div>

        <div className="slide-content-area">
          <div className="animate-slide-in stagger-2" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          }}>
            {sources.map((url, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--slide-text-secondary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--slide-font-mono)',
                  padding: '4px 0',
                  borderBottom: '1px solid var(--slide-border-subtle)',
                  transition: 'color 0.2s'
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
