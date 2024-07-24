import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import ConstrainedWidth from '../../components/Layout/ConstrainedWidth'
import PageMeta from '../../components/PageMeta'
import PageTop from '../../components/PageTop'
import Container from '../../components/Container'
import RenderCaseStudy from './RenderCaseStudy'
import Img from 'gatsby-image/withIEPolyfill'
import Text from '../../components/Text'
import VerticalSpacing from '../../components/VerticalSpacing'

import {
  c_SECONDARY_BACKGROUND,
  c_TEXT_DARK,
  c_TEXT_LIGHT,
  c_NEON_TEAL,
} from '../../theme'

const CaseStudy = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  const {
    title,
    customer,
    categories,
    statistic,
    description,
    image,
    imageAltText,
    whatWeDid,
    result,
    introduction,
    conclusion,
    challenge,
  } = frontmatter

  return (
    <Layout>
      <PageMeta title={title} description={description} />
      <PageTop bannerPresent>
        <ConstrainedWidth>
          <Container
            justifyContent="space-between"
            mobileFlexDirection="column"
          >
            <Container restrictWidth flex={false}>
              {title && (
                <Text size="xlarge" color={c_TEXT_LIGHT}>
                  <h1>{title}</h1>
                </Text>
              )}

              <VerticalSpacing size={3} />
              {customer && (
                <Text size="medium" weight="bold" color={c_NEON_TEAL}>
                  <p>{customer}</p>
                </Text>
              )}

              {categories && (
                <Text size="medium" color={c_TEXT_LIGHT}>
                  <p>{categories}</p>
                </Text>
              )}
              <VerticalSpacing size={3} />
            </Container>
            {image && (
              <div className="image-container">
                <Img
                  fluid={image.childImageSharp.fluid}
                  objectFit="contain"
                  alt={imageAltText ? imageAltText : ''}
                  style={{ width: '100%', minWidth: '250px', height: '100%' }}
                />
              </div>
            )}
          </Container>
        </ConstrainedWidth>
        <div className="summary-banner">
          <ConstrainedWidth>
            <Container restrictWidth flex={false}>
              <Text size="large" color={c_TEXT_DARK} weight="bold">
                <p>{description}</p>
              </Text>
            </Container>
          </ConstrainedWidth>
        </div>
      </PageTop>

      <VerticalSpacing size={3} />
      <ConstrainedWidth>
        <RenderCaseStudy
          introduction={introduction}
          result={result}
          whatWeDid={whatWeDid}
          conclusion={conclusion}
          statistic={statistic}
          challenge={challenge}
        />
      </ConstrainedWidth>

      <style jsx>{`
        .image-container {
          width: 100%;
          min-height: 650px;
          max-width: 380px;
          align-self: center;
        }

        .summary-banner {
          background-color: ${c_SECONDARY_BACKGROUND};
          padding-top: 2rem;
          ${image ? 'margin-top:-320px;' : ''}
        }

        .summary-banner p {
          width: min(50vw, 650px);
        }

        @media (max-width: 860px) {
          .summary-banner {
            ${image ? 'margin-top:-150px; padding-top: 6rem;' : ''}
          }

          .summary-banner p {
            width: inherit;
          }
          .image-container {
            min-height: initial;
          }
        }

        @media (max-width: 530px) {
          .top {
            padding-top: 0;
          }
        }
      `}</style>
    </Layout>
  )
}

export default CaseStudy

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        description
        slug
        customer
        categories
        statistic
        problem
        introduction
        result
        challenge
        whatWeDid
        conclusion
        image {
          childImageSharp {
            fluid(maxWidth: 380) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAltText
      }
    }
  }
`
