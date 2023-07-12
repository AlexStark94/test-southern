/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "src/app/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: '#9900FF',
        light300: '#BE5CFF',
        light200: '#B442FF',
        light100: '#A724FF',
        dark100: '#8D00EB',
        dark200: '#8100D6',
        dark300: '#7600C7',
      },
      pink: {
        DEFAULT: '#F20D87',
        light300: '#F877B7',
        light200: '#F65AA8',
        light100: '#F5389D',
        dark100: '#E40C7E',
        dark200: '#D50B76',
        dark300: '#C70A6E',
      },
      blue: {
        DEFAULT: '#005EFF',
        light300: '#5C98FF',
        light200: '#4287FF',
        light100: '#2474FF',
        dark100: '#0052E0',
        dark200: '#0049C7',
        dark300: '#003FAD',
      },
      green: {
        DEFAULT: '#1FE072',
        light300: '#7DEDAD',
        light200: '#62EA9C',
        light100: '#43E589',
        dark100: '#1CCE69',
        dark200: '#1AC162',
        dark300: '#18B45B',
      },
      red: {
        DEFAULT: '#FF4C5E',
        light300: '#FF99A3',
        light200: '#FF8591',
        light100: '#FF6B7A',
        dark100: '#F33F51',
        dark200: '#E33546',
        dark300: '#D12E3E',
      },
      yellow: {
        DEFAULT: '#F6F66F',
        light300: '#FBFBC5',
        light200: '#FAFAAE',
        light100: '#F8F891',
        dark100: '#F0F05C',
        dark200: '#E9E94E',
        dark300: '#E3E34F',
      },
      cyan: {
        DEFAULT: '#0CF3E7',
        light300: '#81F9F2',
        light200: '#5FF7EF',
        light100: '#38F5EB',
        dark100: '#0BE4D9',
        dark200: '#0AD1C6',
        dark300: '#0AC2B9',
      },
      orange: {
        DEFAULT: '#FF7C2E',
        light300: '#FFA570',
        light200: '#FF995C',
        light100: '#FF8942',
        dark100: '#FF6C14',
        dark200: '#FF5F00',
        dark300: '#F05900',
      },
      gray: {
        DEFAULT: '#817A85',
        light100: '#8B858E',
        light300: '#A9A5AC',
        light400: '#B3AFB6',
        light500: '#BDBABF',
        light700: '#CFCDD0',
        light800: '#D9D7DA',
        light900: '#E3E2E4',
        light1100: '#E8E7E9',
        light1200: '#F0EFF0',
        light1300: '#F7F7F8',
        dark100: '#76717A',
        dark300: '#645F67',
        dark400: '#5A565D',
        dark500: '#524E55',
        dark700: '#3B383D',
        dark800: '#333135',
        dark900: '#29272A',
        dark1100: '#212022',
        dark1200: '#1C1B1D',
        dark1300: '#171618',
      },
      white: {
        DEFAULT: '#FCFCFD',
        pure: '#FFFFFF'
      },
      black: {
        DEFAULT: '#0D0C0D',
        pure: '#000000'
      }
    },
    fontSize: {
      '0': [
        '10px',
        {
          lineHeight: '14px',
          letterSpacing: '0.015em',
        }
      ],
      '1': [
        '11px',
        {
          lineHeight: '15.5px',
          letterSpacing: '0.01em',
        }
      ],
      '2': [
        '12px',
        {
          lineHeight: '17px',
          letterSpacing: '0.0075em',
        }
      ],
      '3': [
        '13px',
        {
          lineHeight: '18px',
          letterSpacing: '0.005em',
        }
      ],
      '4': [
        '14.5px',
        {
          lineHeight: '19.5px',
          letterSpacing: '0.0025em',
        }
      ],
      '5': [
        '16.5px',
        {
          lineHeight: '22px',
        }
      ],
      '6': [
        '19px',
        {
          lineHeight: '24.5px',
          letterSpacing: '-0.0025em',
        }
      ],
      '7': [
        '22.5px',
        {
          lineHeight: '27.5px',
          letterSpacing: '-0.005em',
        }
      ],
      '8': [
        '28px',
        {
          lineHeight: '32.5px',
          letterSpacing: '-0.0075em',
        }
      ],
      '9': [
        '34px',
        {
          lineHeight: '37.5px',
          letterSpacing: '-0.01em',
        }
      ],
      '10': [
        '44px',
        {
          lineHeight: '47px',
          letterSpacing: '-0.0125em',
        }
      ],
      '11': [
        '58px',
        {
          lineHeight: '60px',
          letterSpacing: '-0.015em',
        }
      ],
      '12': [
        '78px',
        {
          lineHeight: '80px',
          letterSpacing: '-0.015em',
        }
      ],
    },
    screens: {
      sm: '767px',
      md: '1024px',
      lg: '1441px',
    },
    extend: {},
  },
  plugins: [],
}
