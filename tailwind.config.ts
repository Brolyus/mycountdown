import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        flicker:{
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            'text-shadow': '-0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff, 0 0 2rem #f40, 0 0 4rem #f40,0 0 6rem #f40, 0 0 8rem #f40, 0 0 10rem #f40;',
            'box-shadow': '0 0 .5rem #fff, inset 0 0 .5rem #fff, 0 0 2rem #08f, inset 0 0 2rem #08f, 0 0 4rem #08f,inset 0 0 4rem #08f;'
          },
          '20%, 24%, 55%': { 'text-shadow': 'none;', 'box-shadow': 'none;',}   
        }
      },
      animation :{
        'flicker':  'flicker 1.5s infinite alternate;'
      }
    },
  },
  plugins: [],
};
export default config;
