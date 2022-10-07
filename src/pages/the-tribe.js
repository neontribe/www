import React from 'react'
import Arcs from '../arcs.png'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import H from '../components/Heading'
import ContactFooter from '../components/Layout/ContactFooter'
import Text from '../components/Text'
import {
  TheTribeTopParagraph,
  TheTribeBottomParagraph,
} from '../components/TheTribeParagraphs'
import TriberGrid from '../components/TriberGrid'
import VerticalSpacing from '../components/VerticalSpacing'
import { ExternalLink } from '../components/Link'
import PageMeta from '../components/PageMeta'
import Divider from '../components/Divider'
import BlueText from '../components/BlueText'
import Container from '../components/Container'
import ImageContainer from '../components/imageContainer'
import Top from '../components/Top'
import StyledLink from '../components/Button'
import TribeArc from '../components/tribeArcs.png'
import { Image } from '../components/WorkDescription/Content'
import logo from '../components/logo.svg'

const TheTribePage = () => (
  <Layout>
    <PageMeta
      title="The Tribe"
      description="Neontribe is a digital agency. Why neon? It’s the colour of tech. Why tribe? Individuals collaborating, hand-making useful tools that do a job of work."
    />

    <Top>
      <ConstrainedWidth>
        <Container justifyContent="space-between">
          <div>
            <BlueText size="larger" color="#48e9ce">
              <h1>Working at Neontribe</h1>
            </BlueText>
            <VerticalSpacing size={3} />
            <Text maxCharacter="60ch" size="normal" lineHeight={2}>
              Neontribe are a mixture of software developers, researchers,
              content and ux designers and security specialists.{' '}
            </Text>
            <VerticalSpacing size={2.5} />
            <Text maxCharacter="60ch" size="normal" lineHeight={2}>
              We encourage unusual routes into digital careers (no degree
              required) and provide flexible support to parents and people
              developing side projects.{' '}
            </Text>
            <VerticalSpacing size={2.5} />
            <Text maxCharacter="60ch" size="normal" lineHeight={2}>
              Find out more from the tribe members’ profiles.
            </Text>
          </div>
          <ImageContainer paddingBottom="5rem" paddingRight="4rem">
            <img src={TribeArc} height={166} width={118} />{' '}
          </ImageContainer>
        </Container>

        <VerticalSpacing size={5} />

        <StyledLink
          connect="/what-we-are-doing"
          background="#5600ee"
          border_color="#5600ee"
        >
          Join the tribe
        </StyledLink>
      </ConstrainedWidth>
    </Top>

    <ConstrainedWidth>
      <VerticalSpacing size={8} />

      <TriberGrid />

      <VerticalSpacing size={12} />
    </ConstrainedWidth>
    <Top>
      <ConstrainedWidth paddingTop="2rem">
        <Text size="large" lineHeight={2} color="#48e9ce">
          <H>Join The Tribe</H>
        </Text>

        <VerticalSpacing size={2} />
        <Container justify-content="space-between">
          <TheTribeBottomParagraph />
          <ImageContainer paddingTop="1rem"></ImageContainer>
        </Container>

        <VerticalSpacing size={5} />
        <Container justifyContent="start">
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
            Or email: hello@neontribe.co.uk
          </Text>
        </Container>
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
  </Layout>
)

export default TheTribePage
