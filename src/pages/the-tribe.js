import React from 'react'
import Arcs from '../components/neontribe-mark.svg'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import H from '../components/Heading'
import ContactFooter from '../components/Layout/ContactFooter'
import Text from '../components/Text'
import { TheTribeBottomParagraph } from '../components/TheTribeParagraphs'
import TriberGrid from '../components/TriberGrid'
import VerticalSpacing from '../components/VerticalSpacing'

import PageMeta from '../components/PageMeta'

import BlueText from '../components/BlueText'
import Container from '../components/Container'
import HireContainer from '../components/Hire-container'
import About from '../components/About-you'
import ImageContainer from '../components/imageContainer'
import ArcContainer from '../components/arcContainer'
import Top from '../components/Top'
import StyledLink from '../components/Button'
import TribeArc from '../components/semi-circle.svg'

import logo from '../components/logo.svg'

const TheTribePage = () => (
  <Layout>
    <PageMeta
      title="The Tribe"
      description="Neontribe is a digital agency. Why neon? It’s the colour of tech. Why tribe? Individuals collaborating, hand-making useful tools that do a job of work."
    />

    <Top>
      <ConstrainedWidth>
        <HireContainer justifyContent="space-between">
          <div className="tribe-info">
            <BlueText size="larger" color="#48e9ce">
              <h1>Working at Neontribe</h1>
            </BlueText>
            <VerticalSpacing size={3} />

            <Text size="normal" lineHeight={2}>
              Neontribe are a mixture of software developers, researchers,
              content and ux designers and security specialists.{' '}
            </Text>
            <VerticalSpacing size={2.5} />
            <Text size="normal" lineHeight={2}>
              We encourage unusual routes into digital careers (no degree
              required) and provide flexible support to parents and people
              developing side projects.{' '}
            </Text>
            <VerticalSpacing size={2.5} />
            <Text size="normal" lineHeight={2}>
              Find out more from the tribe members’ profiles.
            </Text>
          </div>

          <ImageContainer
            paddingBottom="5rem"
            paddingRight="9.5%"
            marginTop="1rem"
            windowJustifyContent="center"
            mobilePaddingBottom="0"
            mobilePaddingRight="0"
          >
            <img src={TribeArc} height={166} width={118} />{' '}
          </ImageContainer>
        </HireContainer>

        <VerticalSpacing size={5} />
        <div className="test">
          <StyledLink
            connect="/what-we-are-doing"
            background="#5600ee"
            border_color="#5600ee"
          >
            Join the tribe
          </StyledLink>
        </div>
      </ConstrainedWidth>
    </Top>

    <ConstrainedWidth>
      <VerticalSpacing size={8} />

      <TriberGrid />

      <VerticalSpacing size={12} />
    </ConstrainedWidth>
    <Top>
      <ConstrainedWidth paddingTop="3rem">
        <Text size="large" lineHeight={2} color="#48e9ce">
          <H>Join The Tribe</H>
        </Text>

        <VerticalSpacing size={2} />
        <About justifyContent="space-between">
          <TheTribeBottomParagraph />
          <ArcContainer>
            {' '}
            <img paddingTop="1rem" src={Arcs} />{' '}
          </ArcContainer>
        </About>

        <VerticalSpacing size={5} />

        <HireContainer justifyContent="start">
          <StyledLink
            connect="https://docs.google.com/forms/d/e/1FAIpQLScThzeOla4FG2tEGfUVthAb8ZyTIzSGb0nB_tcqSlYSbrIjZA/viewform?usp=sf_link"
            background="#5600ee"
            border_color="#5600ee"
          >
            Tell us about you
          </StyledLink>

          <Text
            paddingLeft="2rem"
            paddingTop="1rem"
            size="normal"
            color="#48e9ce"
            align="center"
          >
            <a href="mailto:hello@neontribe.co.uk">
              {' '}
              Or email: hello@neontribe.co.uk{' '}
            </a>
          </Text>
        </HireContainer>
      </ConstrainedWidth>
    </Top>
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
      .logo {
        height: 1.5rem;
        width: 100%;
      }

      .tribe-info {
        max-width: 70ch;
      }

      @media (max-width: 860px) {
        .tribe-info {
          max-width: 120ch;
        }

        .test {
          max-width: 100%;
          display: flex;
          flex-direction: column;
        }
      }
    `}</style>
  </Layout>
)

export default TheTribePage
