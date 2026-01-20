import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';

const TOTAL_PAGES = 33;

const sources = [
  'https://opensource.org/blog/top-open-source-licenses-in-2025',
  'https://linuxiac.com/mit-and-apache-2-0-lead-open-source-licensing-in-2025/',
  'https://www.sonarsource.com/blog/the-state-of-copyleft-licensing/',
  'https://snyk.io/blog/over-10-of-python-packages-on-pypi-are-distributed-without-any-license/',
  'https://pdfix.net/european-accessibility-act-2025-are-your-pdfs-ready/',
  'https://itextpdf.com/blog/itext-news/pdfua-2-here-introducing-new-standard-pdf-universal-accessibility',
  'https://research.ibm.com/blog/docling-generative-AI',
  'https://www.datalab.to/about',
  'https://artifex.com/licensing',
  'https://ieeexplore.ieee.org/document/9588891/',
  'https://dl.acm.org/doi/10.1145/3643991.3644900',
];

export default function Slide33() {
  return (
    <SlideLayout currentPage={33} totalPages={TOTAL_PAGES}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Appendix</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            부록: 데이터 출처 (2)
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
