import React from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'

import {
  breakpoint,
  c_NEON_PURPLE,
  c_NAV_ACTIVE,
  fontSizes,
  PAGE_WIDTH_REM,
} from '../../theme'
import H from '../Heading'
import Section from '../Section'
import Text from '../Text'
import VerticalSpacing from '../VerticalSpacing'
import ProblemSolution from './ProblemSolution'
import Content from './Content'
import { GatsbyImage } from 'gatsby-plugin-image'

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
  image,
  problem,
  solution,
  caseStudy,
}) => (
  <section id={id}>
    <div className="card-container">
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
              <Text color="black" weight={700}>
                <H>{title}</H>
              </Text>
            </div>
            <VerticalSpacing size={5} />
            <Content.Image>
              <GatsbyImage
                className={imageStyles.className}
                alt={title}
                image={image}
              />
            </Content.Image>
          </Content.Title>

          <Content.Description>
            <Section>
              <Section>
                <ProblemSolution
                  problem={problem}
                  solution={solution}
                  caseStudy={caseStudy}
                  client={client}
                />
              </Section>
            </Section>
          </Content.Description>
        </Content>
      </div>
    </div>

    {imageStyles.styles}

    <style jsx>{`
      .card-container {
        width: 100%;
        max-width: ${PAGE_WIDTH_REM};
        margin-left: auto;
        margin-right: auto;
        border-radius: 0 0 38px 0;
        padding-bottom: 2rem;
      }

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
        font-size: 2rem;
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
        text-decoration: bold;
        border-radius: 350px;
        border: solid 3px ${c_NEON_PURPLE};
        color: black;
        font-weight: 600;
        padding: 0.5rem 0.8rem;
      }
      .case-study-link:hover {
        background-color: ${c_NAV_ACTIVE};
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

      @media (max-width: 530px) {
        .title {
          font-size: ${fontSizes['large']};
        }

        .card-container {
          padding-left: 0;
          padding: right;
        }
      }
    `}</style>
  </section>
)

WorkDescription.propTypes = {
  image: PropTypes.shape({
    images: PropTypes.object,
    layout: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  imagePosition: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.node,
  subtitle: PropTypes.node,
  problem: PropTypes.node,
  solution: PropTypes.node,
}

export { default as WorkSummary } from './WorkSummary'
export default WorkDescription
