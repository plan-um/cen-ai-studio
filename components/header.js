/**
 * CEN AI Studio - Header Component
 * Dynamic header with optional workflow stepper
 */

(function() {
    'use strict';

    const WORKFLOW_STEPS = [
        { number: 1, name: '정보입력', link: '1-2-정보입력.html' },
        { number: 2, name: '스토리보드 생성', link: '1-3-스토리보드생성.html' },
        { number: 3, name: '촬영기획', link: '1-4-촬영기획.html' },
        { number: 4, name: '영상제작', link: '1-5-영상제작.html' }
    ];

    /**
     * Determine active step based on current page
     */
    function getActiveStep() {
        const pathname = window.location.pathname;
        const filename = pathname.split('/').pop();

        if (filename.includes('1-2')) return 1;
        if (filename.includes('1-3')) return 2;
        if (filename.includes('1-4')) return 3;
        if (filename.includes('1-5')) return 4;

        return 0; // No active step (dashboard)
    }

    /**
     * Generate workflow stepper HTML
     */
    function generateWorkflowStepperHTML(activeStep) {
        if (activeStep === 0) return ''; // No stepper on dashboard

        return `
            <div class="workflow-stepper">
                ${WORKFLOW_STEPS.map((step, index) => {
                    let stepClass = 'step-item-stepper';
                    if (step.number < activeStep) stepClass += ' completed';
                    if (step.number === activeStep) stepClass += ' active';

                    const isClickable = step.number <= activeStep;
                    const onclick = isClickable ? `onclick="goToStep(${step.number})"` : '';

                    return `
                        <div class="${stepClass}" ${onclick}>
                            <div class="step-number">${step.number}</div>
                            <span>${step.name}</span>
                        </div>
                        ${index < WORKFLOW_STEPS.length - 1 ? '<div class="step-arrow">→</div>' : ''}
                    `;
                }).join('')}
            </div>
        `;
    }

    /**
     * Generate header actions HTML
     */
    function generateHeaderActionsHTML() {
        return `
            <div class="header-actions">
                <button class="icon-btn icon-only" onclick="toggleTheme()" title="테마 전환">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon-sun" style="display:none;">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon-moon">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </button>
                <button class="icon-btn" onclick="toggleHistoryPanel()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M21 3v5h-5"></path>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                        <path d="M8 16H3v5"></path>
                    </svg>
                    <span>작업 히스토리</span>
                </button>
            </div>
        `;
    }

    /**
     * Generate complete header HTML
     */
    function generateHeaderHTML() {
        const activeStep = getActiveStep();
        const hasStepper = activeStep > 0;
        const headerClass = hasStepper ? 'header with-stepper' : 'header';

        return `
            <header class="${headerClass}">
                ${generateWorkflowStepperHTML(activeStep)}
                ${generateHeaderActionsHTML()}
            </header>
        `;
    }

    /**
     * Initialize header
     */
    function initHeader() {
        const headerRoot = document.getElementById('header-root');
        if (!headerRoot) {
            console.error('Header root element not found');
            return;
        }

        // Inject HTML
        headerRoot.innerHTML = generateHeaderHTML();

        // Initialize theme icons visibility
        updateThemeIcons();
    }

    /**
     * Update theme icon visibility based on current theme
     */
    function updateThemeIcons() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const sunIcon = document.querySelector('.theme-icon-sun');
        const moonIcon = document.querySelector('.theme-icon-moon');

        if (sunIcon && moonIcon) {
            if (currentTheme === 'dark') {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        }
    }

    // Export global functions for onclick handlers
    window.goToStep = function(stepNumber) {
        const step = WORKFLOW_STEPS.find(s => s.number === stepNumber);
        if (step) {
            window.location.href = step.link;
        }
    };

    window.toggleTheme = function() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        updateThemeIcons();
    };

    window.toggleHistoryPanel = function() {
        const historyPanel = document.querySelector('.history-panel');
        if (historyPanel) {
            historyPanel.classList.toggle('open');
        }
    };

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeader);
    } else {
        initHeader();
    }

    // Listen for theme changes (in case changed from elsewhere)
    window.addEventListener('storage', (e) => {
        if (e.key === 'theme') {
            updateThemeIcons();
        }
    });
})();
