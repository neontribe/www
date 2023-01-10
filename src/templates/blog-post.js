import React from 'react'
import { graphql } from 'gatsby'
import { distanceInWordsToNow, parse } from 'date-fns'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import VerticalSpacing from '../components/VerticalSpacing'
import PageMeta from '../components/PageMeta'
import Text from '../components/Text'
import RenderContent from '../components/RenderContent'

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
        title={title}
        publishedDate={parse(published_at)}
        modifiedDate={parse(updated_at)}
      />

      <ConstrainedWidth fullWidth={false}>
        <article>
          <header>
            <Text size="large" weight={700} align="center" hyphenation>
              <h1>{title}</h1>
            </Text>

            <VerticalSpacing size={4} />

            <Text weight={700}>
              <address>By {author_name}</address>

              <VerticalSpacing size={2} />

              <PublishedDate date={parse(published_at)} />
            </Text>

            <VerticalSpacing size={4} />
          </header>

          <RenderContent htmlAst={htmlAst} />
        </article>
      </ConstrainedWidth>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
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
