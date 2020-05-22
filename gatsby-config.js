const blue = require('@material-ui/core/colors/blue').default;

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Aoi`,
    description: 'A GatsbyJS starter using Material Design written with TypeScript.',
    keywords: ['Gatsby', 'Gatbsy Starter', 'TypeScript', 'Material-UI'],
    lang: '',
    siteUrl: 'https://gatsby-starter-aoi.netlify.com',
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
      youtube: 'hollytube0310',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-aoi-top-layout',
      options: {
        siteId: 'gatsby-starter-aoi',
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
    },
    /*{
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://cieloazul310.github.io',
      },
    },*/
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
      },
    },
    `gatsby-plugin-graphql-codegen`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Aoi`,
        short_name: `Gatsby Aoi`,
        //scope: '/gatsby-starter-aoi/',
        start_url: `/`,
        background_color: blue[50],
        theme_color: blue[600],
        display: `standalone`,
        icon: `src/assets/icon360.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-74683419-3',
      },
    },
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
  ],
};
