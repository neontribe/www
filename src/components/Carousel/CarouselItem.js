import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = ({ children }) => {
  return (
    <div className="carousel__item">
      {children}

      <style jsx>{`
        .carousel__item {
          margin-top: 7rem;
        }
      `}</style>
    </div>
  );
};

CarouselItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CarouselItem;
