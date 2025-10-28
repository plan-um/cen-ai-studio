# CEN AI Studio

AI 기반 영상 제작 스튜디오 플랫폼

## 프로젝트 소개

CEN AI Studio는 AI를 활용하여 영상 콘텐츠를 기획부터 제작까지 완성하는 통합 플랫폼입니다.

## 주요 기능

### 1. 정보입력 (Information Input)
- 프로젝트 기본 정보 입력
- 영상 컨셉 및 타겟 설정

### 2. 스토리보드 생성 (Storyboard Creation)
- AI 기반 자동 스토리보드 생성
- 씬별 이미지 프리뷰 및 편집
- AI 자동/수동 재생성 기능

### 3. 촬영기획 (Production Planning)
- AI 기반 촬영 기획서 자동 생성
- 씬별 상세 편집 기능
- PDF 다운로드 지원

### 4. 영상제작 (Video Production)
- 실시간 제작 진행 상황 추적
- 씬별 영상 프리뷰
- 최종 영상 다운로드

## 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Design System**: ITCEN Color Palette (Blue-based)
- **Fonts**:
  - Korean: HallymGothic
  - English: Gilroy
  - Body: SUIT

## 디자인 가이드

### 컬러 팔레트

#### Light Mode
- Primary: #0055E9 (ITCEN BLUE 2)
- Background: #FFFFFF
- Surface: #F8FAFF
- Accent: #00CBC8 (ITCEN MINT)

#### Dark Mode
- Primary: #569DFF (ITCEN BLUE 1)
- Background: #0D1426
- Surface: #1A1F2E
- Accent: #00CBC8 (ITCEN MINT)

### 그라데이션
- Gradient 1: linear-gradient(135deg, #569DFF 0%, #0055E9 50%, #6A14D9 100%)
- Gradient 2: linear-gradient(90deg, #00CBC8 0%, #569DFF 100%)

## 페이지 구조

```
/
├── index.html                        # 메인 대시보드
├── 1-2-정보입력.html                # Step 1: 정보입력
├── 1-3-스토리보드생성.html           # Step 2: 스토리보드 생성
│   ├── 1-3-1-스케치이미지조회.html  # 씬 상세 보기
│   ├── 1-3-2-AI검증.html            # AI 검증 모달
│   ├── 1-3-3-AI자동재생성.html      # AI 자동 재생성 모달
│   └── 1-3-4-수동재생성.html        # 수동 재생성 모달
├── 1-4-촬영기획.html                # Step 3: 촬영기획
│   ├── 1-4-1-기획서조회.html        # 기획서 조회
│   └── 1-4-2-기획서씬편집.html      # 씬 편집 모달
├── 1-5-영상제작.html                # Step 4: 영상제작
└── 1-6-프로젝트삭제.html            # 프로젝트 삭제 모달
```

## 시작하기

1. 저장소 클론
```bash
git clone https://github.com/YOUR_USERNAME/cen-ai-studio.git
```

2. 브라우저에서 index.html 열기
```bash
open index.html
```

## 라이선스

© 2025 CEN AI Studio. All rights reserved.
