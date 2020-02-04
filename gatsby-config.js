module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Typescript App Shell`,
    description: 'A GatsbyJS starter using Material Design written with TypeScript.',
    siteUrl: 'https://cieloazul310.github.io/gatsby-starter-typescript-material-ui/',
    author: {
      name: 'cieloazul310'
    }
  },
  pathPrefix: '/gatsby-starter-typescript-material-ui',
  plugins: [
    //'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://cieloazul310.github.io'
      }
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.ts`,
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter TypeScript Material-UI`,
        short_name: `GSTMUI`,
        scope: '/gatsby-starter-typescript-material-ui/',
        start_url: `.`,
        background_color: `#f7f0eb`,
        theme_color: `#009688`,
        display: `standalone`,
        icon: `src/assets/icon360.png`
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-74683419-3'
      }
    },
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
