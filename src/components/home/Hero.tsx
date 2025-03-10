import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const HeroContainer = styled.div`
  background: linear-gradient(135deg, var(--background-dark) 0%, var(--background-light) 100%);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(0, 255, 0, 0.1) 0%, transparent 50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 80% 30%, rgba(0, 255, 0, 0.1) 0%, transparent 50%);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: var(--text-secondary);
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const HeroStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: var(--text-secondary);
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          The Ultimate <span>USDT FLASHER PRO</span> Software
        </HeroTitle>
        <HeroSubtitle>
          Flash up to $10,000,000 USDT daily with our secure and flexible solution. 
          Our USDT TRC20 Flashing Software enables fully tradable, swappable, and 
          transferable flash USDT with 365-day validity.
        </HeroSubtitle>
        
        <ButtonGroup>
          <Button size="large" onClick={() => window.location.href = '/#pricing'}>
            Get Started
          </Button>
          <Button size="large" variant="outline" onClick={() => window.location.href = '/about'}>
            Learn More
          </Button>
        </ButtonGroup>
        
        <HeroStats>
          <StatItem>
            <StatValue>$10M+</StatValue>
            <StatLabel>Daily Flash Limit</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>365</StatValue>
            <StatLabel>Days Validity</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>100%</StatValue>
            <StatLabel>Transferable</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>24/7</StatValue>
            <StatLabel>Support</StatLabel>
          </StatItem>
        </HeroStats>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
