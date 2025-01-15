// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '320px', // from 0 to 320px its mobile size
        'tablet': '600px', //from 321px to 600px its tablet size
        'bigtablet': '768px',
        'laptop':'1024px'
      }
    },
  },
  plugins: [],
}