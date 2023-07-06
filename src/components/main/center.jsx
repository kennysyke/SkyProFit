import React from 'react';
import { Link } from 'react-router-dom';

import bodyflex from '../../images/courses-mini/bodyflex-card.png';
import dancefit from '../../images/courses-mini/dancefit-card.png';
import step from '../../images/courses-mini/step-card.png';
import stretching from '../../images/courses-mini/stretching-card.png';
import yoga from '../../images/courses-mini/yoga-card.png';

export function Center () {

    return (
        <div>
             <ul > 
          <li >
            <Link to="/">
              <img
                  src={yoga}
                  alt="Course yoga"
                />
            </Link>
            
          </li>
          <li >
            <Link to="/">
            <img
                  src={stretching}
                  alt="Course stretching"
                />
            </Link>
          </li>
          <li >
            <Link to="/">
            <img
                  src={dancefit}
                  alt="Course dancefit"
                />
            </Link>
          </li>
          <li >
            <Link to="/">
            <img
                  src={step}
                  alt="Course step"
                />
            </Link>
          </li>
          <li >
            <Link to="/">
            <img
                  src={bodyflex}
                  alt="Course bodyflex"
                />
            </Link>
          </li>
          
        </ul>
        </div>
    )
}