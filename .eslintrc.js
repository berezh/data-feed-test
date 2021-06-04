module.exports = {
    parser: "@typescript-eslint/parser",
    ignorePatterns: ["**/data-feed", "**/data-feed-blueprintjs"],
    extends: [],
    plugins: ["varp"],
    rules: {
        'quotes': 'off',
        '@typescript-eslint/quotes':['error', 'single']
    },
    parserOptions: {
        sourceType: "module"
    },
};
