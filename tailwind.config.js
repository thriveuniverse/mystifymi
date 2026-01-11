/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-strong": "var(--green-strong)",
        "green-soft": "var(--green-soft)",
        "green-muted": "var(--green-muted)",
        "cream-soft": "var(--cream-soft)",
        "cream-muted": "var(--cream-muted)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};