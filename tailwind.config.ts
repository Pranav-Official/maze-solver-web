import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode : "class",
  theme: {
    colors: {
      'primary': '#5AAEE5',
      'secondary': '#ACDAF6',
      "accent": "#3DB62F",
      'background': '#DEF0FC',
      'text': '#020C13',
      'dark-primary': '#5AAEE5',
      'dark-secondary': '#010609',
      "dark-accent": "#A1E599",
      'dark-background': '#020C13',
      'dark-text': '#DEF0FC',
      'text-red': '#FF0000',
      'hover-primary': '#56A6DB',
      'hover-secondary': '#82C2EA',
      "hover-accent": "#339228",
      'hover-dark-primary': '#56A6DB',
      'hover-dark-secondary': '#0C2E42',
      "hover-dark-accent": "#7BB974",


    },
    fontFamily: {
      Sulphur_point: ["Sulphur Point"],
      Poppins: ["Poppins"],
     },
  },
  plugins: [],
}
export default config
