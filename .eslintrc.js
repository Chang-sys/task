module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module"
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended"
  ],
  rules: {
    // Add your custom rules here
  }
};
