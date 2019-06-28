import React from 'react'
import slugify from 'slugify'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import HexagonGrid from '../components/HexagonGrid'
import Hexagon from '../components/Hexagon'
import SquiggleSeparator from '../components/SquiggleSeparator'
import WorkDescription from '../components/WorkDescription'
import { StaticQuery, graphql } from 'gatsby'
import ExternalLink from '../components/Link'
import castLogo from '../data/funders/cast-logo.png'
import comicReliefLogo from '../data/funders/comic-relief-logo.png'
import mhfLogo from '../data/funders/mhf-logo.png'
import phfLogo from '../data/funders/PHF-logo.png'

const WhatWeAreDoingPage = () => (
  <Layout>
    <ConstrainedWidth>
      <Heading level={1}>
        <div className="centered">
          <Text size="large" weight={500}>
            What we're doing
          </Text>
          <p>
            <Text>
              Neontribe has a national reputation for our work in tech-for-good,
              and an international reputation in travel and tourism. Our work
              identifies the issues organisations have and finds ways to help
              them out. Our design and development focuses on the people those
              organisations work with, their situations and stories
            </Text>
          </p>
        </div>
      </Heading>
    </ConstrainedWidth>

    <SquiggleSeparator></SquiggleSeparator>

    <HexagonGrid rate={25} rows={2}>
      <Hexagon size={80} grey src={castLogo} />
      <Hexagon size={80} grey src={comicReliefLogo} />
      <Hexagon size={80} grey src={mhfLogo} />
      <Hexagon size={80} grey src={phfLogo} />
    </HexagonGrid>

    <SquiggleSeparator />

    <StaticQuery
      query={graphql`
        query {
          projects: allMarkdownRemark(
            filter: { fields: { sourceName: { eq: "projects" } } }
          ) {
            nodes {
              frontmatter {
                title
                problem
                solution
                subtitle
                image {
                  childImageSharp {
                    fluid(maxWidth: 768) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return data.projects.nodes.map((project, index) => (
          <WorkDescription
            alternate={index % 2 === 0}
            key={project.frontmatter.title}
            id={slugify(project.frontmatter.title, '-')}
            fluid={project.frontmatter.image.childImageSharp.fluid}
            level={3}
            title={project.frontmatter.title}
            subtitle={project.frontmatter.subtitle}
            problem={project.frontmatter.problem}
            solution={project.frontmatter.solution}
          />
        ))
      }}
    />
    <SquiggleSeparator />

    <ConstrainedWidth>
      <div className="centered">
        <Heading level={1}>
          <Text size="large" weight={500}>
            Get in touch
          </Text>
        </Heading>

        <VerticalSpacing size={1} />

        <ExternalLink href="mailto:hello@neontribe.co.uk">
          <Text size="medium">hello@neontribe.co.uk</Text>
        </ExternalLink>
      </div>
    </ConstrainedWidth>
    <style jsx>{`
      .centered {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default WhatWeAreDoingPage
