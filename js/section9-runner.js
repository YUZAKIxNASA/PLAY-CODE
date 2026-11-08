import { section9Entries } from '../data/section9-entries.js';

// Get target entry ID from URL parameter (default 451)
const urlParams = new URLSearchParams(window.location.search);
let entryId = parseInt(urlParams.get('entry'), 10);
if (isNaN(entryId) || entryId < 451 || entryId > 500) {
    entryId = 451;
}

// Locate matching entry
const entry = section9Entries.find(e => e.id === entryId) || section9Entries[0];

// DOM references
const breadcrumbCurrent = document.getElementById('breadcrumb-current-name');
const entryLogoImg = document.getElementById('entry-logo-img');
const entryLogoBadge = document.getElementById('entry-logo-badge');
const entryName = document.getElementById('entry-name');
const entryNumPill = document.getElementById('entry-num-pill');
const entryCategoryPill = document.getElementById('entry-category-pill');
const entryParadigmPill = document.getElementById('entry-paradigm-pill');
const entryYearPill = document.getElementById('entry-year-pill');

const specDesignedBy = document.getElementById('spec-designed-by');
const specFirstAppeared = document.getElementById('spec-first-appeared');
const specFileExt = document.getElementById('spec-file-ext');
const specPrimaryUse = document.getElementById('spec-primary-use');

const entryExplanation = document.getElementById('entry-explanation');
const entrySyntax = document.getElementById('entry-syntax');

const editorInput = document.getElementById('editor-input');
const outputTerminal = document.getElementById('output-terminal');
const previewIframe = document.getElementById('preview-iframe');
const outputModeBadge = document.getElementById('output-mode-badge');
const outputHeaderTitle = document.getElementById('output-header-title');

const btnPrevTop = document.getElementById('btn-prev-top');
const btnNextTop = document.getElementById('btn-next-top');
const btnPrevBottom = document.getElementById('btn-prev-bottom');
const btnNextBottom = document.getElementById('btn-next-bottom');
const jumpSelect = document.getElementById('entry-jump-select');

const btnReset = document.getElementById('btn-reset');
const btnCopy = document.getElementById('btn-copy');
const btnRun = document.getElementById('btn-run');
const toastMsg = document.getElementById('toast-msg');

// Populate Jump Select with all 50 entries (451–500)
if (jumpSelect) {
    section9Entries.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = `${item.id}. ${item.name} (${item.categoryLabel})`;
        if (item.id === entry.id) opt.selected = true;
        jumpSelect.appendChild(opt);
    });

    jumpSelect.addEventListener('change', (e) => {
        window.location.href = `section9-entry.html?entry=${e.target.value}`;
    });
}

// Configure Prev / Next Traversal (bounded within Section 9: 451 to 500)
const prevId = entry.id > 451 ? entry.id - 1 : 500;
const nextId = entry.id < 500 ? entry.id + 1 : 451;

if (btnPrevTop) btnPrevTop.href = `section9-entry.html?entry=${prevId}`;
if (btnPrevBottom) btnPrevBottom.href = `section9-entry.html?entry=${prevId}`;
if (btnNextTop) btnNextTop.href = `section9-entry.html?entry=${nextId}`;
if (btnNextBottom) btnNextBottom.href = `section9-entry.html?entry=${nextId}`;

// Render Metadata
document.title = `${entry.name} (#${entry.id}) Workspace — CodePlay`;
if (breadcrumbCurrent) breadcrumbCurrent.textContent = `${entry.id}. ${entry.name}`;
if (entryLogoImg) {
    entryLogoImg.src = `../${entry.logo}`;
    entryLogoImg.alt = entry.name;
}
if (entryLogoBadge) {
    entryLogoBadge.className = `sec9-logo-badge ${entry.cssClass}`;
}

if (entryName) entryName.textContent = entry.name;
if (entryNumPill) entryNumPill.textContent = `#${entry.id}`;
if (entryCategoryPill) entryCategoryPill.textContent = entry.categoryLabel;
if (entryParadigmPill) entryParadigmPill.textContent = entry.paradigm.split('/')[0].trim();
if (entryYearPill) entryYearPill.textContent = entry.firstAppeared;

