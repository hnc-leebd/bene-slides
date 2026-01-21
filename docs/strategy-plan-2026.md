# 2026 전략 방향

**비즈니스 트랙 분석 및 오픈소스 라이선스 전략**

2026년 1월

---

## Overview

### 전략 방향 및 경영진 고려사항

**전략 방향**
- **비전:** "5년 내 글로벌 빅테크"
- **핵심 목표:** AI 비즈니스 수익화 + 전사 AI 내재화
- **타겟 지역:** 일본, 동남아, 유럽, 미국, 중국

**주요 주제**
- **3개 비즈니스 트랙:** IDP(기존) + 접근성/PDF렌더링(신규) - 파트 1
- **오픈소스 라이선스 전략:** 확산과 수익화 균형 - 파트 2

**목적:** 3개 비즈니스 트랙의 시장 분석 및 우선순위 결정, 오픈소스 라이선스 전략 결정을 위한 정보 제공

---

# Part 1. 비즈니스 트랙

## 2026 비즈니스 트랙 개요

| 트랙 | 이름 | 핵심 제품 | 시장 규모 | 상태 |
|------|------|-----------|-----------|------|
| Track 1 | IDP (Intelligent Document Processing) | 문서 AI + 커스텀 OCR | $12B~$67B (2030s) | 기존 진행 |
| Track 2 | Digital Accessibility & Remediation | PDF/UA Auto-Tagging | $1.7B~$2.6B (2033) | 신규 추진 |
| Track 3 | DMS/ECM 시장 일부 | PDF→HTML SDK | 니치 | 신규 추진 |

**트랙별 포지셔닝: 시장 규모 vs 경쟁 강도**
- 트랙 1: 대형 시장, 치열한 경쟁
- 트랙 2: 규제 드라이버, 기술 보유 업체 제한
- 트랙 3: 파트너십 기반, 빠른 실행

---

## 신규 트랙 추진 배경

### 외부 기회 - 시장 창이 열림

| 규제/파트너 | 시점 | 영향 |
|-------------|------|------|
| EAA (European Accessibility Act) | 2025.6.28 시행 | EU 서비스 기업 필수 대응, €3M 벌금/시장 퇴출 |
| 디지털포용법 | 2026.1 시행 | 국내 공공기관 컴플라이언스 |
| PDF Association Duallab | 협력 진행 중 | B2B2B SDK 사업 기회 |

### 내부 준비 완료 - 실행 가능 상태

| 항목 | 상태 | 용도 |
|------|------|------|
| veraPDF MoU | 체결 완료 | PDF/UA 검증, 접근성 기술 협력 |
| Auto-Tagging 기술 | 단기간 개발 가능 | 트랙 2 핵심 기능 |
| PDF 파싱 엔진 | 운영 중 | 트랙 1, 2, 3 공통 기반 |
| CLA | 확보 완료 | 라이선스 전환 법적 장벽 없음 |

**핵심:** 외부 기회와 내부 준비가 맞물리는 시점 → 신규 트랙 추진 적기

---

## 현재 리소스 현황

### 오픈기술생태계확산팀

| 역할 | 인원 | 스킬 |
|------|------|------|
| PO/PM | 1명 | 기획, 사업개발, 프로젝트관리 |
| Senior Engineer | 1명 | AI Agent, Full-Stack, DevOps |
| Junior Engineer | 1명 | C/C++/C#, Python, Cross-Platform |

### 외부 파트너십

| 파트너 | 협력 내용 |
|--------|-----------|
| veraPDF | PDF/UA·접근성, PDF/A, WTPDF 검증 |
| PDF Association Duallab | PDF→HTML 렌더링 협력 |

### 연계 가능 내부 조직

| 조직 | 역할 |
|------|------|
| AI 조직 | AI 및 OCR 기반 문서 처리 |
| 영업 조직 | 기업 고객 영업 |

---

# Track 1: IDP 시장

## 트랙 1 개요

**타겟 시장:** Intelligent Document Processing

| 지표 | 값 | 출처 |
|------|-----|------|
| 현재 시장 규모 | $2.3B ~ $7.9B | Grand View / Fortune BI |
| 2030s 전망 | $12B ~ $67B | 복수 리서치 |
| CAGR | 30%+ | 업계 평균 |
| BFSI 점유율 | ~40% | 최대 수요 산업 |

