const withCSS = require('@zeit/next-css')
module.exports = withCSS({
cssModules: true 
})
module.exports = {
    env: {
      baseUrl: 'http://prod-softassessment.herokuapp.com/',
      tokenName: 'Ecom-nRpfanqsQC',
      refreshTokenName: 'Ecom-hlxyDuKTge',
      cartId: 'Cart-xCvQz5I9Ox'
    },
  }
