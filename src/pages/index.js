import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import Heading from '../components/Heading'
import Link, { ExternalLink } from '../components/Link'

import SquiggleSeparator from '../components/SquiggleSeparator'
import StoryCarousel from '../components/StoryCarousel'
import HomePageWorkSummary from '../components/HomePageWorkSummary'
import PageMeta from '../components/PageMeta'

const IndexPage = () => (
  <Layout>
    <PageMeta title="Welcome" />
    <ConstrainedWidth>
      <section className="centered">
        <Heading level={1}>
          <Text weight={500} size="xlarge">
            We solve problems
          </Text>
        </Heading>
        <p>
          <Text size="medium">
            Neontribe is a digital agency working in user research, software
            development and design. We're agile by instinct, and user-centred in
            our practice. We work together to identify and deliver on user need.
          </Text>
        </p>
      </section>
      <SquiggleSeparator />

      <section className="centered">
        <Heading level={1}>
          <Text weight={500} size="large">
            Journeys to the Tribe
          </Text>
        </Heading>
        <StoryCarousel />

        <Link button to="/the-tribe">
          Meet the tribe
        </Link>
      </section>

      <SquiggleSeparator />

      <section>
        <div className="centered">
          <Heading level={1}>
            <Text size="large" weight={500}>
              What we're doing
            </Text>
          </Heading>
        </div>
        <VerticalSpacing size={5} />
        <HomePageWorkSummary />
      </section>

      <SquiggleSeparator />

      <section className="centered">
        <Heading level={1}>
          <Text size="large" weight={500}>
            Get in touch
          </Text>
        </Heading>

        <VerticalSpacing size={1} />

        <ExternalLink href="mailto:hello@neontribe.co.uk">
          <Text size="medium">hello@neontribe.co.uk</Text>
        </ExternalLink>
      </section>
    </ConstrainedWidth>

    <style jsx>{`
      .centered {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default IndexPage