**제품 구성**
- **문서 AI 연동:** Hancom 문서AI API 연동, 구조 인식 정확도 향상 (타겟: 일반 기업)
- **커스텀 OCR 모델:** 99.5%+ 인식률, SLA 99.9%+, 감사 추적 (타겟: 금융/법률/의료)

**핵심 니즈:** 손상/저품질/수기 문서 처리, 복잡한 레이아웃 구조화, 정확도 99.9%+ (금액/계좌 오류 무관용)

---

## IDP 시장 규모 (2030s): $12B ~ $67B

| 출처 | 현재 규모 | 미래 전망 | CAGR | 비고 |
|------|-----------|-----------|------|------|
| Grand View Research | $2.3B | $12.35B (2030) | 33.1% | 보수적 추정 |
| Fortune Business Insights | $7.89B | $66.68B (2032) | 30.1% | 낙관적 추정 |
| Precedence Research | $3.22B | $43.92B (2034) | 33.68% | 중간 추정 |
| GMI | $2.3B | — | 24.7% | 보수적 추정 |

**세부 시장**
- 인보이스 OCR: $2.8B → $47.1B (CAGR 32.6%) - 고성장
- BFSI (금융/보험): 전체의 ~40% - 최대 수요

---

## 트랙 1 제품 구성

### PRODUCT 1: 문서 AI 연동

| 요구사항 | 스펙 | 타겟 |
|----------|------|------|
| Hancom AI Model | OCR/표/차트/수식 | AI 조직 연계 |
| Hancom AI Service | 한컴피디아/한컴어시스턴트 등 | 기존 서비스 연동 |
| 감사 추적 | Audit Trail, 처리 이력 로깅 | 금융/법률 |

### PRODUCT 2: 커스텀 OCR 모델

| 요구사항 | 스펙 | 타겟 |
|----------|------|------|
| 문자 인식률 | 99.5%+ | 전 산업 |
| 가용성 SLA | 99.9%+ | 금융, 의료 |
| 도메인 특화 | 금융 서식, 법률 문서, 의료 차트 | 각 산업별 |
| 다국어 지원 | 한/영/일/중 등 | 글로벌 기업 |

---

## 트랙 1 경쟁 환경 - 레드오션

### 오픈소스 경쟁

| 솔루션 | PDF | Office | License | Stars | 특징 |
|--------|-----|--------|---------|-------|------|
| IBM Docling | ✓ | ✓ | MIT | 50.6k | watsonx 연계 |
| Marker | ✓ | — | GPL | 31.1k | PDF→MD 특화 |
| MinerU | ✓ | — | AGPL | 52.4k | 고품질 파싱 |

### 유료 솔루션

| 솔루션 | PDF | Office | 특징 | 가격 |
|--------|-----|--------|------|------|
| Google Document AI | ✓ | ✓ | Enterprise급 | $$$ |
| AWS Textract | ✓ | ✓ | 테이블/폼 특화 | $$$ |
| Upstage | ✓ | ✓ | 한글 특화 | $$ |

**핵심 인사이트:** 6+ 대형 플레이어(Google, AWS, IBM, Upstage 등)가 이미 시장 선점. 오픈소스 솔루션만 10개+ 존재로 차별화 어려움.

---

## 트랙 1 확산 전략 비교

### 전략 A: 포맷 확장
- **접근 방식:** 지원 포맷 확대로 사용자 유치
- **구현:** Apache POI 연동, docx/pptx/xlsx 지원
- **투자 규모:** 2~4주
- **장점:** 다양한 포맷으로 사용자 접점 확대
- **단점:** 오픈소스 10개+ 존재, 차별화 어려움

### 전략 B: PDF 품질 집중
- **접근 방식:** 코어 기술(PDF) 품질 향상으로 사용자 유치
- **구현:** PDF 파싱 정확도 개선
- **투자 규모:** 2~4주
- **장점:** 코어 기술 차별화, 프리미엄 전환 용이
- **단점:** 멀티 포맷 사용자 유입 제한

### 시장 특성 비교

