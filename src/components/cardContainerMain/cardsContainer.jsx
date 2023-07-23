import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from "./styles";
import { CARDS } from '../../constants';

export function CardsContainer() {

  return (    
      <Styled.CoursesContainer>
      {CARDS.map((card) => (                
            <Link to={`/course/${card.id}`} key={card.id}>
                <Styled.CourseCard src={card.image} alt={card.alt}/>
            </Link>                    
        ))}
      </Styled.CoursesContainer>      
  );
}