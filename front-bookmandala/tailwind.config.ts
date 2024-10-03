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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dim-gray': '#6b6b6b',
        'sky-blue': '#93c7e5',
        'snow': '#fafafa',
        'teal': '#1a6489',
      },
    },
  },
  plugins: [],
};
export default config;
