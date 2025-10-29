# CEN AI Studio - Design System & Architecture Guide

## Recent Updates (2025-10-27)

### Completed Tasks
1. ✅ Updated scene list in sidebar to show multiple scenes (씬 1, 씬 2, 씬 3, 씬 4) instead of single "씬" item
2. ✅ Fixed header icons (theme toggle, history panel) position back to right side
3. ✅ Renamed `index-clean-blue.html` to `index.html` as the new main dashboard
4. 🔄 In Progress: Updating sub-pages with common layout and design style

### Implementation Notes
- Header uses `justify-content: flex-end` by default (icons on right)
- Header with workflow stepper uses `.header.with-stepper` class with `justify-content: space-between`
- All "스토리보드 생성" steps now show multiple scene outputs in hover submenu
- Scene outputs show as individual items: 스토리보드, 씬 1, 씬 2, 씬 3, 씬 4

# CEN AI Studio - Design System & Architecture Guide

## Page Architecture

### Page Structure Overview

All sub-pages follow a consistent structure based on the menu structure document:

```
[Common-1] Header (Fixed)
  ├─ Logo (Left)
  ├─ Workflow Stepper (Center) - Shows: 정보입력 → 스토리보드 생성 → 촬영기획 → 영상제작
  └─ Actions (Right): Theme Toggle, History Panel

[Common-3] Sidebar (Left, Fixed, Collapsible)
  ├─ Recent Projects List
  └─ Expandable Project Items
      ├─ Project Name (Click to expand/collapse)
      └─ Steps (when expanded)
          ├─ 1. 정보입력 (-> [1-2])
          ├─ 2. 스토리보드 생성 (-> [1-3])
          ├─ 3. 촬영기획 (-> [1-4])
          └─ 4. 영상제작 (-> [1-5])

[Common-2] History Panel (Right, Expandable)
  ├─ Search
  ├─ Filters (전체, 생성, 수정, 완료)
  └─ Log List

Main Content Area
  └─ Page-specific content
```

### Page List & Routes

#### Dashboard
- **Route**: `/` or `/dashboard`
- **ID**: [1-1 메인페이지]
- **Components**:
  - Current Projects Grid (4 columns)
  - AI Templates Carousel
  - New Project Card

#### Workflow Pages
1. **정보입력 (Information Input)**
   - **Route**: `/project/:id/step1`
   - **ID**: [1-2 정보입력]
   - **Components**: Form inputs, file upload

2. **스토리보드 생성 (Storyboard Creation)**
   - **Route**: `/project/:id/step2`
   - **ID**: [1-3 스토리보드 생성]
   - **Sub-pages**:
     - [1-3-1 스케치 이미지 조회]: Image preview
     - [1-3-2 AI 검증 (Modal)]: Validation results
     - [1-3-3 AI 자동 재생성 (Modal)]: Auto-regeneration confirm
     - [1-3-4 수동 재생성 (Modal)]: Manual regeneration settings

3. **촬영기획 (Production Planning)**
   - **Route**: `/project/:id/step3`
   - **ID**: [1-4 촬영기획]
   - **Sub-pages**:
     - [1-4-1 기획서 조회]: Planning document view
     - [1-4-2 기획서 씬 편집 (Modal)]: Scene editing

4. **영상제작 (Video Production)**
   - **Route**: `/project/:id/step4`
   - **ID**: [1-5 영상제작]
   - **Components**: Progress tracker, scene list, video player

#### Modals
- **[1-6 프로젝트 삭제]**: Delete confirmation modal
- All modals support dark/light mode
- Modals appear as overlays with backdrop blur

### Workflow Stepper Component

The stepper appears in the header of all workflow pages (steps 1-4):

```
정보입력 → 스토리보드 생성 → 촬영기획 → 영상제작
  [●]        [ ]           [ ]        [ ]
(active)  (inactive)   (inactive)  (inactive)
```

**States**:
- **Active**: Current step - highlighted with accent color
- **Completed**: Previous steps - checkmark icon
- **Inactive**: Future steps - disabled appearance
- **Clickable**: Can navigate to completed or active steps

### Sidebar Navigation Pattern

```html
<div class="project-item expandable">
  <div class="project-header" onclick="toggleProject(id)">
    <div class="project-info">
      <span class="project-name">신제품 런칭 광고</span>
      <span class="project-meta">Step 2 · 어제</span>
    </div>
    <svg class="expand-icon">▼</svg>
  </div>
  <div class="project-steps" data-expanded="false">
    <a href="/project/123/step1" class="step-item">1. 정보입력</a>
    <a href="/project/123/step2" class="step-item active">2. 스토리보드 생성</a>
    <a href="/project/123/step3" class="step-item">3. 촬영기획</a>
    <a href="/project/123/step4" class="step-item">4. 영상제작</a>
  </div>
</div>
```

