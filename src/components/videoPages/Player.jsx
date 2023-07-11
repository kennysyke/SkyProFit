import React from 'react';
import ReactPlayer from 'react-player';
import * as Styled from "./styles";

export const Player = () => {
    return (
      <Styled.Player>
        <ReactPlayer
          url="<https://www.youtube.com/watch?v=oqe98Dxivns>"
          width="100%"
          height="100%"
          controls
        />
      </Styled.Player>
    );
      
}

