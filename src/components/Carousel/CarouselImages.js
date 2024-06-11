import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { breakpoint } from '../../theme';

const CarouselImage = ({ image, i, activeImage, goToItem }) => (
  <div
    key={image.src}
    className={classNames(
      'carousel__image',
      i === activeImage && 'carousel__image--is-active'
    )}
  >
    <button
      className="carousel__image__button"
      onClick={() => goToItem(i)}
      aria-label={`Go to item ${i + 1}`}
    >
      <img
        className="carousel__image__image"
        src={image.src}
        alt={image.title}
      />
    </button>

    <style jsx>{`
      .carousel__image__image {
        width: 70%;
        border-radius: 50%;
      }

      .carousel__image--is-active .carousel__image__image {
        width: 90%;
      }

      .carousel__image__button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        color: inherit;
        filter: none;
      }

      :not(.carousel__image--is-active) .carousel__image__button {
        transition: transform 0.2s ease-in-out;
        filter: grayscale(100%);
      }

      :not(.carousel__image--is-active):hover .carousel__image__button {
        transform: scale(1.5);
      }

      @media (${breakpoint('sm')}) {
        .carousel__image__image {
          width: 50%;
        }
      }
    `}</style>
  </div>
);

const CarouselImages = ({ images, activeImage, goToItem }) => (
  <div className="carousel__images">
    {images.map((image, i) => (
      <CarouselImage
        key={`${image}-${i}`}
        image={image}
        i={i}
        activeImage={activeImage}
        goToItem={goToItem}
      />
    ))}

    <style jsx>{`
      .carousel__images {
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
);

CarouselImages.propTypes = {
  images: PropTypes.array,
  activeImage: PropTypes.number,
  goToItem: PropTypes.func,
};

CarouselImage.propTypes = {
  ...CarouselImages.propTypes,
  i: PropTypes.number,
};

export default CarouselImages;
