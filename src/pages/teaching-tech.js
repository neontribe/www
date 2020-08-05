import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import RenderContent from '../components/RenderContent'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import PageMeta from '../components/PageMeta'

const description =
  'Want to get better at helping developers learn? Join our accredited course to improve your teaching skills'

const TeachingTech = () => (
  <Layout>
    <PageMeta title="Teaching Tech" description={description} />

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