| 구분 | 문제 난이도 | 오픈소스 성숙도 | 클라우드 유료 API |
|------|-------------|-----------------|-------------------|
| Office 포맷 (docx/xlsx/pptx) | 낮음 (XML 기반 반정형) | 높음 (Apache POI 등) | 없음 |
| PDF/이미지 | 높음 (비정형, 레이아웃 복잡) | 중간 (개선 여지 존재) | 있음 (Textract, Document AI, Upstage) |

**시사점:** 클라우드 빅테크가 유료 API를 제공하는 영역 = 수익화 가능한 시장

---

## 트랙 1 종합 평가

### 시장 기회

| 항목 | 평가 | 근거 |
|------|------|------|
| 시장 규모 | ★★★ | $12B~$67B (CAGR 30%+) |
| 인보이스 OCR | ★★★ | $2.8B → $47.1B (CAGR 32.6%) |
| BFSI 수요 | ★★★ | ~40% (고부가 타겟 고객) |
| 핵심 니즈 | ★★★ | OCR 99.9%+ (악조건 문서, 복잡한 표) |

### 진입 요건

| 항목 | 평가 | 근거 |
|------|------|------|
| 경쟁 강도 | ★☆☆ | 6+ 대형 플레이어 (Google, AWS, Upstage, Docling 등) |
| 필수 역량 | ★★☆ | OCR/ML 역량 필수 |
| 고객 요건 | ★★☆ | SLA 보장, 온프레미스, 다국어 |
| 차별화 조건 | ★★☆ | OCR 정확도 99.9%+ 필수 |

### 핵심 인사이트
- 오피스 포맷: 오픈소스 10개+ 존재로 차별화 어려움
- PDF는 여전히 어려운 문제 → 고품질 파서에 대한 수요 존재
- OCR/ML 역량이 시장 진입 성공의 핵심 변수

---

# Track 2: PDF 접근성 시장

## 트랙 2 개요

**타겟 시장:** Digital Accessibility & Remediation

| 세그먼트 | 현재 | 전망 | CAGR |
|----------|------|------|------|
| Digital Accessibility Software | $721M | $2.6B | ~14% |
| Remediation Platform | $644M | $1.73B | 13.2% |

**제품 구성**
- **AI 기반 고품질 PDF/UA:** 레이아웃 분석 + 자동 태깅 (차별화: AI 정확도)
- **PDF/UA 워크플로우:** 웹앱 + veraPDF 검증 (차별화: End-to-end)

**핵심 드라이버**
- **규제 강제:** EAA 2025.6.28 시행 → 미준수 시 €3M 벌금, 시장 퇴출
- **파트너십:** veraPDF MoU → 기술 협력 기반 확보

---

## 트랙 2 기회 - 규제 시행

### 해외 규제

| 규제 | 지역 | 시행일 | 리스크 |
|------|------|--------|--------|
| EAA | EU 27개국 | **2025.6.28** | €3M 벌금, 시장 퇴출 |
| Section 508 | 미국 | 시행 중 | 계약 배제 |
| ADA Title II | 미국 | 2026.4 | 소송 리스크 |

### 국내 규제

| 규제 | 시행일 | 대상 | 리스크 |
|------|--------|------|--------|
| 장애인차별금지법 | 시행 중 | 전자정보 제공자 | 3년 이하 징역/3천만원 벌금 |
| 디지털포용법 | 2026.1 | 공공기관·전자출판 | 컴플라이언스 리스크 |
| TTA PDF 접근성 가이드라인 | 2025.4 | 공공기관 (권장) | 컴플라이언스 리스크 |

**시장 기회:** 규제 시행 전/후 = 솔루션 수요 급증 기간

---

## 트랙 2 제품 구성

### PRODUCT 1: AI 기반 고품질 PDF/UA

| 기능 | 설명 | 기술 |
|------|------|------|
| AI 기반 레이아웃 분석 | 문서 구조 자동 인식 | Vision AI |
| 복잡한 표/그래프 처리 | 병합셀, 다중헤더 구조화 | 테이블 파서 |
| 대체 텍스트 자동 생성 | 이미지 설명 자동 생성 | Image Captioning |
| 읽기 순서 최적화 | 스크린 리더 최적화 | 구조 분석 |

