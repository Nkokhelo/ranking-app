module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: ['*.ts'],
      excludedFiles: ['.meta/proof.ci.ts', '.meta/exemplar.ts', '*.test.ts'],
    },
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
      },
    }
  ],
}
