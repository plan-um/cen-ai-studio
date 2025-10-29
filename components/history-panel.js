/**
 * CEN AI Studio - History Panel Component
 * Displays activity history with search and filtering
 */

(function() {
    'use strict';

    // Import history data (assumes history-data.js is loaded first)
    let historyData = window.HISTORY_DATA || [];
    let currentFilter = 'all';
    let searchQuery = '';

    /**
     * Generate HTML for a single history item
     */
    function generateHistoryItemHTML(item) {
        return `
            <div class="history-item" data-type="${item.type}" data-id="${item.id}">
                <div class="history-item-header">
                    <div class="history-user">${item.user}</div>
                    <div class="history-time">${item.time}</div>
                </div>
                <div class="history-action">${item.action}</div>
            </div>
        `;
    }

    /**
     * Filter history items based on current filter and search query
     */
    function filterHistoryData() {
        let filtered = historyData;

        // Apply type filter
        if (currentFilter !== 'all') {
            filtered = filtered.filter(item => item.type === currentFilter);
        }

        // Apply search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.action.toLowerCase().includes(query) ||
                item.user.toLowerCase().includes(query)
            );
        }

        return filtered;
    }

    /**
     * Render history items
     */
    function renderHistoryItems() {
        const historyContent = document.querySelector('.history-content');
        if (!historyContent) return;

        const filtered = filterHistoryData();

        if (filtered.length === 0) {
            historyContent.innerHTML = `
                <div class="history-empty">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                    </svg>
                    <p>히스토리가 없습니다</p>
                </div>
            `;
        } else {
            historyContent.innerHTML = filtered.map(item => generateHistoryItemHTML(item)).join('');
        }
    }

    /**
     * Generate complete history panel HTML
     */
    function generateHistoryPanelHTML() {
        return `
            <aside class="history-panel" id="historyPanel">
                <div class="history-header">
                    <div class="history-title-row">
                        <h2 class="history-title">작업 히스토리</h2>
                        <button class="icon-btn icon-only" onclick="toggleHistoryPanel()">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <input type="text" class="history-search" placeholder="히스토리 검색..." oninput="handleHistorySearch(event)">
                    <div class="history-filters">
                        <button class="history-filter-btn active" onclick="filterHistory('all')">전체</button>
                        <button class="history-filter-btn" onclick="filterHistory('create')">생성</button>
                        <button class="history-filter-btn" onclick="filterHistory('edit')">수정</button>
                        <button class="history-filter-btn" onclick="filterHistory('complete')">완료</button>
                    </div>
                </div>
                <div class="history-content">
                    ${filterHistoryData().map(item => generateHistoryItemHTML(item)).join('')}
                </div>
            </aside>
        `;
    }

    /**
     * Initialize history panel
     */
    function initHistoryPanel() {
        const historyRoot = document.getElementById('history-panel-root');
        if (!historyRoot) {
            console.error('History panel root element not found');
            return;
        }

        // Inject HTML
        historyRoot.innerHTML = generateHistoryPanelHTML();
    }

    // Export global functions for onclick handlers
    window.filterHistory = function(type) {
        currentFilter = type;

        // Update active button
        document.querySelectorAll('.history-filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');

        // Re-render items
        renderHistoryItems();
    };

    window.handleHistorySearch = function(event) {
        searchQuery = event.target.value;
        renderHistoryItems();
    };

    /**
     * Add a new history item (public API)
     */
    window.addHistoryItem = function(user, action, type = 'edit') {
        const newItem = {
            id: historyData.length + 1,
            user: user,
            action: action,
            time: '방금 전',
            type: type,
            timestamp: Date.now()
        };

        historyData.unshift(newItem); // Add to beginning
        renderHistoryItems();
    };

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHistoryPanel);
    } else {
        initHistoryPanel();
    }
})();