### PRODUCT 2: PDF/UA 워크플로우

| 기능 | 설명 | 연동 |
|------|------|------|
| Auto Tagging 후처리 웹앱 | 자동 태깅 결과 수정 UI | 자체 개발 |
| veraPDF 연동 검증 | PDF/UA 표준 준수 검증 | veraPDF API |
| 접근성 리포트 생성 | EAA 컴플라이언스 리포트 | 자동 생성 |
| 배치 처리 | 대량 문서 일괄 처리 | 백엔드 |

---

## 트랙 2 경쟁 환경 분석

### 대기업

| 회사 | 규모 | UA 시각화 | SDK | 가격 |
|------|------|-----------|-----|------|
| Adobe | ~30,700명 | ✓ (유일한 완성도) | ✓ 우수 | $$$ (고가) |
| Apryse (PDFTron) | 500-670명 | ✗ | ✓ 우수 | $$ |
| Foxit | 550-1,500명 | △ (미흡) | △ | $ |

### 니치 플레이어

| 회사 | 규모 | 본사 | 특징 | UA 시각화 |
|------|------|------|------|-----------|
| CommonLook | ~80명 | 미국 | ISO PDF/UA 위원회 | △ |
| Equidox | 32-200명 | 미국 | Zone 기반 편집 | ✗ |
| Continual Engine | 66-92명 | 인도 | 교육 특화, AI 기반 | △ |
| DocAxess | ~20명 | 프랑스 | 대학 R&D 기반 | ✗ |
| PDFix | 8명 | 슬로바키아 | 저가 포지셔닝 | △ |

**핵심 인사이트**
- UA 시각화: Adobe만 완성도 있음, 나머지는 미제공/버그
- 가격 갭: Adobe 고가 → 합리적 가격의 고품질 솔루션 부재
- 기회 영역: 100% 자동 태깅 AI 솔루션 현재 부재

---

## 트랙 2 시장 검증

### 수요 측면

| 요인 | 범위 | 긴급도 |
|------|------|--------|
| EAA 시행 | EU 27개국 기업 필수 대응 | 즉시 |
| 대량 문서 보유 기업 | 자동화 필수 (수동 불가) | 즉시 |
| 수동 Remediation 비용 | $30K-$80K/사이트 | 비용 절감 |

### 공급 측면 갭

| 갭 | 현황 | 기회 |
|----|------|------|
| 100% 자동화 | 솔루션 부재 | AI 기반 솔루션 |
| 대기업 솔루션 | 고가 (SMB 진입 장벽) | 가격 경쟁력 |

### veraPDF 시너지

| 영역 | veraPDF 제공 | 우리 제공 | 결과 |
|------|--------------|-----------|------|
| PDF/UA 검증 | 검증 엔진 | 웹앱 UI | End-to-end 솔루션 |
| 태깅 기술 | 기술 자문 | 개발 | 품질 향상 |
| 표준 참여 | ISO 위원회 연결 | 구현 | 표준 준수 |

---

## 트랙 2 SWOT 분석

### 강점 (S) - 내부 · 긍정적
- veraPDF 파트너십 확보
- 내부 AI 기술 연계 가능
- 웹서비스/PDF 파싱 기술 보유

### 약점 (W) - 내부 · 부정적
- 시장 규모/단가가 IDP 대비 제한적
- 글로벌 브랜드 인지도 구축 중
- 글로벌 영업 파이프라인 확대 필요

### 기회 (O) - 외부 · 긍정적
- EAA 2025.6 시행 → 단기 수요 급증
- SMB 시장 가격 경쟁력 확보 가능
- 규제 확대 추세 (WCAG, Section 508)

### 위협 (T) - 외부 · 부정적
- Adobe: 시장 지배력 + 번들 전략
- Acrobat Pro 기본 탑재로 진입 장벽
- AI 기반 자동화 도구 경쟁 심화

**전략적 시사점:** veraPDF 파트너십 + EAA 규제 시행 = 시장 진입 적기. SMB 타겟으로 진입 시 대기업과의 직접 경쟁 회피 가능

---

## 트랙 2 종합 평가

