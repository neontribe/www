import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import Text from '../components/Text'
import PageMeta from '../components/PageMeta'
import Markov from 'compiled-markov'
import source from '../data/compiled'
import { Location } from '@reach/router'
import { c_NEONS, c_PRIMARY_TEXT } from '../theme'

const DEFAULT_TEXT = "Oops. Couldn't find that page."

const MarkovSentence = ({ generator, location }) => {
  if (!location || !location.href || !generator) {
    return DEFAULT_TEXT
  }

  const attemptedPage = location.href
    .split('/')
    .slice(-1)[0]
    .toLowerCase()
  const sentence = generator.generateSentences(1, attemptedPage)
  const firstWord = sentence.split(' ')[0]
  const random_neon = c_NEONS[Math.floor(Math.random() * c_NEONS.length)]

  var doHighlight = false
  const checkWord = firstWord
    .toLowerCase()
    .replace(new RegExp('[^A-Za-z0-9]', 'g'), '')
  if (checkWord === attemptedPage) doHighlight = true

  return (
    <p>
      <Text size="large">
        <span
          className="markov-sentence"
          title="This is an automatically generated Markov chain"
        >
          <span className={doHighlight ? 'highlight' : ''}>{firstWord}</span>
          {sentence.slice(firstWord.length)}
        </span>
      </Text>
      <style jsx>{`
        .markov-sentence {
          font-style: italic;
        }

        .highlight {
          font-weight: bold;
          color: ${random_neon};
        }
      `}</style>
    </p>
  )
}

const NotFoundPage = () => {
  const gen = new Markov()
  gen.initFromCompiled(source)

  return (
    <Layout>
      <PageMeta title="Not Found" />
      <ConstrainedWidth>
        <div className="accessibility-centered">
          <Heading level={1}>
            <Text>404 Page Not Found</Text>
          </Heading>
          <Location>
            {({ location }) => (
              <MarkovSentence generator={gen} location={location} />
            )}
          </Location>
        </div>
      </ConstrainedWidth>

      <style jsx>{`
        .accessibility-centered {
          text-align: center;
          display: flex;
          flex-direction: column-reverse;
        }
      `}</style>
    </Layout>
  )
}

export default NotFoundPage
