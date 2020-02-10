import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash.get'
import TribeMember from './TribeMember'
import RenderContent from './RenderContent'
import { GUTTER_PX } from '../theme'

const TriberGridComponent = ({ tribers }) => (
  <div className="triber-grid">
    {tribers.nodes.map(triber => (
      <div className="triber-container" key={triber.frontmatter.name}>
        <div className="triber-sizer">
          <TribeMember
            image={get(triber, 'frontmatter.image.childImageSharp.fluid')}
            grayscaleImage={get(
              triber,
              'frontmatter.grayscaleImage.childImageSharp.fluid'
            )}
            name={triber.frontmatter.name}
            headingLevel={2}
            skills={triber.frontmatter.words}
            bio={<RenderContent type="secondary" htmlAst={triber.htmlAst} />}
            social={triber.frontmatter.social}
          />
        </div>
      </div>
    ))}
    <style jsx>{`
      .triber-grid {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
      }
      .triber-container {
        margin: ${GUTTER_PX}px;
      }

      @supports (display: grid) {
        /* IE11 doesn't support @support, but it supports grid! confusing */
        .triber-grid {
          display: grid;
          grid-gap: ${GUTTER_PX * 5}px;
          grid-template-columns: repeat(auto-fill, 300px);
          justify-content: center;
          margin: 0;
        }
        .triber-container {
          margin: 0;
        }
      }

      .triber-sizer {
        width: 300px;
        height: 520px;
      }
    `}</style>
  </div>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        tribers: allMarkdownRemark(
          filter: {
            fields: { sourceName: { eq: "tribers" } }
            frontmatter: { type: { ne: "story" } }
          }
          sort: { fields: [fileAbsolutePath] }
        ) {
          nodes {
            htmlAst
            frontmatter {
              name
              words
              image {
                childImageSharp {
                  fluid(maxWidth: 768) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              grayscaleImage: image {
                childImageSharp {
                  fluid(maxWidth: 768, grayscale: true) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              social {
                twitter
                github
                youtube
                instagram
                facebook
                linkedin
                twitch
              }
            }
          }
        }
      }
    `}
    render={data => <TriberGridComponent tribers={data.tribers} />}
  />
)
