import styled from 'styled-components';

interface SemiboldProps {
  centered?: boolean;
}

const Semibold = styled.span<SemiboldProps>`
  font-size: 1.4rem;
  font-weight: 500;

  color: var(--primary);

  ${({ centered }) => centered && 'place-self: center;'}
`;

export default Semibold;
