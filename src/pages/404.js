import React from 'react'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import VerticalSpacing from '../components/VerticalSpacing'
import PageMeta from '../components/PageMeta'
import Container from '../components/Container'
import FullScreenHeader from '../components/FullScreenHeader'
import StyledLink from '../components/Button'

import arcs from '../components/arcs.svg'
import { fontSizes } from '../theme'

const NotFoundPage = () => (
  <Layout>
    <FullScreenHeader>
      <ConstrainedWidth>
        <Container justifyContent="space-around" mobileFlexDirection="column">
          <div className="page-not-found-text">
            <h1>Sorry this page does not exist.</h1>

            <VerticalSpacing size={5} />

            <StyledLink
              connect="/"
              background_color="black"
              border_color="#48e9ce"
            >
              Return to home page
            </StyledLink>
          </div>
          <img
            src={arcs}
            height={200}
            width={200}
            alt="Decorative neon pink & blue arc icon"
          />
        </Container>

        <VerticalSpacing size={6} />
      </ConstrainedWidth>
    </FullScreenHeader>

    <style jsx>{`
      .page-not-found-text {
        max-width: 700px;
      }

      h1 {
        font-size: ${fontSizes['title']};
      }

      img {
        align-self: center;
      }

      @media (max-width: 860px) {
        h1 {
          font-size: ${fontSizes['xlarge']};
        }
        .page-not-found-text {
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
        }
      }
    `}</style>
  </Layout>
)

export const Head = ({ location }) => (
  <PageMeta title="Page not found" location={location} />
)

export default NotFoundPage
