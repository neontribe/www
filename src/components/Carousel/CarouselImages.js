import React from 'react'
import PropTypes from 'prop-types'
import Hexagon from '../Hexagon'
import classNames from 'classnames'
import useFocusStyles from '../../focus'

import { breakpoint } from '../../theme'

const CarouselImage = ({ image, i, activeImage, goToItem }) => {
  const focusStyle = useFocusStyles()

  return (
    <div
      className={classNames(
        'carousel__image',
        i === activeImage && 'carousel__image--is-active'
      )}
      key={image.src}
    >
      <button
        className={classNames(
          'carousel__image__button',
          i === activeImage && 'carousel__image__button--is-active',
          focusStyle.className
        )}
        onClick={() => goToItem(i)}
        aria-label={`Go to item ${i + 1}`}
      >
        <Hexagon src={image.src} title={image.title} />
        {focusStyle.styles}
      </button>
      <style jsx>{`
        .carousel__image {
          width: 100%;
          display: none;
          align-items: center;
        }
        .carousel__image--is-active {
          display: flex;
        }
        .carousel__image__button {
          width: 100%;
          transform: scale(0.5);
          background: none;
          border: none;
          height: auto;
          padding: 0;
          display: inline-block;
          filter: grayscale(100%);
          cursor: pointer;
        }
        .carousel__image__button--is-active {
          transform: scale(1);
          filter: none;
        }

        .carousel__image__button:not(.carousel__image__button--is-active):hover {
          transform: scale(0.6);
        }

        @media (${breakpoint('sm')}) {
          .carousel__image__button {
            transition: all 0.2s ease-in-out;
          }

          .carousel__image {
            width: 33.33%;
            display: flex;
          }
        }
      `}</style>
    </div>
  )
}

const CarouselImages = ({ images, activeImage, goToItem }) => (
  <div className="carousel__images">
    {images.map((image, i) => (
      <CarouselImage
        image={image}
        i={i}
        activeImage={activeImage}
        goToItem={goToItem}
      />
    ))}

    <style jsx>{`
      .carousel__images {
        flex: 1 1 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
      }
    `}</style>
  </div>
)

CarouselImages.propTypes = {
  images: PropTypes.array,
  activeImage: PropTypes.number,
  goToItem: PropTypes.func,
}

CarouselImage.propTypes = {
  ...CarouselImages.propTypes,
  i: PropTypes.number,
}

export default CarouselImages