if (specDesignedBy) specDesignedBy.textContent = entry.designedBy || 'Open Source Community';
if (specFirstAppeared) specFirstAppeared.textContent = entry.firstAppeared || 'Standard Specification';
if (specFileExt) specFileExt.textContent = entry.fileExtension || 'N/A';
if (specPrimaryUse) specPrimaryUse.textContent = entry.primaryUse || 'High-Performance & Scientific Computing';

if (entryExplanation) entryExplanation.textContent = entry.explanation;
if (entrySyntax) entrySyntax.textContent = entry.syntaxSummary;

if (editorInput) editorInput.value = entry.sampleCode;

// Execution and Sandbox Runner
function runExecution() {
    if (!editorInput || !outputTerminal) return;
    const userCode = editorInput.value;
    
    // Check if code produces direct visual HTML/SVG
    const isSvg = userCode.trim().startsWith('<svg');
    const isHtml = userCode.trim().toLowerCase().startsWith('<!doctype') || 
                   userCode.trim().toLowerCase().startsWith('<html') ||
                   userCode.trim().toLowerCase().startsWith('<div');

    if (isSvg) {
        if (outputModeBadge) outputModeBadge.textContent = 'SVG RENDER';
        if (outputHeaderTitle) outputHeaderTitle.textContent = '🎨 Real-time Vector Canvas';
        if (previewIframe) {
            previewIframe.style.display = 'block';
            previewIframe.srcdoc = `<!DOCTYPE html><html><body style="margin:0;background:#0b1120;display:flex;align-items:center;justify-content:center;height:100vh;">${userCode}</body></html>`;
        }
        outputTerminal.style.display = 'none';
    } else if (isHtml) {
        if (outputModeBadge) outputModeBadge.textContent = 'WEB PREVIEW';
        if (outputHeaderTitle) outputHeaderTitle.textContent = '🌐 Sandboxed DOM Preview';
        if (previewIframe) {
            previewIframe.style.display = 'block';
            previewIframe.srcdoc = userCode;
        }
        outputTerminal.style.display = 'none';
    } else {
        if (outputModeBadge) outputModeBadge.textContent = 'EXECUTION SIMULATOR';
        if (outputHeaderTitle) outputHeaderTitle.textContent = '⚡ Language Execution Console';
        if (previewIframe) previewIframe.style.display = 'none';
        outputTerminal.style.display = 'block';

        const timestamp = new Date().toLocaleTimeString();
        outputTerminal.textContent = `[${timestamp}] Compiling / Verifying ${entry.name} (#${entry.id})...\n` +
                                     `============================================================\n` +
                                     `${entry.expectedOutput}\n` +
                                     `============================================================\n` +
                                     `[CodePlay Runtime] Execution completed successfully.`;
    }
}

// Initial Run
runExecution();

// Actions
if (btnRun) btnRun.addEventListener('click', runExecution);

if (btnReset) {
    btnReset.addEventListener('click', () => {
        if (editorInput) {
            editorInput.value = entry.sampleCode;
            runExecution();
            showToast('↺ Workspace reset to original sample code');
        }
    });
}

if (btnCopy) {
    btnCopy.addEventListener('click', () => {
        if (editorInput) {
            navigator.clipboard.writeText(editorInput.value);
            showToast('📋 Code copied to clipboard!');
        }
    });
}

function showToast(msg) {
    if (!toastMsg) return;
    toastMsg.textContent = msg;
    toastMsg.classList.add('show');
    setTimeout(() => toastMsg.classList.remove('show'), 2000);
}

// Tab key indentation support
if (editorInput) {
    editorInput.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = editorInput.selectionStart;
            const end = editorInput.selectionEnd;
            editorInput.value = editorInput.value.substring(0, start) + '  ' + editorInput.value.substring(end);
            editorInput.selectionStart = editorInput.selectionEnd = start + 2;
        }
    });
}
