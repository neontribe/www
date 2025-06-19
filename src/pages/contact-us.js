import React from 'react'

import { c_NEON_PURPLE, c_NAV_ACTIVE } from '../theme'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Container from '../components/Container'
import VerticalSpacing from '../components/VerticalSpacing'
import PageMeta from '../components/PageMeta'
import LinkedInIcon from '../components/linkedin.png'
import PageTop from '../components/PageTop'
import Text from '../components/Text'
import contactArcs from '../components/contactArcs.svg'
import EmailLink from '../components/EmailLink'

const ContactUs = () => (
  <Layout>
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
            <img src={contactArcs} alt="" height={136} width={191} />
          </div>
        </div>

        <EmailLink
          link="mailto:hello@neontribe.co.uk"
          background_color="#5600ee"
          border_color="#5600ee"
          fontSize="0.9rem"
        >
          Email: hello@neontribe.co.uk
        </EmailLink>
      </ConstrainedWidth>
    </PageTop>
    <VerticalSpacing size={5} />

    <ConstrainedWidth>
      <Text size="normal" color="black" maxCharacter="49ch">
        <span>
          Follow us on{' '}
          <a
            className="social-media-link"
            target="_blank"
            href="https://www.linkedin.com/company/neontribe-ltd/"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            className="social-media-link"
            target="_blank"
            href="https://bsky.app/profile/neontribe.bsky.social"
            rel="noopener noreferrer"
          >
            BlueSky
          </a>
        </span>
      </Text>

      <div className="social-media-container">
        <div className="social-media-labels">
          <a
            className="social-media-logo"
            target="_blank"
            href="https://www.linkedin.com/company/neontribe-ltd/"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedInIcon}
              height={60}
              width={70}
              alt="Navigates to Neontribe's LinkedIn page"
            />
          </a>

          <a
            className="social-media-logo"
            target="_blank"
            href="https://bsky.app/profile/neontribe.bsky.social"
            rel="noopener noreferrer"
          >
            <img
              src="/blueSkyLogo.svg"
              height={60}
              width={70}
              alt="Navigates to Neontribe's BlueSky page"
            />
          </a>
        </div>
      </div>

      <Text size="normal" color="black" maxCharacter="55ch">
        We share our clients&#39; work and best practice in the tech for good
        sector.
      </Text>
    </ConstrainedWidth>

    <VerticalSpacing size={3} />
    <div className="white-background">
      <ConstrainedWidth>
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
                  <p>Neontribe Ltd</p>
                  <p>21 Colegate</p>
                  <p>Norwich</p>
                  <p>NR3 1BN</p>
                </address>
              </Text>
            </Container>
          </div>
        </Container>
        <VerticalSpacing size={9}></VerticalSpacing>
        <Text size="small" color="black">
          <p>Neontribe Ltd</p>
          <p>Registered in England & Wales Registration number: 06165574</p>
          <p>
            Registered office: Studio 1.05c Level 1 Department Leeds Dock, The
            Boulevard, Leeds, England, LS10 1PZ
          </p>
        </Text>
      </ConstrainedWidth>
    </div>

    <style jsx>{`
      p {
        line-height: 1.1;
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
        margin-right: 80px;
        width: 150px;
        align-items: center;
      }

      .social-media-link {
        color: ${c_NEON_PURPLE};
        text-decoration: underline;
      }

      .social-media-link:hover {
        color: ${c_NAV_ACTIVE};
      }

      .social-media-logo:focus {
        outline-color: ${c_NEON_PURPLE};
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

      @media (max-width: 860px) {
        .contact-header {
          flex-direction: column;
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

      @media (max-width: 500px) {
        p {
          line-height: 1.5;
        }
      }
    `}</style>
  </Layout>
)

export const Head = ({ location }) => (
  <PageMeta
    title="Contact us"
    description="To get in touch, you can contact us via email or twitter."
    location={location}
  />
)

export default ContactUs
