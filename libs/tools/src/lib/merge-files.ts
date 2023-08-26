import fs = require('fs');
import path = require('path');

const mergeFiles = (dir: string, outputFile: fs.PathOrFileDescriptor) => {
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
        filePath.endsWith('.ts') &&
        !filePath.endsWith('index.ts') &&
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
  fs.writeFileSync(outputFile, mergedContent);
};

const args = process.argv.slice(2);
const inputDir = args[0];
const outputFilePath = args[1];

mergeFiles(inputDir, outputFilePath);
