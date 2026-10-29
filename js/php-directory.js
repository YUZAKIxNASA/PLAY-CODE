/** [YZN-261029-010] Authorship: YUZAKI NASA (@ঔৣ፝ N4!) · PLAY-CODE / CodePlay */
/**
 * PLAY-CODE (@N4) — PHP Lesson Directory Engine
 * Handles rendering of all 200 PHP lessons across 14 categories,
 * instant client-side search, category filtering,
 * [REQUIRES NEW SERVER] tagging on exactly the specified 16 lessons,
 * and result count synchronization without altering original numbering or titles.
 */

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('lessons-grid');
    const searchInput = document.getElementById('lesson-search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const filteredCountBadge = document.getElementById('filtered-count');
    const totalCountBadge = document.getElementById('total-count');
    const categoryChipsContainer = document.getElementById('category-chips');

    // Retrieve PHP lessons dataset
    const lessons = window.PHP_LESSONS || [];

    if (!lessons.length) {
        if (gridContainer) {
            gridContainer.innerHTML = `
                <div class="empty-state">
                    <h3>No PHP lessons found</h3>
                    <p>Could not load the PHP lessons database. Please check data/php-lessons.js.</p>
                </div>
            `;
        }
        return;
    }

    if (totalCountBadge) {
        totalCountBadge.textContent = `${lessons.length} Total Lessons`;
    }

    let currentCategory = 'ALL';
    let searchQuery = '';

    // Collect distinct categories in original curriculum occurrence
    const categories = ['ALL', ...new Set(lessons.map(l => l.category))];

    // Render category filter chips
    if (categoryChipsContainer) {
        categoryChipsContainer.innerHTML = categories.map(cat => `
            <button type="button" class="chip-btn ${cat === 'ALL' ? 'active' : ''}" data-category="${cat}">
                ${cat === 'ALL' ? `🌟 All Topics (${lessons.length})` : cat}
            </button>
        `).join('');

        categoryChipsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.chip-btn');
            if (!btn) return;
            categoryChipsContainer.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            filterAndRender();
        });
    }

    // Render cards function
    function renderLessons(list) {
        if (!gridContainer) return;

        if (list.length === 0) {
            gridContainer.innerHTML = `
                <div class="empty-state">
                    <h3>🔍 No matching PHP lessons found</h3>
                    <p>No PHP lessons matched "${escapeHtml(searchQuery)}" in category "${escapeHtml(currentCategory)}".</p>
                    <button type="button" id="reset-filter-btn" class="nav-ctrl-btn" style="background:#4f46e5;color:white;margin-top:10px;">
                        Reset Filters
                    </button>
                </div>
            `;
            const resetBtn = document.getElementById('reset-filter-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    if (searchInput) searchInput.value = '';
                    searchQuery = '';
                    currentCategory = 'ALL';
                    if (categoryChipsContainer) {
                        categoryChipsContainer.querySelectorAll('.chip-btn').forEach(b => {
                            b.classList.toggle('active', b.dataset.category === 'ALL');
                        });
                    }
                    if (searchClearBtn) searchClearBtn.style.display = 'none';
                    filterAndRender();
                });
            }
            return;
        }

        gridContainer.innerHTML = list.map(lesson => {
            const description = lesson.introduction || lesson.explanation || '';
            const keywordsSnippet = lesson.keywordsOrMethods && lesson.keywordsOrMethods.length 
                ? lesson.keywordsOrMethods.slice(0, 3).map(p => `<code class="mini-prop-badge" style="background:#3b0764;color:#d8b4fe;border-color:rgba(168,85,247,0.3);">${escapeHtml(p)}</code>`).join(' ')
                : '';

            // Display [REQUIRES NEW SERVER] tag beside only the specified 16 lessons
            const serverBadge = lesson.requiresNewServer 
                ? `<span class="server-req-tag" style="background:rgba(239,68,68,0.18);color:#f87171;border:1px solid rgba(239,68,68,0.4);padding:2px 8px;border-radius:6px;font-size:0.75rem;font-weight:700;display:inline-flex;align-items:center;gap:4px;margin-left:6px;" title="Actual execution requires the appropriate server or database environment.">[REQUIRES NEW SERVER]</span>`
                : '';

            return `
                <a href="php-lesson.html?lesson=${lesson.id}" class="lesson-card-item" data-lesson-id="${lesson.id}">
                    <div>
                        <div class="lesson-card-header">
                            <span class="lesson-num-badge" style="background:rgba(168,85,247,0.15);color:#d8b4fe;border-color:rgba(168,85,247,0.3);">#${lesson.number}</span>
                            <span class="lesson-cat-tag" style="background:rgba(14,165,233,0.12);color:#7dd3fc;border-color:rgba(14,165,233,0.25);">${escapeHtml(lesson.category)}</span>
                        </div>
                        <h3 style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;">
                            ${escapeHtml(lesson.cleanTitle || lesson.title)}
                            ${serverBadge}
                        </h3>
                        <p>${escapeHtml(description)}</p>
                        ${keywordsSnippet ? `<div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;align-items:center;">${keywordsSnippet}</div>` : ''}
                    </div>
                    <div class="lesson-card-footer">
                        <span class="action-label" style="color:#a855f7;">Explore Lesson &rarr;</span>
                        <span style="font-size:0.8rem;color:#64748b;font-family:monospace;">Lesson ${lesson.id}/200</span>
                    </div>
                </a>
            `;
        }).join('');
    }

    function filterAndRender() {
        const query = searchQuery.trim().toLowerCase();

        const filtered = lessons.filter(lesson => {
            const matchesCategory = (currentCategory === 'ALL' || lesson.category === currentCategory);
            
            const keywordsStr = (lesson.keywordsOrMethods || []).join(' ').toLowerCase();
            const introStr = (lesson.introduction || '').toLowerCase();
            const explStr = (lesson.explanation || '').toLowerCase();
            const titleStr = lesson.title.toLowerCase();

            const matchesQuery = !query || 
                titleStr.includes(query) ||
                lesson.number.includes(query) ||
                String(lesson.id) === query ||
                introStr.includes(query) ||
                explStr.includes(query) ||
                keywordsStr.includes(query);

            return matchesCategory && matchesQuery;
        });

        if (filteredCountBadge) {
            filteredCountBadge.textContent = `Showing ${filtered.length} of ${lessons.length} lessons`;
        }

        renderLessons(filtered);
    }

    // Search input listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            if (searchClearBtn) {
                searchClearBtn.style.display = searchQuery ? 'flex' : 'none';
            }
            filterAndRender();
        });
    }

    // Clear search button
    if (searchClearBtn) {
        searchClearBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            searchQuery = '';
            searchClearBtn.style.display = 'none';
            filterAndRender();
        });
    }

    // Initial render
    filterAndRender();
});

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
