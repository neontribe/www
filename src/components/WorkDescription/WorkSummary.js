import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import css from 'styled-jsx/css'

import {
  breakpoint,
  CUT_CORNER_PX,
  c_SECONDARY_BACKGROUND,
  c_PRIMARY_BACKGROUND,
} from '../../theme'
import ConstrainedWidth from '../Layout/ConstrainedWidth'
import Heading from '../Heading'
import Text from '../Text'
import ProblemSolution from './ProblemSolution'
import Content from './Content'
import VerticalSpacing from '../VerticalSpacing'

const imageStyles = css.resolve`
  @media (${breakpoint('md')}) {
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`

const WorkSummary = ({ alternate, level, title, fluid, problem }) => {
  // Make sure the text is consistently styled
  const T = props => (
    <Text gutter={0} {...props} type={alternate ? 'secondary' : 'primary'} />
  )

  const stackedContentStyles = css.resolve`
    /* HACK: make sure the background of the stacked content component in Content is correctly styled */
    .stacked-content {
      background: linear-gradient(
        -45deg,
        transparent ${CUT_CORNER_PX}px,
        ${alternate ? c_SECONDARY_BACKGROUND : c_PRIMARY_BACKGROUND}
          ${CUT_CORNER_PX}px
      );
    }
  `

  return (
    <div>
      <ConstrainedWidth>
        <Content
          alternate={alternate}
          stackedContentClassName={stackedContentStyles.className}
        >
          <Content.Title>
            <Heading level={level}>
              <VerticalSpacing size={2} />
              <div className="content-wrapper">
                <T size="medium" heavy>
                  {title}
                </T>
              </div>
            </Heading>
          </Content.Title>
          <Content.Image>
            <Img className={imageStyles.className} fluid={fluid} />
          </Content.Image>
          <Content.Description>
            <div className="content-wrapper">
              <ProblemSolution
                alternate={alternate}
                level={level + 1}
                problem={problem}
              />
            </div>
          </Content.Description>
        </Content>
      </ConstrainedWidth>
      {imageStyles.styles}
      {stackedContentStyles.styles}
      <style jsx>{`
        @media (${breakpoint('md')}) {
          .content-wrapper {
            /* use the cut corner dimensions so that the cut corner on the content never cuts into the words */
            padding-left: ${alternate ? 0 : CUT_CORNER_PX}px;
            padding-right: ${alternate ? CUT_CORNER_PX : 0}px;
          }
        }
      `}</style>
    </div>
  )
}

WorkSummary.propTypes = {
  alternate: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  fluid: Img.propTypes.fluid,
  title: PropTypes.node,
  problem: PropTypes.node,
}

export default WorkSummary
