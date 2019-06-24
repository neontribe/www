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
    h1: props => <Heading {...props} level={1} size="large" />,
    h2: props => <Heading {...props} level={2} size="medium" />,
    h3: props => <Heading {...props} level={3} size="small" />,
    p: Paragraph,
    a: ExternalLink,
  },
}).Compiler

const PublishedDate = ({ date }) => {
  const published = distanceInWordsToNow(date, {
    addSuffix: true,
  })

  return (
    <span>
      Published <time dateTime={date}>{published}</time>
    </span>
  )
}

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark

  const { title, published_at, updated_at, author_name } = frontmatter

  return (
    <Layout>
      <PageMeta
        type="article"
        title={title}
        publishedDate={new Date(published_at)}
        modifiedDate={new Date(updated_at)}
      />
      <ConstrainedWidth fullWidth={false}>
        <article>
          <VerticalSpacing size={10} />
          <header className="header">
            <Heading level={1} size="xlarge">
              {title}
            </Heading>
            <VerticalSpacing size={5} />
            <address>By {author_name}</address>
            <PublishedDate date={new Date(published_at)} />
          </header>
          <VerticalSpacing size={10} />
          {renderAst(htmlAst)}
        </article>
      </ConstrainedWidth>
      <style jsx>
        {`
          .header {
            text-align: center;
          }
        `}
      </style>
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
        author_name
      }
    }
  }
`
