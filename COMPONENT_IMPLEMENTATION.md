# CEN AI Studio - Component Implementation Guide

## Status: Phase 1 Complete ✅

### Completed Tasks

1. ✅ **Created sidebar.js** - Data-driven sidebar component
2. ✅ **Created sidebar-data.js** - Project data structure (8 projects)
3. ✅ **Created header.js** - Dynamic header with workflow stepper
4. ✅ **Created history-panel.js** - Activity history with search/filter
5. ✅ **Created history-data.js** - Sample history data

## Phase 2: CSS Extraction (Next Step)

### CSS Sections to Extract from index.html

Based on analysis, these are the line ranges needed for `components/common.css`:

| Section | Lines | Description |
|---------|-------|-------------|
| Font Imports & Base | 15-36 | @import, *, font families |
| CSS Variables (Light) | 38-80 | :root with light mode vars |
| CSS Variables (Dark) | 82-124 | [data-theme="dark"] vars |
| Body Base Styles | 126-131 | Body background & transitions |
| Sidebar Styles | 259-663 | Complete sidebar + projects (405 lines) |
| Header Styles | 672-796 | Header + workflow stepper (125 lines) |
| History Panel Styles | 1281-1422 | Complete history panel (142 lines) |

**Total CSS to extract**: ~850 lines

### Command to Extract CSS

```bash
# Extract lines 15-131 (base + variables)
sed -n '15,131p' index.html > components/common-base.css

# Extract lines 259-663 (sidebar)
sed -n '259,663p' index.html > components/common-sidebar.css

# Extract lines 672-796 (header)
sed -n '672,796p' index.html > components/common-header.css

# Extract lines 1281-1422 (history panel)
sed -n '1281,1422p' index.html > components/common-history.css

# Combine all parts
cat components/common-base.css components/common-sidebar.css components/common-header.css components/common-history.css > components/common.css

# Clean up temp files
rm components/common-base.css components/common-sidebar.css components/common-header.css components/common-history.css
```

## Phase 3: Migrate index.html

### Current Structure
```html
<head>
    <style>
        /* 1400+ lines of CSS */
    </style>
</head>
<body>
    <div class="app-container">
        <aside class="sidebar">
            <!-- 470 lines of sidebar HTML -->
        </aside>
        <main class="main-content">
            <header class="header">
                <!-- Header HTML -->
            </header>
            <!-- Page content -->
        </main>
    </div>
    <aside class="history-panel">
        <!-- History panel HTML -->
    </aside>
    <script>
        /* JavaScript functions */
    </script>
</body>
```

### Target Structure
```html
<head>
    <link rel="stylesheet" href="components/common.css">
</head>
<body>
    <div class="app-container">
        <div id="sidebar-root"></div>
        <main class="main-content">
            <div id="header-root"></div>
            <!-- Page content only -->
        </main>
    </div>
    <div id="history-panel-root"></div>

    <!-- Component scripts -->
    <script src="components/sidebar-data.js"></script>
    <script src="components/sidebar.js"></script>
    <script src="components/header.js"></script>
    <script src="components/history-data.js"></script>
    <script src="components/history-panel.js"></script>
</body>
```

### Steps to Migrate index.html

1. **Add CSS link** in `<head>`:
```html
<link rel="stylesheet" href="components/common.css">
```

2. **Replace sidebar HTML** with:
```html
<div id="sidebar-root"></div>
```

3. **Replace header HTML** with:
```html
<div id="header-root"></div>
```

4. **Replace history panel HTML** with:
```html
<div id="history-panel-root"></div>
```

5. **Add component scripts** before `</body>`:
```html
<script src="components/sidebar-data.js"></script>
<script src="components/sidebar.js"></script>
<script src="components/header.js"></script>
<script src="components/history-data.js"></script>
<script src="components/history-panel.js"></script>
```

6. **Remove inline CSS** for sidebar, header, history panel (keep page-specific CSS)

7. **Remove inline JavaScript** functions that are now in components:
   - `toggleProjectExpand()`
   - `deleteProject()`
   - `refreshDashboard()`
   - `toggleSidebar()`
   - `toggleTheme()`
   - `toggleHistoryPanel()`
   - `filterHistory()`

## Phase 4: Migrate Other Pages

Apply the same migration pattern to:
- [ ] 1-2-정보입력.html
- [ ] 1-3-스토리보드생성.html
- [ ] 1-3-1-스케치이미지조회.html
- [ ] 1-4-촬영기획.html
- [ ] 1-4-1-기획서조회.html (✅ Already updated tab structure)
- [ ] 1-5-영상제작.html

### Special Considerations

**Pages with workflow stepper** (1-2, 1-3, 1-4, 1-5):
- header.js will automatically detect current step and render stepper
- No manual step configuration needed

**Pages without stepper** (index.html, 1-6):
- header.js will render simple header without stepper

## Expected Results

### Before (per page):
- **File size**: ~2000+ lines
- **CSS**: ~1400 lines (mostly duplicated)
- **Sidebar HTML**: ~470 lines
- **Header HTML**: ~100 lines
- **History Panel HTML**: ~50 lines
- **JavaScript**: ~200 lines of utility functions

### After (per page):
- **File size**: ~600 lines (70% reduction)
- **CSS link**: 1 line
- **Component roots**: 3 lines
- **Component scripts**: 5 lines
- **Page-specific content only**: ~600 lines

### Benefits:
- **60-70% file size reduction** per page
- **Single source of truth** for common UI
- **Easy updates**: Change component once, applies everywhere
- **Consistent behavior** across all pages
- **Faster development**: New pages just include components

## Testing Checklist

After migration, verify:
- [ ] Sidebar renders correctly
- [ ] Projects expand/collapse
- [ ] Step outputs hover menu works
- [ ] Project delete button works
- [ ] Header renders with/without stepper
- [ ] Theme toggle works
- [ ] History panel opens/closes
- [ ] History search works
- [ ] History filters work
- [ ] All links navigate correctly
- [ ] localStorage persistence works (sidebar collapsed, project expanded states, theme)
- [ ] Dark mode works correctly
- [ ] No console errors

## Rollback Plan

If issues occur:
1. Git checkout original file: `git checkout HEAD -- index.html`
2. Keep components for future use
3. Debug issues in isolated test page first
4. Re-attempt migration after fixes

## Next Actions

1. Extract CSS to `components/common.css`
2. Test on index.html first
3. Fix any issues
4. Apply to other pages
5. Remove old inline styles/scripts
6. Test thoroughly
7. Commit changes
