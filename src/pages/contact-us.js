import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'

import Text from '../components/Text'

import VerticalSpacing from '../components/VerticalSpacing'
import PageMeta from '../components/PageMeta'

import Container from '../components/Container'
import Twitter from '../components/twitter.svg'
import PageTop from '../components/PageTop'
import contactArcs from '../components/contactArcs.svg'
import EmailLink from '../components/EmailLink'
const ContactUs = () => (
  <Layout>
    <PageMeta
      title="Contact us"
      description="To get in touch, you can contact us via email or twitter."
    />
    <PageTop>
      <ConstrainedWidth>
        <Text size="xlarge" color="#48e9ce">
          <h1>Get in touch</h1>
        </Text>

        <div className="contact-header">
          <Text size="normal">
            <div className="subtitle">
              Drop us an email. We’d love to have a conversation about how we
              could work with you.
            </div>
          </Text>
          <div className="main-arc-container">
            <img src={contactArcs} height={136} width={191} />
          </div>
        </div>

        <EmailLink
          link="mailto:hello@neontribe.co.uk"
          background="#5600ee"
          border_color="#5600ee"
          mobileSize="0.9rem"
        >
          Email: hello@neontribe.co.uk
        </EmailLink>
      </ConstrainedWidth>
    </PageTop>
    <VerticalSpacing size={5} />

    <ConstrainedWidth>
      <Text size="normal" color="black" maxCharacter="49ch">
        Follow us on Twitter
      </Text>

      <div className="social-media-container">
        <div className="social-media-labels">
          <img src={Twitter} height={42} width={42}></img>

          <Text color="#561dee" size="normal">
            <a
              href="https://twitter.com/neontribe"
              alt="Follow us on Twitter at @neontribe"
            >
              {' '}
              @neontribe
            </a>
          </Text>
        </div>
      </div>

      <Text size="normal" color="black" maxCharacter="55ch">
        We share our clients work and best practice in the tech for good sector.
      </Text>
    </ConstrainedWidth>

    <VerticalSpacing size={3} />
    <div className="white-background">
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
                <address>
                  <p>Norwich Office </p>
                  <p> Unit B</p>
                  <p>Seymour House </p>
                  <p>30-34 Muspole Street</p>
                  <p>Norwich</p>
                  <p>NR3 1DJ</p>
                </address>
              </Text>

              <Text paddingLeft="4rem" color="#561dee">
                <address>
                  <p>Kaleider Studios </p>
                  <p> 45 Preston Street</p>
                  <p>Exeter</p>
                  <p>EX1 1DF </p>
                </address>
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
    </div>

    <style jsx>{`
      p {
        line-height: 1;
      }
      .logo {
        height: 1.5rem;
        width: 100%;
      }

      .contact-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .subtitle {
        max-width: 45ch;
      }

      .white-background {
        background-color: white;
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      .social-media-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      .social-media-labels {
        display: flex;
        justify-content: space-between;
        margin-right: 6.5vw;
        width: 9vw;
        align-items: center;
      }

      .button {
        display: flex;
      }

      .main-arc-container {
        display: flex;
        padding-right: 6rem;
      }

      .contact-container {
        display: flex;
        padding-right: 2rem;
      }

      .twitter-container {
        display: flex;
        padding-top: 1rem;
      }

      .answerphone-text {
        padding-left: 10rem;
        max-width: 40ch;
      }

      @media (max-width: 860px) {
        .contact-header {
          flex-direction: column;
        }

        .answerphone-text {
          padding-left: 0;
          max-width: 53ch;
          padding-top: 2rem;
        }

        .social-media-container {
          width: 100%;
          margin-top: 2rem;
          margin-bottom: 2rem;

          flex-direction: column;
          align-items: start;
        }

        .contact-header {
          align-items: start;
        }

        .social-media-labels {
          margin-right: 0;
          align-items: start;
          display: block;
        }

        .subtitle {
          max-width: 100%;
          padding-top: 2rem;
        }

        .button {
          flex-direction: column;
          max-width: 100%;
        }
        .main-arc-container {
          justify-content: center;
          padding-right: 0;
          margin-top: 3rem;
          margin-bottom: 3rem;
          width: 100%;
        }
      }
    `}</style>
  </Layout>
)

export default ContactUs