### 시장 기회

| 항목 | 평가 | 근거 |
|------|------|------|
| 시장 규모 | ★★☆ | $644M~$1.73B (CAGR 13.2%) |
| 규제 드라이버 | ★★★ | EAA 2025.6 (강력, 시급) |
| 니치 기회 | ★★★ | UA 시각화 미제공 업체 다수 |
| 아시아 시장 | ★★★ | 현지 솔루션 부재 |

### 실행 가능성

| 항목 | 평가 | 근거 |
|------|------|------|
| 경쟁 강도 | ★★☆ | 중간 (니치 기회 존재) |
| 추가 투자 | ★★★ | 현행 유지 가능 |
| 기술 적합도 | ★★☆ | Auto-Tagging 단기간 개발 가능 |
| veraPDF 시너지 | ★★★ | MoU 체결, End-to-end 가능 |

### 핵심 인사이트
- veraPDF 파트너십과 EAA 규제 시행이 맞물리는 최적 타이밍
- SMB 타겟으로 진입 시 기존 플레이어와의 직접 경쟁 회피 가능
- 현행 리소스로 실행 가능 → 빠른 시장 검증 가능

---

# Track 3: PDF→HTML 렌더링

## 트랙 3 개요

**타겟 시장:** DMS/ECM 시장 일부

- **파트너:** PDF Association Duallab
- **제품:** PDF→HTML 렌더링 SDK
- **모델:** B2B2B (SDK → 파트너 → 최종 고객)

### 제품 특성

| 특성 | 설명 | 이점 |
|------|------|------|
| SDK 형태 | 라이브러리로 제공 | 통합 용이 |
| 오픈코어 | 코어 무료 + 프리미엄 유료 | 확산 + 수익 |
| 파트너 의존 | 직접 고객 접점 없음 | 영업 부담 없음 |

### B2B2B 구조

```
opendataloader (SDK 제공)
        ↓
Duallab / SI 파트너 (통합/커스터마이징)
        ↓
최종 고객 (DMS/ECM 사용)
```

---

## 트랙 3 SDK B2B2B 트레이드오프

### 장점

| 항목 | 설명 | 영향 |
|------|------|------|
| 현행 리소스 실행 | 추가 인력 불필요 | 비용 최소화 |
| 빠른 시장 진입 | 3개월 내 출시 가능 | 기회 선점 |
| 파트너십 레버리지 | Duallab 네트워크 활용 | 영업 부담 감소 |
| 리스크 분산 | 파트너와 리스크 공유 | 안정성 |

### 단점

| 항목 | 설명 | 완화 방안 |
|------|------|----------|
| 파트너 의존 | 파트너 성과에 종속 | 다수 파트너 확보 |
| 계약 규모 작음 | SDK 라이선스는 소액 | 볼륨 확대 |
| 직접 고객 관계 없음 | 최종 고객 접점 부재 | 장기적으로 SaaS 전환 |
| 시장 규모 제한 | DMS 일부만 타겟 | 시장 검증 목적 |

**단계적 접근 가능:** SDK B2B2B로 시장 검증 후, 성과에 따라 SI 통합 또는 단독 SaaS로 확장하는 단계적 전략 고려 가능

---

## 트랙 3 종합 평가

### 시장 기회

| 항목 | 평가 | 근거 |
|------|------|------|
| 시장 규모 | ★☆☆ | DMS 일부 (규모 제한적) |
| 규제 드라이버 | ★☆☆ | 산업별 (강하지 않음) |
| 파트너십 | ★★★ | PDF Association Duallab |

### 실행 가능성

| 항목 | 평가 | 근거 |
|------|------|------|
| 경쟁 강도 | ★★☆ | 중간~높음 |
| 추가 투자 | ★★★ | 현행 유지 |
| 실행 기간 | ★★★ | 3개월 |
| veraPDF 시너지 | ★★☆ | 중간 |

### 핵심 인사이트
- 시장 규모는 제한적이나 현행 리소스로 빠른 실행 가능
- 파트너십 기반으로 리스크 분산
- 시장 검증 후 확장 전략 결정 (SI 통합 또는 SaaS)

---

## 전략 스코어카드 - 3개 트랙 종합 평가

