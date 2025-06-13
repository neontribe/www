const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNode, createNodeField } = actions
  // We only care about MarkdownRemark content.
  if (node.internal.type !== 'MarkdownRemark') {
    return
  }
  const fileNode = getNode(node.parent)

  createNodeField({
    node,
    name: 'sourceName',
    value: fileNode.sourceInstanceName,
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // General function to create pages
  async function createPagesFromSource(sourceName, pathPrefix, templatePath) {
    const template = path.resolve(templatePath)
    const result = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          filter: { fields: { sourceName: { eq: "${sourceName}" } } }
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
        path: `${pathPrefix}/${node.frontmatter.slug}`,
        component: template,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  }

  // Create pages for case studies
  await createPagesFromSource(
    'case-studies',
    '',
    'src/templates/case-study/index.js'
  )

  // Create pages for blog posts
  await createPagesFromSource(
    'blog-posts',
    'blog',
    'src/templates/blog-post.js'
  )
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
