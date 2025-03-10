import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  background?: 'dark' | 'light' | 'gradient';
  centered?: boolean;
  padding?: 'small' | 'medium' | 'large';
}

const SectionContainer = styled.section<{
  background: 'dark' | 'light' | 'gradient';
  padding: 'small' | 'medium' | 'large';
}>`
  width: 100%;
  
  ${({ background }) => {
    switch (background) {
      case 'light':
        return `background-color: var(--background-light);`;
      case 'gradient':
        return `background: linear-gradient(135deg, var(--background-dark) 0%, var(--background-light) 100%);`;
      case 'dark':
      default:
        return `background-color: var(--background-dark);`;
    }
  }}
  
  ${({ padding }) => {
    switch (padding) {
      case 'small':
        return `padding: 2rem 0;`;
      case 'large':
        return `padding: 6rem 0;`;
      case 'medium':
      default:
        return `padding: 4rem 0;`;
    }
  }}
`;

const SectionContent = styled.div<{ centered: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
`;

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  background = 'dark',
  centered = false,
  padding = 'medium',
}) => {
  return (
    <SectionContainer id={id} background={background} padding={padding}>
      <SectionContent centered={centered}>
        {title && <SectionTitle>{title}</SectionTitle>}
        {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
