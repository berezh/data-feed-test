module.exports = {
  extends: ["varp"],
  rules: {
    /* Eslint rules */
  },
  overrides: [
    {
      files: ["pages/**/*.*"],
      rules: {
        /* Overrided rules */
        "import/no-default-export": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};
