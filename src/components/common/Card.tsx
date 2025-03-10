import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  highlighted?: boolean;
  onClick?: () => void;
}

const CardContainer = styled.div<{ highlighted: boolean; clickable: boolean }>`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  ${({ highlighted }) =>
    highlighted &&
    `
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  `}
  
  ${({ clickable }) =>
    clickable &&
    `
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  `}
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const CardContent = styled.div`
  flex: 1;
`;

const Card: React.FC<CardProps> = ({
  title,
  icon,
  children,
  highlighted = false,
  onClick,
}) => {
  return (
    <CardContainer
      highlighted={highlighted}
      clickable={!!onClick}
      onClick={onClick}
    >
      {icon && <CardIcon>{icon}</CardIcon>}
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};

export default Card;
