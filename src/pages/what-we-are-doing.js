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
import BlueText from '../components/BlueText'
import VerticalSpacing from '../components/VerticalSpacing'
import WorkDescription from '../components/WorkDescription'
import { ExternalLink } from '../components/Link'
import PageMeta from '../components/PageMeta'

import Container from '../components/Container'
import Top from '../components/Top'
import circles from '../components/circle-progression.png'

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
    <Top>
      <ConstrainedWidth>
        <BlueText size="larger" color="#48e9ce">
          <h1>Explore our projects</h1>
        </BlueText>

        <Container align="center">
          <Text size="normal">
            <p>
              Neontribe help people provide better digital services. We work
              with you to{' '}
            </p>
            <p>
              understand your users' needs and we produce digital tools
              including code
            </p>
            <p> content and design </p>
          </Text>

          <Container paddingBottom="0.5rem" paddingRight="2rem">
            <img src={circles} height={128} width={277} />{' '}
          </Container>
        </Container>

        <VerticalSpacing size={6} />
        <Text>
          <p>Browse our favourite projects to find out more</p>
        </Text>
      </ConstrainedWidth>
    </Top>
    <VerticalSpacing size={10} />

    <VerticalSpacing size={10} />

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
                  client
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
        render={(data) => {
          return data.projects.nodes.map((project, index) => (
            <React.Fragment key={project.frontmatter.title}>
              {index !== 0 ? (
                <>
                  <VerticalSpacing size={8} />

                  <VerticalSpacing size={8} />
                </>
              ) : null}

              <WorkDescription
                id={slugify(project.frontmatter.title, '-')}
                fluid={project.frontmatter.image.childImageSharp.fluid}
                title={project.frontmatter.title}
                client={project.frontmatter.client}
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
