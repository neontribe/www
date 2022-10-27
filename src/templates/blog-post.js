import React from 'react'
import { graphql } from 'gatsby'
import { distanceInWordsToNow, parse } from 'date-fns'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import VerticalSpacing from '../components/VerticalSpacing'
import PageMeta from '../components/PageMeta'
import Text from '../components/Text'
import RenderContent from '../components/RenderContent'
import Top from '../components/Top'
import BlueText from '../components/BlueText'
import Container from '../components/Container'
import arcs from '../components/blog-page-arcs.svg'
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
      <article>
        <Top>
          <ConstrainedWidth>
            <Container
              align="center"
              justifyContent="space-between"
              projectFlex="column"
            >
              <div>
                <BlueText size="larger" color="#48e9ce">
                  {title}
                </BlueText>
                <Text weight={700}>
                  <h2>
                    {' '}
                    <address>By {author_name}</address>
                    <PublishedDate date={parse(published_at)} />{' '}
                  </h2>
                </Text>

                <VerticalSpacing size={5} />
              </div>

              <div className="heading-arc">
                <img src={arcs} height={383} width={177} />
              </div>
            </Container>
          </ConstrainedWidth>
        </Top>

        <ConstrainedWidth fullWidth={false}>
          <header>
            <Text size="large" weight={700} align="center" hyphenation></Text>

            <VerticalSpacing size={4} />

            <VerticalSpacing size={4} />
          </header>

          <RenderContent htmlAst={htmlAst} />
        </ConstrainedWidth>
      </article>
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
