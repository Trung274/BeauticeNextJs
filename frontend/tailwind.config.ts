import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        '15': '3.75rem',
      },
      letterSpacing: {
        'wider-plus': '0.095rem',
        'widest-plus': '0.19em'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config;