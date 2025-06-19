import React from 'react'
import { render } from '@testing-library/react'

import FlipCard, { CardFront, CardBack } from './FlipCard'

const TestFlipCard = () => (
  <FlipCard>
    <CardFront>front 1</CardFront>
    <CardBack>back 2</CardBack>
    Anything else
  </FlipCard>
)

test('displays the front and back', () => {
  const { getByText, queryByText } = render(<TestFlipCard />)

  expect(getByText('front 1')).toBeInTheDocument()
  expect(getByText('back 2')).toBeInTheDocument()
  expect(queryByText('Anything else')).not.toBeInTheDocument()
})

test('default render matches snapshot', () => {
  const { container } = render(<TestFlipCard />)

  expect(container).toMatchSnapshot()
})

test('isFlipped render matches snapshot', () => {
  const { container } = render(<TestFlipCard isFlipped />)

  expect(container).toMatchSnapshot()
})
