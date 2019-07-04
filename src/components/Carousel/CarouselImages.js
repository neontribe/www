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
        width: 100%;
        height: ${imageSize}px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
      }
      .carousel__image {
        width: 33.33%;
        height: 100%;
        display: flex;
        align-items: center;
      }
      .carousel__image__button {
        width: 100%;
        transform: scale(0.5);
        height: 100%;
        background: none;
        border: none;
        display: inline-block;
        filter: grayscale(100%);
        display: none;
        cursor: pointer;
      }
      .carousel__image__button--is-active {
        transform: scale(1);
        display: block;
        filter: none;
      }

      .carousel__image__button:not(.carousel__image__button--is-active):hover {
        transform: scale(0.6);
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
