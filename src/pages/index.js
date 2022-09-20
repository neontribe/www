import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'

import BlueText from '../components/BlueText'
import Good from '../components/Good'
import VerticalSpacing from '../components/VerticalSpacing'
import H from '../components/Heading'
import Section from '../components/Section'
import { InternalLink, ExternalLink } from '../components/Link'
import arc from '../components/pinkArc.png'
import Container from '../components/Container'
import StoryCarousel from '../components/StoryCarousel'
import HomePageWorkSummary from '../components/HomePageWorkSummary'
import PageMeta from '../components/PageMeta'
import StyledLink from '../components/Button'
import Smile from '../components/Smile'
import Top from '../components/Top'

const IndexPage = () => (
  <Layout>
    <PageMeta title="Welcome" />
    <Top>
      <ConstrainedWidth>
        <BlueText size="title" align="left" color="white">
          {' '}
          <span> We are a digital agency</span>
        </BlueText>

        <BlueText size="title" align="left" color="white">
          <Good>committed to tech for </Good>
          <Smile>
            <Good>g</Good>
            <Good color="#48e9ce">oo</Good>
            <Good>d</Good>{' '}
          </Smile>
        </BlueText>
        <VerticalSpacing size={3.5} />

        <Container paddingTop="1rem">
          <Text size="large" color="#48e9ce">
            {' '}
            <h2>We work with you to solve problems through</h2>{' '}
          </Text>
        </Container>
        <Text size="large" color="#48e9ce">
          {' '}
          <h2>user research, software development and design </h2>{' '}
        </Text>
        <VerticalSpacing size={10} />

        <section>
          <StyledLink
            connect="/what-we-are-doing"
            background="#5600ee"
            border_color="#5600ee"
          ></StyledLink>
          <StyledLink
            connect="/what-we-are-doing"
            background="black"
            border_color="#48e9ce"
            margin_left="4rem"
          >
            Meet the tribe
          </StyledLink>
        </section>
      </ConstrainedWidth>
    </Top>
  </Layout>
)

export default IndexPage
