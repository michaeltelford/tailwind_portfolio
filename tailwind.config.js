module.exports = {
  purge: ['./pages/**/*.js'],
  theme: {
    extend: {
      screens: {
        'shopify-xs': '568px',
        'svelte-ml': [{'min': '900px', 'max': '1280px'}],
      },
    },
  },
  variants: {},
  plugins: [],
}
