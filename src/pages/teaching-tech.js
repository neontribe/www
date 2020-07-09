import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import { ExternalLink } from '../components/Link'
import PageMeta from '../components/PageMeta'
import Centered from '../components/Centered'

const TeachingTech = () => (
  <Layout>
    <PageMeta
      title="Teaching Tech"
      description="Want to get better at helping developers learn? Join our accredited course to improve
              your teaching skills"
    />
    <ConstrainedWidth>
      <Centered>
        <Heading level={1}>
          <Text size="large" weight={500}>
            Teaching Tech
          </Text>
        </Heading>
        <p>
          <Heading level={3}>
            <Text size="medium">
              Want to get better at helping developers learn? Join our
              accredited course to improve your teaching skills
            </Text>
          </Heading>
        </p>
      </Centered>

      <p>
        <Text>
          We get training to support our learning, so why don’t we get training
          to support our teaching? When developers understand how to teach,
          everyone wins. It gets easier to deliver work and teams become more
          resilient.
        </Text>
      </p>
      <p>
        <Text>
          The skills you’ll learn on this course will help you and your team get
          the most out of knowledge sharing. We'll set you up to overcome
          frustrations by using techniques from experienced educators who work
          in tech.
        </Text>
      </p>

      <Heading level={2}>
        <Text size="large" weight={500}>
          What is it?
        </Text>
      </Heading>
      <p>
        <Text>
          This is an intensive course that takes place over three full
          consecutive days. It is about practical learning. On the last day you
          will get the opportunity to deliver your own fifteen minute ‘micro
          teach’
        </Text>
      </p>
      <Text>
        <p>
          The course is a Level 3 Award in Education and Training (AET) that we
          have adapted specifically for developers teaching on the job. It is an
          ideal qualification for those who have no previous classroom
          experience or qualifications and is recognised as a licence to teach
          in the lifelong learning sector (16+)
        </p>
      </Text>

      <Text>
        <p>
          To receive the qualification, you’ll need to complete 3 written
          assessments of between 1000-1500 words on the subjects covered within
          a month of the course end.
        </p>
      </Text>

      <Heading level={2}>
        <Text size="large" weight={500}>
          What will the course cover?
        </Text>
      </Heading>
      <p>
        <Text>
          Course modules have been selected to be the most appropriate for those
          working in tech and include:
        </Text>
      </p>
      <p>
        <Text>
          <ul>
            <li>Creating a safe and supportive learning experience</li>
            <li>
              Incorporating inclusive teaching approaches into your planning and
              delivery
            </li>
            <li>
              Understanding principles of one-to-one learning and development
            </li>
            <li>Assessing progress and giving constructive feedback</li>
          </ul>
        </Text>
      </p>

      <Heading level={2}>
        <Text size="large" weight={500}>
          Why Neontribe?
        </Text>
      </Heading>
      <p>
        <Text>
          <b>Trainers who have been in your shoes.</b> Our trainers are all
          developers or people who work alongside development teams on a day to
          day basis. Over the last ten years we’ve been experimenting with how
          to best share our knowledge within our teams. This programme is an
          opportunity for us to pass on some of that learning.
        </Text>
      </p>
      <p>
        <Text>
          <b>Trainers who are qualified and experienced teachers.</b> Some of
          our trainers have teaching qualifications from before they became
          developers, others bring coaching experience from varied disciplines -
          rugby, music and theatre.
        </Text>
      </p>
      <p>
        <Text>
          <b>A reputation for training.</b> Neontribe team members deliver
          training to the local tech community as well as to students at Norwich
          University of the Arts and the University of East Anglia. We have
          developed coaching and mentoring activities with our clients, bringing
          skills into the charity sector in the UK. We run internships, coding
          courses and work experience programmes. Several of our current
          employees first came to the company through one of these schemes.
        </Text>
      </p>
    </ConstrainedWidth>

    <ConstrainedWidth>
      <Heading level={2}>
        <Text size="large" weight={500}>
          Get in touch
        </Text>
      </Heading>

      <VerticalSpacing size={1} />
      <Text>Interested? Write to us at</Text>
      <ExternalLink
        href="mailto:teachingtech@neontribe.co.uk"
        style={{ color: 'inherit' }}
      >
        teachingtech@neontribe.co.uk
      </ExternalLink>
      <Text>to apply</Text>
    </ConstrainedWidth>
  </Layout>
)

export default TeachingTech
