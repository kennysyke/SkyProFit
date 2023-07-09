import React from 'react';
import * as Styled from "./styles";

export function CourseBanner({src, alt}) {
  return (    
      <Styled.CourseBannerContent>
        <Styled.LargeImage src={src} alt={alt} />
      </Styled.CourseBannerContent>      
  );
}