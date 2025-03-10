import React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  ctaText?: string;
  ctaLink?: string;
  highlighted?: boolean;
  onCtaClick?: () => void;
}

const CardContainer = styled.div<{ highlighted: boolean }>`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  ${({ highlighted }) =>
    highlighted &&
    `
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
    
    &::before {
      content: 'POPULAR';
      position: absolute;
      top: 20px;
      right: -35px;
      background-color: var(--primary-color);
      color: var(--secondary-color);
      padding: 0.5rem 3rem;
      font-size: 0.75rem;
      font-weight: bold;
      transform: rotate(45deg);
    }
  `}
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const CardPrice = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const CardPeriod = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex: 1;
`;

const FeatureItem = styled.li<{ included: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: ${({ included }) => (included ? 'var(--text-color)' : 'var(--text-secondary)')};
  
  &::before {
    content: '${({ included }) => (included ? '✓' : '✕')}';
    color: ${({ included }) => (included ? 'var(--primary-color)' : 'var(--text-secondary)')};
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  ctaText = 'Get Started',
  ctaLink,
  highlighted = false,
  onCtaClick,
}) => {
  return (
    <CardContainer highlighted={highlighted}>
      <CardTitle>{title}</CardTitle>
      <CardPrice>{price}</CardPrice>
      {period && <CardPeriod>{period}</CardPeriod>}
      <CardDescription>{description}</CardDescription>
      
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index} included={feature.included}>
            {feature.text}
          </FeatureItem>
        ))}
      </FeaturesList>
      
      {ctaLink ? (
        <Button
          fullWidth
          onClick={onCtaClick}
          variant={highlighted ? 'primary' : 'outline'}
          to={ctaLink}
        >
          {ctaText}
        </Button>
      ) : (
        <Button
          fullWidth
          onClick={onCtaClick}
          variant={highlighted ? 'primary' : 'outline'}
        >
          {ctaText}
        </Button>
      )}
    </CardContainer>
  );
};

export default PricingCard;
