module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["tailwindcss"],
  extends: [
    "@vue/typescript/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:security/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
    "./.eslintrc-auto-import.json",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "no-var": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": ["error", "only-multiline"],
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
};
