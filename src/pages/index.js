import React from 'react'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import Smile from '../components/Smile'
import VerticalSpacing from '../components/VerticalSpacing'
import PageMeta from '../components/PageMeta'
import StyledLink from '../components/Button'
import FullScreenHeader from '../components/FullScreenHeader'
import { fontSizes } from '../theme'

const IndexPage = () => (
  <Layout>
    <FullScreenHeader>
      <ConstrainedWidth>
        <>
          <h1>
            <div className="heading-wrapper">
              {' '}
              <span> We are a </span>
              <span>digital agency</span>
            </div>

            <Text size="title" align="left" color="white">
              <Smile />
            </Text>
          </h1>

          <style jsx>{`
            .heading-wrapper {
              text-align: left;
              color: white;
              font-size: 3.4rem;
            }

            @media (max-width: 750px) {
              .heading-wrapper {
                display: flex;
                flex-direction: column;
              }
            }

            @media (max-width: 500px) {
              font-size: 37px;
              line-height: 3rem;
              max-width: fit-content(5rem);
            }
          `}</style>
        </>

        <div>
          <Text size="large" color="#48e9ce" weight="600">
            {' '}
            <h2>
              We work with you to solve problems through user research, software
              development and design{' '}
            </h2>
          </Text>

          {/* To do - add font sizes and screen sizes as variables under theme */}

          <style jsx>{`
            @media (min-width: 860px) {
              max-width: 80%;
              padding-top: 2rem;
            }

            @media (max-width: 860px) {
              max-width: 100%;
              padding-top: 3rem;
              font-size: 21px;
            }
          `}</style>
        </div>

        <VerticalSpacing size={6} />

        <section>
          <StyledLink
            connect="/our-work"
            background_color="#5600ee"
            border_color="#5600ee"
          >
            See our work
          </StyledLink>

          <StyledLink
            connect="/the-tribe"
            background_color="black"
            border_color="#48e9ce"
          >
            Meet the tribe
          </StyledLink>

          <style jsx>{`
            @media (min-width: 1000px) {
              display: flex;
              justify-content: space-between;
              max-width: 50%;
              flex-direction: row;
            }
            @media (max-width: 1000px) {
              display: flex;
              justify-content: space-between;
              max-width: 60%;
              flex-direction: row;
            }

            @media (max-width: 860px) {
              display: flex;
              justify-content: space-between;
              max-width: 100%;
              flex-direction: column;
            }
          `}</style>
        </section>
        <section>
          <div>
            <a
              href="https://www.dxw.com/2023/01/neontribe-joins-the-dxw-family/"
              className="blue-underlined"
            >
              {' '}
              In January 2023{' '}
            </a>{' '}
            we became part of the{' '}
            <a href="https://www.dxw.com" className="blue-underlined">
              dxw{' '}
            </a>{' '}
            family
          </div>

          <style jsx>{`
            div {
              width: 100%;
              margin-left: auto;
              margin-right: 0;
              width: 20ch;
              font-size: ${fontSizes['normal']};
            }

            .blue-underlined {
              color: #48e9ce;
              text-decoration: underline;
            }
          `}</style>
        </section>
      </ConstrainedWidth>
    </FullScreenHeader>
  </Layout>
)

export const Head = ({ location }) => (
  <PageMeta title="Welcome" location={location} />
)

export default IndexPage
