import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Carousel from '../../../components/Carousel'

const TestCarousel = () => (
  <Carousel>
    <Carousel.Item imageTitle="image 1">slide 1</Carousel.Item>
    <Carousel.Item imageTitle="image 2">slide 2</Carousel.Item>
    <Carousel.Item imageTitle="image 3">slide 3</Carousel.Item>
  </Carousel>
)

test('displays the first item by default', () => {
  const { getByText, getByTitle } = render(<TestCarousel />)

  expect(getByText('slide 1')).toBeInTheDocument()
  expect(getByTitle('image 1')).toBeInTheDocument()
})

test('displays second slide after Next is clicked', () => {
  const { getByText, getByTitle, getByLabelText } = render(<TestCarousel />)

  fireEvent.click(getByLabelText('Next Item'))

  expect(getByText('slide 2')).toBeInTheDocument()
  expect(getByTitle('image 2')).toBeInTheDocument()
})

test('loops to last item when Previous is clicked', () => {
  const { getByText, getByTitle, getByLabelText } = render(<TestCarousel />)

  fireEvent.click(getByLabelText('Previous Item'))

  expect(getByText('slide 3')).toBeInTheDocument()
  expect(getByTitle('image 3')).toBeInTheDocument()
})

test('displays correct item after image is clicked', () => {
  const slideNumber = 3

  const { getByText, getByTitle, getByLabelText } = render(<TestCarousel />)

  fireEvent.click(getByLabelText(`Go to item ${slideNumber}`))

  expect(getByText(`slide ${slideNumber}`)).toBeInTheDocument()
  expect(getByTitle(`image ${slideNumber}`)).toBeInTheDocument()
})
