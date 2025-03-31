/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        softGreen: '#E3FDFD',
        softPink: '#FFE6FA',
        softBeige: '#F6F1E9' // Ensure this matches exactly
      },
      spacing: {
        'container-padding': '1rem',
        'container-padding-md': '2rem',
        'container-padding-lg': '4rem'
      },
      animation: {
        marquee: 'marquee var(--duration, 30s) linear infinite'
      },
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
}
