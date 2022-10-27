import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import BlueText from '../components/BlueText'
import Good from '../components/Good'
import VerticalSpacing from '../components/VerticalSpacing'
import Container from '../components/Container'
import PageMeta from '../components/PageMeta'
import StyledLink from '../components/Button'
import Smile from '../components/Smile'
import HomeTop from '../components/HomeTop'

const IndexPage = () => (
  <Layout>
    <PageMeta title="Welcome" />
    <HomeTop>
      <ConstrainedWidth>
        <div className="home-padding">
          <Text size="title" align="left" color="white">
            {' '}
            <span className="line">
              {' '}
              <h1>We are a digital agency</h1>
            </span>
          </Text>

          <BlueText size="title" align="left" color="white">
            <Good>committed to tech for </Good>
            <Smile>
              <Good>g</Good>
              <Good color="#48e9ce">oo</Good>
              <Good>d</Good>{' '}
            </Smile>
          </BlueText>

          <style jsx>{`
            .line {
              display: flex;
              justify-content: space-between;
              max-width: 41rem;
            }

            .home-padding {
              padding-top: 7rem;
            }

            @media (max-width: 872px) {
              .home-padding {
                padding-top: 1rem;
              }
            }

            @media (max-width: 500px) {
              font-size: 37px;
              line-height: 3rem;
              max-width: fit-content(5em);
            }

            @media (max-width: 760px) {
              .line {
                flex-direction: column;
              }
            }
          `}</style>
        </div>
        <VerticalSpacing size={3.5} />

        <Container paddingTop="1rem" justifyContent="space-between">
          <Text size="large" color="#48e9ce" weight="600">
            {' '}
            <h2>
              We work with you to solve problems through
              <style jsx>{`
                 padding-top: 0rem;
             

                @media (max-width:889px) { {
                  padding-top: 4rem;
               
                }

                @media (max-width:550px) { {
                  font-size:21px;
                  padding-top:6rem;
                  padding-right:0.5rem;
               
                }
              `}</style>
            </h2>{' '}
          </Text>
        </Container>
        <Text size="large" color="#48e9ce">
          {' '}
          <h2>
            user research, software development and design
            <style jsx>{`
                
                @media (max-width:550px) { {
                  font-size:21px;
                  padding-right:0.5rem;
                 
               
                }
              `}</style>
          </h2>{' '}
        </Text>
        <VerticalSpacing size={10} />

        <section>
          <StyledLink
            connect="/what-we-are-doing"
            background="#5600ee"
            border_color="#5600ee"
          >
            See our work
          </StyledLink>

          <StyledLink
            connect="/the-tribe"
            background="black"
            border_color="#48e9ce"
          >
            Meet the tribe
          </StyledLink>

          <style jsx>{`
            display: flex;
            justify-content: space-between;
            max-width: 50%;
            flex-direction: row;

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
      </ConstrainedWidth>
    </HomeTop>
  </Layout>
)

export default IndexPage
