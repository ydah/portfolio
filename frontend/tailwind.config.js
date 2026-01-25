/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../templates/**/*.erb',
    '../content/**/*.md',
  ],
  theme: {
    extend: {
      fontFamily: {
        antro: ['AntroVectra', 'sans-serif'],
        audrey: ['Audrey', 'sans-serif'],
        mplus: ['"M PLUS 1p"', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#121212',
          800: '#1e1e1e',
          700: '#2d2d2d',
        },
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.white'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-code': theme('colors.gray.300'),
            '--tw-prose-pre-bg': theme('colors.gray.800'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
