/**
 * PLAY-CODE (CodePlay) — Main Application Script
 * Owner: NASA-KUN (@ঔৣ፝ N4!)
 * 
 * Features:
 * - Dynamic Pagination (First, Prev, Page Numbers with Ellipsis, Next, Last)
 * - Page Number Direct Input & Go Button (with Enter key submission)
 * - Cards Per Page Selection (12, 36, 50, 100, All)
 * - Strict 3-Column Desktop Grid Alignment
 * - Verified Continuous Card Numbering (97, 98, 99, 100, 101, 102...)
 * - Unified Real-Time Search & Clear Handling
 */

(function () {
    'use strict';

    // Application State
    let currentPage = 1;
    let totalPages = 1;
    let currentDisplayCount = '50'; // Default: 50 cards per view
    let currentSearchQuery = '';

    /**
     * 1. Initialize Card Data Attributes & Canonical Numbering
     * Stores the authentic catalog number for every card so numbering
     * is permanently preserved without gaps or duplicates.
     */
    function initCardTaxonomy() {
        const grid = document.getElementById('category-grid');
        if (!grid) return;

        const cards = grid.querySelectorAll('.category-card');
        cards.forEach((card, index) => {
            const numSpan = card.querySelector('.card-num');
            if (numSpan && !card.dataset.canonicalNum) {
                card.dataset.canonicalNum = numSpan.textContent.trim();
            }
            card.dataset.originalIndex = index + 1;
        });
    }

    /**
     * 2. Display Count Management (12, 36, 50, 100, All)
     * Automatically recalculates displayed cards and pagination.
     */
    function setDisplayCount(count) {
        currentDisplayCount = String(count);
        currentPage = 1; // Reset to page 1 on count change

        const countBtns = document.querySelectorAll('.display-count-btn');
        countBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.count === currentDisplayCount);
        });

        updateDynamicGridAndNumbering(true);
    }

    /**
     * 3. Navigation Functions (First, Prev, Next, Last, Jump)
     */
    function goToPage(pageNum) {
        const target = Math.max(1, Math.min(parseInt(pageNum, 10) || 1, totalPages));
        currentPage = target;
        updateDynamicGridAndNumbering(true);
    }

    function goToPrevPage() {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    }

    function goToNextPage() {
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    }

    function goToLastPage() {
        goToPage(totalPages);
    }

    function goToSection(sectionNum) {
        currentDisplayCount = '50';
        const countBtns = document.querySelectorAll('.display-count-btn');
        countBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.count === '50');
        });
        const target = Math.max(1, Math.min(parseInt(sectionNum, 10) || 1, 16));
        goToPage(target);
    }

    function goToInputPage(inputEl) {
        let val;
        if (inputEl && inputEl.value !== undefined) {
            val = parseInt(inputEl.value, 10);
        } else {
            const primaryInput = document.querySelector('.pagination-page-input');
            val = primaryInput ? parseInt(primaryInput.value, 10) : 1;
        }
        if (isNaN(val)) val = currentPage;
        goToPage(val);
    }

    /**
     * 4. Ellipsis Pagination Calculator
     * Computes clean button sequence with ellipsis for scalable navigation.
     */
    function getPaginationPages(current, total) {
        if (total <= 1) return [1];
        if (total <= 7) {
            const pages = [];
            for (let i = 1; i <= total; i++) pages.push(i);
            return pages;
        }

        if (current <= 4) {
            return [1, 2, 3, 4, 5, '...', total];
        } else if (current >= total - 3) {
            return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
        } else {
            return [1, '...', current - 1, current, current + 1, '...', total];
        }
    }

    /**
     * 5. Render Pagination Controls (Positioned at the Bottom)
     * Includes First, Prev, Numbered Pages, Next, Last, Jump Box (Page [X] of [Total] [Go])
     */
    function renderPaginationControls(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        const isFirstDisabled = (currentPage <= 1 || totalPages <= 1);
        const isLastDisabled = (currentPage >= totalPages || totalPages <= 1);

        // 1. First Button
        const firstBtn = document.createElement('button');
        firstBtn.type = 'button';
        firstBtn.className = 'pagination-btn pagination-first';
        firstBtn.disabled = isFirstDisabled;
        firstBtn.setAttribute('aria-label', 'First page');
        firstBtn.innerHTML = '<span>« First</span>';
        firstBtn.onclick = () => goToPage(1);
        container.appendChild(firstBtn);

        // 2. Previous Button
        const prevBtn = document.createElement('button');
        prevBtn.type = 'button';
        prevBtn.className = 'pagination-btn pagination-prev';
        prevBtn.disabled = isFirstDisabled;
        prevBtn.setAttribute('aria-label', 'Previous page');
        prevBtn.innerHTML = '<span>‹ Prev</span>';
        prevBtn.onclick = () => goToPrevPage();
        container.appendChild(prevBtn);

        // 3. Pages Group
        const pagesGroup = document.createElement('div');
        pagesGroup.className = 'pagination-pages-group';
        pagesGroup.setAttribute('role', 'group');
        pagesGroup.setAttribute('aria-label', 'Page numbers');

        const pageNumbers = getPaginationPages(currentPage, totalPages);
        pageNumbers.forEach(item => {
            if (item === '...') {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'pagination-ellipsis';
                ellipsis.textContent = '...';
                ellipsis.setAttribute('aria-hidden', 'true');
                pagesGroup.appendChild(ellipsis);
            } else {
                const pageBtn = document.createElement('button');
                pageBtn.type = 'button';
                pageBtn.className = `pagination-page-btn ${item === currentPage ? 'active' : ''}`;
                pageBtn.setAttribute('aria-label', `Page ${item}`);
                if (item === currentPage) {
                    pageBtn.setAttribute('aria-current', 'page');
                }
                pageBtn.textContent = item;
                pageBtn.onclick = () => goToPage(item);
                pagesGroup.appendChild(pageBtn);
            }
        });
        container.appendChild(pagesGroup);

        // 4. Next Button
        const nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        nextBtn.className = 'pagination-btn pagination-next';
        nextBtn.disabled = isLastDisabled;
        nextBtn.setAttribute('aria-label', 'Next page');
        nextBtn.innerHTML = '<span>Next ›</span>';
        nextBtn.onclick = () => goToNextPage();
        container.appendChild(nextBtn);

        // 5. Last Button
        const lastBtn = document.createElement('button');
        lastBtn.type = 'button';
        lastBtn.className = 'pagination-btn pagination-last';
        lastBtn.disabled = isLastDisabled;
        lastBtn.setAttribute('aria-label', 'Last page');
        lastBtn.innerHTML = '<span>Last »</span>';
        lastBtn.onclick = () => goToLastPage();
        container.appendChild(lastBtn);

        // 6. Direct Jump Box (Page [input] of [total] [Go])
        const jumpBox = document.createElement('div');
        jumpBox.className = 'pagination-jump-box';

        const jumpLabel = document.createElement('span');
        jumpLabel.className = 'jump-label';
        jumpLabel.textContent = 'Page';
        jumpBox.appendChild(jumpLabel);

        const pageInput = document.createElement('input');
        pageInput.type = 'number';
        pageInput.className = 'pagination-page-input';
        pageInput.min = '1';
        pageInput.max = String(Math.max(1, totalPages));
        pageInput.value = String(currentPage);
        pageInput.setAttribute('aria-label', 'Go to page number');
        pageInput.onkeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                goToInputPage(pageInput);
            }
        };
        jumpBox.appendChild(pageInput);

        const jumpTotal = document.createElement('span');
        jumpTotal.className = 'jump-total';
        jumpTotal.textContent = `of ${totalPages}`;
        jumpBox.appendChild(jumpTotal);

        const goBtn = document.createElement('button');
        goBtn.type = 'button';
        goBtn.className = 'pagination-go-btn';
        goBtn.textContent = 'Go';
        goBtn.setAttribute('aria-label', 'Navigate to entered page');
        goBtn.onclick = () => goToInputPage(pageInput);
        jumpBox.appendChild(goBtn);

        container.appendChild(jumpBox);
    }

    /**
     * 6. Dynamic Grid & Sequential Numbering Engine
     * Accurately slices cards, handles 3-column layout flow, and guarantees
     * strict sequential numbering: 97, 98, 99, 100, 101, 102...
     */
    function updateDynamicGridAndNumbering(shouldScroll = false) {
        const grid = document.getElementById('category-grid');
        const badge = document.getElementById('section-counter-badge');
        if (!grid) return;

        const allCards = Array.from(grid.querySelectorAll('.category-card'));
        const query = currentSearchQuery.toLowerCase().trim();

        // A. Filter cards by search query
        const matchingCards = allCards.filter(card => {
            if (!query) return true;
            const title = (card.querySelector('h3') ? card.querySelector('h3').textContent : '').toLowerCase();
            const desc = (card.querySelector('p') ? card.querySelector('p').textContent : '').toLowerCase();
            const cardClass = card.className.toLowerCase();
            return title.includes(query) || desc.includes(query) || cardClass.includes(query);
        });

        const totalItems = matchingCards.length;

        // B. Calculate total pages based on selected display count
        let perPage = totalItems;
        if (currentDisplayCount !== 'all') {
            perPage = parseInt(currentDisplayCount, 10) || 50;
            if (currentDisplayCount === '50' && !query && totalItems > 800 && totalItems <= 805) {
                // Section 16 (801–850) harmoniously includes the trailing Projects card at position 801
                totalPages = 16;
            } else {
                totalPages = Math.max(1, Math.ceil(totalItems / perPage));
            }
        } else {
            totalPages = 1;
        }

        // Clamp current page
        if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        if (currentPage < 1) {
            currentPage = 1;
        }

        // C. Calculate Visible Slice
        let startIndex = 0;
        let endIndex = totalItems;

        if (currentDisplayCount !== 'all') {
            startIndex = (currentPage - 1) * perPage;
            if (currentDisplayCount === '50' && !query && currentPage === 16) {
                endIndex = totalItems; // Includes card 801 (Projects) seamlessly on Section 16
            } else {
                endIndex = Math.min(startIndex + perPage, totalItems);
            }
        }

        const visibleCards = matchingCards.slice(startIndex, endIndex);
        const visibleCardSet = new Set(visibleCards);

        // D. Update Card Visibility
        allCards.forEach(card => {
            if (visibleCardSet.has(card)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });

        // E. Sequential Card Numbering (Preserve exact sequence: 97, 98, 99, 100, 101, 102...)
        visibleCards.forEach(card => {
            const numSpan = card.querySelector('.card-num');
            if (numSpan) {
                if (card.classList.contains('project') || card.dataset.canonicalNum === '★') {
                    numSpan.textContent = '★';
                } else if (card.dataset.canonicalNum) {
                    numSpan.textContent = card.dataset.canonicalNum;
                }
            }
        });

        // F. Render Pagination at Bottom
        renderPaginationControls('pagination-container-bottom');

        // G. Update Section Navigation buttons active state
        const secNavBtns = document.querySelectorAll('.section-nav-btn');
        secNavBtns.forEach(btn => {
            const sec = parseInt(btn.dataset.section, 10);
            if (currentDisplayCount === '50' && !query && currentPage === sec) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // H. Update Section Information Status Box
        if (badge) {
            if (totalItems === 0) {
                badge.textContent = `No languages found matching "${query}"`;
            } else if (currentDisplayCount === 'all') {
                if (query) {
                    badge.textContent = `Showing All ${totalItems} Matching Results for "${query}"`;
                } else {
                    badge.textContent = `Showing All Languages: 1–850 & Projects (${totalItems} Entries)`;
                }
            } else {
                if (query) {
                    badge.textContent = `Showing Page ${currentPage} of ${totalPages}: Matches ${startIndex + 1}–${endIndex} (${totalItems} Results for "${query}")`;
                } else if (currentDisplayCount === '50') {
                    if (currentPage === 1) {
                        badge.textContent = `Showing Page 1 of 16: Section 1 (Languages 1–50) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 2) {
                        badge.textContent = `Showing Page 2 of 16: Section 2 (Languages 51–100) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 3) {
                        badge.textContent = `Showing Page 3 of 16: Section 3 (Languages 101–150) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 4) {
                        badge.textContent = `Showing Page 4 of 16: Section 4 (Languages 151–200) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 5) {
                        badge.textContent = `Showing Page 5 of 16: Section 5 (Languages 201–250) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 6) {
                        badge.textContent = `Showing Page 6 of 16: Section 6 (Languages 251–300) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 7) {
                        badge.textContent = `Showing Page 7 of 16: Section 7 (Languages 351–400) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 8) {
                        badge.textContent = `Showing Page 8 of 16: Section 8 (Languages 401–450) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 9) {
                        badge.textContent = `Showing Page 9 of 16: Section 9 (Languages 451–500) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 10) {
                        badge.textContent = `Showing Page 10 of 16: Section 10 (Languages 501–550) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 11) {
                        badge.textContent = `Showing Page 11 of 16: Section 11 (Languages 551–600) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 12) {
                        badge.textContent = `Showing Page 12 of 16: Section 12 (Languages 601–650) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 13) {
                        badge.textContent = `Showing Page 13 of 16: Section 13 (Languages 651–700) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 14) {
                        badge.textContent = `Showing Page 14 of 16: Section 14 (Languages 701–750) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 15) {
                        badge.textContent = `Showing Page 15 of 16: Section 15 (Languages 751–800) — 50 of ${totalItems} Entries`;
                    } else if (currentPage === 16) {
                        badge.textContent = `Showing Page 16 of 16: Section 16 (Languages 801–850 & Projects) — 51 of ${totalItems} Entries`;
                    } else {
                        badge.textContent = `Showing Page ${currentPage} of ${totalPages} — ${visibleCards.length} of ${totalItems} Entries`;
                    }
                } else {
                    badge.textContent = `Showing Page ${currentPage} of ${totalPages}: Items ${startIndex + 1}–${endIndex} (${visibleCards.length} of ${totalItems} Entries)`;
                }
            }
        }

        // H. Smooth scroll to Explore Categories area on user pagination change
        if (shouldScroll) {
            const categoriesSection = document.getElementById('categories');
            if (categoriesSection) {
                const headerBox = categoriesSection.querySelector('.categories-heading-box');
                if (headerBox) {
                    headerBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    }

    /**
     * 7. Search Input Synchronization & Quick Navigation
     */
    function setupSearchSync() {
        const exploreSearch = document.getElementById('explore-search-input');
        const clearBtn = document.getElementById('explore-search-clear');
        const navSearch = document.querySelector('.search-box input');

        function onSearchInput(val) {
            currentSearchQuery = val;
            currentPage = 1;

            if (exploreSearch && exploreSearch.value !== val) {
                exploreSearch.value = val;
            }
            if (navSearch && navSearch.value !== val) {
                navSearch.value = val;
            }
            if (clearBtn) {
                clearBtn.style.display = val.length > 0 ? 'inline-flex' : 'none';
            }

            updateDynamicGridAndNumbering(false);
        }

        if (exploreSearch) {
            exploreSearch.addEventListener('input', (e) => onSearchInput(e.target.value));
        }

        if (navSearch) {
            navSearch.addEventListener('input', (e) => onSearchInput(e.target.value));
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (exploreSearch) exploreSearch.value = '';
                if (navSearch) navSearch.value = '';
                clearBtn.style.display = 'none';
                currentSearchQuery = '';
                currentPage = 1;
                updateDynamicGridAndNumbering(false);
                if (exploreSearch) exploreSearch.focus();
            });
        }

        // Enter key navigation for quick jump to core lesson pages
        [exploreSearch, navSearch].forEach(input => {
            if (!input) return;
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const q = input.value.trim().toLowerCase();
                    if (!q) return;

                    if (q.includes('css')) {
                        window.location.href = 'pages/css.html';
                    } else if (q.includes('js') || q.includes('javascript')) {
                        window.location.href = 'pages/javascript.html';
                    } else if (q.includes('project')) {
                        window.location.href = 'pages/projects.html';
                    } else if (q.includes('editor')) {
                        window.location.href = 'pages/editor.html';
                    } else if (q.includes('php')) {
                        window.location.href = 'pages/php.html';
                    } else if (q.includes('python')) {
                        window.location.href = 'pages/python.html';
                    } else if (q.includes('sql')) {
                        window.location.href = 'pages/sql.html';
                    } else if (q.includes('typescript')) {
                        window.location.href = 'pages/typescript.html';
                    } else if (q.includes('jquery')) {
                        window.location.href = 'pages/jquery.html';
                    } else if (q.includes('html')) {
                        window.location.href = 'pages/html.html';
                    } else {
                        const firstVisible = Array.from(document.querySelectorAll('.category-card'))
                            .find(card => card.style.display !== 'none' && card.href);
                        if (firstVisible) {
                            window.location.href = firstVisible.href;
                        }
                    }
                }
            });
        });
    }

    /**
     * 8. Initial Boot & URL Parameters Check
     */
    function boot() {
        initCardTaxonomy();
        setupSearchSync();

        // Check URL parameters for page selection
        const urlParams = new URLSearchParams(window.location.search);
        const pageParam = urlParams.get('page') || urlParams.get('section');
        if (pageParam && !isNaN(parseInt(pageParam, 10))) {
            goToPage(parseInt(pageParam, 10));
        } else if (window.location.hash.startsWith('#page-') || window.location.hash.startsWith('#section-')) {
            const hashNum = parseInt(window.location.hash.replace(/#(page|section)-/, ''), 10);
            if (!isNaN(hashNum)) goToPage(hashNum);
        } else {
            updateDynamicGridAndNumbering(false);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }

    // 9. Global Exports for UI Event Handlers
    window.goToPage = goToPage;
    window.goToPrevPage = goToPrevPage;
    window.goToNextPage = goToNextPage;
    window.goToLastPage = goToLastPage;
    window.goToInputPage = goToInputPage;
    window.goToSection = goToSection;
    window.setDisplayCount = setDisplayCount;
    window.updateDynamicGridAndNumbering = updateDynamicGridAndNumbering;

})();
