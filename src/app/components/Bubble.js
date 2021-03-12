import React, { useState, useEffect, useRef } from 'react';
import {StyledBubble} from './styles/BubbleStyles';
import {StyledCube} from './styles/CubeStyles';
import {StyledPyramid} from './styles/PyramidStyles';
import {StyledSphere} from './styles/SphereStyles';
import { Illustration, Ellipse, Shape, Group, useRender  } from 'react-zdog';


const Test = () => {
  return (
    <Shape
    path={[{ x: 0, y: -8 }, { x: 8, y: 8 }, { x: -8, y: 8 }]}
    translate={{ z: 10 }}
    color="#E62"
    stroke={3}
    fill
  />
  );
}
const Bubble = (props) => {

  return (
    <StyledBubble>
      {/* <StyledSphere />
      <StyledPyramid />
      <StyledCube /> */}
      <Illustration zoom={10} height={100} style = {{gridColumnStart: '3'}}>
      <Test />
  </Illustration>
    </StyledBubble >
  );
}

export default Bubble;