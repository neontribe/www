import React from 'react'
import PropTypes from 'prop-types'
import Hexagon from '../Hexagon'

import { breakpoint, REM_PX } from '../../theme'

const CarouselImages = ({ images, activeImage, goToItem, imageSize }) => (
  <div className="carousel__images">
    {images.map((image, i) => (
      <button
        className={`carousel__image${
          i === activeImage ? ' carousel__image--is-active' : ''
        }`}
        key={image.src}
        onClick={() => goToItem(i)}
        aria-label={`Go to item ${i + 1}`}
      >
        <Hexagon src={image.src} title={image.title} />
      </button>
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
        height: 50%;
        filter: grayscale(100%);
        background: none;
        border: 0;
        cursor: pointer;
        display: none;
        transition: all 0.2s ease-in-out;
      }
      .carousel__image--is-active {
        height: 100%;
        display: block;
        filter: none;
      }
      .carousel__image:not(.carousel__image--is-active):hover {
        transform: scale(1.1, 1.1);
      }

      @media (${breakpoint('sm')}) {
        .carousel__image {
          display: block;
          width: 33.33%;
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
