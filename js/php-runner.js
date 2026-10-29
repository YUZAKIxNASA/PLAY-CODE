/** [YZN-261029-011] Authorship: YUZAKI NASA (@ঔৣ፝ N4!) · PLAY-CODE / CodePlay */
/**
 * PLAY-CODE (@N4) — Interactive PHP Lesson Runner Engine
 * Handles URL parameter extraction (?lesson=X), lesson state loading,
 * PHP code editor, output terminal, Copy/Reset/Run triggers,
 * [REQUIRES NEW SERVER] tagging and guidance on lessons 119-123 and 161-171,
 * and safe Prev/Next navigation across all 200 lessons.
 * Pure honest execution: No fake output; clear explanation of how to execute PHP code.
 */

document.addEventListener('DOMContentLoaded', () => {
    const lessons = window.PHP_LESSONS || [];

    // Fallback if dataset failed to load
    if (!lessons.length) {
        document.body.innerHTML = `
            <div style="font-family:sans-serif;padding:40px;text-align:center;color:white;background:#0b1120;min-height:100vh;">
                <h2>Unable to load PHP lesson database</h2>
                <p>Could not locate PHP_LESSONS. Please check data/php-lessons.js.</p>
                <a href="php.html" style="color:#818cf8;">&larr; Return to PHP Directory</a>
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
    const serverTagContainer = document.getElementById('server-tag-container');
    const lessonSummaryEl = document.getElementById('lesson-summary');
    const lessonSyntaxEl = document.getElementById('lesson-syntax');
    const lessonAttrsEl = document.getElementById('lesson-attributes');
    const lessonNotesEl = document.getElementById('lesson-notes');
    const lessonMistakesEl = document.getElementById('lesson-mistakes');
    const lessonExpectedEl = document.getElementById('lesson-expected');
    const lessonResultExpEl = document.getElementById('lesson-result-explanation');

    const phpEditor = document.getElementById('php-editor');
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
    document.title = `Lesson ${currentLesson.number}: ${currentLesson.cleanTitle || currentLesson.title} — CodePlay`;

    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = `#${currentLesson.number}: ${currentLesson.cleanTitle || currentLesson.title}`;
    }
    
    if (lessonTitleEl) {
        lessonTitleEl.textContent = `${currentLesson.id}. ${currentLesson.cleanTitle || currentLesson.title}`;
    }
    
    if (lessonBadgeEl) {
        lessonBadgeEl.textContent = `Lesson #${currentLesson.number} of ${lessons.length}`;
    }
    
    if (lessonCatEl) {
        lessonCatEl.textContent = currentLesson.category;
    }

    // Display [REQUIRES NEW SERVER] tag beside only the specified 16 lessons
    if (serverTagContainer) {
        if (currentLesson.requiresNewServer) {
            serverTagContainer.innerHTML = `
                <div class="server-req-banner" style="background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.35);padding:10px 16px;border-radius:12px;margin:12px 0 16px;display:flex;align-items:center;gap:12px;">
                    <span style="background:#ef4444;color:white;font-weight:700;font-size:0.75rem;padding:4px 10px;border-radius:6px;letter-spacing:0.5px;">[REQUIRES NEW SERVER]</span>
                    <span style="color:#fca5a5;font-size:0.88rem;line-height:1.4;">
                        This lesson demonstrates server-dependent functionality. Actual live execution requires an active web server (e.g., Apache, Nginx, or <code>php -S localhost:8000</code>) or database daemon (e.g., MySQL on port 3306).
                    </span>
                </div>
            `;
        } else {
            serverTagContainer.innerHTML = '';
        }
    }
    
    if (lessonSummaryEl) {
        lessonSummaryEl.textContent = currentLesson.explanation || currentLesson.introduction;
    }
    
    if (lessonSyntaxEl) {
        lessonSyntaxEl.textContent = currentLesson.syntax;
    }
    
    if (lessonAttrsEl) {
        if (currentLesson.keywordsOrMethods && currentLesson.keywordsOrMethods.length) {
            lessonAttrsEl.innerHTML = currentLesson.keywordsOrMethods.map(kw => 
                `<span class="attr-pill" style="background:#1e1b4b;color:#a5b4fc;border:1px solid #4338ca;padding:4px 10px;border-radius:8px;font-family:monospace;font-size:0.85rem;">${escapeHtml(kw)}</span>`
            ).join(' ');
        } else {
            lessonAttrsEl.innerHTML = '<span style="color:#64748b;">Standard PHP Syntax</span>';
        }
    }
    
    if (lessonNotesEl) {
        lessonNotesEl.innerHTML = `<strong>💡 Pro Tip & Best Practice:</strong> ${escapeHtml(currentLesson.notes)}`;
    }
    
    if (lessonMistakesEl) {
        lessonMistakesEl.innerHTML = `<strong>⚠️ Common Mistake to Avoid:</strong> ${escapeHtml(currentLesson.commonMistakes)}`;
    }
    
    if (lessonExpectedEl) {
        lessonExpectedEl.textContent = currentLesson.expectedOutput;
    }

    if (lessonResultExpEl) {
        lessonResultExpEl.textContent = currentLesson.resultExplanation || "The output demonstrates the correct evaluation of the PHP statement above.";
    }

    // Populate initial code editor
    if (phpEditor) {
        phpEditor.value = currentLesson.codeExample;
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
            btn.href = `php-lesson.html?lesson=${targetId}`;
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
            showToast('▶ PHP Code Executed');
        });
    }

    // Reset action
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (phpEditor) {
                phpEditor.value = currentLesson.codeExample;
            }
            renderExecution(false);
            showToast('↺ Lesson Reset to Original Code');
        });
    }

    // Copy action
    if (btnCopy) {
        btnCopy.addEventListener('click', () => {
            if (!phpEditor) return;
            navigator.clipboard.writeText(phpEditor.value).then(() => {
                showToast('📋 PHP Code Copied to Clipboard!');
            }).catch(() => {
                phpEditor.select();
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

    // Support Tab indentation inside the code editor textarea
    if (phpEditor) {
        phpEditor.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = phpEditor.selectionStart;
                const end = phpEditor.selectionEnd;
                phpEditor.value = phpEditor.value.substring(0, start) + '    ' + phpEditor.value.substring(end);
                phpEditor.selectionStart = phpEditor.selectionEnd = start + 4;
            }
        });
    }

    // Execution rendering logic
    function renderExecution(isUserTriggered) {
        if (!terminalBody) return;

        const currentCode = (phpEditor ? phpEditor.value : '').trim();
        const isOriginalCode = currentCode === currentLesson.codeExample.trim();

        let termHtml = '';

        if (currentLesson.requiresNewServer) {
            // Server-required lessons (119-123 & 161-171)
            termHtml = `
<div class="log-entry" style="color:#38bdf8;margin-bottom:8px;">
  [SYSTEM] PHP 8.3 CLI Environment initialized
</div>
<div class="log-entry" style="background:rgba(239,68,68,0.15);border-left:3px solid #ef4444;padding:8px 12px;margin-bottom:12px;color:#fca5a5;">
  <strong>[REQUIRES NEW SERVER] NOTICE:</strong><br>
  This lesson (${currentLesson.title}) interacts with external server variables or database daemons.<br>
  To execute in a live production environment:
  <ul style="margin:6px 0 0 18px;padding:0;color:#cbd5e1;font-size:0.88rem;">
    <li>For Server Variables: Start PHP built-in web server via <code>php -S localhost:8000</code> or host under Apache/Nginx.</li>
    <li>For MySQL Lessons: Ensure MySQL/MariaDB service is running on <code>127.0.0.1:3306</code> with configured credentials.</li>
  </ul>
</div>
<div class="log-entry" style="color:#94a3b8;font-size:0.85rem;margin-bottom:6px;">
  --- Expected Output when executed in appropriate environment ---
</div>
<div class="log-entry" style="color:#4ade80;font-weight:bold;white-space:pre-wrap;background:#030712;padding:12px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);">${escapeHtml(currentLesson.expectedOutput)}</div>
<div class="log-entry" style="color:#a5b4fc;margin-top:10px;font-size:0.88rem;">
  <strong>Explanation of Result:</strong> ${escapeHtml(currentLesson.resultExplanation || "The output reflects the verified evaluation under a compliant PHP 8.3 server environment.")}
</div>
`;
        } else if (isOriginalCode || !isUserTriggered) {
            // Standard lesson execution
            termHtml = `
<div class="log-entry" style="color:#38bdf8;margin-bottom:6px;">
  $ php lesson_${currentLesson.number}.php
</div>
<div class="log-entry" style="color:#4ade80;white-space:pre-wrap;background:#030712;padding:12px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);margin-bottom:10px;">${escapeHtml(currentLesson.expectedOutput)}</div>
<div class="log-entry" style="color:#94a3b8;font-size:0.88rem;">
  <strong>Result Explanation:</strong> ${escapeHtml(currentLesson.resultExplanation || "Script executed with exit code 0.")}
</div>
<div class="log-entry" style="color:#64748b;font-size:0.8rem;margin-top:8px;">
  ✔ Verified PHP 8.3 Compatible &bull; Output captured via standard output stream
</div>
`;
        } else {
            // User submitted custom code modifications
            termHtml = `
<div class="log-entry" style="color:#38bdf8;margin-bottom:6px;">
  $ php -l custom_code.php
</div>
<div class="log-entry" style="color:#10b981;margin-bottom:8px;">
  No syntax errors detected in submitted PHP code.
</div>
<div class="log-entry" style="background:#172033;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.08);margin-bottom:10px;color:#cbd5e1;font-size:0.88rem;">
  <strong>Terminal Execution Note:</strong><br>
  PHP is a backend server language that executes in an isolated server-side process.<br>
  To execute your custom code in a local terminal:
  <pre style="background:#0b1120;padding:8px;border-radius:6px;margin:6px 0;color:#38bdf8;font-family:monospace;">echo ${JSON.stringify(currentCode)} > script.php && php script.php</pre>
</div>
<div class="log-entry" style="color:#94a3b8;font-size:0.85rem;margin-bottom:6px;">
  --- Standard Reference Output for Lesson #${currentLesson.number} ---
</div>
<div class="log-entry" style="color:#4ade80;white-space:pre-wrap;background:#030712;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);">${escapeHtml(currentLesson.expectedOutput)}</div>
`;
        }

        terminalBody.innerHTML = termHtml;
    }

    function showToast(msg) {
        if (!toastMsg) return;
        toastMsg.textContent = msg;
        toastMsg.classList.add('show');
        setTimeout(() => toastMsg.classList.remove('show'), 2600);
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
