module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Aoi`,
    description: 'A GatsbyJS starter using Material Design written with TypeScript.',
    keywords: ['Gatsby', 'Gatbsy Starter', 'TypeScript', 'Material-UI'],
    lang: '',
    siteUrl: 'https://cieloazul310.github.io/gatsby-starter-aoi/',
    author: 'cieloazul310',
    social: {
      mail: 'mail@cieloazul310.com',
      twitter: 'cieloazul310',
      github: 'cieloazul310',
      facebook: 'hollyhock.official',
      gitlab: 'cieloazul310',
      linkedin: 'cieloazul310',
      medium: 'cieloazul310',
      pocket: 'cieloazul310',
      tumblr: 'cieloazul310',
      instagram: 'mito.hollyhock.official',
      vimeo: 'cieloazul310',
      youtube: 'hollytube0310'
    }
  },
  pathPrefix: '/gatsby-starter-aoi',
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://cieloazul310.github.io'
      }
    },
    `gatsby-plugin-graphql-codegen`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Aoi`,
        short_name: `Gatsby Aoi`,
        scope: '/gatsby-starter-aoi/',
        start_url: `/`,
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
