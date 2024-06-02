import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',   // Mobile S to Mobile L
        'md': '768px',   // Tablet to Laptop
        'lg': '1024px',  // Laptop L and above
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-blue": "#19598F",
        "secondary-blue": "#F0F9FF",
        "primary-yellow": "#FFC700",
        "primary-black": "#131200",
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        sans: ['Sans-serif'], 
      },
      fontSize: {
        'h1-sm': '24px',  // Mobile
        'h1-md': '30px',  // Tablet
        'h1-lg': '36px',  // Desktop
        'h3-sm': '20px',  // Mobile
        'h3-md': '24px',  // Tablet
        'h3-lg': '28px',  // Desktop
        'h4-sm': '16px',  // Mobile
        'h4-md': '20px',  // Tablet
        'h4-lg': '24px',  // Desktop
        'h5-sm': '14px',  // Mobile
        'h5-md': '18px',  // Tablet
        'h5-lg': '22px',  // Desktop
        'h6-sm': '12px',  // Mobile
        'h6-md': '16px',  // Tablet
        'h6-lg': '20px',  // Desktop
        'p-sm': '14px',   // Mobile
        'p-md': '16px',   // Tablet
        'p-lg': '18px',   // Desktop
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
};

export default config;
