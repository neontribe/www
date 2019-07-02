module.exports = {
  siteMetadata: {
    defaultTitle: 'Welcome',
    siteUrl: 'https://www.neontribe.co.uk',
    siteName: 'Neontribe',
    titleTemplate: '%s · Neontribe',
    description: 'Neontribe User Centered Design and Development',
    image: '/static/site-meta-image.png',
  },
  plugins: [
    'gatsby-remark-source-name',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: './src/pinkhexagon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-jsx',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        // TODO: do this with NODE_ENV
        resolveEnv: () =>
          process.env.NOW_GITHUB_COMMIT_REF === 'master'
            ? 'production'
            : 'development',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', disallow: ['/prototype/'] }],
          },
        },
      },
    },
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
