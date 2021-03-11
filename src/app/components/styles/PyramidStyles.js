import styled from 'styled-components';

const StyledPyramid = styled.div`
  width: 100px;
  height: 200px;
  position: relative;
  margin: 50px;
  ::before, ::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border: 50px solid;
    position: absolute;
  }
  ::before {
    border-color: transparent transparent #7700ff transparent;
    transform: scaleY(2) skewY(-40deg) rotate(45deg);
    }
  ::after {
    border-color: transparent transparent #5500b6 transparent;
    transform: scaleY(2) skewY(40deg) rotate(-45deg);
  }
`;

export {StyledPyramid};