module.exports = {
  siteMetadata: {
    defaultTitle: 'Welcome',
    siteUrl: 'https://www.neontribe.co.uk',
    siteName: 'Neontribe',
    titleTemplate: '%s | Neontribe',
    description:
      'Neontribe is a digital agency. We learn from users, build something small, then measure how that’s helped. We hit deadlines, and make best use of your budget.',
    image: '/site-meta-image.png',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/data/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `case-studies`,
        path: `${__dirname}/src/data/case-studies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tribers`,
        path: `${__dirname}/src/data/tribers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/data/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1020,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: 'GTM-TVPPHS2',
    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#561dee',
        theme_color: '#561dee',
        display: 'minimal-ui',
        icon: './src/arcs.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
