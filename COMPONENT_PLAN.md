# CEN AI Studio - 공통 컴포넌트 관리 방안

## 현재 문제점

1. **중복 코드**: 모든 페이지에 Header, Sidebar, History Panel HTML/CSS/JS가 복사되어 있음
2. **유지보수 어려움**: 한 곳을 수정하면 7개 이상의 파일을 모두 수정해야 함
3. **일관성 문제**: 실수로 특정 페이지에서 요소가 누락되거나 다르게 구현됨
4. **파일 크기**: 각 페이지가 불필요하게 큼 (2000+ lines)

## 공통 컴포넌트 목록

### 1. Header (공통)
- 로고 영역
- Workflow Stepper (페이지별 active 상태만 다름)
- 테마 토글 버튼
- 작업 히스토리 버튼

### 2. Sidebar (공통)
- 로고 & 토글 버튼
- 프로젝트 목록
- 프로젝트 확장/축소
- Step 항목 & Output 호버 메뉴
- Footer (계정 정보)

### 3. History Panel (공통)
- 히스토리 헤더
- 검색 & 필터
- 히스토리 아이템 리스트

## 해결 방안

### ✅ 방안 1: JavaScript 기반 컴포넌트 로딩 (권장)

**장점**:
- 현재 HTML 파일 구조 유지
- 빌드 도구 불필요
- GitHub Pages 배포 그대로 사용 가능
- 점진적 마이그레이션 가능

**단점**:
- 초기 렌더링 시 컴포넌트 로딩 딜레이 (미미함)
- SEO에 약간 불리 (웹앱이므로 큰 문제 없음)

**구현 방법**:

```
/components/
  ├── header.js
  ├── sidebar.js
  ├── history-panel.js
  └── common.css

/pages/
  ├── index.html
  ├── 1-2-정보입력.html
  └── ...
```

**각 페이지에서**:
```html
<head>
    <link rel="stylesheet" href="components/common.css">
</head>
<body>
    <div id="header-root"></div>
    <div class="app-container">
        <div id="sidebar-root"></div>
        <!-- 페이지별 컨텐츠 -->
    </div>
    <div id="history-panel-root"></div>

    <script src="components/header.js"></script>
    <script src="components/sidebar.js"></script>
    <script src="components/history-panel.js"></script>
</body>
```

**components/header.js 예시**:
```javascript
(function() {
    const headerHTML = `
        <header class="header with-stepper">
            <div class="workflow-stepper">
                <!-- stepper HTML -->
            </div>
            <div class="header-actions">
                <!-- actions HTML -->
            </div>
        </header>
    `;

    document.getElementById('header-root').innerHTML = headerHTML;

    // Set active step based on current page
    const currentPage = window.location.pathname;
    // ... logic to set active step
})();
```

---

### 방안 2: Web Components (Custom Elements)

**장점**:
- 네이티브 브라우저 API 사용
- Shadow DOM으로 스타일 격리
- 재사용성 극대화

**단점**:
- 학습 곡선
- 기존 코드 대대적 리팩토링 필요
- 일부 구형 브라우저 미지원

**구현 예시**:
```javascript
class CenHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `...`;
    }
}
customElements.define('cen-header', CenHeader);
```

```html
<cen-header active-step="2"></cen-header>
<cen-sidebar></cen-sidebar>
```

---

### 방안 3: 빌드 도구 사용 (Vite + HTML Partials)

**장점**:
- 개발 시 컴포넌트 분리
- 프로덕션에서는 단일 HTML
- 최적화된 번들

**단점**:
- 빌드 프로세스 추가
- CI/CD 파이프라인 필요
- 개발 환경 설정 필요

---

### 방안 4: Server-Side Includes (SSI) / PHP

**장점**:
- 서버에서 컴포넌트 조립
- 클라이언트 부담 없음

**단점**:
- GitHub Pages는 정적 호스팅만 지원 (불가능)
- 서버 환경 필요

---

## 권장 구현 방안: JavaScript 기반 컴포넌트 로딩

### Phase 1: 컴포넌트 파일 생성
1. `components/sidebar.js` 생성 - 사이드바 HTML, CSS, JS 포함
2. `components/header.js` 생성 - 헤더 HTML, CSS, JS 포함
3. `components/history-panel.js` 생성 - 히스토리 패널 HTML, CSS, JS 포함
4. `components/common.css` 생성 - 공통 CSS 변수 및 스타일

### Phase 2: 페이지 리팩토링
1. index.html을 먼저 마이그레이션
2. 테스트 후 다른 페이지들 순차 마이그레이션
3. 각 페이지에서 중복 HTML/CSS 제거

### Phase 3: 동적 상태 관리
1. 현재 페이지에 따른 active step 자동 설정
2. 사이드바 프로젝트 데이터 JSON으로 관리
3. 히스토리 데이터 JSON으로 관리

### 예상 효과
- 각 페이지 크기 약 60% 감소 (2000+ lines → 800 lines)
- 유지보수 시간 80% 단축
- 일관성 보장
- 새로운 페이지 추가 용이

## 마이그레이션 우선순위

1. **높음**: Sidebar (가장 복잡하고 자주 변경됨)
2. **높음**: Header (워크플로우 stepper 관리)
3. **중간**: History Panel
4. **낮음**: Footer / 기타 공통 요소

## 다음 단계

1. 컴포넌트 구조 승인 받기
2. `components/` 디렉토리 생성
3. Sidebar 컴포넌트 먼저 구현
4. index.html에서 테스트
5. 성공 시 다른 페이지 적용
