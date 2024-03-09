/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        accent: "#FF5C00",
        accentDark: "#FF3D00",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
