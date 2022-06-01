module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red-violet': {
          DEFAULT: '#CB1B88',
          '50': '#F9D2EA',
          '100': '#F6BCE0',
          '200': '#F08FCB',
          '300': '#EA62B6',
          '400': '#E435A1',
          '500': '#CB1B88',
          '600': '#9E156A',
          '700': '#710F4C',
          '800': '#44092E',
          '900': '#17030F'
        },
        'purple': {
          DEFAULT: '#8A2A9B',
          '50': '#E6BDED',
          '100': '#DEA9E8',
          '200': '#CF81DD',
          '300': '#C059D2',
          '400': '#AE35C3',
          '500': '#8A2A9B',
          '600': '#661F73',
          '700': '#43144B',
          '800': '#1F0923',
          '900': '#000000'
        },
        'blue': {
          DEFAULT: '#2F98F9',
          '50': '#FFFFFF',
          '100': '#F5FAFF',
          '200': '#C4E2FD',
          '300': '#92C9FC',
          '400': '#61B1FA',
          '500': '#2F98F9',
          '600': '#077FEE',
          '700': '#0565BD',
          '800': '#044A8B',
          '900': '#033059'
        },
        'yellow': {
          DEFAULT: '#F3B40E',
          '50': '#FEF8E9',
          '100': '#FDF0D0',
          '200': '#FAE1A0',
          '300': '#F8D26F',
          '400': '#F5C33F',
          '500': '#F3B40E',
          '600': '#C4910A',
          '700': '#946D07',
          '800': '#634905',
          '900': '#322503'
        },
        'orange': {
          DEFAULT: '#DF8A53',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#F7E2D4',
          '300': '#EFC5A9',
          '400': '#E7A77E',
          '500': '#DF8A53',
          '600': '#D76D28',
          '700': '#AC5720',
          '800': '#814118',
          '900': '#562C10'
        },
        'red-pink': {
          DEFAULT: '#E56092',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FBE3EC',
          '300': '#F3B8CE',
          '400': '#EC8CB0',
          '500': '#E56092',
          '600': '#DE3474',
          '700': '#C01F5C',
          '800': '#941847',
          '900': '#681132',
          'light': '#FFE4F5'
        },
        'white': {
          DEFAULT: '#FFFFFF'
        },
        'gray': {
          DEFAULT: '#E5E5E5',
          '50': '#A1A1A1',
          '100': '#949494',
        },
        'smoke': {
          DEFAULT: '#9F94AD',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#EDEBEF',
          '300': '#D3CED9',
          '400': '#B9B1C3',
          '500': '#9F94AD',
          '600': '#857797',
          '700': '#6C5F7C',
          '800': '#53495F',
          '900': '#3A3342'
        },
        'darkLines': {
          DEFAULT: '#E6E8EE'
        },
      },
      // that is animation class
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),

    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [
  ],
}