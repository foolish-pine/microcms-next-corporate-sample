module.exports = {
  extends: "next/core-web-vitals",
  plugins: ["import", "unused-imports"],
  rules: {
    "import/order": [2, { alphabetize: { order: "asc" } }],
    "unused-imports/no-unused-imports": "error",
  },
};
