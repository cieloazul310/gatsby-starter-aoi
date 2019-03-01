const teal = require('@material-ui/core/colors/teal').default;
const deepOrange = require('@material-ui/core/colors/deepOrange').default;

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Typescript App Shell`,
    description: 'A GatsbyJS starter using Material Design written with TypeScript.',
    author: {
      name: 'cieloazul310'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: teal,
            secondary: deepOrange
          },
          typography: {
            useNextVariants: true
          }
        }
      },
    },
  ],
}
