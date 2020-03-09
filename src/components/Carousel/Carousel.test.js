import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Carousel from '.'

const TestCarousel = () => (
  <Carousel>
    <Carousel.Item image="a" imageTitle="image 1" />
    <Carousel.Item image="b" imageTitle="image 2" />
    <Carousel.Item image="c" imageTitle="image 3" />
  </Carousel>
)

test('displays the first item by default', () => {
  const { getByTitle } = render(<TestCarousel />)

  expect(getByTitle('image 1')).toBeInTheDocument()
})

test('displays second slide after Next is clicked', () => {
  const { getByTitle, getByLabelText } = render(<TestCarousel />)

  fireEvent.click(getByLabelText('Next Item'))

  expect(getByTitle('image 2')).toBeInTheDocument()
})

test('loops to last item when Previous is clicked', () => {
  const { getByTitle, getByLabelText } = render(<TestCarousel />)

  fireEvent.click(getByLabelText('Previous Item'))

  expect(getByTitle('image 3')).toBeInTheDocument()
})

test('displays correct item after image is clicked', () => {
  const slideNumber = 3

  const { getByTitle, getByLabelText } = render(<TestCarousel />)

  fireEvent.click(getByLabelText(`Go to item ${slideNumber}`))

  expect(getByTitle(`image ${slideNumber}`)).toBeInTheDocument()
})
