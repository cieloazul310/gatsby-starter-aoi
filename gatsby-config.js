module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Typescript App Shell`,
    description: 'A GatsbyJS starter using Material Design written with TypeScript.',
    author: {
      name: 'cieloazul310'
    }
  },
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    },
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`
  ]
};
