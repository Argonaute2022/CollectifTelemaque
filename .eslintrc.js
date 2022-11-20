module.exports = {
  extends: [
    `plugin:@typescript-eslint/recommended`,
    `plugin:react/recommended`,
    `prettier`,
    `plugin:prettier/recommended`,
    `plugin:import/errors`,
    `plugin:import/warnings`,
    `plugin:import/typescript`,
    `plugin:@next/next/recommended`,
    `plugin:@next/next/core-web-vitals`,
  ],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 2018,
    jsx: true,
    sourceType: `module`,
  },
  root: true,
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      1,
      {
        prefer: `type-imports`,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      1,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/naming-convention": [
      `error`,
      {
        format: [
          `strictCamelCase`,
          `UPPER_CASE`,
          `StrictPascalCase`,
          `snake_case`,
        ],
        leadingUnderscore: `allow`,
        selector: `variableLike`,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      1,
      {
        argsIgnorePattern: `^_`,
        varsIgnorePattern: `^_`,
      },
    ],
    "@typescript-eslint/quotes": [1, `backtick`],
    "import/namespace": `off`,
    "import/order": [
      1,
      {
        "groups": [
          `builtin`,
          `external`,
          `internal`,
          `parent`,
          `sibling`,
          `index`,
        ],
        "newlines-between": `always`,
      },
    ],
    "no-unused-vars": `off`,
    "object-shorthand": [1, `always`],
    "prettier/prettier": [
      1,
      {
        endOfLine: `auto`,
        quoteProps: `consistent`,
        trailingComma: `all`,
      },
    ],
    "prettier/quote-props": 0,
    "quote-props": [1, `consistent-as-needed`],
    "react/jsx-curly-brace-presence": [1, `always`],
    "react/jsx-sort-props": [1],
    "react/react-in-jsx-scope": 0,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [`.ts`, `.d.ts`, `.tsx`],
    },
    "react": {
      version: `detect`,
    },
  },
};
