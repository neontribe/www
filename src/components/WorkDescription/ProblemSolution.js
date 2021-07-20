import React from 'react'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

import H from '../Heading'
import VerticalSpacing from '../VerticalSpacing'
import Text from '../Text'

const Content = props => (
  <>
    <div className="content" {...props} />
    <style jsx global>{`
      .content * + * {
        margin-top: 1.5em;
      }

      .content li + li {
        margin-top: 1em;
      }

      .content li {
        line-height: 1.5;
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
      <Text size="normal" weight={700}>
        <H>Challenges</H>
      </Text>

      <VerticalSpacing size={1} />

      <p>{problem}</p>

      {solution && (
        <>
          <VerticalSpacing size={2} />
          <Text size="normal" weight={700}>
            <H>How we helped</H>
          </Text>
          <VerticalSpacing size={1} />

          <Content
            className="content"
            dangerouslySetInnerHTML={{ __html: solution }}
          />
        </>
      )}
    </>
  )
}
