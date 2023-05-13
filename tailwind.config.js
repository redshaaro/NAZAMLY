module.exports = {
 
    important: true,

  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.{js,ts,jsx,tsx}',
  ],
  
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
  plugins: [
  
  ],
}
