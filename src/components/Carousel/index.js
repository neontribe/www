import React from 'react';

import CarouselControl from './CarouselControl';
import CarouselImages from './CarouselImages';
import CarouselItem from './CarouselItem';

import { breakpoint, c_TEXT_LIGHT } from '../../theme';

import Arrow from './arrow.svg';

const moduloWithMax = (num, max) => ((num % max) + max) % max;

const Carousel = ({ children }) => {
  const [activeItem, setActiveItem] = React.useState(0);

  const nextItem = () => {
    setActiveItem((prevActiveItem) =>
      moduloWithMax(prevActiveItem + 1, children.length)
    );
  };

  const prevItem = () => {
    setActiveItem((prevActiveItem) =>
      moduloWithMax(prevActiveItem - 1, children.length)
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__controls">
        <CarouselControl label="Previous Item" onClick={prevItem}>
          <img className="arrow previous-arrow" src={Arrow} alt="" />
        </CarouselControl>
        <CarouselImages
          images={React.Children.map(children, (child) => ({
            src: child.props.image,
            title: child.props.imageTitle,
          }))}
          activeImage={activeItem}
          goToItem={setActiveItem}
        />
        <CarouselControl label="Next Item" onClick={nextItem}>
          <img className="arrow next-arrow" src={Arrow} alt="" />
        </CarouselControl>
      </div>

      <div className="carousel__items">
        {React.Children.toArray(children)[activeItem]}
      </div>

      <style jsx>{`
        .carousel {
          color: ${c_TEXT_LIGHT};
        }

        .carousel__controls {
          margin-bottom: -4rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .arrow {
          width: 1rem;
          height: 1rem;
        }

        .previous-arrow {
          transform: scaleX(-1);
        }

        @media (${breakpoint('sm')}) {
          .arrow {
            width: 2rem;
            height: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

const arrayOfLength = (expectedLength, props, propName, componentName) => {
  const arrayPropLength = props[propName].length;
  if (arrayPropLength !== expectedLength) {
    return new Error(
      `Invalid array length ${arrayPropLength} (expected ${expectedLength}) for prop ${propName} supplied to ${componentName}. Validation failed.`
    );
  }
};

Carousel.propTypes = {
  // Should have 3 children, currently only 2
  children: arrayOfLength.bind(null, 2),
};

Carousel.Item = CarouselItem;

export default Carousel;
