const fs = require('fs');
const path = require('path');

// Maps existing file section7-entry.html..section17-entry.html to their shifted Section numbers (8..18)
// Keeps filenames unchanged so all existing URLs stay 100% intact.
const mapping = [
  { file: 'section7-entry.html',  oldSec: 7,  newSec: 8,  range: '351–400' },
  { file: 'section8-entry.html',  oldSec: 8,  newSec: 9,  range: '401–450' },
  { file: 'section9-entry.html',  oldSec: 9,  newSec: 10, range: '451–500' },
  { file: 'section10-entry.html', oldSec: 10, newSec: 11, range: '501–550' },
  { file: 'section11-entry.html', oldSec: 11, newSec: 12, range: '551–600' },
  { file: 'section12-entry.html', oldSec: 12, newSec: 13, range: '601–650' },
  { file: 'section13-entry.html', oldSec: 13, newSec: 14, range: '651–700' },
  { file: 'section14-entry.html', oldSec: 14, newSec: 15, range: '701–750' },
  { file: 'section15-entry.html', oldSec: 15, newSec: 16, range: '751–800' },
  { file: 'section16-entry.html', oldSec: 16, newSec: 17, range: '801–850' },
  { file: 'section17-entry.html', oldSec: 17, newSec: 18, range: '851–900' }
];

for (const item of mapping) {
  const filePath = path.resolve(__dirname, '../pages', item.file);
  let content = fs.readFileSync(filePath, 'utf8');

  const oldHref = `../index.html?section=${item.oldSec}`;
  const newHref = `../index.html?section=${item.newSec}`;
  const oldLabel = `Section ${item.oldSec} (${item.range})`;
  const newLabel = `Section ${item.newSec} (${item.range})`;

  let changed = false;
  if (content.includes(oldHref)) {
    content = content.split(oldHref).join(newHref);
    changed = true;
  }
  if (content.includes(oldLabel)) {
    content = content.split(oldLabel).join(newLabel);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${item.file}: ${oldLabel} -> ${newLabel}`);
  } else {
    console.log(`Already updated or unchanged: ${item.file}`);
  }
}
