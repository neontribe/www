import React from 'react'
import Layout from '../components/Layout'
import RenderContent from '../components/RenderContent'
import { StaticQuery, graphql } from 'gatsby'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import { c_PRIMARY_BACKGROUND } from '../theme'

const NotFoundPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          file(
            sourceInstanceName: { eq: "pages" }
            relativePath: { eq: "privacy.md" }
          ) {
            childMarkdownRemark {
              htmlAst
            }
          }
        }
      `}
      render={data => (
        <ConstrainedWidth>
          <div className="text-bg">
            <RenderContent htmlAst={data.file.childMarkdownRemark.htmlAst} />
          </div>
          <style jsx>{`
            .text-bg {
              background-color: ${c_PRIMARY_BACKGROUND};
            }
          `}</style>
        </ConstrainedWidth>
      )}
    />
  </Layout>
)

export default NotFoundPage
