module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        custom: '1306px',
      },
      fontFamily: {
        proxima: ['"Proxima Nova"', 'sans-serif'],
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
        madefor: ['"Madefor"', 'sans-serif'],
      },
      lineHeight: {
        '50': '50px',
      },
      keyframes: {
        fadeInOnce: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-once': 'fadeInOnce 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};