# CEN AI Studio - Design System

## Font Guide

### Font Families

- **English Titles**: Gilroy
  - Use for all English headings (h1-h6)
  - CDN: `https://fonts.cdnfonts.com/css/gilroy-bold`

- **Korean Titles**: 한림고딕체 (HallymGothic)
  - Use for all Korean headings (h1-h6)
  - CDN: `https://fastly.jsdelivr.net/gh/fonts-archive/HallymGothic/HallymGothic.css`

- **Body Text**: SUIT
  - Use for all general text content
  - CDN: `https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css`

### Implementation

```css
/* Body text */
body {
    font-family: 'SUIT', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Korean headings */
h1, h2, h3, h4, h5, h6 {
    font-family: 'HallymGothic', 'SUIT', sans-serif;
}

/* English headings */
h1[lang="en"], h2[lang="en"], h3[lang="en"], h4[lang="en"], h5[lang="en"], h6[lang="en"],
.en-title {
    font-family: 'Gilroy', 'SUIT', sans-serif;
}
```

## Color Guide

### Light Mode

```css
Primary: #0055E9 (ITCEN BLUE 2)
Primary Hover: #0032A0 (ITCEN BLUE 3)
Background: #FFFFFF
Surface: #F5F7FA
Text Primary: #1E1E1E (ITCEN BLACK)
Text Secondary: #6B7280
Border: #E5E7EB
Accent: #00CBC8 (ITCEN MINT)
```

### Dark Mode

```css
Primary: #569DFF (ITCEN BLUE 1)
Primary Hover: #0055E9 (ITCEN BLUE 2)
Background: #0A0E1A
Surface: #1A1F2E
Text Primary: #F9FAFB
Text Secondary: #9CA3AF
Border: #2D3748
Accent: #00CBC8 (ITCEN MINT)
```

### Status Colors (Common)

```css
Success: #00CBC8 (ITCEN MINT)
Warning: #FF8288 (ITCEN CORAL)
Info: #569DFF (ITCEN BLUE 1)
Error: #FF8288 (ITCEN CORAL)
```

### Gradients

```css
Gradient 1: linear-gradient(135deg, #569DFF 0%, #0055E9 50%, #6A14D9 100%)
Gradient 2: linear-gradient(90deg, #00CBC8 0%, #569DFF 100%)
```

### Usage Guidelines

- **Primary**: CTA buttons, links, important actions
- **Accent (Mint)**: Highlights, badges, success states
- **Surface**: Cards, modals, dropdown backgrounds
- **Coral/Purple**: Special promotions, emphasis elements

### CSS Variables

```css
:root {
    /* Light Mode */
    --bg-primary: #FFFFFF;
    --bg-secondary: rgba(255, 255, 255, 0.8);
    --bg-tertiary: #F5F7FA;
    --bg-hover: rgba(239, 246, 255, 0.8);
    --text-primary: #1E1E1E;
    --text-secondary: #6B7280;
    --text-tertiary: #9CA3AF;
    --border-color: #E5E7EB;
    --accent-blue: #0055E9;
    --accent-blue-hover: #0032A0;
    --accent-mint: #00CBC8;
    --accent-coral: #FF8288;
    --accent-purple: #6A14D9;
    --gradient-1: linear-gradient(135deg, #569DFF 0%, #0055E9 50%, #6A14D9 100%);
    --gradient-2: linear-gradient(90deg, #00CBC8 0%, #569DFF 100%);
}

[data-theme="dark"] {
    /* Dark Mode */
    --bg-primary: #0A0E1A;
    --bg-secondary: rgba(26, 31, 46, 0.8);
    --bg-tertiary: #1A1F2E;
    --bg-hover: rgba(51, 65, 85, 0.8);
    --text-primary: #F9FAFB;
    --text-secondary: #9CA3AF;
    --text-tertiary: #6B7280;
    --border-color: #2D3748;
    --accent-blue: #569DFF;
    --accent-blue-hover: #0055E9;
    --accent-mint: #00CBC8;
    --accent-coral: #FF8288;
    --accent-purple: #6A14D9;
}
```

## Design Principles

1. **Consistent Typography**: Always use the specified fonts for their designated purposes
2. **Color Hierarchy**: Use primary colors for main actions, accent colors for highlights
3. **Theme Support**: Ensure all UI elements work in both light and dark modes
4. **Accessibility**: Maintain proper contrast ratios for text readability
5. **Glassmorphism**: Use backdrop-filter and semi-transparent backgrounds for depth
