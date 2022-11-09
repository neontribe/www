import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import H from '../components/Heading'
import Text from '../components/Text'
import TriberGrid from '../components/TriberGrid'
import PageTop from '../components/PageTop'
import { TheTribeBottomParagraph } from '../components/TheTribeParagraphs'

import VerticalSpacing from '../components/VerticalSpacing'
import StyledLink from '../components/Button'
import PageMeta from '../components/PageMeta'
import tribeArcs from '../components/tribeArcs.svg'
import HireContainer from '../components/HireContainer'
const TheTribePage = () => (
  <Layout>
    <PageMeta
      title="The Tribe"
      description="Neontribe is a digital agency. Why neon? It’s the colour of tech. Why tribe? Individuals collaborating, hand-making useful tools that do a job of work."
    />
    <PageTop>
      <ConstrainedWidth>
        <div className="flex-box">
          <div className="subtitle-restrict">
            <Text size="xlarge" color="#48e9ce">
              <h1>Working at Neontribe</h1>
            </Text>
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

          <div className="image-container">
            <img src={tribeArcs} height={166} width={118} />{' '}
          </div>
        </div>

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
    </PageTop>
    <VerticalSpacing size={8} />
    <ConstrainedWidth>
      {' '}
      <TriberGrid />
    </ConstrainedWidth>

    <VerticalSpacing size={2} />

    <PageTop>
      <ConstrainedWidth paddingTop="3rem">
        <Text size="large" lineHeight={2} color="#48e9ce">
          <H>Join The Tribe</H>
        </Text>

        <VerticalSpacing size={2} />
        <div className="flex-box">
          <div className="subtitle-restrict">
            {' '}
            <TheTribeBottomParagraph />
          </div>

          {/* <ArcContainer>
            {' '}
            <img paddingTop="1rem" src={Arcs} />{' '}
          </ArcContainer> */}
        </div>

        <VerticalSpacing size={5} />

        <HireContainer>
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
    </PageTop>

    <style jsx>{`
     
     .subtitle-restrict {
      max-width:70ch;

    }
   
     
     
     
     .flex-box {
        display:flex;
        justify-content:space-between;

      }

      .image-container{
        padding-bottom:5rem;
        margin-top:1rem;
        padding-right:9.5%'
        // REMINDER TO SORT OUT MOBILE ADJUSTMENT
      }

    `}</style>
  </Layout>
)

export default TheTribePage
