/**
 * PLAY-CODE (@N4) — HTML Lesson Directory Engine
 * Handles rendering of all 166 lessons, instant client-side search, category filtering,
 * and result count synchronization without altering original numbering.
 */

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('lessons-grid');
    const searchInput = document.getElementById('lesson-search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const filteredCountBadge = document.getElementById('filtered-count');
    const totalCountBadge = document.getElementById('total-count');
    const categoryChipsContainer = document.getElementById('category-chips');

    // Retrieve lessons dataset
    const lessons = window.HTML_LESSONS || [];

    if (!lessons.length) {
        if (gridContainer) {
            gridContainer.innerHTML = `
                <div class="empty-state">
                    <h3>No lessons found</h3>
                    <p>Could not load the lessons database. Please check data/html-lessons.js.</p>
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

    // Collect distinct categories
    const categories = ['ALL', ...new Set(lessons.map(l => l.category))];

    // Render category filter chips
    if (categoryChipsContainer) {
        categoryChipsContainer.innerHTML = categories.map(cat => `
            <button type="button" class="chip-btn ${cat === 'ALL' ? 'active' : ''}" data-category="${cat}">
                ${cat === 'ALL' ? '🌟 All Topics (166)' : cat}
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
                    <h3>🔍 No matching lessons found</h3>
                    <p>No HTML lessons matched "${escapeHtml(searchQuery)}" in category "${escapeHtml(currentCategory)}".</p>
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
            const syntaxSnippet = lesson.syntax && lesson.syntax !== 'N/A' && !lesson.syntax.startsWith('N/A')
                ? `<code class="mini-prop-badge" style="background:#431407;color:#fdba74;border-color:rgba(249,115,22,0.25);">${escapeHtml(lesson.syntax)}</code>`
                : '';
            return `
                <a href="html-lesson.html?lesson=${lesson.id}" class="lesson-card-item" data-lesson-id="${lesson.id}">
                    <div>
                        <div class="lesson-card-header">
                            <span class="lesson-num-badge" style="background:rgba(249,115,22,0.15);color:#fb923c;border-color:rgba(249,115,22,0.3);">#${lesson.number}</span>
                            <span class="lesson-cat-tag" style="background:rgba(14,165,233,0.12);color:#7dd3fc;border-color:rgba(14,165,233,0.25);">${escapeHtml(lesson.category)}</span>
                        </div>
                        <h3>${escapeHtml(lesson.title)}</h3>
                        <p>${escapeHtml(lesson.summary)}</p>
                        ${syntaxSnippet ? `<div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;align-items:center;">${syntaxSnippet}</div>` : ''}
                    </div>
                    <div class="lesson-card-footer">
                        <span class="action-label" style="color:#f97316;">Explore Lesson &rarr;</span>
                        <span style="font-size:0.8rem;color:#64748b;font-family:monospace;">Lesson ${lesson.id}/166</span>
                    </div>
                </a>
            `;
        }).join('');
    }

    function filterAndRender() {
        const query = searchQuery.trim().toLowerCase();

        const filtered = lessons.filter(lesson => {
            const matchesCategory = (currentCategory === 'ALL' || lesson.category === currentCategory);
            const matchesQuery = !query || 
                lesson.title.toLowerCase().includes(query) ||
                lesson.number.includes(query) ||
                lesson.summary.toLowerCase().includes(query) ||
                String(lesson.id) === query;

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
