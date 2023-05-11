module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
       'lowerhero': "url('/background12.jpg')",
       'regbg': "url('/background14.jpg')",
       'signinbg': "url('/background16.jpg')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
