import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import Heading from '../components/Heading'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Heading,
    h2: Heading,
    p: Text,
  },
}).Compiler

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark

  return (
    <Layout>
      <ConstrainedWidth>
        <div>
          <Heading level={1} size="xlarge">
            <Text>{frontmatter.title}</Text>
          </Heading>
          {renderAst(htmlAst)}
        </div>
      </ConstrainedWidth>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`