### 시장 기회

| 평가 항목 | Track 1 (IDP) | Track 2 (PDF 접근성) | Track 3 (PDF→HTML) |
|-----------|---------------|---------------------|-------------------|
| 시장 규모 | ★★★ $12B~$67B | ★★☆ $1.7B~$2.6B | ★☆☆ 제한적 |
| 성장률 | ★★★ 30%+ CAGR | ★★☆ 8~14% CAGR | ★☆☆ 제한적 |
| 규제 드라이버 | — | ★★★ EAA 2025.6 | — |

### 실행 가능성

| 평가 항목 | Track 1 (IDP) | Track 2 (PDF 접근성) | Track 3 (PDF→HTML) |
|-----------|---------------|---------------------|-------------------|
| 경쟁 강도 (낮을수록 유리) | — 매우 높음 | ★★☆ 중간 | ★☆☆ 높음 |
| 추가 투자 (적을수록 유리) | ★★☆ ML/OCR 필요 | ★★★ 현행 유지 | ★★★ 현행 유지 |
| 기술/시너지 적합도 | ★★☆ 중간 | ★★★ 높음 | ★★☆ 중간 |

### 종합 점수 (18점 만점)

| Track | 점수 |
|-------|------|
| Track 1: IDP | 10점 |
| **Track 2: PDF 접근성** | **15점** |
| Track 3: PDF→HTML | 8점 |

---

# Part 2. 오픈소스 라이선스 전략

## 배경

### 현재 상태

| 항목 | 값 | 비고 |
|------|-----|------|
| 프로젝트 | opendataloader-pdf | PDF 파싱 오픈소스 |
| 현재 라이선스 | MPL 2.0 | 파일 단위 카피레프트 |
| CLA 확보 | ✓ 완료 | 라이선스 전환 가능 |

### 결정 필요

- **Base 라이선스:** MPL 유지 vs Apache 전환
- **영향:** 확산성 vs 통제력

### MPL 2.0 채택 배경

- veraPDF(validation-model, wcag-validation)가 GPL-3.0/MPL-2.0 듀얼 라이선스
- 의존성 일관성 위해 MPL 선택
- CLA 확보 후 전환 옵션 열어둠

---

## 경쟁 오픈소스 분석 (2026년 1월)

| 프로젝트 | 첫 릴리스 | 월간 다운로드 | 총 다운로드 | Stars | 라이선스 | 수익 모델 |
|----------|-----------|---------------|-------------|-------|----------|----------|
| docling | 2024-07 | 1,580k | 12.81M | 50.6k | MIT | 오픈코어 (watsonx 연계) |
| pymupdf4llm | 2024-04 | 1,168k | 8.62M | 1.2k | AGPL | 상용 라이선스 판매 |
| marker-pdf | 2023-12 | 184k | 1.96M | 31.1k | GPL | 상용 라이선스 판매 |
| mineru | 2024-06 | 166k | 589k | 52.4k | AGPL | 정부 펀딩 (비영리) |
| **opendataloader-pdf** | 2025-09 | 2.5k | 10.6k | 823 | MPL 2.0 | 오픈코어 |

**참고:** pymupdf4llm은 AGPL임에도 높은 다운로드를 기록하는 이유: PyMuPDF는 2016년부터 운영된 성숙한 PDF 라이브러리로 기존 사용자 기반이 탄탄하며, 기업은 Artifex 상용 라이선스($20K~$50K+)로 AGPL 제약을 우회하여 사용

---

## 오픈소스 라이선스 스펙트럼

```
강제력 높음 ←―――――――――――――――――――――――――――→ 강제력 낮음
(기업 계약 필수)                          (기업 계약 선택)

AGPL ―― GPL ―― MPL 2.0 ―― Apache ―― MIT
  │       │        │                       │
mineru  marker  opendataloader           docling
pymupdf4llm      (현재)                  (IBM)
```

### 기업 라이선스 정책 분류

