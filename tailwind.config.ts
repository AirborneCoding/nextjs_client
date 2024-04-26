import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // myBlue: '#933C4F',
        myBlue: '#10283E',
        myBlue2: '#ebf7ff',
        myBlue3: '#275682',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],

  daisyui: {
    themes: ['winter', 'night'],
  },
};
export default config;
