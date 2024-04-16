/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#93348E', // Button color purple
        primaryHover: '#81047B', // Button hover color
        primaryPurple3: '#D3ADF7', // Search bar color
        buttonBorder: '#CF85CB', // Button border color
        neutralGrey: '#BFBFBF', // Search bar text color
        neutralGray2: '#262626', // Planner text color
        neutralGray3: '#597393', // Planner left border line color
        primaryLight: '#EFDBFF', // Light purple
        greenLight: '#D1FFE4', // Light purple
        orangeLight: '#FFEEDB', // Light purple
        leftBorder: '#597393', // Left border color
        secondary: '#EAECFB', // sidebar bg color
        cyan: '#B5F5EC', // OTP field success color
        orange: '#FFCCC7', // OTP field error color
        green: '#27AE60', // progress bar color
        orange2: '#FA8C16', // orange color
        gradient1: '#F4F5FE', // Gradient color left
        gradient2: '#B4BBE8', // Gradient color right
        grey: '#F1F2F6', // Pagination background color
        blue: '#003A8C', // Tutorial text color
        lightBlue: '#2f80ed', // animation circle color
        dark: {
          400: '#F0F0F0', // OTP filed color
          500: '#E9ECEF', // input field gray color
          600: '#BFBFBF', // border color
          700: '#595959', // input field placeholder color
          800: '#343A40', // input field text color
          900: '#000', // black
          1000: '#D9D9D9', // progress bar background color
        },
      },
    },
  },
  plugins: [],
}

