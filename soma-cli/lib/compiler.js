import fs from 'fs';

export function compileFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  return {
    filename: filePath,
    ast: {
      functions: [...code.matchAll(/def\s+(\w+)/g)].map((m) => m[1]),
    },
    bytecode: '0xDEADBEEF'
  };
}