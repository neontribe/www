import React from 'react'
import slugify from 'slugify'
import Malarquee from 'react-malarquee'
import { StaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import H from '../components/Heading'
import Section from '../components/Section'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import WorkDescription from '../components/WorkDescription'
import { ExternalLink } from '../components/Link'
import PageMeta from '../components/PageMeta'
import Divider from '../components/Divider'

import castLogo from '../data/funders/cast-logo.png'
import comicReliefLogo from '../data/funders/comic-relief-logo.png'
import mhfLogo from '../data/funders/mhf-logo.png'
import phfLogo from '../data/funders/PHF-logo.jpg'

const collaborationsMap = [
  { id: 'cast', src: castLogo, alt: 'Cast' },
  { id: 'comic-relief', src: comicReliefLogo, alt: 'Comic Relief' },
  { id: 'mhf', src: mhfLogo, alt: 'Mental Health Foundation' },
  { id: 'phf', src: phfLogo, alt: 'Paul Hamlyn Foundation' },
]

const WhatWeAreDoingPage = () => (
  <Layout>
    <PageMeta
      title="What we do"
      description="Neontribe is a digital agency. We research for context. We design for use. We code to completion. We test to exhaustion. Then we engineer enhancement."
    />

    <ConstrainedWidth>
      <Text size="large" align="center">
        <h1>What we do</h1>
      </Text>

      <VerticalSpacing size={4} />

      <Text size="medium">
        <p>
          Neontribe has a national reputation for our work in tech-for-good, and
          an international reputation in travel and tourism. Our work identifies
          the issues organisations have and finds ways to help them out. Our
          design and development focuses on the people those organisations work
          with, their situations and stories.
        </p>
      </Text>
    </ConstrainedWidth>

    <VerticalSpacing size={10} />

    <div className="carousel">
      <Malarquee fill hoverToPause rate={25}>
        <div className="logos">
          {collaborationsMap.map(({ id, ...item }) => (
            <img
              key={id}
              className={classNames('logo', id)}
              {...item}
              alt={item.alt || ''}
            />
          ))}
        </div>
      </Malarquee>
    </div>

    <VerticalSpacing size={10} />

    <ConstrainedWidth>
      <Text size="large">
        <H withArcs>Recent Projects</H>
      </Text>
    </ConstrainedWidth>

    <VerticalSpacing size={4} />

    <Section>
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
            <React.Fragment key={project.frontmatter.title}>
              {index !== 0 ? (
                <>
                  <VerticalSpacing size={8} />
                  <Divider />
                  <VerticalSpacing size={8} />
                </>
              ) : null}

              <WorkDescription
                id={slugify(project.frontmatter.title, '-')}
                fluid={project.frontmatter.image.childImageSharp.fluid}
                title={project.frontmatter.title}
                subtitle={project.frontmatter.subtitle}
                imagePosition={index % 2 === 0 ? 'left' : 'right'}
                problem={project.frontmatter.problem}
                solution={project.frontmatter.solution}
              />
            </React.Fragment>
          ))
        }}
      />
    </Section>

    <VerticalSpacing size={10} />

    <ConstrainedWidth>
      <Text align="center">
        <Text size="large">
          <H>Get in touch</H>
        </Text>

        <VerticalSpacing size={1} />

        <Text size="medium">
          <ExternalLink href="mailto:hello@neontribe.co.uk">
            hello@neontribe.co.uk
          </ExternalLink>
        </Text>
      </Text>
    </ConstrainedWidth>

    <style jsx>{`
      .carousel {
        margin: 0 -2rem;
      }

      .logos {
        display: flex;
        align-items: center;
      }

      .logo {
        height: 4rem;
        margin: 0 2rem;
      }

      .logo.comic-relief {
        height: 8rem;
      }

      .logo.phf {
        height: 5rem;
      }
    `}</style>
  </Layout>
)

export default WhatWeAreDoingPage
