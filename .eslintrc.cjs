module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        'vue/multi-word-component-names': 'off',
    },
}
  