| 분류 | 라이선스 | 기업 대응 | 대표 기업 정책 |
|------|----------|----------|----------------|
| Whitelist (자동 승인) | MIT, Apache, BSD | 즉시 사용 가능 | Google, Meta, MS |
| Category B (조건부 허용) | MPL, LGPL | 법무 검토 후 사용 | 대부분 기업 |
| Category X (금지/별도 승인) | GPL, AGPL | 사용 금지 또는 특별 승인 | Google (AGPL 완전 금지) |

### 핵심 차이점
- **Apache:** "그냥 쓰면 됨" → 기업 whitelist → 즉시 채택
- **MPL:** 기술적으로 관대, 그러나 "copyleft = 검토 필요" 인식
- **AGPL:** SaaS 시 전체 소스 공개 의무 → 대부분 기업 기피

---

## 시나리오 A: AGPL 듀얼 라이선스

**전략:** 카피레프트 강제 → 상용 라이선스 판매

### 전략 흐름
1. 기업이 opendataloader-pdf 사용
2. AGPL 조건: SaaS 제공 시 전체 소스 공개 의무
3. 선택: 소스 공개 vs 상용 라이선스 구매
4. **대부분 기업: 상용 라이선스 구매 (소스 공개 회피)**

### 평가

| 항목 | 평가 |
|------|------|
| 계약 강제력 | ★★★ 높음 - 법적 의무로 구매 유도 |
| 확산성 | ★☆☆ 낮음 - AGPL 기피 기업 다수 (Google 등) |
| 수익 모델 | 단기 라이선스 판매 |

### 성공 사례

| 회사 | 제품 | 라이선스 | 매출 |
|------|------|----------|------|
| MongoDB | MongoDB | SSPL (AGPL 파생) | $1B+ |
| Grafana Labs | Grafana | AGPL | $200M+ ARR |
| Artifex | PyMuPDF | AGPL | — |
| Datalab | Marker | GPL | $1M+ ARR |

**강점:** 계약 강제력 높음
**약점:** 확산 제한 (AGPL 기피)

---

## 시나리오 B: 오픈코어 전략

**전략:** 코어 무료 + Hancom AI 프리미엄

### 전략 흐름
1. opendataloader-pdf (MPL 또는 Apache, 무료)
2. 기본 기능: 로컬 PDF 파싱, 룰 기반 처리
3. **프리미엄 옵션: Hancom AI 연동**
4. **AI 엔터프라이즈 및 컨설팅 수익화**

### 평가

| 항목 | 평가 |
|------|------|
| 계약 강제력 | ★☆☆ 없음 - AI 가치로 전환 유도 필요 |
| 확산성 | ★★~★★★ - Base 라이선스에 따라 다름 |
| 수익 모델 | AI 서비스 장기 전략 |

### 성공 사례

| 회사 | 무료 (오픈소스) | 프리미엄 | 연결 방식 |
|------|-----------------|----------|-----------|
| IBM | Docling (MIT) | watsonx.ai | AI SaaS |
| Hugging Face | Transformers (Apache) | HF Hub Pro | AI 인프라 |
| GitLab | GitLab CE (MIT) | GitLab EE | 기능 차별화 |

**강점:** 확산 + AI 연결
**약점:** 계약 강제력 없음

---

## 오픈코어 시 Base 라이선스 비교: Apache 2.0 vs MPL 2.0

| 항목 | Apache 2.0 | MPL 2.0 (현재) |
|------|------------|----------------|
| 확산성 | ★★★ 기업 채택 장벽 없음 | ★★☆ 파일 공개 의무 인식 |
| 특허권 | 명시적 부여 | 명시적 부여 |
| 기업 선호도 | 1위 (~25% 점유율) | 낮음 (~1-2%) |
| 경쟁사 사례 | docling (IBM) | veraPDF (비영리) |
| 전환 비용 | CLA 확보 완료 → 가능 | 없음 (현상 유지) |

### 인기 패키지 라이선스 분포 (Sonar 2024)

| 생태계 | Permissive | Copyleft |
|--------|------------|----------|
| npm top 1% | 99%+ | <1% |
| npm top 10% | 98% | 2% |
| PyPI top 1% | 92% | 8% |
| PyPI top 10% | 84-90% | 10-16% |

**해석:** 다운로드 상위 패키지일수록 permissive 비중 증가. 인과관계는 불명확하나 상관관계 존재.

---

