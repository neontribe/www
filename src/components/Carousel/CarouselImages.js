import React from 'react'
import PropTypes from 'prop-types'
import Hexagon from '../Hexagon'

import { breakpoint } from '../../theme'

const CarouselImages = ({ images, activeImage, goToItem }) => (
  <div className="carousel__images">
    {images.map((image, i) => (
      <button
        className={`carousel__image${
          i === activeImage ? ' carousel__image--is-active' : ''
        }`}
        onClick={() => goToItem(i)}
      >
        <Hexagon src={image} />
      </button>
    ))}

    <style jsx>{`
      .carousel__images {
        display: flex;
        align-items: center;
        height: 200px;
        position: relative;
        z-index: 1;
      }
      .carousel__image {
        height: 125px;
        filter: grayscale(100%);
        background: none;
        border: 0;
        cursor: pointer;
        display: none;
        transition: all 0.2s ease-in-out;
      }
      .carousel__image--is-active {
        height: 200px;
        display: flex;
        filter: none;
      }
      .carousel__image:not(.carousel__image--is-active):hover {
        transform: scale(1.1, 1.1);
      }

      @media (${breakpoint('sm')}) {
        .carousel__image {
          display: flex;
        }
      }
    `}</style>
  </div>
)

CarouselImages.propTypes = {
  images: PropTypes.array,
  activeImage: PropTypes.number,
  goToItem: PropTypes.func,
}

export default CarouselImages
