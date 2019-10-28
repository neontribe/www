import React from 'react'
import { c_PRIMARY_BACKGROUND, breakpoint } from '../theme'
import Text from './Text'

// TODO: drive this content from markdown
export const TheTribeTopParagraph = () => (
  <p>
    <Text orphans={false}>
      Neontribe is an eclectic group of individuals with interlocking skills and
      enthusiasms. Without our differences, we'd not have our strength.
    </Text>
    <style jsx>{`
      p {
        margin: 0;
        background-color: ${c_PRIMARY_BACKGROUND};
      }

      @media (${breakpoint('md')}) {
        p {
          margin: 0 4rem;
        }
      }
    `}</style>
  </p>
)

// TODO: drive this content from markdown
export const TheTribeBottomParagraph = () => (
  <p>
    <Text orphans={false}>
      We’re always happy to hear from people who like the sound of Neontribe,
      and want to grow their skills as a developer, or in user research or
      product management. Maybe you’re already experienced, or maybe you're just
      getting started. If you have an eagerness to learn more and want to be
      part of a great company, contact us with a short description of the skills
      you have and the skills you want to gain and we’ll let you know if we
      think there’s a place for us to start talking. That's it.
    </Text>
    <style jsx>{`
      p {
        margin: 0;
        background-color: ${c_PRIMARY_BACKGROUND};
      }

      @media (${breakpoint('md')}) {
        p {
          margin: 0 4rem;
        }
      }
    `}</style>
  </p>
)
