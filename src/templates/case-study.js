import React from 'react'

import {
  c_SECONDARY_BACKGROUND,
  c_TEXT_DARK,
  c_TEXT_LIGHT,
  c_NEON_TEAL,
} from '../theme'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'

import Text from '../components/Text'

import VerticalSpacing from '../components/VerticalSpacing'

import phoneImage from '../images/mind-of-my-own-phone.png'
import PageMeta from '../components/PageMeta'

import Container from '../components/Container'

import PageTop from '../components/PageTop'

const CaseStudy = () => (
  <Layout>
    <PageMeta
      title="What we do"
      description="Neontribe is a digital agency. We research for context. We design for use. We code to completion. We test to exhaustion. Then we engineer enhancement."
    />
    <PageTop>
      <ConstrainedWidth>
        <Container
          className="case-study-container"
          justifyContent="space-between"
          mobileFlexDirection="column"
        >
          <Container restrictWidth={true} flex={false}>
            <Text size="xlarge" color={c_TEXT_LIGHT}>
              <h1>
                Helping Mind Of My Own ensure the voices of children and young
                people are heard
              </h1>
            </Text>
            <VerticalSpacing size={3} />
            <Text size="medium" weight="bold" color={c_NEON_TEAL}>
              <p>Mind of My Own</p>
            </Text>

            <Text size="medium" color={c_TEXT_LIGHT}>
              <p>Categories: Discovery, Alpha, Beta, Live</p>
            </Text>
            <VerticalSpacing size={3} />
          </Container>

          <div className="heading-arc">
            <img className="case-study-image" src={phoneImage} height={600} />
          </div>
        </Container>
      </ConstrainedWidth>
    </PageTop>

    <div className="summary-banner">
      <ConstrainedWidth>
        <Container restrictWidth={true} flex={false}>
          <Text size="large" color={c_TEXT_DARK} weight="bold">
            <p>
              We developed the technology that delivers Mind Of My Own’s vision
              and helped them create user-centred products that fit into
              children’s and young people’s lives
            </p>
          </Text>
        </Container>
      </ConstrainedWidth>
    </div>

    <VerticalSpacing size={3} />
    <ConstrainedWidth>
      <Container restrictWidth={true} flex={false}>
        <article>
          <Text color={c_TEXT_DARK}>
            <p>
              In 2013, the organisation’s founders had a good idea which got
              them a grant from the Nominet Trust (now Social Tech Trust). The
              grant enabled Neontribe to design and build a prototype for what
              became Mind Of My Own’s first product, the One app. This was aimed
              at supporting young people to make their voices heard.  Hard work
              and excellent recruitment extended this into a suite of 5
              products. The products are now used by education, youth justice,
              and health organisations, as well as 40% of local government
              authorities in the UK. These products help organisations to listen
              to the voices of the young people who benefit from their
              services. 
            </p>
          </Text>
          <VerticalSpacing size={3} />
          <Text color={c_TEXT_DARK}>
            <h2>Result</h2>
          </Text>
          <Text color={c_TEXT_DARK}>
            <p>
              Mind Of My Own is now a sustainable business with a team of 25,
              and a vision that has social good at its heart. We were there from
              the start in 2013, and helped them transition to an internal
              development team in 2024. Mind Of My Own’s products help young
              people speak for themselves, to those responsible for their
              experiences, at times that suit them. Hundreds of customers across
              Europe, New Zealand, and Australia embed the voice of many tens of
              thousands of young people into the heart of their work using these
              products.
            </p>
          </Text>
          <VerticalSpacing size={3} />
          <Text color={c_TEXT_DARK}>
            <h2>What we did</h2>
          </Text>
          <Text color={c_TEXT_DARK}>
            <p>
              We started by using the research Mind Of My Own had done to
              prototype an interface that helped young people speak for
              themselves to local authority workers. It provided suggestions for
              what to say about the experiences they’d had, the meetings they’d
              been to, and the decisions made about them. These prompts were
              informed by professional practice, and tested with young people.
              That prototype then became a web app and was soon being used by
              young people. Our team included user researchers, designers,
              product managers and developers.  We use an agile philosophy
              throughout the project. We did 2 week sprints of development work
              surrounded by planning and testing. This way of working means 
              that we’re doing the right thing, at the right time, and doing the
              thing right. It’s a regular cadence of work, helping us to deliver
              new products and features at a steady pace over the long term. The
              space around those sprints makes time for product management, and
              user research to work alongside our developers rather than outside
              their work.  This helps create a multidisciplinary team where our
              developers work with, not for, Mind Of My Own and are closer to
              their customers and users. This means we can be light on our feet
              when business change happens, responding to change rather than
              following a plan that’s no longer useful. We can catch the
              technical complexities implied by a design before it’s finished,
              saving time and lots of rounds of change. Since then, we developed
              products for them that help: practitioners working alongside young
              people get authentic voices into the heart of their practice local
              authorities and others get insights from young people Mind Of My
              Own’s customers run custom, branded, surveys to capture young
              people’s opinions direct parents and young people to their
              entitlements, resources, local events, and support services All of
              these product development projects have followed the same ways of
              working: with a solid focus on the needs of the users, design that
              extends a known brand, and iterative development cycles. We also
              provided support, maintenance, and advisory services to support
              Mind Of My Own’s work by: responding to issues reported by
              customers keeping software infrastructure up to date helping
              upskill the internal team  when needed  Our work for Mind Of My
              Own involved collaborating with a specialist member of their team
              for compliance with Information Security Management System
              ISO27001. 
            </p>
          </Text>
          <Text color={c_TEXT_DARK}>
            <blockquote>
              <footer>Yvonne Anderson, a director of Mind of Own, says:</footer>
              <p>
                Neontribe's expertise and professionalism was core to our first
                decade's work. The technology they built, and skills they helped
                us develop, mean we have a solid foundation for continued
                success at our core mission: getting young people's voices heard
              </p>
            </blockquote>
          </Text>
          <Text color={c_TEXT_DARK}>
            <p>
              Throughout our relationship with them, working in partnership was
              essential. We enabled Mind Of My Own to concentrate on their core
              operations, knowing they could rely on us to deliver the software
              that helps make sure that the voices of young people are heard. 
              We also helped them hone skills in product management, user
              research, user experience design, and information security. Now
              they have their own developers, but their vision remains the same.
              Better care and support happens when children are listened to,
              they get  better care and support which ultimately improves their
              lives and prospects for the future.
            </p>
          </Text>
        </article>
      </Container>
    </ConstrainedWidth>

    <style jsx>{`
      .logo {
        height: 1.5rem;
        width: 100%;
      }

      .sub-heading {
        line-height: 2;
        max-width: 56ch;
      }

      .heading-arc {
        padding-bottom: 0.5rem;
        padding-right: 2rem;
        justify-content: space-between;
      }

      .footer-arc {
        padding-left: 10rem;
        padding-bottom: 4rem;
      }

      .summary-banner {
        background-color: ${c_SECONDARY_BACKGROUND};
        padding-top: 2rem;
      }

      .case-study-image {
        position: absolute;
        right: 0;
      }

      @media (max-width: 860px) {
        .heading-arc {
          padding-right: 0;
          padding-top: 2rem;
          align-self: center;
        }

        .sub-heading {
          padding-top: 1rem;
          max-width: 100%;
        }

        .footer-arc {
          padding: 0;
          display: flex;
          justify-content: center;
        }

        .case-study-image {
          position: static;
        }
      }
    `}</style>
  </Layout>
)

export default CaseStudy
