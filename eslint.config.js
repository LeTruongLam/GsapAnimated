import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import html from 'eslint-plugin-html'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default [
  { ignores: ['**/*.min.{css,js}', 'dist/'] },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    files: ['src/**/*.{html,js}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        gsap: 'readonly',
      },
    },
    plugins: { html },
    rules: {
      'no-console': 1,
      'prettier/prettier': 'error',
    },
  },
]
