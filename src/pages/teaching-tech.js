import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import { ExternalLink } from '../components/Link'
import PageMeta from '../components/PageMeta'
import Centered from '../components/Centered'

const TeachingTech = () => (
  <Layout>
    <PageMeta
      title="Teaching Tech"
      description="Want to get better at sharing your knowledge with developers? Add some teaching skills to your reprtoire with our accredited course."
    />
    <ConstrainedWidth>
      <Centered>
        <Heading level={1}>
          <Text size="large" weight={500}>
            Teaching Tech
          </Text>
        </Heading>
        <p>
          <Text>Main body text goes here</Text>
        </p>
      </Centered>
    </ConstrainedWidth>

    <ConstrainedWidth>
      <Centered>
        <Heading level={1}>
          <Text size="large" weight={500}>
            Get in touch
          </Text>
        </Heading>

        <VerticalSpacing size={1} />

        <ExternalLink href="mailto:teachingtech@neontribe.co.uk">
          <Text size="medium">teachingtech@neontribe.co.uk</Text>
        </ExternalLink>
      </Centered>
    </ConstrainedWidth>
  </Layout>
)

export default TeachingTech
