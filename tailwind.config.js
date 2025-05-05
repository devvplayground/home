/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry: ['zentry','sans-serif'],
        general:['gegeral','sans-serif'],
        'circular-web':['circular-web','sans-serif'],
        'robert-medium':['robert-medium','sans-serif'],
        'robert-regular':['robert-regular','sans-serif'],
      },
      colors:{
        blue:{
          50: '#DFDFF0',
          75: '#DFDFF0',
          100: '#3F0F2FA',
          200: '#010101',
          300: '#4FB7DD',
          400: '#00f0ff'
        },
        violet:{
          300: '#5724FF',
        },
        yellow:{
          100: '#8E983F',
          300: '#EDFF66',
        }
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-blue-neon': {
          color: '#00f0ff',
          textShadow: '0 0 4px rgba(0, 255, 255, 0.5), 0 0 8px rgba(0, 255, 255, 0.4), 0 0 12px rgba(0, 255, 255, 0.3)',
        },
      })
    })
  ],
}
