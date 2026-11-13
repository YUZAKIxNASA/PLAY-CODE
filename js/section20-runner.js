import { section20Entries } from '../data/section20-entries.js';

// Get target entry ID from URL parameter (default 951)
const urlParams = new URLSearchParams(window.location.search);
let entryId = parseInt(urlParams.get('entry'), 10);
if (isNaN(entryId) || entryId < 951 || entryId > 1000) {
    entryId = 951;
}

// Locate matching entry
const entry = section20Entries.find(e => e.id === entryId) || section20Entries[0];

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
const entryHistory = document.getElementById('entry-history');
const entryFeatures = document.getElementById('entry-features');
const entrySyntax = document.getElementById('entry-syntax');
const entryVariables = document.getElementById('entry-variables');
const entryFunctions = document.getElementById('entry-functions');
const entryRuntimeNote = document.getElementById('entry-runtime-note');

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

// Populate Jump Select with all 50 entries (951–1000)
if (jumpSelect) {
    section20Entries.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = `${item.id}. ${item.name} (${item.categoryLabel})`;
        if (item.id === entry.id) opt.selected = true;
        jumpSelect.appendChild(opt);
    });

    jumpSelect.addEventListener('change', (e) => {
        window.location.href = `section20-entry.html?entry=${e.target.value}`;
    });
}

// Configure Prev / Next Traversal (bounded within Section 20: 951 to 1000)
const prevId = entry.id > 951 ? entry.id - 1 : 1000;
const nextId = entry.id < 1000 ? entry.id + 1 : 951;

if (btnPrevTop) btnPrevTop.href = `section20-entry.html?entry=${prevId}`;
if (btnPrevBottom) btnPrevBottom.href = `section20-entry.html?entry=${prevId}`;
if (btnNextTop) btnNextTop.href = `section20-entry.html?entry=${nextId}`;
if (btnNextBottom) btnNextBottom.href = `section20-entry.html?entry=${nextId}`;

// Render Metadata
document.title = `${entry.name} (#${entry.id}) Lesson — CodePlay`;
if (breadcrumbCurrent) breadcrumbCurrent.textContent = `${entry.id}. ${entry.name}`;
if (entryLogoImg) {
    entryLogoImg.src = `../${entry.logo}`;
    entryLogoImg.alt = entry.name;
}
if (entryLogoBadge) {
    entryLogoBadge.className = `sec20-logo-badge ${entry.cssClass}`;
}

if (entryName) entryName.textContent = entry.name;
if (entryNumPill) entryNumPill.textContent = `#${entry.id}`;
if (entryCategoryPill) entryCategoryPill.textContent = entry.categoryLabel;
if (entryParadigmPill) entryParadigmPill.textContent = entry.paradigm.split('/')[0].trim();
if (entryYearPill) entryYearPill.textContent = entry.firstAppeared;

if (specDesignedBy) specDesignedBy.textContent = entry.designedBy || 'Computer Science Community';
if (specFirstAppeared) specFirstAppeared.textContent = entry.firstAppeared || 'Historical Release';
if (specFileExt) specFileExt.textContent = entry.fileExtension || 'N/A';
if (specPrimaryUse) specPrimaryUse.textContent = entry.primaryUse || 'Systems & Domain Computing';

if (entryExplanation) {
    entryExplanation.textContent = `${entry.shortDesc} ${entry.explanation}`;
}
if (entryHistory) entryHistory.textContent = entry.history || '';
if (entryFeatures && Array.isArray(entry.features)) {
    entryFeatures.innerHTML = '';
    entry.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        entryFeatures.appendChild(li);
    });
}
if (entrySyntax) entrySyntax.textContent = entry.syntaxSummary || '';
if (entryVariables) entryVariables.textContent = entry.variablesAndTypes || '';
if (entryFunctions) entryFunctions.textContent = entry.functionsAndModules || '';
if (entryRuntimeNote) {
    entryRuntimeNote.textContent =
        `${entry.executionRequirements} Note: Browser-only static hosting cannot execute native compilers or historical mainframe/hardware runtimes directly; editing the code sample preserves your local workspace, and the panel displays the verified expected output for the reference snippet.`;
}

if (editorInput) editorInput.value = entry.sampleCode;

// Reference Output / Inspection Handler (Transparent about non-browser runtimes)
function showReferenceOutput() {
    if (!editorInput || !outputTerminal) return;
    if (previewIframe) previewIframe.style.display = 'none';
    outputTerminal.style.display = 'block';

    const modified = editorInput.value.trim() !== entry.sampleCode.trim();
    if (outputModeBadge) {
        outputModeBadge.textContent = modified ? 'EDITED (EXTERNAL RUNTIME)' : 'REFERENCE OUTPUT';
    }
    if (outputHeaderTitle) {
        outputHeaderTitle.textContent = `📊 ${entry.name} — Expected Output`;
    }

    const modifiedNotice = modified
        ? `[Notice] You modified the snippet in the browser editor. Because ${entry.name} requires an external compiler/interpreter (${entry.executionRequirements}), live recompilation is not performed in-browser. Below is the verified reference output for the original lesson sample:\n\n`
        : '';

    outputTerminal.textContent =
        `${modifiedNotice}[Runtime Target] ${entry.executionRequirements}\n` +
        `============================================================\n` +
        `${entry.expectedOutput}\n` +
        `============================================================\n` +
        `[Verified Reference Output for ${entry.name} (#${entry.id})]`;
}

// Initial Render
showReferenceOutput();

// Actions
if (btnRun) btnRun.addEventListener('click', showReferenceOutput);

if (btnReset) {
    btnReset.addEventListener('click', () => {
        if (editorInput) {
            editorInput.value = entry.sampleCode;
            showReferenceOutput();
            showToast('↺ Sample code restored');
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
