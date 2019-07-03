import React from 'react'
import PropTypes from 'prop-types'
import Hexagon from '../Hexagon'
import classNames from 'classnames'

import { breakpoint, REM_PX } from '../../theme'

const CarouselImages = ({ images, activeImage, goToItem, imageSize }) => (
  <div className="carousel__images">
    {images.map((image, i) => (
      <div className="carousel__image" key={image.src}>
        <button
          className={classNames(
            'carousel__image__button',
            i === activeImage && 'carousel__image__button--is-active'
          )}
          onClick={() => goToItem(i)}
          aria-label={`Go to item ${i + 1}`}
        >
          <Hexagon src={image.src} title={image.title} />
        </button>
      </div>
    ))}

    <style jsx>{`
      .carousel__images {
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${imageSize}px;
        position: relative;
        z-index: 1;
      }
      .carousel__image {
        height: 100%;
        display: flex;
        align-items: center;
      }
      .carousel__image__button {
        background: none;
        border: none;
        display: inline-block;
        height: 50%;
        filter: grayscale(100%);
        display: none;
      }
      .carousel__image__button--is-active {
        height: 100%;
        display: block;
        filter: none;
      }

      .carousel__image__button:not(.carousel__image__button--is-active):hover {
        transform: none;
      }

      @media (${breakpoint('sm')}) {
        .carousel__image__button {
          display: block;
          transition: all 0.2s ease-in-out;
        }
      }
    `}</style>
  </div>
)

CarouselImages.propTypes = {
  images: PropTypes.array,
  activeImage: PropTypes.number,
  goToItem: PropTypes.func,
  imageSize: PropTypes.number,
}

export default CarouselImages
