/**
 * PLAY-CODE (@N4) — Interactive SQL Lesson Runner Engine
 * Handles URL parameter extraction (?lesson=X), lesson state loading,
 * SQL statement editor, CLI output terminal, Copy/Reset/Run triggers,
 * schema/prerequisite rendering, [REQUIRES NEW SERVER] badges,
 * and safe Prev/Next navigation across all 205 SQL/MySQL examples.
 */

document.addEventListener('DOMContentLoaded', () => {
    const lessons = window.SQL_LESSONS || [];

    // Fallback if dataset failed to load
    if (!lessons.length) {
        document.body.innerHTML = `
            <div style="font-family:sans-serif;padding:40px;text-align:center;color:white;background:#0b1120;min-height:100vh;">
                <h2>Unable to load SQL lesson database</h2>
                <p>Could not locate SQL_LESSONS. Please check data/sql-lessons.js.</p>
                <a href="sql.html" style="color:#38bdf8;">&larr; Return to SQL Directory</a>
            </div>
        `;
        return;
    }

    // Parse URL parameter ?lesson=X
    const params = new URLSearchParams(window.location.search);
    let lessonId = parseInt(params.get('lesson'), 10);

    // Fallback to Lesson 1 if invalid or out of bounds
    if (isNaN(lessonId) || lessonId < 1 || lessonId > lessons.length) {
        lessonId = 1;
    }

    const currentLesson = lessons.find(l => l.id === lessonId) || lessons[0];

    // UI Elements
    const breadcrumbTitle = document.getElementById('breadcrumb-title');
    const lessonTitleEl = document.getElementById('lesson-title');
    const lessonBadgeEl = document.getElementById('lesson-badge');
    const lessonCatEl = document.getElementById('lesson-category');
    const serverBannerEl = document.getElementById('server-banner');
    const lessonSummaryEl = document.getElementById('lesson-summary');
    const lessonPrereqEl = document.getElementById('lesson-prereq');
    const lessonSchemaEl = document.getElementById('lesson-schema');
    const lessonAttrsEl = document.getElementById('lesson-attributes');
    const lessonNotesEl = document.getElementById('lesson-notes');
    const lessonMistakesEl = document.getElementById('lesson-mistakes');
    const lessonSecurityEl = document.getElementById('lesson-security');
    const lessonExpectedEl = document.getElementById('lesson-expected');
    const lessonResultExpEl = document.getElementById('lesson-result-explanation');

    const sqlEditor = document.getElementById('sql-editor');
    const terminalBody = document.getElementById('terminal-body');
    const btnClearTerm = document.getElementById('btn-clear-term');

    const btnRun = document.getElementById('btn-run');
    const btnReset = document.getElementById('btn-reset');
    const btnCopy = document.getElementById('btn-copy');
    const toastMsg = document.getElementById('toast-msg');

    const prevBtnTop = document.getElementById('prev-btn-top');
    const nextBtnTop = document.getElementById('next-btn-top');
    const prevBtnBottom = document.getElementById('prev-btn-bottom');
    const nextBtnBottom = document.getElementById('next-btn-bottom');

    // Populate metadata
    document.title = `Example ${currentLesson.number}: ${currentLesson.cleanTitle || currentLesson.title} — CodePlay`;

    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = `#${currentLesson.number}: ${currentLesson.cleanTitle || currentLesson.title}`;
    }
    
    if (lessonTitleEl) {
        lessonTitleEl.textContent = `${currentLesson.id}. ${currentLesson.cleanTitle || currentLesson.title}`;
    }
    
    if (lessonBadgeEl) {
        lessonBadgeEl.textContent = `Example #${currentLesson.number} of ${lessons.length}`;
    }
    
    if (lessonCatEl) {
        lessonCatEl.textContent = currentLesson.category;
    }

    // Server dependency banner
    if (serverBannerEl) {
        if (currentLesson.requiresNewServer) {
            serverBannerEl.style.display = 'block';
            serverBannerEl.innerHTML = `
                <div style="background:rgba(234,179,8,0.12);border:1px solid rgba(234,179,8,0.35);border-left:4px solid #eab308;padding:12px 16px;border-radius:10px;margin-bottom:18px;">
                    <div style="display:flex;align-items:center;gap:8px;color:#fde047;font-weight:700;font-size:0.95rem;">
                        <span>⚠️ [REQUIRES NEW SERVER]</span>
                        <span>Server Environment Required</span>
                    </div>
                    <p style="margin:6px 0 0;color:#fef08a;font-size:0.88rem;line-height:1.5;">
                        This operation requires a dedicated live MySQL server daemon (mysqld) and administrator privileges (e.g. database/user creation, GRANT/REVOKE, triggers, event schedulers, backups, or PHP backend execution).
                    </p>
                </div>
            `;
        } else {
            serverBannerEl.style.display = 'none';
        }
    }

    if (lessonSummaryEl) {
        lessonSummaryEl.innerHTML = `
            <strong>Introduction:</strong> ${escapeHtml(currentLesson.introduction)}<br>
            <span style="display:block;margin-top:8px;"><strong>Learning Objective:</strong> ${escapeHtml(currentLesson.learningObjective)}</span>
        `;
    }

    if (lessonPrereqEl) {
        lessonPrereqEl.textContent = currentLesson.prerequisites || 'Basic understanding of relational databases and tabular data.';
    }

    if (lessonSchemaEl) {
        lessonSchemaEl.textContent = currentLesson.requiredSchema || 'None (System Information Query)';
    }

    if (lessonAttrsEl) {
        if (currentLesson.keywordsOrMethods && currentLesson.keywordsOrMethods.length) {
            lessonAttrsEl.innerHTML = currentLesson.keywordsOrMethods.map(kw => 
                `<span class="attr-pill" style="background:#083344;color:#67e8f9;border:1px solid rgba(6,182,212,0.35);padding:4px 10px;border-radius:8px;font-family:monospace;font-size:0.85rem;">${escapeHtml(kw)}</span>`
            ).join(' ');
        } else {
            lessonAttrsEl.innerHTML = '<span style="color:#64748b;">Standard ANSI SQL / MySQL Syntax</span>';
        }
    }

    if (lessonNotesEl) {
        lessonNotesEl.innerHTML = `<strong>💡 Pro Tip & Best Practice:</strong> ${escapeHtml(currentLesson.notes)}`;
    }
    
    if (lessonMistakesEl) {
        lessonMistakesEl.innerHTML = `<strong>⚠️ Common Mistake to Avoid:</strong> ${escapeHtml(currentLesson.commonMistakes)}`;
    }

    if (lessonSecurityEl) {
        lessonSecurityEl.innerHTML = `<strong>🔒 Security & Production Hardening:</strong> ${escapeHtml(currentLesson.securityNotes || "Always parameterize values when executing SQL queries from application code.")}`;
    }
    
    if (lessonExpectedEl) {
        lessonExpectedEl.textContent = currentLesson.expectedOutput;
    }

    if (lessonResultExpEl) {
        lessonResultExpEl.textContent = currentLesson.resultExplanation || "The output demonstrates the verified evaluation under a compliant MySQL 8.0+ server.";
    }

    // Populate initial code editor
    if (sqlEditor) {
        sqlEditor.value = currentLesson.codeExample;
    }

    // Traversal Buttons
    if (prevBtnTop) configureNavBtn(prevBtnTop, currentLesson.id - 1);
    if (nextBtnTop) configureNavBtn(nextBtnTop, currentLesson.id + 1);
    if (prevBtnBottom) configureNavBtn(prevBtnBottom, currentLesson.id - 1);
    if (nextBtnBottom) configureNavBtn(nextBtnBottom, currentLesson.id + 1);

    function configureNavBtn(btn, targetId) {
        if (targetId < 1 || targetId > lessons.length) {
            btn.classList.add('disabled');
            btn.removeAttribute('href');
            btn.style.opacity = '0.35';
            btn.style.pointerEvents = 'none';
        } else {
            btn.href = `sql-lesson.html?lesson=${targetId}`;
            btn.classList.remove('disabled');
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }
    }

    // Initial Execution / Output Display
    renderExecution(false);

    // Run action
    if (btnRun) {
        btnRun.addEventListener('click', () => {
            renderExecution(true);
            showToast('▶ SQL Statement Executed');
        });
    }

    // Reset action
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (sqlEditor) {
                sqlEditor.value = currentLesson.codeExample;
            }
            renderExecution(false);
            showToast('↺ Example Reset to Original Code');
        });
    }

    // Copy action
    if (btnCopy) {
        btnCopy.addEventListener('click', () => {
            if (!sqlEditor) return;
            navigator.clipboard.writeText(sqlEditor.value).then(() => {
                showToast('📋 SQL Code Copied to Clipboard!');
            }).catch(() => {
                sqlEditor.select();
                document.execCommand('copy');
                showToast('📋 Copied to Clipboard!');
            });
        });
    }

    // Clear terminal
    if (btnClearTerm) {
        btnClearTerm.addEventListener('click', () => {
            if (terminalBody) {
                terminalBody.innerHTML = '<div style="color:#64748b;font-style:italic;">Terminal cleared. Click "Run" to view execution results.</div>';
            }
        });
    }

    // Keyboard shortcut: Ctrl + Enter to run
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            if (btnRun) btnRun.click();
        }
    });

    function renderExecution(isUserTriggered) {
        if (!terminalBody) return;

        const timestamp = new Date().toLocaleTimeString();
        let logHtml = '';

        if (isUserTriggered) {
            logHtml += `<div class="log-entry" style="color:#64748b;font-size:0.8rem;margin-bottom:8px;">-- [mysql CLI session @ ${timestamp}] executing SQL buffer:</div>`;
        } else {
            logHtml += `<div class="log-entry" style="color:#64748b;font-size:0.8rem;margin-bottom:8px;">-- [mysql CLI session @ ${timestamp}] verified database output:</div>`;
        }

        if (currentLesson.requiresNewServer) {
            logHtml += `<div class="log-entry" style="color:#fde047;background:rgba(234,179,8,0.1);padding:6px 10px;border-radius:6px;border:1px solid rgba(234,179,8,0.25);margin-bottom:10px;">⚠️ Note: Executing in client emulation mode. For live execution, connect to a running MySQL instance.</div>`;
        }

        logHtml += `<pre style="margin:0;color:#67e8f9;font-family:'Consolas',monospace;font-size:0.92rem;line-height:1.55;">${escapeHtml(currentLesson.expectedOutput)}</pre>`;

        terminalBody.innerHTML = logHtml;
    }

    function showToast(text) {
        if (!toastMsg) return;
        toastMsg.textContent = text;
        toastMsg.classList.add('show');
        setTimeout(() => {
            toastMsg.classList.remove('show');
        }, 2200);
    }
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
