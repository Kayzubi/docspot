/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      xl: { max: '1200px' },
      lg: { max: '991px' },
      md: { max: '767px' },
      sm: { max: '550px' },
      xsm: { max: '375px' },
    },
    colors: {
      'las-palmas': {
        50: '#fbfee7',
        100: '#f4fdca',
        200: '#e9fa9c',
        300: '#d6f363',
        400: '#c7ea46',
        500: '#a3ce14',
        600: '#7ea50b',
        700: '#5f7d0e',
        800: '#4d6311',
        900: '#415413',
        950: '#212e05',
      },
      'australian-mint': {
        50: '#fafee7',
        100: '#edfbba',
        200: '#e3f99d',
        300: '#cef264',
        400: '#b7e635',
        500: '#98cc16',
        600: '#76a30d',
        700: '#597c0f',
        800: '#486212',
        900: '#3d5314',
        950: '#1f2e05',
      },
      error: {
        50: '#ffefef',
        100: '#ffdbdb',
        200: '#ffbdbd',
        300: '#ff8f8f',
        400: '#ff4f4f',
        500: '#ff1919',
        600: '#ff0000',
        700: '#e00000',
        800: '#b80000',
        900: '#a30505',
        950: '#540000',
      },

      shark: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#1e1e1e',
      },
      'snow-drift': {
        50: '#f6f7f4',
        100: '#ebede7',
        200: '#d7dbcd',
        300: '#bdc3ae',
        400: '#a4ab8c',
        500: '#939976',
        600: '#898d69',
        700: '#737559',
        800: '#60614b',
        900: '#4f4f3f',
        950: '#2a2a20',
      },
      transparent: 'transparent',
      white: {
        10: '#FFFFFF2E',
        20: '#efefef',
        100: '#ffffff',
      },
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
}
