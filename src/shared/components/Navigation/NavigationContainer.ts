import styled from 'styled-components/macro';

const NavigationContainer = styled.nav`
  grid-area: navigation;
  box-shadow: 0px 8px 16px 0px #27283329;

  display: grid;
  grid-template-rows: 5vh repeat(3, max-content) 1fr;
  grid-template-areas:
    'company'
    'invoice'
    'document'
    'support';
`;

export default NavigationContainer;
