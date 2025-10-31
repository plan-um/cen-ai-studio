/**
 * CEN AI Studio - Sidebar Component
 * Data-driven sidebar with project list, step navigation, and output hover menus
 */

(function() {
    'use strict';

    // Import project data (assumes sidebar-data.js is loaded first)
    const projects = window.SIDEBAR_PROJECTS || [];

    /**
     * Generate HTML for a single output item
     */
    function generateOutputHTML(output) {
        return `
            <a href="${output.link}" class="output-item">
                <span class="output-item-name">${output.name}</span>
                <span class="output-item-title">${output.title}</span>
            </a>
        `;
    }

    /**
     * Generate HTML for a single step
     */
    function generateStepHTML(step, projectId) {
        const activeClass = step.active ? ' active' : '';
        const outputs = step.outputs || [];

        return `
            <div class="step-item-wrapper">
                <a href="${step.link}" class="step-item-link${activeClass}">${step.number}. ${step.name}</a>
                <div class="step-outputs">
                    ${outputs.map(output => generateOutputHTML(output)).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Generate HTML for a single project
     */
    function generateProjectHTML(project, isFirst) {
        const activeClass = isFirst ? ' active-project' : '';
        return `
            <div class="project-item${activeClass}" id="project-${project.id}">
                <div class="project-header">
                    <img src="${project.thumbnail}" alt="Project" class="project-thumbnail" onclick="toggleProjectExpand(${project.id})">
                    <div class="project-info" onclick="toggleProjectExpand(${project.id})">
                        <div class="project-name">${project.name}</div>
                        <div class="project-meta">Step ${project.currentStep} · ${project.lastUpdated}</div>
                    </div>
                    <div class="project-actions">
                        <div class="project-delete-btn" onclick="deleteProject(${project.id}, '${project.name}'); event.stopPropagation();" title="프로젝트 삭제">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </div>
                        <svg class="project-expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" onclick="toggleProjectExpand(${project.id})">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
                <div class="project-steps">
                    ${project.steps.map(step => generateStepHTML(step, project.id)).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Generate complete sidebar HTML
     */
    function generateSidebarHTML() {
        return `
            <aside class="sidebar">
                <div class="sidebar-header">
                    <img src="CEN_img/logo/로고 라이트모드.png" alt="CEN AI Studio" class="logo logo-light" onclick="refreshDashboard()">
                    <img src="CEN_img/logo/로고 다크모드.png" alt="CEN AI Studio" class="logo logo-dark" onclick="refreshDashboard()">
                    <button class="sidebar-toggle-btn" onclick="toggleSidebar()" title="사이드바 접기">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="3" x2="9" y2="21"></line>
                        </svg>
                    </button>
                </div>

                <div class="sidebar-content">
                    <div class="sidebar-section-header">
                        <div class="sidebar-section-title">최근 프로젝트</div>
                    </div>
                    <div class="project-list">
                        ${projects.map((project, index) => generateProjectHTML(project, index === 0)).join('')}
                    </div>
                </div>

                <div class="sidebar-footer">
                    <div class="account-info">
                        <div class="account-avatar">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div class="account-details">
                            <div class="account-name">사용자</div>
                            <div class="account-email">user@example.com</div>
                        </div>
                        <button class="account-menu-btn" onclick="toggleAccountMenu()" title="계정 메뉴">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                        </button>
                    </div>
                </div>
            </aside>
        `;
    }

    /**
     * Initialize sidebar
     */
    function initSidebar() {
        const sidebarRoot = document.getElementById('sidebar-root');
        if (!sidebarRoot) {
            console.error('Sidebar root element not found');
            return;
        }

        // Inject HTML
        sidebarRoot.innerHTML = generateSidebarHTML();

        // Initialize expand state from localStorage
        projects.forEach(project => {
            const isExpanded = localStorage.getItem(`project-${project.id}-expanded`) === 'true';
            const projectElement = document.getElementById(`project-${project.id}`);
            if (projectElement && isExpanded) {
                projectElement.classList.add('expanded');
            }
        });

        // Initialize sidebar collapsed state
        const isSidebarCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
        if (isSidebarCollapsed) {
            document.querySelector('.sidebar')?.classList.add('collapsed');
            document.querySelector('.main-content')?.classList.add('sidebar-collapsed');
        }
    }

    // Export global functions for onclick handlers
    window.toggleProjectExpand = function(projectId) {
        const projectElement = document.getElementById(`project-${projectId}`);
        if (!projectElement) return;

        const isExpanded = projectElement.classList.toggle('expanded');
        localStorage.setItem(`project-${projectId}-expanded`, isExpanded);
    };

    window.deleteProject = function(projectId, projectName) {
        if (confirm(`"${projectName}" 프로젝트를 삭제하시겠습니까?`)) {
            window.location.href = `1-6-프로젝트삭제.html?id=${projectId}`;
        }
    };

    window.refreshDashboard = function() {
        window.location.href = 'index.html';
    };

    window.toggleSidebar = function() {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');

        if (!sidebar) return;

        const isCollapsed = sidebar.classList.toggle('collapsed');
        mainContent?.classList.toggle('sidebar-collapsed', isCollapsed);
        localStorage.setItem('sidebar-collapsed', isCollapsed);
    };

    window.toggleAccountMenu = function() {
        // TODO: Implement account menu dropdown
        console.log('Account menu toggle');
    };

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidebar);
    } else {
        initSidebar();
    }
})();
