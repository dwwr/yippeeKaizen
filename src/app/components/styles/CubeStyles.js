import styled from 'styled-components';

const StyledCube = styled.div`
  background: #dc2e2e;
  width: 100px;
  height: 100px;
  position: relative;
  grid-column-start: 1;

  ::before {
    content: '';
        display: inline-block;
        background: #f15757;
        width: 100px;
        height: 20px;
        transform: skewX(-40deg);
        position: absolute;
        top: -20px;
        left: 8px;
  }
  ::after {
    content: '';
        display: inline-block;
        background: #9e1515;
        width: 16px;
        height: 100px;
        transform: skewY(-50deg);
        position: absolute;
        top: -10px;
        left: 100%;
  }
`;

export {StyledCube};