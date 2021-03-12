import styled from 'styled-components';

const StyledBubble = styled.div`
  min-height: 200px;
  margin: auto;
  width: 80%;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

export {StyledBubble};