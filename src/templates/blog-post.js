import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'
import { distanceInWordsToNow } from 'date-fns'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import { ExternalLink } from '../components/Link'
import VerticalSpacing from '../components/VerticalSpacing'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Heading,
    h2: Heading,
    p: Paragraph,
    a: ExternalLink,
  },
}).Compiler

const UpdatedDate = ({ date }) => {
  const updated = distanceInWordsToNow(new Date(date), {
    addSuffix: true,
  })

  return (
    <Heading level={2} size="small">
      Updated <time datetime={date}>{updated}</time>
    </Heading>
  )
}

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark

  return (
    <Layout>
      <ConstrainedWidth>
        <VerticalSpacing size={6} />
        <Heading level={1} size="xlarge">
          {frontmatter.title}
        </Heading>
        <VerticalSpacing size={2} />
        <UpdatedDate date={frontmatter.updated_at} />
        <VerticalSpacing size={8} />
        {renderAst(htmlAst)}
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
        updated_at
      }
    }
  }
`
