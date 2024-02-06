module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      env: {
        jest: true,
      },
      files: ["**/*.test.js"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
