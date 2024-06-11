import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import get from 'lodash.get';
import TribeMember from './TribeMember';
import RenderContent from './RenderContent';

const CONTAINER_WIDTH = 1020; // px
const COLUMN_HEIGHT = 420; // px
const COLUMN_WIDTH = 260; // px
const MAX_COLUMNS = 3;

const TriberGridComponent = ({ tribers }) => (
  <div className="triber-grid">
    {tribers.nodes.map((triber) => (
      <div key={triber.frontmatter.name}>
        <div className="triber-sizer">
          <TribeMember
            image={get(triber, 'frontmatter.image.childImageSharp.fluid')}
            name={triber.frontmatter.name}
            skills={triber.frontmatter.words}
            bio={
              <RenderContent
                htmlAst={triber.htmlAst}
                components={{
                  // avoid dark background from Text
                  p: (props) => <p {...props} />,
                }}
              />
            }
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

      @supports (display: grid) {
        /* IE11 doesn't support @support, but it supports grid! confusing */
        .triber-grid {
          display: grid;
          grid-gap: 6rem
            ${(CONTAINER_WIDTH - COLUMN_WIDTH * MAX_COLUMNS) /
            (MAX_COLUMNS - 1)}px;
          grid-template-columns: repeat(auto-fill, ${COLUMN_WIDTH}px);
          justify-content: center;
        }
      }

      .triber-sizer {
        width: ${COLUMN_WIDTH}px;
        height: ${COLUMN_HEIGHT}px;
      }
    `}</style>
  </div>
);

export default () => (
  <StaticQuery
    query={graphql`
      query {
        tribers: allMarkdownRemark(
          filter: { fields: { sourceName: { eq: "tribers" } } }
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
    render={(data) => <TriberGridComponent tribers={data.tribers} />}
  />
);
