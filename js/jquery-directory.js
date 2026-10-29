/**
 * PLAY-CODE (@N4) — jQuery 330 Lessons Directory Engine
 * Handles rendering of all 330 jQuery lessons, real-time client-side search,
 * category filtering across all 11 categories, and result count synchronization.
 */

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('lessons-grid');
    const searchInput = document.getElementById('lesson-search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const filteredCountBadge = document.getElementById('filtered-count');
    const totalCountBadge = document.getElementById('total-count');
    const categoryChipsContainer = document.getElementById('category-chips');

    // Retrieve jQuery lessons dataset
    const lessons = window.JQUERY_LESSONS || [];

    if (!lessons.length) {
        if (gridContainer) {
            gridContainer.innerHTML = `
                <div class="empty-state">
                    <h3>No jQuery lessons found</h3>
                    <p>Could not load the jQuery curriculum database. Please check data/jquery-lessons.js.</p>
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
                    <h3>🔍 No matching jQuery lessons found</h3>
                    <p>No lessons matched "${escapeHtml(searchQuery)}" in category "${escapeHtml(currentCategory)}".</p>
                    <button type="button" id="reset-filter-btn" class="nav-ctrl-btn" style="background:#00bfa5;color:#0b1120;font-weight:bold;margin-top:10px;">
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
            const description = lesson.introduction || lesson.learningObjective || '';
            const keywordsSnippet = lesson.keywordsOrMethods && lesson.keywordsOrMethods.length 
                ? lesson.keywordsOrMethods.slice(0, 3).map(p => `<code class="mini-prop-badge" style="background:#042f2e;color:#2dd4bf;border-color:rgba(0,191,165,0.25);">${escapeHtml(p)}</code>`).join(' ')
                : '';

            return `
                <a href="jquery-lesson.html?lesson=${lesson.id}" class="lesson-card-item" data-lesson-id="${lesson.id}">
                    <div>
                        <div class="lesson-card-header">
                            <span class="lesson-num-badge" style="background:rgba(0,191,165,0.15);color:#2dd4bf;border-color:rgba(0,191,165,0.3);">#${lesson.number}</span>
                            <span class="lesson-cat-tag" style="background:rgba(20,184,166,0.15);color:#5eead4;border-color:rgba(20,184,166,0.3);">${escapeHtml(lesson.category)}</span>
                        </div>
                        <h3>${escapeHtml(lesson.title)}</h3>
                        <p>${escapeHtml(description)}</p>
                        <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
                            ${keywordsSnippet}
                        </div>
                    </div>
                    <div class="lesson-card-footer">
                        <span class="action-label" style="color:#00bfa5;">Explore Lesson &rarr;</span>
                        <span style="font-size:0.8rem;color:#64748b;font-family:monospace;">Lesson ${lesson.id}/330</span>
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
            const matchesCategoryName = lesson.category && lesson.category.toLowerCase().includes(query);
            const matchesKeywords = lesson.keywordsOrMethods && lesson.keywordsOrMethods.some(k => k.toLowerCase().includes(query));

            return matchesTitle || matchesNumber || matchesId || matchesIntro || matchesCategoryName || matchesKeywords;
        });

        if (filteredCountBadge) {
            filteredCountBadge.textContent = `Showing ${filtered.length} of ${lessons.length} lessons`;
        }

        renderLessons(filtered);
    }

    // Search input handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            if (searchClearBtn) {
                searchClearBtn.style.display = searchQuery ? 'block' : 'none';
            }
            filterAndRender();
        });
    }

    // Clear search handler
    if (searchClearBtn) {
        searchClearBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            searchQuery = '';
            searchClearBtn.style.display = 'none';
            filterAndRender();
            if (searchInput) searchInput.focus();
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
