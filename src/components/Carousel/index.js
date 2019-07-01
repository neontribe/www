import React from 'react'
import PropTypes from 'prop-types'
import CarouselControl from './CarouselControl'
import CarouselImages from './CarouselImages'
import CarouselItem from './CarouselItem'
import Arrow from '../../../prototype/global-images/arrow.svg'

const moduloWithMax = (num, max) => ((num % max) + max) % max

const Carousel = ({ children, imageSize = 400 }) => {
  const [activeItem, setActiveItem] = React.useState(1)

  const nextItem = () => {
    setActiveItem(prevActiveItem =>
      moduloWithMax(prevActiveItem + 1, children.length)
    )
  }

  const prevItem = () => {
    setActiveItem(prevActiveItem =>
      moduloWithMax(prevActiveItem - 1, children.length)
    )
  }

  return (
    <div className="carousel">
      <div className="carousel__controls">
        <CarouselControl label="Previous Item" onClick={prevItem}>
          <img className="arrow previous-arrow" src={Arrow} />
        </CarouselControl>
        <CarouselImages
          images={React.Children.map(children, child => ({
            src: child.props.image,
            title: child.props.imageTitle,
          }))}
          activeImage={activeItem}
          goToItem={setActiveItem}
          imageSize={imageSize}
        />
        <CarouselControl label="Next Item" onClick={nextItem}>
          <img className="arrow next-arrow" src={Arrow} />
        </CarouselControl>
      </div>

      <div className="carousel__items">
        {React.Children.toArray(children)[activeItem]}
      </div>

      <style jsx>{`
        .carousel {
          position: relative;
        }
        .carousel__controls {
          display: flex;
          justify-content: space-between;
        }
        .carousel__items {
          transform: translateY(-${imageSize / 4}px);
        }
        .arrow {
          width: 30px;
          height: 30px;
        }
        .previous-arrow {
          transform: scaleX(-1);
        }
      `}</style>
    </div>
  )
}

const arrayOfLength = (expectedLength, props, propName, componentName) => {
  const arrayPropLength = props[propName].length
  if (arrayPropLength !== expectedLength) {
    return new Error(
      `Invalid array length ${arrayPropLength} (expected ${expectedLength}) for prop ${propName} supplied to ${componentName}. Validation failed.`
    )
  }
}

Carousel.propTypes = {
  // Must have 3 children
  children: arrayOfLength.bind(null, 3),
  imageSize: PropTypes.number,
}

Carousel.Item = CarouselItem

export default Carousel
