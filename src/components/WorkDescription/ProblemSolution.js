import React from 'react'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

import H from '../Heading'
import VerticalSpacing from '../VerticalSpacing'
import Text from '../Text'
import { fontSizes, c_NAV_ACTIVE, c_NEON_PURPLE } from '../../theme'

const Content = (props) => (
  <>
    <div className="content" {...props} />
    <style jsx global>{`
      .content {
        font-size: ${fontSizes['normal']};
      }
      .content * + * {
        margin: 0;
        padding: 0;
        border: none;
      }

      .content ul {
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        white-space: normal;
        list-style-position: outside;
      }

      li::marker {
        color: hotpink;
        padding-left: 2rem;
      }

      .content li {
        line-height: 1.5;

        margin-left: 2rem;

        padding: 0;
        margin: 0;
      }

      .content > div > div:not(:first-child) {
        margin-top: 2rem;
      }

      .content a {
        text-decoration: underline;
      }
    `}</style>
  </>
)

export default ({ problem, solution, caseStudy, client }) => {
  solution = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(solution)
    .toString()

  return (
    <>
      <Text size="medium" color="#561dee" weight={700}>
        <H>Challenges</H>
      </Text>

      <VerticalSpacing size={0.5} />

      <p className="challenge">{problem}</p>

      {solution && (
        <>
          <VerticalSpacing size={2} />
          <Text size="medium" color="#561dee" weight={700}>
            <H>How we helped</H>
          </Text>
          <VerticalSpacing size={1} />
          <div className="extra-padding">
            <Content
              className="content"
              dangerouslySetInnerHTML={{ __html: solution }}
            />
          </div>
        </>
      )}

      {caseStudy && (
        <>
          <VerticalSpacing size={2} />
          <div className="case-study-link">
            <a href={caseStudy} className="">
              Learn more about {client}
            </a>
          </div>
        </>
      )}
      <style jsx>{`
        .challenge {
          max-width: 60ch;
          font-size: ${fontSizes['normal']};
          line-height: 1.5;
        }

        .case-study-link {
          text-decoration: bold;
          border-radius: 350px;
          background-color: ${c_NEON_PURPLE};
          font-size: ${fontSizes['normal']};
          color: white;
          font-weight: 600;
          padding: 0.6rem 0.8rem;
          text-wrap: wrap;
          width: fit-content;
          text-align: center;
        }

        .case-study-link:hover {
          background-color: ${c_NAV_ACTIVE};
        }

        .extra-padding {
          padding-left: 1rem;
          font-size: 18px;
        }
      `}</style>
    </>
  )
}
