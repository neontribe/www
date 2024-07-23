import React from 'react'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

import Container from '../../components/Container'
import Text from '../../components/Text'


import {
  c_SECONDARY_BACKGROUND,
  c_TEXT_DARK,
  c_CALL_TO_ACTION_HOVER,
  fontSizes
} from '../../theme'


import tribeArcs from '../../components/tribeArcs.svg'

const Statistic = ({ statistic }) => (
  <div className="statistic">
    <img src={tribeArcs} alt="arc icon" height={107} width={84} />
    <Text weight="bold" size="normal">
      <p>{statistic}</p>
    </Text>

    <style jsx>{`
      .statistic {
        background-color: ${c_SECONDARY_BACKGROUND};
        color: ${c_TEXT_DARK};
        margin: 2rem 0;
        height: fit-content;
        padding: 1rem;
        display: flex;
        max-width: 300px;
        width: 100%;
        gap: 20px;
        border-radius: 0 0 20px 0;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>
)

const RenderCaseStudy = ({
  introduction,
  result,
  whatWeDid,
  conclusion,
  statistic,
  challenge,
}) => {
  const renderContent = (content) =>
    remark().use(recommended).use(remarkHtml).processSync(content).toString()

  const sections = [
    { title: null, content: introduction },
    { title: 'Challenge', content: challenge },
    { title: 'Result', content: result },
    { title: 'What we did', content: whatWeDid },
    { title: null, content: conclusion },
  ]

  return (
    <article className="case-study">
      {sections.map(
        (section) =>
          section.content && (
            <section>
              <Container flex={false} restrictWidth={true}>
                {section.title && (
                  <Text size="medium">
                    <h2>{section.title}</h2>
                  </Text>
                )}

                <div
                  dangerouslySetInnerHTML={{
                    __html: renderContent(section.content),
                  }}
                />
              </Container>

              {statistic && section.title === 'Result' && (
                <Statistic statistic={statistic} />
              )}
            </section>
          )
      )}

      <style jsx global>{`
        .case-study {
          color: ${c_TEXT_DARK};
        }

        .case-study * + * {
          margin-top: 1rem;
        }

        .case-study section {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .case-study h2 {
          font-size: ${fontSizes['medium']};
        }

        .case-study blockquote {
          position: relative;
          margin-left: 5rem;
          padding: 1rem 0;
        }

        .case-study blockquote::before {
          content: url('/blueArc.svg');
          top: 50%;
          bottom: 50%;

          position: absolute;
          left: -80px;
          align-self: center;
        }

        .case-study a {
          text-decoration: underline;
          color: #0000ee;
        }

        .case-study a:hover {
          color: ${c_CALL_TO_ACTION_HOVER};
        }

        @media (max-width: 860px) {
          .case-study blockquote {
            margin: 7rem 0 0 !important;
          }

          .case-study blockquote::before {
            transform: rotate(90deg);
            left: 50%;
            right: 50%;
            top: -130px;
            bottom: auto;
          }
        }
      `}</style>
    </article>
  )
}
export default RenderCaseStudy
