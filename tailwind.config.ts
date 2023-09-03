import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#5AAEE5',
      'secondary': '#ACDAF6',
      "accent": "#3DB62F",
      'background': '#DEF0FC',
      'text': '#020C13',

    },
    fontFamily: {
      Sulphur_point: ["Sulphur Point"],
      Poppins: ["Poppins"],
     },
  },
  plugins: [],
}
export default config
