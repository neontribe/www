/**
 * Gatsby Configuration
 *
 * Serves as the main configuration file for our Gatsby install.
 *
 * Based on example config provided here: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress#how-to-use
 */

/**
 * If we're not in production then we'll use now-env
 * This reads env secrets and vars from:
 * - now-secrets.json => env vars which are defined as now.sh secrets.
 * - now-required.json => env vars (including sectures) which are required for program to function.
 */
if (process.env.NODE_ENV !== 'production') {
  require('now-env')
}

module.exports = {
  siteMetadata: {
    title: 'Neontribe',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.WORDPRESS_BASE_URL || 'neontribeweb.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: true,
        acfOptionPageIds: [],
        auth: {
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
          wpcom_user: process.env.WORDPRESS_USER,
          wpcom_pass: process.env.WORDPRESS_PASSWORD,
        },
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 10,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/media',
          '**/tags',
          '**/users',
        ],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
  ],
}
