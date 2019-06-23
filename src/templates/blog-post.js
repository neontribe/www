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
import PageMeta from '../components/PageMeta'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Heading,
    h2: Heading,
    p: Paragraph,
    a: ExternalLink,
  },
}).Compiler

const PublishedDate = ({ date }) => {
  const published = distanceInWordsToNow(date, {
    addSuffix: true,
  })

  return (
    <Heading level={2} size="small">
      Published <time dateTime={date}>{published}</time>
    </Heading>
  )
}

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark

  const { title, published_at, updated_at } = frontmatter

  return (
    <Layout>
      <PageMeta
        type="article"
        title={title}
        publishedDate={new Date(published_at)}
        modifiedDate={new Date(updated_at)}
      />
      <ConstrainedWidth>
        <VerticalSpacing size={6} />
        <Heading level={1} size="xlarge">
          {title}
        </Heading>
        <VerticalSpacing size={2} />
        <PublishedDate date={new Date(published_at)} />
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
        published_at
        updated_at
      }
    }
  }
`
