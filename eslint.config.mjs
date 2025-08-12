import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Encourage airy, readable layouts between logical sections
      'padding-line-between-statements': [
        'warn',
        // Always add a blank line before returns
        { blankLine: 'always', prev: '*', next: 'return' },

        // Always add a blank line after variable declarations
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        // But allow consecutive var/let/const without blank lines between themselves
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },

        // Ensure breathing room around blocks and function/class boundaries
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: '*', next: ['function', 'class'] },
        { blankLine: 'always', prev: ['function', 'class'], next: '*' },
      ],

      // Keep it tidy: no large vertical gaps
      'no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 1, maxEOF: 1 }],
    },
  },
];

export default eslintConfig;
