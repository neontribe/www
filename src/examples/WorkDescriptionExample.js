import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import WorkDescription, { WorkSummary } from '../components/WorkDescription';
import H from '../components/Heading';
import Text from '../components/Text';
import ConstrainedWidth from '../components/Layout/ConstrainedWidth';

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

const WorkDescriptionExample = ({ fluid }) => (
  <div className="work-description">
    <ConstrainedWidth>
      <Text size="medium">
        <H>WorkDescription</H>
      </Text>
    </ConstrainedWidth>

    <WorkSummary
      fluid={fluid}
      title="Helping more young families get fresh fruit and veg"
      problem={loremIpsum}
    />
    <WorkSummary
      fluid={fluid}
      title="Helping more young families get fresh fruit and veg"
      problem={loremIpsum}
    />
    <WorkDescription
      fluid={fluid}
      title="Helping more young families get fresh fruit and veg"
      subtitle="Delivering simple technology for the Rose Voucher scheme"
      problem={loremIpsum}
      solution={loremIpsum}
    />
    <WorkDescription
      fluid={fluid}
      title="Quis nostrud exercitation ullamco laboris nisi u"
      subtitle="Delivering simple technology for the Rose Voucher scheme"
      problem={loremIpsum + ' ' + loremIpsum}
      solution={loremIpsum + ' ' + loremIpsum}
    />
  </div>
);

export default () => (
  <StaticQuery
    query={graphql`
      {
        file(
          relativePath: { eq: "images/arc.jpg" }
          sourceInstanceName: { eq: "projects" }
        ) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <WorkDescriptionExample fluid={data.file.childImageSharp.fluid} />
    )}
  />
);
