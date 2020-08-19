import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import H from '../components/Heading'
import Section from '../components/Section'
import { InternalLink, ExternalLink } from '../components/Link'

import StoryCarousel from '../components/StoryCarousel'
import HomePageWorkSummary from '../components/HomePageWorkSummary'
import PageMeta from '../components/PageMeta'

const IndexPage = () => (
  <Layout>
    <PageMeta title="Welcome" />

    <ConstrainedWidth>
      <section>
        <Text size="large" align="center">
          <h1>We solve problems</h1>
        </Text>

        <VerticalSpacing size={2} />

        <Text size="medium">
          <p>
            Neontribe is a digital agency working in user research, software
            development and design. We're agile by instinct, and user-centred in
            our practice. We work together to identify and deliver on user need.
          </p>
        </Text>
      </section>

      <VerticalSpacing size={16} />

      <section>
        <Text size="large">
          <H withArcs>What we're doing</H>
        </Text>

        <VerticalSpacing size={4} />

        <Section>
          <HomePageWorkSummary />
        </Section>
      </section>

      <VerticalSpacing size={16} />

      <section>
        <Text size="large">
          <H withArcs>Journeys to the Tribe</H>
        </Text>

        <VerticalSpacing size={4} />

        <Section>
          <StoryCarousel />
        </Section>

        <VerticalSpacing size={4} />

        <InternalLink button to="/the-tribe">
          Meet the tribe
        </InternalLink>
      </section>

      <VerticalSpacing size={16} />

      <section>
        <Text align="center">
          <Text size="large">
            <H>Get in touch</H>
          </Text>

          <VerticalSpacing size={1} />

          <ExternalLink href="mailto:hello@neontribe.co.uk">
            <Text size="medium">hello@neontribe.co.uk</Text>
          </ExternalLink>
        </Text>
      </section>
    </ConstrainedWidth>
  </Layout>
)

export default IndexPage
