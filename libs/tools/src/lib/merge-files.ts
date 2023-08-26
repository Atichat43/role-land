import fs = require('fs');
import path = require('path');

const mergeFiles = (dir: string, outputFile: fs.PathOrFileDescriptor) => {
  let mergedContent = '';

  const readFiles = (directory: string) => {
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        readFiles(filePath);
      } else if (filePath.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        const filteredLines = lines.filter(
          (line) => !line.startsWith('import '),
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
