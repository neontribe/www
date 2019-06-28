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
        <TribeMember
          fluid={get(triber, 'frontmatter.image.childImageSharp.fluid')}
          name={triber.frontmatter.name}
          headingLevel={2}
          skills={triber.frontmatter.words}
          bio={<RenderContent type="secondary" htmlAst={triber.htmlAst} />}
        />
      </div>
    ))}
    <style jsx>{`
      .triber-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: -${GUTTER_PX * 5}px;
      }

      .triber-container {
        width: 300px;
        height: 520px;
        margin-bottom: ${GUTTER_PX * 5}px;
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
