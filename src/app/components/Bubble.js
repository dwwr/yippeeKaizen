import React, { useState, useEffect, useRef } from 'react';
import {StyledBubble} from './styles/BubbleStyles';
import {StyledCube} from './styles/CubeStyles';
import {StyledPyramid} from './styles/PyramidStyles';
import {StyledSphere} from './styles/SphereStyles';
import { Anchor, Illustration, Ellipse, Shape, Group, useRender, useZdog } from 'react-zdog';
import { a, useSpring } from 'react-spring/zdog';

const TAU = Math.PI * 2
const Test = () => {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    // Test taking an object away
    setTimeout(() => setVisible(false), 2000)
  }, [])

  const group = useRef()
  useRender(() => (group.current.rotate.y += 0.1))

  return (
    <Group ref={group}>
    <Shape
    path={[{ x: 0, y: -8 }, { x: 8, y: 8 }, { x: -8, y: 8 }]}
    translate={{ z: 10 }}
    rotate={{ z: -TAU / 4 }}
    color="#E62"
    stroke={3}
    fill
  />
  </Group>
  );
}
const Bubble = (props) => {




  return (
    <StyledBubble>
      {/* <StyledSphere />
      <StyledPyramid />
      <StyledCube /> */}

      <Illustration zoom={10} height={100}  style = {{gridColumnStart: '3'}}>
      <Test />
  </Illustration>
    </StyledBubble >
  );
}

export default Bubble;