/* eslint-disable comma-dangle */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  rules: {
    quotes: ["error", "double"],
  },
};
