/**
 * PLAY-CODE (@N4) — Interactive Lesson Runner Engine
 * Handles URL parameter extraction (?lesson=X), lesson state loading,
 * live sandboxed iframe rendering, Copy/Reset/Run triggers, and safe Prev/Next navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
    const lessons = window.HTML_LESSONS || [];

    // Fallback if dataset failed to load
    if (!lessons.length) {
        document.body.innerHTML = `
            <div style="font-family:sans-serif;padding:40px;text-align:center;color:white;background:#0b1120;min-height:100vh;">
                <h2>Unable to load lesson database</h2>
                <p>Could not locate HTML_LESSONS. Please check data/html-lessons.js.</p>
                <a href="html.html" style="color:#818cf8;">&larr; Return to HTML Directory</a>
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
    const lessonSummaryEl = document.getElementById('lesson-summary');
    const lessonSyntaxEl = document.getElementById('lesson-syntax');
    const lessonAttrsEl = document.getElementById('lesson-attributes');
    const lessonNotesEl = document.getElementById('lesson-notes');
    const lessonExpectedEl = document.getElementById('lesson-expected');

    const codeEditor = document.getElementById('code-editor');
    const previewFrame = document.getElementById('preview-frame');
    const btnRun = document.getElementById('btn-run');
    const btnReset = document.getElementById('btn-reset');
    const btnCopy = document.getElementById('btn-copy');
    const toastMsg = document.getElementById('toast-msg');

    const prevBtnTop = document.getElementById('prev-btn-top');
    const nextBtnTop = document.getElementById('next-btn-top');
    const prevBtnBottom = document.getElementById('prev-btn-bottom');
    const nextBtnBottom = document.getElementById('next-btn-bottom');

    // Populate metadata
    document.title = `Lesson ${currentLesson.number}: ${currentLesson.title} — PLAY-CODE`;

    if (breadcrumbTitle) breadcrumbTitle.textContent = `#${currentLesson.number}: ${currentLesson.title}`;
    if (lessonTitleEl) lessonTitleEl.textContent = `${currentLesson.id}. ${currentLesson.title}`;
    if (lessonBadgeEl) lessonBadgeEl.textContent = `Lesson #${currentLesson.number} of 166`;
    if (lessonCatEl) lessonCatEl.textContent = currentLesson.category;
    if (lessonSummaryEl) lessonSummaryEl.textContent = currentLesson.summary;
    if (lessonSyntaxEl) lessonSyntaxEl.textContent = currentLesson.syntax;
    if (lessonExpectedEl) lessonExpectedEl.textContent = currentLesson.expected;

    // Attributes list
    if (lessonAttrsEl) {
        if (currentLesson.attributes && currentLesson.attributes.length) {
            lessonAttrsEl.innerHTML = currentLesson.attributes.map(attr => `
                <span class="attr-tag">${escapeHtml(attr)}</span>
            `).join('');
        } else {
            lessonAttrsEl.innerHTML = `<span style="color:#64748b;font-size:0.85rem;">Standard global HTML attributes</span>`;
        }
    }

    // Notes & Deprecation Warnings
    if (lessonNotesEl) {
        const isObsolete = currentLesson.notes.toUpperCase().includes('OBSOLETE') || 
                           currentLesson.notes.toUpperCase().includes('DEPRECATED');
        lessonNotesEl.className = isObsolete ? 'warning-box' : 'note-box';
        lessonNotesEl.innerHTML = `
            <strong>${isObsolete ? '⚠️ Standard & Deprecation Notice:' : '💡 Professional Best Practice:'}</strong><br>
            ${escapeHtml(currentLesson.notes)}
        `;
    }

    // Initialize code editor with lesson starter code
    if (codeEditor) {
        codeEditor.value = currentLesson.code;

        // Support Tab key indentation inside editor
        codeEditor.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = codeEditor.selectionStart;
                const end = codeEditor.selectionEnd;
                codeEditor.value = codeEditor.value.substring(0, start) + '  ' + codeEditor.value.substring(end);
                codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
            }
        });
    }

    // Sandboxed preview runner
    function runCode() {
        if (!previewFrame || !codeEditor) return;
        const userHtml = codeEditor.value;

        // Construct sandboxed preview document with pleasant base typography
        const previewDoc = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    /* Neutral reset for sandbox preview */
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      background: #ffffff;
    }
  </style>
