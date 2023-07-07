import React from 'react';
import yoga from '../../images/courses-wide/yoga.png';


export function CourseDescription () {

    return (
        <div>
        <div>
        <img
            src={yoga}
            alt="Course yoga"
        />
        </div>
        <div>
           <h1>Подойдет для вас, если:</h1>
           <ol>
               <li>Давно хотели попробовать йогу, но не решались начать.</li>
               <li>Хотите укрепить позвоночник, избавиться от болей в спине и суставах.</li>
               <li>Ищете активность, полезную для тела и души.</li>
           </ol>
           </div>
           <div>

           <h1>Направления:</h1>
           <ul>
               <li>Йога для новичков</li>
               <li>Классическая йога</li>
               <li>Йогатерапия</li>
               <li>Кундалини-йога </li>
               <li>Хатха-йога</li>
               <li>Аштанга-йога</li>
            
           </ul>
           </div>
           
        <div>
        <h3>Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.</h3>
        </div>
        </div>
    )
}