/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#191f2b",
      },
      backgroundImage: {
        nav: "linear-gradient(#0000000e, #e08637, #e08637, #e08637,#0000000e);",
        bordercolor:"linear-gradient(#0000000e, #e08637, #e08637, #e08637,#0000000e);",
        "principal-banner": "url('/src/assets/images/insurgentes-reforma1.jpg')",
      },
      boxShadow: {
        'grow': '0 35px 60px -15px #e08637',
      },
      screens: {
        'lock': '1200px',
      }
    },
  },
  plugins: [],
};
