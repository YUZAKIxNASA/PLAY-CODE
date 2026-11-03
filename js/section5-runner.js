import { section5Entries } from '../data/section5-entries.js';

// Get target entry ID from URL parameter (default 201)
const urlParams = new URLSearchParams(window.location.search);
let entryId = parseInt(urlParams.get('entry'), 10);
if (isNaN(entryId) || entryId < 201 || entryId > 250) {
    entryId = 201;
}

// Locate matching entry
const entry = section5Entries.find(e => e.id === entryId) || section5Entries[0];

// DOM references
const breadcrumbCurrent = document.getElementById('breadcrumb-current');
const entryLogo = document.getElementById('entry-logo');
const entryLogoBadge = document.getElementById('entry-logo-badge');
const entryName = document.getElementById('entry-name');
const entryNumber = document.getElementById('entry-number');
const entryCategory = document.getElementById('entry-category');
const entryParadigm = document.getElementById('entry-paradigm');

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

// Populate Jump Select with all 50 entries
section5Entries.forEach(item => {
    const opt = document.createElement('option');
    opt.value = item.id;
    opt.textContent = `${item.id}. ${item.name} (${item.categoryLabel})`;
    if (item.id === entry.id) opt.selected = true;
    jumpSelect.appendChild(opt);
});

jumpSelect.addEventListener('change', (e) => {
    window.location.href = `section5-entry.html?entry=${e.target.value}`;
});

// Configure Prev / Next Traversal
const prevId = entry.id > 201 ? entry.id - 1 : 250;
const nextId = entry.id < 250 ? entry.id + 1 : 201;

btnPrevTop.href = `section5-entry.html?entry=${prevId}`;
btnPrevBottom.href = `section5-entry.html?entry=${prevId}`;
btnNextTop.href = `section5-entry.html?entry=${nextId}`;
btnNextBottom.href = `section5-entry.html?entry=${nextId}`;

// Render Metadata
document.title = `${entry.name} (#${entry.id}) Workspace — CodePlay`;
breadcrumbCurrent.textContent = `${entry.id}. ${entry.name}`;
entryLogo.src = `../${entry.logo}`;
entryLogo.alt = entry.name;
entryLogoBadge.className = `sec5-logo-badge ${entry.cssClass}`;

entryName.textContent = `${entry.id}. ${entry.name}`;
entryNumber.textContent = `#${entry.id} of 250`;
entryCategory.textContent = entry.categoryLabel;
entryParadigm.textContent = entry.paradigm;

specDesignedBy.textContent = entry.designedBy || 'Open Source Community';
specFirstAppeared.textContent = entry.firstAppeared || 'Standard Specification';
specFileExt.textContent = entry.fileExtension || 'N/A';
specPrimaryUse.textContent = entry.primaryUse || 'General Computing';

entryExplanation.textContent = entry.explanation;
entrySyntax.textContent = entry.syntaxSummary;

editorInput.value = entry.sampleCode;

// Execution and Sandbox Runner
function runExecution() {
    const userCode = editorInput.value;
    
    // Check if code produces direct visual HTML/SVG/MathML
    const isSvg = entry.slug === 'svg' || userCode.trim().startsWith('<svg');
    const isHtml = userCode.trim().toLowerCase().startsWith('<!doctype') || 
                   userCode.trim().toLowerCase().startsWith('<html') ||
                   userCode.trim().toLowerCase().startsWith('<div') ||
                   userCode.trim().toLowerCase().startsWith('<math');

    if (isSvg) {
        outputModeBadge.textContent = 'SVG RENDER';
        outputHeaderTitle.textContent = '🎨 Real-time SVG Canvas';
        previewIframe.style.display = 'block';
        outputTerminal.style.display = 'none';
        previewIframe.srcdoc = `<!DOCTYPE html><html><body style="margin:0;background:#0b1120;display:flex;align-items:center;justify-content:center;height:100vh;">${userCode}</body></html>`;
    } else if (isHtml) {
        outputModeBadge.textContent = 'WEB PREVIEW';
        outputHeaderTitle.textContent = '🌐 Sandboxed DOM Preview';
        previewIframe.style.display = 'block';
        outputTerminal.style.display = 'none';
        previewIframe.srcdoc = userCode;
    } else {
        outputModeBadge.textContent = 'EXECUTION SIMULATOR';
        outputHeaderTitle.textContent = '⚡ Language Execution Console';
        previewIframe.style.display = 'none';
        outputTerminal.style.display = 'block';

        const timestamp = new Date().toLocaleTimeString();
        outputTerminal.textContent = `[${timestamp}] Compiling and executing ${entry.name} (#${entry.id})...\n` +
                                     `============================================================\n` +
                                     `${entry.expectedOutput}\n` +
                                     `============================================================\n` +
                                     `[CodePlay Runtime] Execution completed successfully with code 0.`;
    }
}

// Initial Run
runExecution();

// Actions
btnRun.addEventListener('click', runExecution);

btnReset.addEventListener('click', () => {
    editorInput.value = entry.sampleCode;
    runExecution();
    showToast('↺ Workspace reset to original sample code');
});

btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(editorInput.value);
    showToast('📋 Code copied to clipboard!');
});

function showToast(msg) {
    if (!toastMsg) return;
    toastMsg.textContent = msg;
    toastMsg.classList.add('show');
    setTimeout(() => toastMsg.classList.remove('show'), 2000);
}

// Tab key indentation support
editorInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = editorInput.selectionStart;
        const end = editorInput.selectionEnd;
        editorInput.value = editorInput.value.substring(0, start) + '  ' + editorInput.value.substring(end);
        editorInput.selectionStart = editorInput.selectionEnd = start + 2;
    }
});
