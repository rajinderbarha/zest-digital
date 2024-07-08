import type { Config } from "tailwindcss";
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // mono: ['IBMPlexMono', 'monospace'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
        lato: ['Lato_font'],
      },
      colors: {
        'color-1': '#191615',
        'color-2': '#373737',
        'color-3': '#E43FA8',
        'color-4': '#421F33',
        'color-5': '#00000029',
        'color-6': '#989898',
        'color-7': '#A2FF8F',
        'color-8': '#7D7A78',
        'color-9': '#E43FA8',
        'color-10': '#bebdbd',
        'light-green-1': '#bbffad',


      },
      fontSize: {
        '55px': '55px',
        '50px': '50px',
        '45px': '45px',
        '40px': '40px',
        '35px': '35px',
        '30px': '30px',
        '25px': '25px',
      },
      boxShadow: {
        'blue-left': '-6px 6px #1d2671',
        'dark-pink-left': '-6px 6px #e43fa8',
        'blue-right': '6px 6px #1d2671',
        'dark-pink-right': '6px 6px #e43fa8',
      },
      borderRadius: {
        '30px': '30px',
        '15px': '15px',
      },
      screens: {
        'screen-1-max': [
          { 'max': '1080px' },
        ],
        'screen-1-min': [
          { 'min': '1081px' },
        ],
        'sm-max': [
          { 'max': '609px' },
        ],
        'max-tb':[
          {'max': '830px' }
        ],
        'min-tb':[
          {'min': '540px' }
        ]

      },
      spacing: {
        '55px': '55px',
        '47px': '47px',
        '26px': '26px',
        '25px': '25px',
        '23px': '23px',
        '21px': '21px',

      }

    },
  },
  plugins: [],
}