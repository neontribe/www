import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Carousel from '.'

const TestCarousel = () => (
  <Carousel>
    <Carousel.Item image="a" imageTitle="image 1" />
    <Carousel.Item image="b" imageTitle="image 2" />
  </Carousel>
)

test('displays the first item by default', () => {
  const { getByAltText } = render(<TestCarousel />)

  expect(getByAltText('image 1')).toBeInTheDocument()
})

test('displays second slide after Next is clicked', () => {
  const { getByAltText, getByLabelText } = render(<TestCarousel />)

  fireEvent.click(getByLabelText('Next Item'))

  expect(getByAltText('image 2')).toBeInTheDocument()
})

test('loops to last item when Previous is clicked', () => {
  const { getByAltText, getByLabelText } = render(<TestCarousel />)

  fireEvent.click(getByLabelText('Previous Item'))

  expect(getByAltText('image 2')).toBeInTheDocument()
})

test('displays correct item after image is clicked', () => {
  const slideNumber = 2

  const { getByAltText, getByLabelText } = render(<TestCarousel />)

  fireEvent.click(getByLabelText(`Go to item ${slideNumber}`))

  expect(getByAltText(`image ${slideNumber}`)).toBeInTheDocument()
})
