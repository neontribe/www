const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { fields: { sourceName: { eq: "blog-posts" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
            fields {
              sourceName
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
// Support IE11 when running gatsby develop
exports.onCreateWebpackConfig = function onCreateWebpackConfig({
  actions,
  stage,
  loaders,
}) {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hot-loader/,
            use: [loaders.js()],
          },
        ],
      },
    })
  }
}
