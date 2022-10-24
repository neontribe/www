import React from 'react'

import ContactFooter from '../components/Layout/ContactFooter'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'

import Text from '../components/Text'
import BlueText from '../components/BlueText'
import VerticalSpacing from '../components/VerticalSpacing'

import { ExternalLink } from '../components/Link'
import PageMeta from '../components/PageMeta'
import logo from '../components/logo.svg'
import Container from '../components/Container'
import ImageContainer from '../components/imageContainer'
import Top from '../components/Top'
import Twitter from '../components/twitter.svg'

import StyledLink from '../components/Button'
import Arcs from '../components/join.svg'

const ContactUs = () => (
  <Layout>
    <PageMeta title="Contact us" description="Enter in suitable description" />
    <Top>
      <ConstrainedWidth>
        <BlueText size="larger" color="#48e9ce">
          <h1>Get in touch</h1>
        </BlueText>
        <VerticalSpacing size={4} />

        <div className="contact-header">
          <Text size="normal">
            <div className="subtitle">
              Drop us an email. We’d love to have a conversation about how we
              could work with you.
            </div>
            <VerticalSpacing size={5} />

            <div className="button">
              <StyledLink
                connect="mailto:hello@neontribe.co.uk"
                background="#5600ee"
                border_color="#5600ee"
                mobileSize="0.9rem"
              >
                Email: hello@neontribe.co.uk
              </StyledLink>
            </div>
          </Text>

          <ImageContainer
            paddingRight="6rem"
            windowJustifyContent="center"
            mobilePaddingRight="0"
          >
            <img src={Arcs} height={136} width={191} />
          </ImageContainer>
        </div>
      </ConstrainedWidth>
    </Top>
    <VerticalSpacing size={10} />

    <VerticalSpacing size={10} />

    <VerticalSpacing size={4} />

    <ConstrainedWidth>
      <div className="contact-container">
        <div>
          <Text size="normal" color="black" maxCharacter="49ch">
            Follow us on Twitter
          </Text>
          <VerticalSpacing size={3} />
          <Text size="normal" color="black" maxCharacter="55ch">
            We share our clients work and best practice in the tech for good
            sector.
          </Text>
        </div>
        <div className="twitter-container">
          <ImageContainer
            paddingLeft="10rem"
            mobilePaddingLeft="0"
            paddingTop="1rem"
          >
            <img src={Twitter} height={42} width={42}></img>
          </ImageContainer>

          <Text
            paddingLeft="1rem"
            paddingTop="1.4rem"
            color="#561dee"
            size="normal"
            align="center"
          >
            <h4>@neontribe</h4>
          </Text>
        </div>
      </div>

      <Text size="medium">
        <ExternalLink href="mailto:hello@neontribe.co.uk">
          hello@neontribe.co.uk
        </ExternalLink>
      </Text>
    </ConstrainedWidth>
    <ContactFooter>
      <ConstrainedWidth paddingTop="3em">
        <Container mobileFlexDirection="column">
          <div>
            <Text color="black" size="normal" maxCharacter="53ch">
              We work from home as well as in the office. Please check before
              you plan a visit.
            </Text>
            <VerticalSpacing size={3}></VerticalSpacing>
            <Container justifyContent="flex-start">
              <Text color="#561dee">
                <p>21 Colegate </p>
                <p> Norwich</p>
                <p>NR3 1BN </p>
              </Text>

              <Text paddingLeft="4rem" color="#561dee">
                <p>Kaleider Studios </p>
                <p> 45 Preston Street</p>
                <p>Exeter</p>
                <p>EX1 1DF </p>
              </Text>
            </Container>
          </div>

          <div className="answerphone-text">
            <Text color="black" size="normal">
              Leave a message on our answerphone if you’d like us to call you
            </Text>

            <VerticalSpacing size={2}></VerticalSpacing>

            <Text color="#561dee">0845 689 0896</Text>
          </div>
        </Container>

        <VerticalSpacing size={9}></VerticalSpacing>
        <Text size="small" color="black">
          <p>Neontribe Ltd</p>
          <p>Registered in England & Wales Registration number: 06165574</p>
          <p>Registered office: 106 Lincoln St. Norwich, Norfolk, NR2 3LB</p>
        </Text>
      </ConstrainedWidth>
    </ContactFooter>

    <ContactFooter background="#561dee">
      <ConstrainedWidth paddingTop="2rem">
        <Container justifyContent="space-between">
          <div>
            <img className="logo" src={logo} alt="Neontribe" />
          </div>
          <Text size="normal">Privacy policy</Text>
        </Container>
      </ConstrainedWidth>
    </ContactFooter>

    <style jsx>{`
      .logo {
        height: 1.5rem;
        width: 100%;
      }

      .contact-header {
        display: flex;
        justify-content: space-between;
      }

      .subtitle {
        max-width: 45ch;
      }

      .button {
        display: flex;
      }

      .contact-container {
        display: flex;
        padding-right: 2rem;
      }

      .twitter-container {
        display: flex;
        justify-content: flex-start;
        padding-top: 1rem;
      }

      .answerphone-text {
        padding-left: 10rem;
        max-width: 40ch;
      }

      @media (max-width: 680px) {
        .contact-container {
          display: block;
        }

        .answerphone-text {
          padding-left: 0;
          max-width: 53ch;
          padding-top: 2rem;
        }
      }

      @media (max-width: 820px) {
        .contact-header {
          flex-direction: column;
        }

        .subtitle {
          max-width: 100%;
        }

        .button {
          flex-direction: column;
          max-width: 100%;
        }
      }
    `}</style>
  </Layout>
)

export default ContactUs
