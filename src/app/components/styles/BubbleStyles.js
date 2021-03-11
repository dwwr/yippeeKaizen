import styled from 'styled-components';

const StyledBubble = styled.div`
  height: 100%;
  margin: auto;
  width: 80%;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  grid-template-columns: 1fr 8fr 1fr;
  align-items: start;
  justify-content: center;
`;

export {StyledBubble};