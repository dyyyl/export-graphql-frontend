import styled from 'styled-components/macro';

const Title = styled.h1`
  color: var(--primary);
  font-size: 16rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 930px) {
    font-size: 8rem;
  }

  @media screen and (max-width: 465px) {
    font-size: 4rem;
  }
`;

export default Title;
