/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        golos: "'Golos Text', sans-serif;",
        poppins: "'Poppins', sans-serif;",
        nunito: "'Nunito', 'sans-serif'",
        lexend: "'Lexend Deca', sans-serif;",
        inter: "'Inter', sans-serif;"
      },
      colors: {
        mateblack: '#171717'
      },
      scale: {
        200: '2'
      },
      spacing: {
        0.5: '0.125rem',
        88: '22rem',
        112: '28rem',
        128: '32rem'
      },
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: {
        texture: "url('https://images.unsplash.com/photo-1520699514109-b478c7b48d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9pc2UlMjB0ZXh0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80')",
      }
    },
  },
  plugins: [],
}
