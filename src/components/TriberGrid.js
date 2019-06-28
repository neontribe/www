import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash.get'
import TribeMember from './TribeMember'
import RenderContent from './RenderContent'
import { GUTTER_PX, breakpoint } from '../theme'

const makeArrayOfLength = len => Array.apply(null, Array(len))

const TriberGridComponent = ({ tribers }) => (
  <div className="triber-grid">
    {tribers.nodes.map(triber => (
      <div className="triber-container" key={triber.frontmatter.name}>
        <div className="triber-sizer">
          <TribeMember
            fluid={get(triber, 'frontmatter.image.childImageSharp.fluid')}
            name={triber.frontmatter.name}
            headingLevel={2}
            skills={triber.frontmatter.words}
            bio={<RenderContent type="secondary" htmlAst={triber.htmlAst} />}
          />
        </div>
      </div>
    ))}
    {/* Make an odd number appear */}
    {makeArrayOfLength(3 - (tribers.nodes.length % 3)).map((undef, i) => (
      <div className="triber-container" key={i}>
        <div className="triber-sizer" />
      </div>
    ))}
    <style jsx>{`
      .triber-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 ${GUTTER_PX}px;
        margin-bottom: -${GUTTER_PX * 5}px;
      }

      .triber-sizer {
        width: 300px;
        height: 520px;
      }

      .triber-container {
        margin-bottom: ${GUTTER_PX * 5}px;
      }

      @media (${breakpoint('md')}) {
        .triber-grid {
          justify-content: space-between;
        }
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
            }
          }
        }
      }
    `}
    render={data => <TriberGridComponent tribers={data.tribers} />}
  />
)
