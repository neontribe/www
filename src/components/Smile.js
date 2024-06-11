import React from 'react';
import classNames from 'classnames';
import arc from '../components/pinkArc.png';

const Smile = ({ hyphenation = false }) => (
  <>
    <span>committed to tech for </span>
    <span
      className={classNames(
        'smiley-face-container',
        hyphenation && 'hyphenation'
      )}
    >
      <span>g</span>
      <span className={classNames('blue-text', hyphenation && 'hyphenation')}>
        oo
      </span>
      <span>d</span>
    </span>
    <style jsx>{`

      .smiley-face-container {
        position:relative;
        display: inline-block;
      }


      .smiley-face-container:after {
        content: '';
        position: absolute;

        background-size: 128px 65px;
        background-position: left;
        background-image: url('${arc}');

        width: 8.1rem;
        height: 4.1rem;
        background-repeat: no-repeat;
        top: 6rem;

        left: 0.9rem;
      }



      .text {
   
      }



      .blue-text {
        color: #48e9ce;
      }

      .hyphenation {
        word-break: break-word;
        overflow-wrap: break-word;
        hyphens: auto;}

        @media (max-width:500px) { 
     
            font-size:37px;

            .smiley-face-container:after {
              background-size: 90px 45px;
              top: 3.5rem;
              max-width: 90px;
              left: 0.25rem;
            }
          
 

          }
        }




      }
    `}</style>
  </>
);

export default Smile;
