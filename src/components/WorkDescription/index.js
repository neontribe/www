import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image/withIEPolyfill'
import ShimlessImg from 'gatsby-image'
import css from 'styled-jsx/css'

import { breakpoint, c_NEON_PURPLE, c_NAV_ACTIVE } from '../../theme'
import ConstrainedWidth from '../Layout/ConstrainedWidth'
import H from '../Heading'
import Section from '../Section'
import Text from '../Text'
import VerticalSpacing from '../VerticalSpacing'
import ProblemSolution from './ProblemSolution'
import Content from './Content'

const imageStyles = css.resolve`
  @media (${breakpoint('md')}) {
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`

const WorkDescription = ({
  id,
  title,
  client,
  fluid,
  problem,
  solution,
  caseStudy,
}) => (
  <section id={id}>
    <ConstrainedWidth>
      <div className="white-background">
        <Content>
          <Content.Name>
            <Text size="normal">
              <div className="leaf">
                <h2 className="special-font-case">{client}</h2>
              </div>
            </Text>
          </Content.Name>
          <VerticalSpacing size={20} />

          <Content.Title>
            <div className="title">
              <Text size="medium" color="black" weight={700}>
                <H>{title}</H>
              </Text>
            </div>
            <VerticalSpacing size={5} />
            <Content.Image>
              <Img className={imageStyles.className} fluid={fluid} />
            </Content.Image>

            {caseStudy && (
              <>
                <VerticalSpacing size={2} />
                <Text
                  color={c_NEON_PURPLE}
                  size="normal"
                  weight="400"
                  maxCharacter="45ch"
                >
                  <a href={caseStudy} className="case-study-link">
                    More about our work with {client}
                  </a>
                </Text>
              </>
            )}
          </Content.Title>

          <Content.Description>
            <Section>
              <Section>
                <ProblemSolution problem={problem} solution={solution} />
              </Section>
            </Section>
          </Content.Description>
        </Content>
      </div>
    </ConstrainedWidth>

    {imageStyles.styles}

    <style jsx>{`
      .image {
        height: 100%;
        max-height: 200px;
      }
      .white-background {
        background-color: white;
        border-radius: 0 0 38px 0;
      }

      .title {
        max-width: 45ch;

        display: inline-flex;
        align-items: center;
        line-height: 1.5;
      }

      .leaf {
        background-color: #561dee;
        margin-bottom: 1rem;
        padding: 12px 24px 13px 21px;
        float: left;
        font-size: 22px;
        max-width: 60ch;
        border-radius: 0 0 38px 0;
        display: inline-block;
      }

      .case-study-link {
        text-decoration: underline;
      }
      .case-study-link:hover {
        color: ${c_NAV_ACTIVE};
      }

      .special-font-case {
        font-family: muli, sans-sarif;
        font-weight: 700;
      }

      @media (max-width: 860px) {
        .title {
          max-width: 100%;
        }
      }
    `}</style>
  </section>
)

WorkDescription.propTypes = {
  fluid: ShimlessImg.propTypes.fluid,
  image: PropTypes.node,
  imagePosition: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.node,
  subtitle: PropTypes.node,
  problem: PropTypes.node,
  solution: PropTypes.node,
}

export { default as WorkSummary } from './WorkSummary'
export default WorkDescription
