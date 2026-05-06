const fs = require('fs');
const path = require('path');

const casesDir = path.join(__dirname, '..', 'src', 'cases');

// Find all case folders (directories that aren't index.js or placeholders.js)
const entries = fs.readdirSync(casesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

function readTxt(folder, filename) {
  const filePath = path.join(casesDir, folder, filename);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8').trim();
  }
  return '';
}

function hasImage(folder, filename) {
  const filePath = path.join(casesDir, folder, filename);
  return fs.existsSync(filePath) && fs.statSync(filePath).size > 0;
}

// Generate meta.js for each case folder
entries.forEach(folder => {
  const client = readTxt(folder, 'client.txt');
  const project = readTxt(folder, 'project.txt');
  const description = readTxt(folder, 'description.txt');
  const longDescription = readTxt(folder, 'long.txt');

  if (!client && !project) {
    console.log(`Skipping ${folder} — no client.txt or project.txt`);
    return;
  }

  const hasImg1 = hasImage(folder, 'img1.png');
  const hasImg2 = hasImage(folder, 'img2.png');
  const hasImg3 = hasImage(folder, 'img3.png');

  const variantIndex = entries.indexOf(folder);

  let imports = '';
  let imagesArray = '';

  if (hasImg1 || hasImg2 || hasImg3) {
    if (hasImg1) imports += `import img1 from './img1.png';\n`;
    if (hasImg2) imports += `import img2 from './img2.png';\n`;
    if (hasImg3) imports += `import img3 from './img3.png';\n`;

    const imgs = [];
    if (hasImg1) imgs.push('img1');
    if (hasImg2) imgs.push('img2');
    if (hasImg3) imgs.push('img3');
    imagesArray = `[${imgs.join(', ')}]`;
  } else {
    imports = `import { getPlaceholders } from '../placeholders';\nconst { img1, img2, img3 } = getPlaceholders(${variantIndex});\n`;
    imagesArray = '[img1, img2, img3]';
  }

  const meta = `// AUTO-GENERATED — do not edit manually. Run "npm run generate" to regenerate.
${imports}
const meta = {
  slug: '${folder}',
  client: ${JSON.stringify(client)},
  project: ${JSON.stringify(project)},
  description: ${JSON.stringify(description)},
  longDescription: ${JSON.stringify(longDescription)},
  images: ${imagesArray},
};

export default meta;
`;

  fs.writeFileSync(path.join(casesDir, folder, 'meta.js'), meta);
  console.log(`Generated meta.js for ${folder}`);
});

// Generate index.js
const indexImports = entries
  .filter(folder => readTxt(folder, 'client.txt') || readTxt(folder, 'project.txt'))
  .map((folder, i) => {
    const varName = folder.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    return { folder, varName };
  });

const indexContent = `// AUTO-GENERATED — do not edit manually. Run "npm run generate" to regenerate.
${indexImports.map(({ folder, varName }) => `import ${varName} from './${folder}/meta';`).join('\n')}

const cases = [
${indexImports.map(({ varName }) => `  ${varName},`).join('\n')}
];

export default cases;
`;

fs.writeFileSync(path.join(casesDir, 'index.js'), indexContent);
console.log('Generated cases/index.js');
