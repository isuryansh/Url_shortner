/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(https://img.freepik.com/free-photo/digital-art-with-person-looking-city-landscape_23-2151065723.jpg?t=st=1723919620~exp=1723923220~hmac=63c27ce1712bcafdfd916df48c893b0b00d2488e0c8c1523cbd7bfd8e64dff39&w=996)"
      }
    },
  },
  plugins: [],
}