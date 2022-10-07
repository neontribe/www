import React from 'react'
import slugify from 'slugify'
import Malarquee from 'react-malarquee'
import { StaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'
import ContactFooter from '../components/Layout/ContactFooter'
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
import ImageContainer from '../components/imageContainer'
import Top from '../components/Top'
import circles from '../components/circle-progression.png'
import logo from '../components/logo.svg'
import castLogo from '../data/funders/cast-logo.png'
import comicReliefLogo from '../data/funders/comic-relief-logo.png'
import mhfLogo from '../data/funders/mhf-logo.png'
import phfLogo from '../data/funders/PHF-logo.jpg'
import StyledLink from '../components/Button'
import Arcs from '../components/join.svg'
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

        <Container align="center" justifyContent="space-between">
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

          <Container
            paddingBottom="0.5rem"
            paddingRight="2rem"
            justify-content="space-between"
          >
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
                  fund
                  budget
                  timescale
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
                fund={project.frontmatter.fund}
                budget={project.frontmatter.budget}
                timescale={project.frontmatter.timescale}
              />
            </React.Fragment>
          ))
        }}
      />
    </Section>

    <VerticalSpacing size={10} />

    <ConstrainedWidth paddingLeft="2.4rem">
      <Text size="large" color="black">
        <H>Get in touch</H>
      </Text>
      <VerticalSpacing size={3} />
      <Container>
        <div>
          <Text size="normal" color="black" maxCharacter="49ch">
            Filler copy- why/ when they should get in touch/ when to expect a
            reply- do we have a multiple ways to contact block here or stick
            with just the email funnel?
          </Text>

          <VerticalSpacing size={5} />

          <StyledLink
            connect="mailto:hello@neontribe.co.uk"
            background="#5600ee"
            border_color="#5600ee"
          >
            Email: hello@neontribe.co.uk
          </StyledLink>
        </div>
        <ImageContainer paddingLeft="10rem" paddingBottom="4rem">
          <img src={Arcs} height={136} width={191} />
        </ImageContainer>
      </Container>
      <Text size="medium">
        <ExternalLink href="mailto:hello@neontribe.co.uk">
          hello@neontribe.co.uk
        </ExternalLink>
      </Text>
    </ConstrainedWidth>
    <ContactFooter background="#561dee">
      <ConstrainedWidth paddingTop="2rem">
        <Container justifyContent="space-between">
          <div>
            <img className="logo" src={logo} alt="Neontribe" />
          </div>
          <Text size="normal">Privacy policy</Text>
        </Container>
      </ConstrainedWidth>
    </ContactFooter>

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
