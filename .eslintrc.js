module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["varp"],
  rules: {
    indent: ["error", 4],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
