import React from 'react';
import {StyledBubble} from './styles/BubbleStyles';
import {StyledCube} from './styles/CubeStyles';
import {StyledPyramid} from './styles/PyramidStyles';


const Bubble = (props) => {

  return (
    <StyledBubble>
      <StyledCube />
      <StyledPyramid />
      </StyledBubble >
  );
}

export default Bubble;