import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import RenderContent from '../components/RenderContent'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import { ExternalLink } from '../components/Link'
import PageMeta from '../components/PageMeta'
import Centered from '../components/Centered'

const description =
  'Want to get better at helping developers learn? Join our accredited course to improve your teaching skills'

const TeachingTech = () => (
  <Layout>
    <PageMeta title="Privacy" description={description} />

    <StaticQuery
      query={graphql`
        query {
          file(
            sourceInstanceName: { eq: "pages" }
            relativePath: { eq: "teaching-tech.md" }
          ) {
            childMarkdownRemark {
              htmlAst
            }
          }
        }
      `}
      render={data => (
        <ConstrainedWidth>
          <RenderContent htmlAst={data.file.childMarkdownRemark.htmlAst} />
        </ConstrainedWidth>
      )}
    />
  </Layout>
)

export default TeachingTech
