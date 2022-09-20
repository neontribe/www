import React from 'react'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

import H from '../Heading'
import VerticalSpacing from '../VerticalSpacing'
import Text from '../Text'

const Content = (props) => (
  <>
    <div className="content" {...props} />
    <style jsx global>{`
      .content * + * {
        margin: 0;
        padding: 0;
        border: none;
      }

      .content li + li {
      }

      .content ul {
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        white-space: normal;
      }

      .content li {
        line-height: 1.5;
        list-style: none;
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

export default ({ problem, solution }) => {
  solution = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(solution)
    .toString()

  return (
    <>
      <Text size="normal" color="#561dee" weight={700}>
        <H>Challenges</H>
      </Text>

      <VerticalSpacing size={0.5} />

      <p className="challenge">{problem}</p>

      {solution && (
        <>
          <VerticalSpacing size={2} />
          <Text size="normal" color="#561dee" weight={700}>
            <H>How we helped</H>
          </Text>
          <VerticalSpacing size={1} />

          <Content
            className="content"
            dangerouslySetInnerHTML={{ __html: solution }}
          />
        </>
      )}
      <style jsx>{`
        .challenge {
          max-width: 60ch;
          font-size: 18px;
          line-height: 1.5;
        }
      `}</style>
    </>
  )
}