## 오픈코어 제품 구성

### Community (MPL/Apache, 무료)
- 로컬 PDF 파싱
- 기본 Auto Tagging *(NEW)*
- **타겟:** 개발자, SMB

### Pro (상용, 구독)
- Community 전체 기능
- 문서AI 연동
- AI 기반 고품질 PDF/UA *(NEW)*
- 후처리 웹앱 *(NEW)*
- PDF/UA 검증 *(NEW)*
- **타겟:** 중견기업

### Enterprise (상용, 협의)
- Pro 전체 기능
- 커스텀 OCR 모델
- SLA 보장
- 전담 컨설팅
- 온프레미스 배포
- **타겟:** 대기업/금융

### 프리미엄 차별화 기능

| 기능 | 설명 | 차별화 | 상태 |
|------|------|--------|------|
| 문서 AI 연동 | Hancom 문서AI API 연동, 구조 인식 정확도 향상 | Hancom AI 전략 연결 | 기존 진행 |
| 커스텀 OCR 모델 | 99.5%+ 인식률, SLA 99.9%+, 감사 추적 | 엔터프라이즈 요건 | 기존 진행 |
| AI 기반 고품질 PDF/UA | 레이아웃 분석, 복잡한 표/그래프 처리 | 품질 차별화 | 신규 추진 |
| PDF/UA 워크플로우 | 웹앱 + veraPDF 검증 + 리포트 | End-to-end | 신규 추진 |

---

## 라이선스 의사결정 매트릭스

평가 기준 (1-5점, 높을수록 유리)

| 기준 | A. AGPL 듀얼 | B-1. 오픈코어 (MPL) | B-2. 오픈코어 (Apache) | 근거 |
|------|--------------|---------------------|------------------------|------|
| 커뮤니티 확산 | 1 | 2 | **5** | PyPI top10% permissive 84-90% |
| 기업 채택 | 1 | 3 | **5** | AGPL: 금지, MPL: 조건부, Apache: 자동 |
| 글로벌 확산 가속 | 1 | 2 | **5** | 라이선스 장벽이 낮을수록 채택 속도 향상 |
| AI 중심 수익화 | 2 | **5** | **5** | AGPL: 라이선스 판매 주력, 오픈코어: AI SaaS |
| **합계** | **5** | **12** | **20** | |

---

# 부록: 데이터 출처

## 시장 조사 및 규제

- https://www.grandviewresearch.com/industry-analysis/intelligent-document-processing-market-report
- https://www.fortunebusinessinsights.com/intelligent-document-processing-market-108590
- https://www.precedenceresearch.com/intelligent-document-processing-market
- https://www.grandviewresearch.com/industry-analysis/digital-accessibility-software-market-report
- https://dataintelo.com/report/digital-accessibility-remediation-platform-market
- https://www.marketgrowthreports.com/market-reports/digital-accessibility-software-market-105034
- https://accessible-eu-centre.ec.europa.eu/content-corner/news/eaa-comes-effect-june-2025-are-you-ready-2025-01-31_en
- https://www.levelaccess.com/compliance-overview/european-accessibility-act-eaa/
- https://abilitynet.org.uk/resources/european-accessibility-act
- https://github.com/docling-project/docling
- https://www.locklizard.com/pdf-digital-rights-management/
- https://itextpdf.com/solutions/universal-accessibility-pdfua

## 라이선스 및 기술

- https://opensource.org/blog/top-open-source-licenses-in-2025
- https://linuxiac.com/mit-and-apache-2-0-lead-open-source-licensing-in-2025/
- https://www.sonarsource.com/blog/the-state-of-copyleft-licensing/
- https://snyk.io/blog/over-10-of-python-packages-on-pypi-are-distributed-without-any-license/
- https://pdfix.net/european-accessibility-act-2025-are-your-pdfs-ready/
- https://itextpdf.com/blog/itext-news/pdfua-2-here-introducing-new-standard-pdf-universal-accessibility
- https://research.ibm.com/blog/docling-generative-AI
- https://www.datalab.to/about
- https://artifex.com/licensing
- https://ieeexplore.ieee.org/document/9588891/
- https://dl.acm.org/doi/10.1145/3643991.3644900
