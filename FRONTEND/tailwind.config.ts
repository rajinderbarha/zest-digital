import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//         'image-1': "url('../../src/assets/images/Gradient_v3.png')",
//       },
//       fontFamily: {
//         mono: ['IBM Plex Mono', 'monospace'],
//         lato: ['Lato', 'sans-serif'],
//       },
//       colors: {
//         'color-1': '#191615',
//         'color-2': '#373737',
//         'color-3': '#E43FA8',
//         'color-4': '#421F33',
//         'color-5': '#00000029',
//       },
//       fontSize: {
//         '55px': '55px',
//         '45px': '45px',
//         '40px': '40px',
//         '35px': '35px',
//       },
//       boxShadow: {
//         'msg': '0 3px 6px  #00000029',
//         'compo': '6px 6px #1d2671',
//         'compo1': '-6px 6px #1d2671',
//       },
//       borderRadius: {
//         '30px': '30px',
//         '15px': '15px',
//       },
//       screens: {
//         'screen-1-max': [
//           { 'max': '1080px' },
//         ],
//         'screen-1-min': [
//           { 'min': '1081px' },
//         ],
//         'sm-max': [
//           { 'max': '609px' },
//         ],
//         'max-1810px': [
//           { 'max': '1810px' },
//         ],
//         'max-1700px': [
//           { 'max': '1700px' },
//         ],
//         'max-1570': [
//           { 'max': '1570px' },
//         ],
//         'max-1350': [
//           { 'max': '1350px' },
//         ],
//         'min-1350': [
//           { 'min': '1351px' },
//         ],
//         'max-1024': [
//           { 'max': '1024px' },
//         ],
//         'max-768': [
//           { 'max': '768px' },
//         ],
//         'min-768': [
//           { 'min': '768px' },
//         ],
//         'max-970': [
//           { 'max': '970px' },
//         ],
//         'max-800': [
//           { 'max': '800px' },
//         ],
//         'min-769': [
//           { 'min': '769px' },
//         ],
//         'max-1066': [
//           { 'max': '1066px' },
//         ],

//       },
//       spacing: {
//         '680px': '680px',
//         '670px': '670px',
//         '450px': '450px',
//         '440px': '420px',
//         '660px': '660px',
//         '430px': '410px',
//         '650px': '650px',
//         '400px': '380px',
//         '630px': '600px',
//         '380px': '330px',
//         '331px': '331px',
//         '188px': '188px',
//         '186px': '186px',
//         '185px': '185px',
//         '166px': '166px',
//         '130px': '100px',
//         '100px': '100px',
//         '90px': '90px',
//         '71px': '71px',
//         '68px': '68px',
//         '63px': '63px',
//         '55px': '55px',
//         '47px': '47px',
//         '26px': '26px',
//         '25px': '25px',
//         '23px': '23px',
//         '21px': '21px',
//         '16.29px': '16.29px',
//         '14.33px': '14.33px',

//       }

//     },
//   },
//   plugins: [],
// };
// export default config;

module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'image-1': "url('../../src/assets/images/Gradient_v3.png')",
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        lato: ['Lato', 'sans-serif'],
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
        'msg': '0 3px 6px  #00000029',
        'compo': '6px 6px #1d2671',
        'compo1': '-6px 6px #e43fa8',
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
        'max-1810px': [
          { 'max': '1810px' },
        ],
        'max-1700px': [
          { 'max': '1700px' },
        ],
        'max-1570': [
          { 'max': '1570px' },
        ],
        'max-1350': [
          { 'max': '1350px' },
        ],
        'min-1350': [
          { 'min': '1351px' },
        ],
        'max-1024': [
          { 'max': '1024px' },
        ],
        'max-768': [
          { 'max': '768px' },
        ],
        'min-768': [
          { 'min': '768px' },
        ],
        'max-970': [
          { 'max': '970px' },
        ],
        'max-800': [
          { 'max': '800px' },
        ],
        'min-769': [
          { 'min': '769px' },
        ],
        'max-1066': [
          { 'max': '1066px' },
        ],

      },
      spacing: {
        '680px': '680px',
        '670px': '670px',
        '450px': '450px',
        '440px': '420px',
        '660px': '660px',
        '430px': '410px',
        '650px': '650px',
        '400px': '380px',
        '630px': '600px',
        '380px': '330px',
        '331px': '331px',
        '188px': '188px',
        '186px': '186px',
        '185px': '185px',
        '166px': '166px',
        '130px': '100px',
        '100px': '100px',
        '90px': '90px',
        '71px': '71px',
        '68px': '68px',
        '63px': '63px',
        '55px': '55px',
        '47px': '47px',
        '26px': '26px',
        '25px': '25px',
        '23px': '23px',
        '21px': '21px',
        '16.29px': '16.29px',
        '14.33px': '14.33px',

      }

    },
  },
  plugins: [],
}