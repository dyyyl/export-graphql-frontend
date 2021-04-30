import styled from 'styled-components/macro';

interface NavigationSectionProps {
  hasBorder?: boolean;
}

const NavigationSection = styled.ul<NavigationSectionProps>`
  padding: 10%;
  display: grid;
  gap: 1rem;

  ${({ hasBorder }) =>
    hasBorder && 'border-bottom: 1px solid var(--background);'}

  &:last-child {
    padding: 20% 10%;
    align-self: end;
  }
`;

export default NavigationSection;
