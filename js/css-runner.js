/** [YZN-261029-007] Authorship: YUZAKI NASA (@ঔৣ፝ N4!) · PLAY-CODE / CodePlay */
/**
 * PLAY-CODE (@N4) — Interactive CSS Lesson Runner Engine
 * Handles URL parameter extraction (?lesson=X), lesson state loading,
 * CSS/HTML tabbed editing, live sandboxed iframe rendering,
 * Copy/Reset/Run triggers, and safe Prev/Next navigation across 210 lessons.
 */

document.addEventListener('DOMContentLoaded', () => {
    const lessons = window.CSS_LESSONS || [];

    // Fallback if dataset failed to load
    if (!lessons.length) {
        document.body.innerHTML = `
            <div style="font-family:sans-serif;padding:40px;text-align:center;color:white;background:#0b1120;min-height:100vh;">
                <h2>Unable to load CSS lesson database</h2>
                <p>Could not locate CSS_LESSONS. Please check data/css-lessons.js.</p>
                <a href="css.html" style="color:#818cf8;">&larr; Return to CSS Directory</a>
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
    const lessonMistakesEl = document.getElementById('lesson-mistakes');
    const lessonExpectedEl = document.getElementById('lesson-expected');

    const cssEditor = document.getElementById('css-editor');
    const htmlEditor = document.getElementById('html-editor');
    const tabCssBtn = document.getElementById('tab-css-btn');
    const tabHtmlBtn = document.getElementById('tab-html-btn');
    const previewFrame = document.getElementById('preview-frame');
    const btnRun = document.getElementById('btn-run');
    const btnReset = document.getElementById('btn-reset');
    const btnCopy = document.getElementById('btn-copy');
    const toastMsg = document.getElementById('toast-msg');

    const prevBtnTop = document.getElementById('prev-btn-top');
    const nextBtnTop = document.getElementById('next-btn-top');
    const prevBtnBottom = document.getElementById('prev-btn-bottom');
    const nextBtnBottom = document.getElementById('next-btn-bottom');

    let activeTab = 'css'; // 'css' or 'html'

    // Populate metadata
    document.title = `Lesson ${currentLesson.number}: ${currentLesson.title} — CodePlay`;

    if (breadcrumbTitle) breadcrumbTitle.textContent = `#${currentLesson.number}: ${currentLesson.title}`;
    if (lessonTitleEl) lessonTitleEl.textContent = `${currentLesson.id}. ${currentLesson.title}`;
    if (lessonBadgeEl) lessonBadgeEl.textContent = `Lesson #${currentLesson.number} of ${lessons.length}`;
    if (lessonCatEl) lessonCatEl.textContent = currentLesson.category;
    
    if (lessonSummaryEl) {
        const fullSummary = currentLesson.explanation 
            ? `<strong>${escapeHtml(currentLesson.introduction || '')}</strong><br><br>${escapeHtml(currentLesson.explanation)}`
            : escapeHtml(currentLesson.introduction || '');
        lessonSummaryEl.innerHTML = fullSummary;
    }

    if (lessonSyntaxEl) lessonSyntaxEl.textContent = currentLesson.syntax || 'N/A';
    if (lessonExpectedEl) lessonExpectedEl.textContent = currentLesson.expectedOutput || 'Styled visual result.';

    // Properties and Selectors
    if (lessonAttrsEl) {
        if (currentLesson.selectorsOrProps && currentLesson.selectorsOrProps.length) {
            lessonAttrsEl.innerHTML = currentLesson.selectorsOrProps.map(prop => `
                <span class="attr-tag">${escapeHtml(prop)}</span>
            `).join('');
        } else {
            lessonAttrsEl.innerHTML = `<span style="color:#64748b;font-size:0.85rem;">Standard CSS rules & properties</span>`;
        }
    }

    // Professional Notes
    if (lessonNotesEl) {
        if (currentLesson.notes) {
            lessonNotesEl.style.display = 'block';
            lessonNotesEl.innerHTML = `
                <strong>💡 Pro Tip & Best Practice:</strong><br>
                ${escapeHtml(currentLesson.notes)}
            `;
        } else {
            lessonNotesEl.style.display = 'none';
        }
    }

    // Common Pitfalls / Mistakes
    if (lessonMistakesEl) {
        if (currentLesson.commonMistakes) {
            lessonMistakesEl.style.display = 'block';
            lessonMistakesEl.innerHTML = `
                <strong>⚠️ Common Mistake to Avoid:</strong><br>
                ${escapeHtml(currentLesson.commonMistakes)}
            `;
        } else {
            lessonMistakesEl.style.display = 'none';
        }
    }

    // Initialize code editors with starter code
    if (cssEditor) cssEditor.value = currentLesson.cssExample || '';
    if (htmlEditor) htmlEditor.value = currentLesson.htmlExample || '';

    // Tab Switching Logic
    if (tabCssBtn && tabHtmlBtn) {
        tabCssBtn.addEventListener('click', () => {
            activeTab = 'css';
            tabCssBtn.classList.add('active');
            tabHtmlBtn.classList.remove('active');
            cssEditor.style.display = 'block';
            htmlEditor.style.display = 'none';
            cssEditor.focus();
        });

        tabHtmlBtn.addEventListener('click', () => {
            activeTab = 'html';
            tabHtmlBtn.classList.add('active');
            tabCssBtn.classList.remove('active');
            htmlEditor.style.display = 'block';
            cssEditor.style.display = 'none';
            htmlEditor.focus();
        });
    }

    // Support Tab key indentation inside editors
    [cssEditor, htmlEditor].forEach(editor => {
        if (!editor) return;
        editor.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = editor.selectionStart;
                const end = editor.selectionEnd;
                editor.value = editor.value.substring(0, start) + '  ' + editor.value.substring(end);
                editor.selectionStart = editor.selectionEnd = start + 2;
            }
        });
    });

    // Sandboxed preview runner
    function runCode() {
        if (!previewFrame || !cssEditor || !htmlEditor) return;
        const userCss = cssEditor.value;
        const userHtml = htmlEditor.value;

        // Sandboxed preview with modern base styling
        const previewDoc = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      background: #f8fafc;
      min-height: 100vh;
    }
    .demo-box {
      background: #ffffff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      margin-bottom: 15px;
    }
    /* User CSS Injected Below */
    ${userCss}
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
            showToast('▶ CSS styling rendered in preview!');
        });
    }

    // Event: Reset Button
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (cssEditor) cssEditor.value = currentLesson.cssExample || '';
            if (htmlEditor) htmlEditor.value = currentLesson.htmlExample || '';
            runCode();
            showToast('↺ Lesson code reset to original example');
        });
    }

    // Event: Copy Button
    if (btnCopy) {
        btnCopy.addEventListener('click', async () => {
            const activeEditor = activeTab === 'css' ? cssEditor : htmlEditor;
            if (!activeEditor) return;
            try {
                await navigator.clipboard.writeText(activeEditor.value);
                showToast(`📋 ${activeTab.toUpperCase()} code copied to clipboard!`);
            } catch (err) {
                activeEditor.select();
                document.execCommand('copy');
                showToast(`📋 ${activeTab.toUpperCase()} code copied!`);
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
            prevBtnTop.href = `css-lesson.html?lesson=${prevId}`;
            prevBtnTop.title = `Go to Lesson ${prevLesson.number}: ${prevLesson.title}`;
        }
        if (prevBtnBottom) {
            prevBtnBottom.href = `css-lesson.html?lesson=${prevId}`;
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
            prevBtnBottom.innerHTML = `&larr; Start of CSS Course`;
        }
    }

    // Next Button Top & Bottom
    if (nextId <= lessons.length) {
        const nextLesson = lessons.find(l => l.id === nextId);
        if (nextBtnTop) {
            nextBtnTop.href = `css-lesson.html?lesson=${nextId}`;
            nextBtnTop.title = `Go to Lesson ${nextLesson.number}: ${nextLesson.title}`;
        }
        if (nextBtnBottom) {
            nextBtnBottom.href = `css-lesson.html?lesson=${nextId}`;
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
            nextBtnBottom.innerHTML = `CSS Curriculum Completed &check;`;
        }
    }

    // Keyboard Shortcuts: Ctrl+Enter to Run
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
            showToast('▶ CSS rendered via shortcut!');
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
