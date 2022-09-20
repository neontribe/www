import React from 'react'
import Text from './Text'
import VerticalSpacing from './VerticalSpacing'

// TODO: drive this content from markdown
export const TheTribeTopParagraph = () => (
  <p>
    Neontribe is an eclectic group of individuals with interlocking skills and
    enthusiasms. Without our differences, we'd not have our strength.
  </p>
)

// TODO: drive this content from markdown
export const TheTribeBottomParagraph = () => (
  <div>
    <Text maxCharacter="65ch" lineHeight={2}>
      We’re always happy to hear from people who like the sound of Neontribe,
      and want to grow their skills as a developer, or in user research or
      product management.
    </Text>
    <VerticalSpacing size={2} />
    <Text maxCharacter="65ch" lineHeight={2}>
      Maybe you’re already experienced, or maybe you're just getting started. If
      you have an eagerness to learn more and want to be part of a great
      company, contact us with a short description of the skills you have and
      the skills you want to gain and we’ll let you know if we think there’s a
      place for us to start talking. That's it.
    </Text>
  </div>
)
