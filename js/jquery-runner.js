/**
 * PLAY-CODE (@N4) — jQuery Interactive Lesson Runner & Sandbox Controller
 * Manages dynamic lesson loading, code editor actions, sandboxed iframe execution,
 * console logging capture, and keyboard navigation traversal.
 */

document.addEventListener('DOMContentLoaded', () => {
    const lessons = window.JQUERY_LESSONS || [];
    if (!lessons.length) {
        console.error('jQuery lessons dataset not found');
        return;
    }

    // Parse URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    let lessonId = parseInt(urlParams.get('lesson'), 10) || 1;
    if (lessonId < 1) lessonId = 1;
    if (lessonId > lessons.length) lessonId = lessons.length;

    const currentLesson = lessons.find(l => l.id === lessonId) || lessons[0];

    // DOM Elements
    const titleEl = document.getElementById('lesson-title');
    const badgeEl = document.getElementById('lesson-badge');
    const catEl = document.getElementById('lesson-category');
    const breadcrumbTitleEl = document.getElementById('breadcrumb-title');
    const summaryEl = document.getElementById('lesson-summary');
    const prereqEl = document.getElementById('lesson-prereq');
    const schemaEl = document.getElementById('lesson-schema');
    const notesEl = document.getElementById('lesson-notes');
    const mistakesEl = document.getElementById('lesson-mistakes');
    const securityEl = document.getElementById('lesson-security');
    const keywordsEl = document.getElementById('lesson-keywords');
    const expectedEl = document.getElementById('lesson-expected');
    const explanationEl = document.getElementById('lesson-result-explanation');

    const codeEditor = document.getElementById('code-editor');
    const previewFrame = document.getElementById('preview-frame');
    const terminalBody = document.getElementById('terminal-body');
    const toastMsg = document.getElementById('toast-msg');

    const btnRun = document.getElementById('btn-run');
    const btnReset = document.getElementById('btn-reset');
    const btnCopy = document.getElementById('btn-copy');
    const btnClearTerm = document.getElementById('btn-clear-term');

    const prevBtnTop = document.getElementById('prev-btn-top');
    const nextBtnTop = document.getElementById('next-btn-top');
    const prevBtnBottom = document.getElementById('prev-btn-bottom');
    const nextBtnBottom = document.getElementById('next-btn-bottom');

    // Populate metadata
    document.title = `Lesson #${currentLesson.number}: ${currentLesson.title} — jQuery CodePlay`;
    if (titleEl) titleEl.textContent = currentLesson.title;
    if (badgeEl) badgeEl.textContent = `Lesson #${currentLesson.number} of ${lessons.length}`;
    if (catEl) catEl.textContent = currentLesson.category;
    if (breadcrumbTitleEl) breadcrumbTitleEl.textContent = currentLesson.title;

    if (summaryEl) {
        summaryEl.innerHTML = `
            <p style="margin-top:0;margin-bottom:8px;">${escapeHtml(currentLesson.introduction)}</p>
            <p style="margin:0;color:#00e5d0;font-weight:500;"><strong>🎯 Learning Objective:</strong> ${escapeHtml(currentLesson.learningObjective)}</p>
        `;
    }

    if (prereqEl) prereqEl.textContent = currentLesson.prerequisites;
    if (schemaEl) schemaEl.textContent = "jQuery 3.7.1 Sandbox Runtime";
    if (notesEl) notesEl.textContent = currentLesson.notes;
    if (mistakesEl) mistakesEl.textContent = currentLesson.commonMistakes;
    if (securityEl) securityEl.textContent = currentLesson.securityNotes;
    if (expectedEl) expectedEl.textContent = currentLesson.expectedOutput;
    if (explanationEl) explanationEl.textContent = currentLesson.resultExplanation;

    if (keywordsEl && currentLesson.keywordsOrMethods) {
        keywordsEl.innerHTML = currentLesson.keywordsOrMethods.map(kw => `
            <span style="background:rgba(0,191,165,0.15);color:#2dd4bf;border:1px solid rgba(0,191,165,0.3);padding:4px 10px;border-radius:6px;font-size:0.82rem;font-family:monospace;font-weight:600;">
                ${escapeHtml(kw)}
            </span>
        `).join('');
    }

    // Set code editor initial snippet
    if (codeEditor) {
        codeEditor.value = currentLesson.codeExample;
    }

    // Configure Prev/Next navigation
    function setupNavBtn(btn, targetId, isDisabled) {
        if (!btn) return;
        if (isDisabled) {
            btn.classList.add('disabled');
            btn.removeAttribute('href');
            btn.style.opacity = '0.4';
            btn.style.pointerEvents = 'none';
        } else {
            btn.classList.remove('disabled');
            btn.href = `jquery-lesson.html?lesson=${targetId}`;
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }
    }

    const hasPrev = lessonId > 1;
    const hasNext = lessonId < lessons.length;
    setupNavBtn(prevBtnTop, lessonId - 1, !hasPrev);
    setupNavBtn(prevBtnBottom, lessonId - 1, !hasPrev);
    setupNavBtn(nextBtnTop, lessonId + 1, !hasNext);
    setupNavBtn(nextBtnBottom, lessonId + 1, !hasNext);

    // Keyboard navigation (ArrowLeft for Prev, ArrowRight for Next)
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
        if (e.key === 'ArrowLeft' && hasPrev) {
            window.location.href = `jquery-lesson.html?lesson=${lessonId - 1}`;
        } else if (e.key === 'ArrowRight' && hasNext) {
            window.location.href = `jquery-lesson.html?lesson=${lessonId + 1}`;
        }
    });

    // Toast utility
    function showToast(text) {
        if (!toastMsg) return;
        toastMsg.textContent = text;
        toastMsg.style.display = 'block';
        toastMsg.style.opacity = '1';
        setTimeout(() => {
            toastMsg.style.opacity = '0';
            setTimeout(() => { toastMsg.style.display = 'none'; }, 300);
        }, 2200);
    }

    // Logging terminal helper
    function logToTerminal(msg, type = 'info') {
        if (!terminalBody) return;
        const color = type === 'error' ? '#f87171' : (type === 'warn' ? '#fbbf24' : '#2dd4bf');
        const entry = document.createElement('div');
        entry.style.color = color;
        entry.style.marginBottom = '4px';
        entry.innerHTML = `<span style="color:#64748b;">[${new Date().toLocaleTimeString()}]</span> ${escapeHtml(msg)}`;
        terminalBody.appendChild(entry);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    if (btnClearTerm) {
        btnClearTerm.addEventListener('click', () => {
            if (terminalBody) terminalBody.innerHTML = '<span style="color:#64748b;font-style:italic;">Terminal ready. Output and console.log will appear here.</span>';
        });
    }

    // Execution runner into sandboxed iframe
    function runCode() {
        if (!previewFrame || !codeEditor) return;
        const userCode = codeEditor.value;

        if (terminalBody) {
            terminalBody.innerHTML = '';
        }
        logToTerminal(`Initializing Lesson #${currentLesson.number} runtime...`);

        // Sandboxed HTML document containing jQuery CDN and user snippet
        const docContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; font-family: 'Poppins', sans-serif; }
        body {
            margin: 0;
            padding: 16px;
            background: #0b1120;
            color: #f8fafc;
            font-size: 14px;
            line-height: 1.5;
        }
        button:hover { opacity: 0.9; }
        input, select, textarea { outline: none; }
    </style>
    <!-- jQuery Library -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
    <script>
        // Console forwarding to parent terminal
        (function() {
            var origLog = console.log;
            var origWarn = console.warn;
            var origError = console.error;

            console.log = function() {
                var args = Array.prototype.slice.call(arguments);
                window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'info', message: args.join(' ') }, '*');
                origLog.apply(console, arguments);
            };
            console.warn = function() {
                var args = Array.prototype.slice.call(arguments);
                window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'warn', message: args.join(' ') }, '*');
                origWarn.apply(console, arguments);
            };
            console.error = function() {
                var args = Array.prototype.slice.call(arguments);
                window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'error', message: args.join(' ') }, '*');
                origError.apply(console, arguments);
            };
            window.onerror = function(msg, url, line) {
                window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'error', message: 'Error at line ' + line + ': ' + msg }, '*');
                return false;
            };
        })();
    <\/script>
</head>
<body>
${userCode}
</body>
</html>`;

        previewFrame.srcdoc = docContent;
        logToTerminal(`Code compiled & rendered into sandboxed preview.`, 'info');
    }

    // Listen for iframe console messages
    window.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CONSOLE_LOG') {
            logToTerminal(event.data.message, event.data.level);
        }
    });

    if (btnRun) {
        btnRun.addEventListener('click', runCode);
    }

    // Ctrl+Enter or Cmd+Enter to run
    if (codeEditor) {
        codeEditor.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                runCode();
            }
        });
    }

    // Reset button
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (codeEditor) {
                codeEditor.value = currentLesson.codeExample;
                runCode();
                showToast('Lesson code reset to original snippet');
            }
        });
    }

    // Copy button
    if (btnCopy) {
        btnCopy.addEventListener('click', () => {
            if (codeEditor) {
                navigator.clipboard.writeText(codeEditor.value).then(() => {
                    showToast('Code copied to clipboard! 📋');
                }).catch(() => {
                    showToast('Failed to copy code.');
                });
            }
        });
    }

    // Initial execution
    runCode();
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
