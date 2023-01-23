import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  rules: [
    ['custom-rule', { color: 'red' }],
  ],
  shortcuts: {
    'custom-shortcut': 'text-lg text-orange hover:text-teal',
  },
  theme: {
    // ...
    colors: {
      veryCool: '#0000ff', // class="text-very-cool"
      light: {
        primary: '#F9A30E',
      },
      dark: {
        primary: '#0C0C0D',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: {
          name: 'Poppins',
          weights: ['400', '500', '600', '700'],
        },
      },
    }),
  ],
})
