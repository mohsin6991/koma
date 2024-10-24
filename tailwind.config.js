/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind will purge unused CSS based on the content files listed here
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // This should cover the Footer component
  ],
  theme: {
    // You can extend Tailwind's default theme here
    extend: {
      colors: {
        // Custom color example
        primary: '#1da1f2',
        secondary: '#14171a',
      },
      spacing: {
        // Custom spacing example (e.g., 72 = 18rem)
        '72': '18rem',
        '84': '21rem',
      },
      fontFamily: {
        // Custom font example
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Add Tailwind CSS plugins here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
