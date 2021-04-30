import styled from 'styled-components/macro';

const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 15vw 1fr;
  grid-template-rows: 5vh 1fr;
  grid-template-areas:
    'navigation header'
    'navigation main';
`;

export default Layout;
