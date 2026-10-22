/**
 * PLAY-CODE (@N4) — CSS Lesson Directory Engine
 * Handles rendering of all 210 CSS lessons, instant client-side search, category filtering,
 * and result count synchronization without altering original numbering or titles.
 */

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('lessons-grid');
    const searchInput = document.getElementById('lesson-search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const filteredCountBadge = document.getElementById('filtered-count');
    const totalCountBadge = document.getElementById('total-count');
    const categoryChipsContainer = document.getElementById('category-chips');

    // Retrieve CSS lessons dataset
    const lessons = window.CSS_LESSONS || [];

    if (!lessons.length) {
        if (gridContainer) {
            gridContainer.innerHTML = `
                <div class="empty-state">
                    <h3>No CSS lessons found</h3>
                    <p>Could not load the CSS lessons database. Please check data/css-lessons.js.</p>
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
                    <h3>🔍 No matching CSS lessons found</h3>
                    <p>No CSS lessons matched "${escapeHtml(searchQuery)}" in category "${escapeHtml(currentCategory)}".</p>
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
            const propsSnippet = lesson.selectorsOrProps && lesson.selectorsOrProps.length 
                ? lesson.selectorsOrProps.slice(0, 3).map(p => `<code class="mini-prop-badge">${escapeHtml(p)}</code>`).join(' ')
                : '';

            return `
                <a href="css-lesson.html?lesson=${lesson.id}" class="lesson-card-item" data-lesson-id="${lesson.id}">
                    <div>
                        <div class="lesson-card-header">
                            <span class="lesson-num-badge">#${lesson.number}</span>
                            <span class="lesson-cat-tag">${escapeHtml(lesson.category)}</span>
                        </div>
                        <h3>${escapeHtml(lesson.title)}</h3>
                        <p>${escapeHtml(description)}</p>
                        ${propsSnippet ? `<div style="margin-top:8px;display:flex;gap:5px;flex-wrap:wrap;">${propsSnippet}</div>` : ''}
                    </div>
                    <div class="lesson-card-footer">
                        <span class="action-label">Explore Lesson &rarr;</span>
                        <span style="font-size:0.8rem;color:#64748b;font-family:monospace;">Lesson ${lesson.id}/210</span>
                    </div>
                </a>
            `;
        }).join('');
    }

    function filterAndRender() {
        const query = searchQuery.trim().toLowerCase();

        const filtered = lessons.filter(lesson => {
            const matchesCategory = (currentCategory === 'ALL' || lesson.category === currentCategory);
            
            const propsStr = (lesson.selectorsOrProps || []).join(' ').toLowerCase();
            const introStr = (lesson.introduction || '').toLowerCase();
            const explStr = (lesson.explanation || '').toLowerCase();
            const titleStr = lesson.title.toLowerCase();

            const matchesQuery = !query || 
                titleStr.includes(query) ||
                lesson.number.includes(query) ||
                String(lesson.id) === query ||
                introStr.includes(query) ||
                explStr.includes(query) ||
                propsStr.includes(query);

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
