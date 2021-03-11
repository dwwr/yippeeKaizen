import React from 'react';
import {StyledBubble} from './styles/BubbleStyles';
import {StyledCube} from './styles/CubeStyles';
import {StyledPyramid} from './styles/PyramidStyles';
import {StyledSphere} from './styles/SphereStyles';
import { Illustration, Shape } from 'react-zdog';


const Bubble = (props) => {

  return (
    <StyledBubble>
      <StyledSphere />
      <StyledPyramid />
      <StyledCube />
      <Illustration zoom={8}>
    <Shape stroke={20} color="green" rotate={{ x: Math.PI }} />
  </Illustration>,
    </StyledBubble >
  );
}

export default Bubble;