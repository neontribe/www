import React from 'react'
import { graphql } from 'gatsby'
import { distanceInWordsToNow, parse } from 'date-fns'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import ContactFooter from '../components/Layout/ContactFooter'
import VerticalSpacing from '../components/VerticalSpacing'
import PageMeta from '../components/PageMeta'
import Text from '../components/Text'
import RenderContent from '../components/RenderContent'
import Top from '../components/Top'
import BlueText from '../components/BlueText'
import Container from '../components/Container'
import arcs from '../components/blog-page-arcs.svg'
import logo from '../components/logo.svg'
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
          <ConstrainedWidth paddingBottom="0">
            <Container justifyContent="space-between" projectFlex="column">
              <div className="potential">
                <h1>
                  <Text size="larger" color="#48e9ce" maxCharacter="20ch">
                    {title}
                  </Text>
                </h1>

                <VerticalSpacing size={3} />
                <Text weight={700}>
                  {' '}
                  <h2>
                    <PublishedDate date={parse(published_at)} />{' '}
                    <address>By {author_name}</address>
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

        <div className="blog-post-container">
          <div className="text-padding">
            <RenderContent htmlAst={htmlAst} />
          </div>
        </div>
      </article>
      <ContactFooter background="#561dee">
        <ConstrainedWidth paddingTop="2rem">
          <Container justifyContent="space-between">
            <div>
              <img className="logo" src={logo} alt="Neontribe" />
            </div>
            <Text size="normal">Privacy policy</Text>
          </Container>
        </ConstrainedWidth>
      </ContactFooter>
      <style jsx>{`
        .potential {
          padding-top: 1rem;
        }
        .logo {
          height: 1.5rem;
          width: 100%;
        }
        .blog-post-container {
          background-color: white;
          width: 80%;
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        .text-padding {
          padding-left: 24%;
        }
      `}</style>
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
