import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash.get'
import TribeMember from './TribeMember'
import RenderContent from './RenderContent'
import { GUTTER_PX, breakpoint } from '../theme'

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
    <style jsx>{`
      .triber-grid {
        display: grid;
        padding: 0 ${GUTTER_PX}px;
        grid-gap: ${GUTTER_PX * 5}px;
        grid-template-columns: repeat(auto-fill, 300px);
        justify-content: center;
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
            }
          }
        }
      }
    `}
    render={data => <TriberGridComponent tribers={data.tribers} />}
  />
)
