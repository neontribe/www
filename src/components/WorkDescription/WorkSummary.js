import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image/withIEPolyfill';
import ShimlessImg from 'gatsby-image';
import css from 'styled-jsx/css';

import { breakpoint } from '../../theme';
import ConstrainedWidth from '../Layout/ConstrainedWidth';
import H from '../Heading';
import Text from '../Text';
import ProblemSolution from './ProblemSolution';
import Content from './Content';
import VerticalSpacing from '../VerticalSpacing';
import Section from '../Section';

const imageStyles = css.resolve`
  @media (${breakpoint('md')}) {
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`;

const WorkSummary = ({ title, fluid, problem }) => {
  return (
    <div>
      <ConstrainedWidth>
        <Content>
          <VerticalSpacing size={2} />

          <Content.Title>
            <Text size="medium" weight={700}>
              <H>{title}</H>
            </Text>
          </Content.Title>

          <Content.Image>
            <Img className={imageStyles.className} fluid={fluid} />
          </Content.Image>

          <Content.Description>
            <Section>
              <ProblemSolution problem={problem} />
            </Section>
          </Content.Description>
        </Content>
      </ConstrainedWidth>

      {imageStyles.styles}
    </div>
  );
};

WorkSummary.propTypes = {
  fluid: ShimlessImg.propTypes.fluid,
  title: PropTypes.node,
  problem: PropTypes.node,
};

export default WorkSummary;
