import React, { useState, useEffect, useRef } from 'react';
import {StyledBubble} from './styles/BubbleStyles';
import {StyledCube} from './styles/CubeStyles';
import {StyledPyramid} from './styles/PyramidStyles';
import {StyledSphere} from './styles/SphereStyles';
import { Anchor, Illustration, Ellipse, Shape, Group, useRender  } from 'react-zdog';
import { a, useSpring } from 'react-spring/zdog';

const TAU = Math.PI * 2
const Test = () => {
  return (
    <Shape
    path={[{ x: 0, y: -8 }, { x: 8, y: 8 }, { x: -8, y: 8 }]}
    translate={{ z: 10 }}
    rotate={{ z: -TAU / 4 }}
    color="#E62"
    stroke={3}
    fill
  />
  );
}
const Bubble = (props) => {
  const ref = useRef()
  let t = 0
  useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)))

  return (
    <StyledBubble>
      {/* <StyledSphere />
      <StyledPyramid />
      <StyledCube /> */}
      <Illustration zoom={10} height={100} ref={ref} style = {{gridColumnStart: '3'}}>
      <Test />
  </Illustration>
    </StyledBubble >
  );
}

export default Bubble;