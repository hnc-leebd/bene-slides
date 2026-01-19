import '../../slides.css';
import { SlideLayout } from '../../components/SlideLayout';
import { AlertTriangle } from 'lucide-react';

const TOTAL_PAGES = 20;

export default function Slide8() {
  const barriers = [
    {
      title: '단순 포맷 변환',
      description: 'docx/pptx/xlsx → JSON',
      details: 'Apache POI 활용 (Java 생태계 성숙)',
      difficulty: 'LOW',
      difficultyColor: 'var(--status-positive)',
      investment: '2~4주',
      investmentLevel: 1,
    },
    {
      title: '오디오 / 비디오',
      description: 'ASR 기반 음성-텍스트 변환',
      details: 'Whisper API 의존 또는 자체 모델 개발',
      difficulty: 'HIGH',
      difficultyColor: 'var(--status-negative)',
      investment: 'ML 2명+',
      investmentLevel: 2,
    },
    {
      title: '이미지/OCR',
      description: '인보이스/계약서/신분증 인식',
      details: '99.9%+ 정확도 SLA 달성 위해 커스텀 ML 필수',
      difficulty: 'HIGH',
      difficultyColor: 'var(--status-negative)',
      investment: 'ML 3명+',
      investmentLevel: 3,
    },
    {
      title: 'AI 문서 이해 플랫폼',
      description: '레이아웃 분석 + RAG + 커스텀 모델',
      details: 'Upstage · Google Doc AI · Azure · AWS Textract',
      difficulty: 'CRITICAL',
      difficultyColor: 'var(--status-negative)',
      investment: 'ML3 인프라2 운영2',
      investmentLevel: 3,
      highlight: true,
    },
  ];

  return (
    <SlideLayout currentPage={8} totalPages={TOTAL_PAGES} track={1}>
      <div className="slide-main">
        <div className="slide-header-area">
          <p className="slide-section-label animate-fade-in">Track 1 · Analysis</p>
          <h1 className="slide-header animate-slide-in stagger-1">
            진입 장벽 분석
          </h1>
          <p className="slide-subheader animate-slide-in stagger-2" style={{ marginBottom: 24 }}>
            기술 난이도 및 추가 투자 산정
          </p>
        </div>

        <div className="slide-content-area" style={{ width: 888, margin: '0 auto' }}>
          <div className="animate-slide-in stagger-3">
          <table className="slide-table">
            <thead>
              <tr>
                <th style={{ width: '18%' }}>영역</th>
                <th style={{ width: '40%' }}>설명</th>
                <th style={{ width: '22%', textAlign: 'center' }}>추가 투자</th>
                <th style={{ width: '20%', textAlign: 'center' }}>난이도</th>
              </tr>
            </thead>
            <tbody>
              {barriers.map((item) => {
                const isHighDifficulty = item.difficulty === 'HIGH' || item.difficulty === 'CRITICAL';
                const rowBg = item.highlight
                  ? 'rgba(239, 68, 68, 0.08)'
                  : isHighDifficulty
                    ? 'rgba(239, 68, 68, 0.03)'
                    : 'transparent';

                return (
                  <tr key={item.title} style={{ background: rowBg }}>
                    <td>
                      <span style={{
                        fontWeight: 600,
                        color: isHighDifficulty ? 'var(--status-negative)' : 'var(--slide-text-primary)',
                      }}>
                        {item.title}
                      </span>
                    </td>
                    <td>
                      <p style={{
                        color: 'var(--slide-text-secondary)',
                        marginBottom: 2,
                      }}>
                        {item.description}
                      </p>
                      <p style={{
                        fontSize: '0.8125rem',
                        color: 'var(--slide-text-tertiary)',
                      }}>
                        {item.details}
                      </p>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                        <div style={{ display: 'flex', gap: 3 }}>
                          {[1, 2, 3].map(i => (
                            <div
                              key={i}
                              style={{
                                width: 8,
                                height: 20,
                                borderRadius: 2,
                                background: i <= item.investmentLevel
                                  ? 'var(--status-negative)'
                                  : 'rgba(255, 255, 255, 0.1)',
                              }}
                            />
                          ))}
                        </div>
                        <span style={{
                          fontFamily: 'var(--slide-font-mono)',
                          fontSize: '0.8125rem',
                          color: 'var(--slide-text-primary)',
                          minWidth: 40,
                          textAlign: 'left',
                        }}>
                          {item.investment}
                        </span>
                      </div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        background: item.difficultyColor,
                        borderRadius: 6,
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        letterSpacing: '0.03em',
                      }}>
                        {item.difficulty}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="slide-alert slide-alert-warning animate-slide-in stagger-4" style={{ marginTop: 20 }}>
          <AlertTriangle size={18} />
          <div>
            <span style={{ fontWeight: 600 }}>Office 파서:</span>
            <span style={{ marginLeft: 8, color: 'var(--slide-text-secondary)' }}>
              오픈소스 10개+ (Apache POI, Docling 등) → 차별화 불가
            </span>
          </div>
        </div>
        </div>
      </div>
    </SlideLayout>
  );
}
