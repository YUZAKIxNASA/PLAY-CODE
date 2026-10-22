/**
 * PLAY-CODE (@N4) — Interactive JavaScript Lesson Runner Engine
 * Handles URL parameter extraction (?lesson=X), lesson state loading,
 * JS/HTML tabbed editing, safe sandboxed iframe execution with virtual terminal output,
 * Copy/Reset/Run triggers, and safe Prev/Next navigation across all 230 lessons.
 * Strictly zero eval() usage.
 */

document.addEventListener('DOMContentLoaded', () => {
    const lessons = window.JAVASCRIPT_LESSONS || [];

    // Fallback if dataset failed to load
    if (!lessons.length) {
        document.body.innerHTML = `
            <div style="font-family:sans-serif;padding:40px;text-align:center;color:white;background:#0b1120;min-height:100vh;">
                <h2>Unable to load JavaScript lesson database</h2>
                <p>Could not locate JAVASCRIPT_LESSONS. Please check data/javascript-lessons.js.</p>
                <a href="javascript.html" style="color:#818cf8;">&larr; Return to JavaScript Directory</a>
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

    const jsEditor = document.getElementById('js-editor');
    const htmlEditor = document.getElementById('html-editor');
    const tabJsBtn = document.getElementById('tab-js-btn');
    const tabHtmlBtn = document.getElementById('tab-html-btn');

    const outConsoleBtn = document.getElementById('output-tab-console-btn');
    const outPreviewBtn = document.getElementById('output-tab-preview-btn');
    const outConsoleView = document.getElementById('output-console-view');
    const outPreviewView = document.getElementById('output-preview-view');
    const terminalBody = document.getElementById('terminal-body');
    const btnClearTerm = document.getElementById('btn-clear-term');

    const previewFrame = document.getElementById('preview-frame');
    const btnRun = document.getElementById('btn-run');
    const btnReset = document.getElementById('btn-reset');
    const btnCopy = document.getElementById('btn-copy');
    const toastMsg = document.getElementById('toast-msg');

    const prevBtnTop = document.getElementById('prev-btn-top');
    const nextBtnTop = document.getElementById('next-btn-top');
    const prevBtnBottom = document.getElementById('prev-btn-bottom');
    const nextBtnBottom = document.getElementById('next-btn-bottom');

    let activeEditorTab = 'js'; // 'js' or 'html'

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
    if (lessonExpectedEl) {
        lessonExpectedEl.style.whiteSpace = 'pre-line';
        lessonExpectedEl.textContent = currentLesson.expectedOutput || 'Execution completed.';
    }

    // Keywords and Methods
    if (lessonAttrsEl) {
        if (currentLesson.keywordsOrMethods && currentLesson.keywordsOrMethods.length) {
            lessonAttrsEl.innerHTML = currentLesson.keywordsOrMethods.map(prop => `
                <span class="attr-tag">${escapeHtml(prop)}</span>
            `).join('');
        } else {
            lessonAttrsEl.innerHTML = `<span style="color:#64748b;font-size:0.85rem;">Standard JavaScript API</span>`;
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
    const defaultHtml = currentLesson.htmlExample || '<div class="demo-box">\n  <h3>JavaScript Live Preview</h3>\n  <p>Check the Virtual Terminal for console.log statements, or inspect DOM changes here.</p>\n</div>';
    if (jsEditor) jsEditor.value = currentLesson.codeExample || '';
    if (htmlEditor) htmlEditor.value = defaultHtml;

    // Automatically prioritize Live DOM View for Projects and DOM lessons
    const isDomHeavy = currentLesson.category === 'DOM Manipulation' || 
                       currentLesson.category === 'Events & Listeners' || 
                       currentLesson.category === 'Interactive Projects';
    if (isDomHeavy && outPreviewBtn && outConsoleBtn && outPreviewView && outConsoleView) {
        // Activate preview tab by default for visual UI lessons
        outPreviewBtn.classList.add('active');
        outConsoleBtn.classList.remove('active');
        outPreviewView.style.display = 'block';
        outConsoleView.style.display = 'none';
    }

    // Editor Tab Switching Logic
    if (tabJsBtn && tabHtmlBtn) {
        tabJsBtn.addEventListener('click', () => {
            activeEditorTab = 'js';
            tabJsBtn.classList.add('active');
            tabHtmlBtn.classList.remove('active');
            jsEditor.style.display = 'block';
            htmlEditor.style.display = 'none';
            jsEditor.focus();
        });

        tabHtmlBtn.addEventListener('click', () => {
            activeEditorTab = 'html';
            tabHtmlBtn.classList.add('active');
            tabJsBtn.classList.remove('active');
            htmlEditor.style.display = 'block';
            jsEditor.style.display = 'none';
            htmlEditor.focus();
        });
    }

    // Output Tab Switching (Terminal vs DOM Preview)
    if (outConsoleBtn && outPreviewBtn && outConsoleView && outPreviewView) {
        outConsoleBtn.addEventListener('click', () => {
            outConsoleBtn.classList.add('active');
            outPreviewBtn.classList.remove('active');
            outConsoleView.style.display = 'flex';
            outPreviewView.style.display = 'none';
        });

        outPreviewBtn.addEventListener('click', () => {
            outPreviewBtn.classList.add('active');
            outConsoleBtn.classList.remove('active');
            outPreviewView.style.display = 'block';
            outConsoleView.style.display = 'none';
        });
    }

    // Clear Terminal button
    if (btnClearTerm && terminalBody) {
        btnClearTerm.addEventListener('click', () => {
            terminalBody.innerHTML = '<div class="log-entry log-info">&gt; Terminal cleared. Ready.</div>';
        });
    }

    // Support Tab key indentation inside editors
    [jsEditor, htmlEditor].forEach(editor => {
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

    // Handle cross-frame log messages from isolated sandbox
    window.addEventListener('message', (e) => {
        if (!e.data || e.data.source !== 'PLAY_CODE_RUNNER') return;
        if (!terminalBody) return;

        const { level, text } = e.data;
        const entry = document.createElement('div');
        entry.className = `log-entry ${level === 'error' ? 'log-error' : level === 'info' ? 'log-info' : level === 'warn' ? 'log-warn' : ''}`;
        entry.textContent = `> ${text}`;
        terminalBody.appendChild(entry);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    });

    // Sandboxed preview & code runner (Zero eval() usage)
    function runCode() {
        if (!previewFrame || !jsEditor || !htmlEditor) return;
        if (terminalBody) {
            terminalBody.innerHTML = '';
        }

        const userJs = jsEditor.value;
        const userHtml = htmlEditor.value;

        // Sandboxed isolated HTML with message-posting custom console
        const sandboxDoc = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      background: #f8fafc;
      min-height: 100vh;
    }
    .demo-box {
      background: #ffffff;
      padding: 16px;
      border-radius: 10px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      margin-bottom: 12px;
    }
    .demo-btn {
      padding: 8px 14px;
      background: #4f46e5;
      color: #ffffff;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      font-size: 0.9rem;
    }
    .demo-input {
      padding: 8px 12px;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      font-size: 0.9rem;
      outline: none;
    }
  </style>
  <script>
    // Intercept console inside sandbox and post to parent
    (function() {
      function send(level, args) {
        const text = args.map(arg => {
          if (arg === null) return 'null';
          if (arg === undefined) return 'undefined';
          if (typeof arg === 'object') {
            try { return JSON.stringify(arg); } catch (e) { return String(arg); }
          }
          return String(arg);
        }).join(' ');
        window.parent.postMessage({
          source: 'PLAY_CODE_RUNNER',
          level: level,
          text: text
        }, '*');
      }

      console.log = function(...args) { send('log', args); };
      console.error = function(...args) { send('error', args); };
      console.warn = function(...args) { send('warn', args); };
      console.info = function(...args) { send('info', args); };

      window.onerror = function(msg, url, line) {
        send('error', ['Runtime Error: ' + msg]);
        return false;
      };
    })();
  <\/script>
</head>
<body>
  ${userHtml}

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      try {
        ${userJs}
      } catch (err) {
        console.error(err.name + ': ' + err.message);
      }
    });
  <\/script>
</body>
</html>
        `;

        previewFrame.srcdoc = sandboxDoc;
    }

    // Initial code run on page load
    runCode();

    // Event: Run Button
    if (btnRun) {
        btnRun.addEventListener('click', () => {
            runCode();
            showToast('▶ JavaScript executed in sandbox!');
        });
    }

    // Event: Reset Button
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (jsEditor) jsEditor.value = currentLesson.codeExample || '';
            if (htmlEditor) htmlEditor.value = defaultHtml;
            runCode();
            showToast('↺ Lesson code reset to original state');
        });
    }

    // Event: Copy Button
    if (btnCopy) {
        btnCopy.addEventListener('click', async () => {
            const activeEditor = activeEditorTab === 'js' ? jsEditor : htmlEditor;
            if (!activeEditor) return;
            try {
                await navigator.clipboard.writeText(activeEditor.value);
                showToast(`📋 ${activeEditorTab.toUpperCase()} code copied to clipboard!`);
            } catch (err) {
                activeEditor.select();
                document.execCommand('copy');
                showToast(`📋 ${activeEditorTab.toUpperCase()} code copied!`);
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
            prevBtnTop.href = `javascript-lesson.html?lesson=${prevId}`;
            prevBtnTop.title = `Go to Lesson ${prevLesson.number}: ${prevLesson.title}`;
        }
        if (prevBtnBottom) {
            prevBtnBottom.href = `javascript-lesson.html?lesson=${prevId}`;
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
            prevBtnBottom.innerHTML = `&larr; Start of JavaScript Course`;
        }
    }

    // Next Button Top & Bottom
    if (nextId <= lessons.length) {
        const nextLesson = lessons.find(l => l.id === nextId);
        if (nextBtnTop) {
            nextBtnTop.href = `javascript-lesson.html?lesson=${nextId}`;
            nextBtnTop.title = `Go to Lesson ${nextLesson.number}: ${nextLesson.title}`;
        }
        if (nextBtnBottom) {
            nextBtnBottom.href = `javascript-lesson.html?lesson=${nextId}`;
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
            showToast('▶ Executed via shortcut!');
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
