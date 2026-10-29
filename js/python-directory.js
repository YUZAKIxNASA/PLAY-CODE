/** [YZN-261029-012] Authorship: YUZAKI NASA (@ঔৣ፝ N4!) · PLAY-CODE / CodePlay */
/**
 * PLAY-CODE (@N4) — Python 209 Examples Directory Engine
 * Handles rendering of all 209 Python examples, real-time client-side search,
 * category filtering across 12 categories, and result count synchronization.
 */

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('lessons-grid');
    const searchInput = document.getElementById('lesson-search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const filteredCountBadge = document.getElementById('filtered-count');
    const totalCountBadge = document.getElementById('total-count');
    const categoryChipsContainer = document.getElementById('category-chips');

    // Retrieve Python lessons dataset
    const lessons = window.PYTHON_LESSONS || [];

    if (!lessons.length) {
        if (gridContainer) {
            gridContainer.innerHTML = `
                <div class="empty-state">
                    <h3>No Python examples found</h3>
                    <p>Could not load the Python curriculum database. Please check data/python-lessons.js.</p>
                </div>
            `;
        }
        return;
    }

    if (totalCountBadge) {
        totalCountBadge.textContent = `${lessons.length} Total Examples`;
    }

    let currentCategory = 'ALL';
    let searchQuery = '';

    // Collect distinct categories in original curriculum occurrence
    const categories = ['ALL', ...new Set(lessons.map(l => l.category))];

    // Render category filter chips
    if (categoryChipsContainer) {
        categoryChipsContainer.innerHTML = categories.map(cat => {
            const count = cat === 'ALL' ? lessons.length : lessons.filter(l => l.category === cat).length;
            const label = cat === 'ALL' ? `🌟 All Categories (${count})` : `${cat} (${count})`;
            return `
                <button type="button" class="chip-btn ${cat === 'ALL' ? 'active' : ''}" data-category="${cat}">
                    ${label}
                </button>
            `;
        }).join('');

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
                    <h3>🔍 No matching Python examples found</h3>
                    <p>No examples matched "${escapeHtml(searchQuery)}" in category "${escapeHtml(currentCategory)}".</p>
                    <button type="button" id="reset-filter-btn" class="nav-ctrl-btn" style="background:#16a34a;color:white;margin-top:10px;">
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
                ? lesson.keywordsOrMethods.slice(0, 3).map(p => `<code class="mini-prop-badge" style="background:#052e16;color:#86efac;border-color:rgba(74,222,128,0.2);">${escapeHtml(p)}</code>`).join(' ')
                : '';

            const complexitySnippet = lesson.timeComplexity 
                ? `<span style="font-size:0.75rem;background:#1e293b;color:#94a3b8;padding:2px 6px;border-radius:4px;border:1px solid rgba(255,255,255,0.06);">${escapeHtml(lesson.timeComplexity)}</span>`
                : '';

            return `
                <a href="python-lesson.html?lesson=${lesson.id}" class="lesson-card-item" data-lesson-id="${lesson.id}">
                    <div>
                        <div class="lesson-card-header">
                            <span class="lesson-num-badge" style="background:rgba(34,197,94,0.15);color:#86efac;border-color:rgba(34,197,94,0.3);">#${lesson.number}</span>
                            <span class="lesson-cat-tag" style="background:rgba(14,165,233,0.15);color:#7dd3fc;border-color:rgba(14,165,233,0.3);">${escapeHtml(lesson.category)}</span>
                        </div>
                        <h3>${escapeHtml(lesson.title)}</h3>
                        <p>${escapeHtml(description)}</p>
                        <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
                            ${keywordsSnippet}
                            ${complexitySnippet}
                        </div>
                    </div>
                    <div class="lesson-card-footer">
                        <span class="action-label" style="color:#4ade80;">Explore Example &rarr;</span>
                        <span style="font-size:0.8rem;color:#64748b;font-family:monospace;">Example ${lesson.id}/209</span>
                    </div>
                </a>
            `;
        }).join('');
    }

    function filterAndRender() {
        const query = searchQuery.trim().toLowerCase();

        const filtered = lessons.filter(lesson => {
            const matchesCategory = (currentCategory === 'ALL' || lesson.category === currentCategory);

            if (!matchesCategory) return false;
            if (!query) return true;

            const matchesTitle = lesson.title && lesson.title.toLowerCase().includes(query);
            const matchesNumber = lesson.number && lesson.number.includes(query);
            const matchesId = String(lesson.id) === query;
            const matchesIntro = lesson.introduction && lesson.introduction.toLowerCase().includes(query);
            const matchesSyntax = lesson.syntax && lesson.syntax.toLowerCase().includes(query);
            const matchesCategoryName = lesson.category && lesson.category.toLowerCase().includes(query);
            const matchesKeywords = lesson.keywordsOrMethods && lesson.keywordsOrMethods.some(k => k.toLowerCase().includes(query));

            return matchesTitle || matchesNumber || matchesId || matchesIntro || matchesSyntax || matchesCategoryName || matchesKeywords;
        });

        if (filteredCountBadge) {
            filteredCountBadge.textContent = `Showing ${filtered.length} of ${lessons.length} examples`;
        }

        renderLessons(filtered);
    }

    // Search events
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            if (searchClearBtn) {
                searchClearBtn.style.display = searchQuery ? 'block' : 'none';
            }
            filterAndRender();
        });
    }

    if (searchClearBtn) {
        searchClearBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchQuery = '';
                searchInput.focus();
            }
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
