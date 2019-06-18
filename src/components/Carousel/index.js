import React from 'react'
import CarouselControl from './CarouselControl'
import CarouselImages from './CarouselImages'
import CarouselItem from './CarouselItem'

const moduloWithMax = (num, max) => ((num % max) + max) % max

const Carousel = ({ children }) => {
  const [activeItem, setActiveItem] = React.useState(0)

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
        <CarouselControl onClick={prevItem}>◀</CarouselControl>
        <CarouselImages
          images={children.map(child => child.props.image)}
          activeImage={activeItem}
          goToItem={setActiveItem}
        />
        <CarouselControl onClick={nextItem}>▶</CarouselControl>
      </div>

      <div>{children[activeItem]}</div>

      <style jsx>{`
        .carousel {
          position: relative;
        }
        .carousel__controls {
          display: flex;
          justify-content: space-between;
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
  children: arrayOfLength.bind(null, 3).isRequired,
}

Carousel.Item = CarouselItem

export default Carousel
