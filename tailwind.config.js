/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#191f2b",
        bordercolor: "#e08637",
      },
      backgroundImage: {
        nav: "linear-gradient(#0000000e, #e08637, #e08637, #e08637,#0000000e);",
        "principal-banner": "url('/src/assets/banners/banner.png')",
      },
    },
  },
  plugins: [],
};
