import styled from 'styled-components/macro';

const MainContainer = styled.main`
  grid-area: main;
  background-color: var(--background);

  height: 100%;
  display: grid;
  gap: 5vh;
  place-content: center;
`;

export default MainContainer;
