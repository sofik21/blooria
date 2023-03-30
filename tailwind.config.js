/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {

    //   --------fontFamily---------
    fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'poppins': ['Poppins','sans-serif'],
      },
  
    extend: {
        boxShadow: {
            'box-shadow': '0 3px 10px rgb(84 82 82 / 11%)',
        },
          colors: {
            'primary': '#FFAF29',
            'gray': {
                DEFAULT: '#141C3A'
            }
        }, 
    },

  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
