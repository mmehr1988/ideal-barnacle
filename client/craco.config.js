// craco.config.js is a file that is used to configure the CRA webpack config.
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
