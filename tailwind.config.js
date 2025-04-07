/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        softGreen: '#E3FDFD',
        softPink: '#FFE6FA',
        softBeige: '#F6F1E9',
      },
      spacing: {
        'container-padding': '1rem',
        'container-padding-md': '2rem',
        'container-padding-lg': '4rem',
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: 'marquee var(--duration, 30s) linear infinite',
        "fade-slide-down": "fade-slide-down 0.5s ease-in-out",
        "fade-slide-up": "fade-slide-up 0.5s ease-in-out",
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        "fade-slide-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-0.5rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "fade-slide-up": {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-0.5rem)",
          },
        },
      },
    },
  },
  plugins: [],
};
