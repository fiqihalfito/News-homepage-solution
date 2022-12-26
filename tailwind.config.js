/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: {
            orange: "hsl(35, 77%, 62%)",
            red: "hsl(5, 85%, 63%)"
          },
          neutral: {
            offWhite: "hsl(36, 100%, 99%)",
            blue: "hsl(233, 8%, 79%)",
            darkBlue: "hsl(236, 13%, 42%)",
            veryDarkBlue: "hsl(240, 100%, 5%)"
          }
        }
      }
    },
  },
  plugins: [],
}
