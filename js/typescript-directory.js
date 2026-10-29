/**
 * PLAY-CODE (@N4) — TypeScript 265 Lessons Directory Engine
 * Handles rendering of all 265 TypeScript lessons, real-time client-side search,
 * category filtering across all 16 curriculum categories, and result count synchronization.
 */

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('lessons-grid');
    const searchInput = document.getElementById('lesson-search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const filteredCountBadge = document.getElementById('filtered-count');
    const totalCountBadge = document.getElementById('total-count');
    const categoryChipsContainer = document.getElementById('category-chips');

    // Retrieve TypeScript lessons dataset
    const lessons = window.TYPESCRIPT_LESSONS || [];

    if (!lessons.length) {
        if (gridContainer) {
            gridContainer.innerHTML = `
                <div class="empty-state">
                    <h3>No TypeScript lessons found</h3>
                    <p>Could not load the TypeScript curriculum database. Please check data/typescript-lessons.js.</p>
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
                    <h3>🔍 No matching TypeScript lessons found</h3>
                    <p>No lessons matched "${escapeHtml(searchQuery)}" in category "${escapeHtml(currentCategory)}".</p>
                    <button type="button" id="reset-filter-btn" class="nav-ctrl-btn" style="background:#0284c7;color:white;margin-top:10px;">
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
                ? lesson.keywordsOrMethods.slice(0, 3).map(p => `<code class="mini-prop-badge" style="background:#082f49;color:#38bdf8;border-color:rgba(56,189,248,0.3);">${escapeHtml(p)}</code>`).join(' ')
                : '';

            const serverBadge = lesson.requiresNewServer 
                ? `<span style="font-size:0.75rem;background:rgba(234,179,8,0.15);color:#fde047;padding:2px 6px;border-radius:4px;border:1px solid rgba(234,179,8,0.3);font-weight:600;">⚠️ SERVER REQUIRED</span>`
                : '';

            return `
                <a href="typescript-lesson.html?lesson=${lesson.id}" class="lesson-card-item" data-lesson-id="${lesson.id}">
                    <div>
                        <div class="lesson-card-header">
                            <span class="lesson-num-badge" style="background:rgba(2,132,199,0.15);color:#38bdf8;border-color:rgba(2,132,199,0.3);">#${lesson.number}</span>
                            <span class="lesson-cat-tag" style="background:rgba(14,165,233,0.12);color:#7dd3fc;border-color:rgba(14,165,233,0.25);">${escapeHtml(lesson.category)}</span>
                        </div>
                        <h3>${escapeHtml(lesson.cleanTitle || lesson.title)}</h3>
                        <p>${escapeHtml(description)}</p>
                        <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
                            ${keywordsSnippet}
                            ${serverBadge}
                        </div>
                    </div>
                    <div class="lesson-card-footer">
                        <span class="action-label" style="color:#38bdf8;">Explore Lesson &rarr;</span>
                        <span style="font-size:0.8rem;color:#64748b;font-family:monospace;">Lesson ${lesson.id}/265</span>
                    </div>
                </a>
            `;
        }).join('');
    }

    function filterAndRender() {
        const query = searchQuery.trim().toLowerCase();

        const filtered = lessons.filter(lesson => {
            const matchesCat = (currentCategory === 'ALL') || (lesson.category === currentCategory);
            if (!matchesCat) return false;

            if (!query) return true;

            const inTitle = (lesson.title || '').toLowerCase().includes(query) || (lesson.cleanTitle || '').toLowerCase().includes(query);
            const inIntro = (lesson.introduction || '').toLowerCase().includes(query);
            const inObj = (lesson.learningObjective || '').toLowerCase().includes(query);
            const inId = String(lesson.id) === query || lesson.number.toLowerCase().includes(query);
            const inKeywords = (lesson.keywordsOrMethods || []).some(k => k.toLowerCase().includes(query));

            return inTitle || inIntro || inObj || inId || inKeywords;
        });

        renderLessons(filtered);

        if (filteredCountBadge) {
            filteredCountBadge.textContent = `Showing ${filtered.length} of ${lessons.length} lessons`;
        }
    }

    // Search events
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            if (searchClearBtn) {
                searchClearBtn.style.display = searchQuery.length ? 'flex' : 'none';
            }
            filterAndRender();
        });
    }

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

    // Helper functions
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function truncate(str, max) {
        if (!str) return '';
        return str.length > max ? str.substring(0, max) + '...' : str;
    }
});
