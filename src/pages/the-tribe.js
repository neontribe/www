import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import H from '../components/Heading'
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

const TheTribePage = () => (
  <Layout>
    <PageMeta
      title="The Tribe"
      description="Neontribe is a digital agency. Why neon? It’s the colour of tech. Why tribe? Individuals collaborating, hand-making useful tools that do a job of work."
    />

    <ConstrainedWidth>
      <Text size="large" align="center">
        <h1>The Tribe</h1>
      </Text>

      <VerticalSpacing size={4} />

      <Text size="medium">
        <TheTribeTopParagraph />
      </Text>

      <VerticalSpacing size={8} />

      <Divider />

      <VerticalSpacing size={8} />

      <TriberGrid />

      <VerticalSpacing size={12} />

      <Text size="large">
        <H withArcs>Join The Tribe</H>
      </Text>

      <VerticalSpacing size={2} />

      <TheTribeBottomParagraph />

      <VerticalSpacing size={5} />

      <ExternalLink
        href="https://docs.google.com/forms/d/e/1FAIpQLScThzeOla4FG2tEGfUVthAb8ZyTIzSGb0nB_tcqSlYSbrIjZA/viewform?usp=sf_link"
        button
        rel="noopener noreferrer"
        target="_blank"
      >
        Join The Tribe
      </ExternalLink>
    </ConstrainedWidth>
  </Layout>
)

export default TheTribePage
