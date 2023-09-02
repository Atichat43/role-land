import fs = require('fs');
import path = require('path');

import tokenizer from 'gpt-tokenizer';

const writeMergedContentToFiles = (
  mergedContent: string,
  baseFileName: string,
) => {
  const tokens = tokenizer.encode(mergedContent);
  let currentTokenCount = 0;
  let currentFileIndex = 1;
  let currentFileContent = '';

  const getNewFileName = (index: number, originalName: string) => {
    const dir = path.dirname(originalName);
    const baseName = path.basename(originalName);
    return `${dir}/z_${index}_${baseName}`;
  };

  for (const token of tokens) {
    const decodedToken = tokenizer.decode([token]);

    if (currentTokenCount + 1 > 3000) {
      const newFileName = getNewFileName(currentFileIndex, baseFileName);
      fs.writeFileSync(newFileName, currentFileContent);
      currentFileContent = '';
      currentTokenCount = 0;
      currentFileIndex++;
    }

    currentFileContent += decodedToken;
    currentTokenCount++;
  }

  // Write remaining content to file
  if (currentFileContent) {
    const newFileName = getNewFileName(currentFileIndex, baseFileName);
    fs.writeFileSync(newFileName, currentFileContent);
  }
};

const mergeFiles = (dir: string, baseFileName: string) => {
  let mergedContent = '';

  // Add ESLint and TypeScript ignore comments
  mergedContent +=
    '// eslint-disable-next-line @typescript-eslint/ban-ts-comment\n';
  mergedContent += '// @ts-nocheck\n';

  // Add a comment at the top
  mergedContent += '/* This is an auto-generated file. Do not edit. */\n\n';

  const readFiles = (directory: string) => {
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        readFiles(filePath);
      } else if (
        (filePath.endsWith('.ts') || filePath.endsWith('.md')) &&
        !filePath.endsWith('index.ts') &&
        !filePath.endsWith('.merged.local.ts') &&
        !filePath.endsWith('.merged.local.md') &&
        !filePath.endsWith('.local.ts') &&
        !filePath.endsWith('.local.md') &&
        !filePath.endsWith('.notes')
      ) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Remove multi-line imports
        content = content.replace(
          /import\s*{[^}]*}\s*from\s*['"][^'"]+['"];/g,
          '',
        );

        // Remove single-line imports
        const lines = content.split('\n');
        const filteredLines = lines.filter(
          (line) => !line.startsWith('import ') && line.trim() !== '',
        );

        mergedContent += filteredLines.join('\n') + '\n';
      }
    }
  };

  readFiles(dir);
  writeMergedContentToFiles(mergedContent, baseFileName);
};

const args = process.argv.slice(2);
const inputDir = args[0];
const outputFilePath = args[1];

mergeFiles(inputDir, outputFilePath);
