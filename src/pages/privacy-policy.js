import React from 'react'
import Layout from '../components/Layout'
import RenderContent from '../components/RenderContent'
import { StaticQuery, graphql } from 'gatsby'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import { c_PRIMARY_BACKGROUND } from '../theme'
import PageMeta from '../components/PageMeta'
import PageTop from '../components/PageTop'
import Text from '../components/Text'
import Container from '../components/Container'
import VerticalSpacing from '../components/VerticalSpacing'
import circleArc from '../components/circleArc.svg'

const PrivacyPolicy = () => (
  <Layout>
    <PageMeta title="Privacy" />

    <PageTop>
      <ConstrainedWidth>
        <Container justifyContent="space-between" mobileFlexDirection="column">
          <Text size="xlarge" color="#48e9ce">
            <h1>Neontribe Privacy Policy </h1>
          </Text>
          <VerticalSpacing size={3} />

          <div className="heading-arc">
            <img src={circleArc} height={128} width={277} />{' '}
          </div>
        </Container>
      </ConstrainedWidth>
      <style jsx>{`
        @media (max-width: 860px) {
          .heading-arc {
            padding-right: 0;
            padding-top: 2rem;
            align-self: center;
          }
        }
      `}</style>
    </PageTop>
    <VerticalSpacing size={5}></VerticalSpacing>

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
      render={(data) => (
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

export default PrivacyPolicy