</head>
<body>
  ${userHtml}
</body>
</html>
        `;

        previewFrame.srcdoc = previewDoc;
    }

    // Initial code run on page load
    runCode();

    // Event: Run Button
    if (btnRun) {
        btnRun.addEventListener('click', () => {
            runCode();
            showToast('▶ Code executed in preview!');
        });
    }

    // Event: Reset Button
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (codeEditor) {
                codeEditor.value = currentLesson.code;
                runCode();
                showToast('↺ Code reset to original example');
            }
        });
    }

    // Event: Copy Button
    if (btnCopy) {
        btnCopy.addEventListener('click', async () => {
            if (!codeEditor) return;
            try {
                await navigator.clipboard.writeText(codeEditor.value);
                showToast('📋 Code copied to clipboard!');
            } catch (err) {
                // Fallback copy
                codeEditor.select();
                document.execCommand('copy');
                showToast('📋 Code copied!');
            }
        });
    }

    // Traversal Navigation: Previous and Next
    const prevId = currentLesson.id - 1;
    const nextId = currentLesson.id + 1;

    // Previous Button Top & Bottom
    if (prevId >= 1) {
        const prevLesson = lessons.find(l => l.id === prevId);
        if (prevBtnTop) {
            prevBtnTop.href = `html-lesson.html?lesson=${prevId}`;
            prevBtnTop.title = `Go to Lesson ${prevLesson.number}: ${prevLesson.title}`;
        }
        if (prevBtnBottom) {
            prevBtnBottom.href = `html-lesson.html?lesson=${prevId}`;
            prevBtnBottom.innerHTML = `&larr; Prev: #${prevLesson.number} ${escapeHtml(prevLesson.title)}`;
            prevBtnBottom.style.display = 'inline-flex';
        }
    } else {
        if (prevBtnTop) {
            prevBtnTop.classList.add('disabled');
            prevBtnTop.removeAttribute('href');
        }
        if (prevBtnBottom) {
            prevBtnBottom.classList.add('disabled');
            prevBtnBottom.removeAttribute('href');
            prevBtnBottom.innerHTML = `&larr; Start of Course`;
        }
    }

    // Next Button Top & Bottom
    if (nextId <= lessons.length) {
        const nextLesson = lessons.find(l => l.id === nextId);
        if (nextBtnTop) {
            nextBtnTop.href = `html-lesson.html?lesson=${nextId}`;
            nextBtnTop.title = `Go to Lesson ${nextLesson.number}: ${nextLesson.title}`;
        }
        if (nextBtnBottom) {
            nextBtnBottom.href = `html-lesson.html?lesson=${nextId}`;
            nextBtnBottom.innerHTML = `Next: #${nextLesson.number} ${escapeHtml(nextLesson.title)} &rarr;`;
            nextBtnBottom.style.display = 'inline-flex';
        }
    } else {
        if (nextBtnTop) {
            nextBtnTop.classList.add('disabled');
            nextBtnTop.removeAttribute('href');
        }
        if (nextBtnBottom) {
            nextBtnBottom.classList.add('disabled');
            nextBtnBottom.removeAttribute('href');
            nextBtnBottom.innerHTML = `Curriculum Completed &check;`;
        }
    }

    // Keyboard Shortcuts: Ctrl+Enter to Run
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
            showToast('▶ Code executed via shortcut!');
        }
    });

    function showToast(msg) {
        if (!toastMsg) return;
        toastMsg.textContent = msg;
        toastMsg.classList.add('show');
        setTimeout(() => {
            toastMsg.classList.remove('show');
        }, 2500);
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
