import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const HeroContainer = styled.div`
  background: linear-gradient(120deg, #1a1a2e 0%, #16213e 100%);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      45deg,
      rgba(30, 144, 255, 0.03) 0%,
      rgba(30, 144, 255, 0.03) 1%,
      transparent 1%,
      transparent 4%
    );
    animation: gradient 15s ease infinite;
    transform-origin: center;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(30, 144, 255, 0.2) 0%, transparent 70%);
  
  &.top-right {
    top: 10%;
    right: 15%;
  }
  
  &.bottom-left {
    bottom: 10%;
    left: 15%;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    display: block;
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    
    span {
      font-size: 2.5rem;
    }
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a2e;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 135, 0.2);
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  
  &:hover {
    transform: translateY(-2px);
    border-color: rgba(96, 239, 255, 0.4);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <GlowEffect className="top-right" />
      <GlowEffect className="bottom-left" />
      <HeroContent>
        <HeroTitle>
          Next-Gen
          <span>USDT FLASH Technology</span>
        </HeroTitle>
        <HeroSubtitle>
          Experience the future of USDT transactions with our advanced flashing platform.
          Generate up to $10M daily with industry-leading 365-day validity and complete
          trading flexibility.
        </HeroSubtitle>
        
        <ButtonGroup>
          <PrimaryButton 
            size="large" 
            onClick={() => window.location.href = '/#pricing'}
          >
            Start Flashing
          </PrimaryButton>
          <SecondaryButton 
            size="large" 
            variant="outline" 
            onClick={() => window.location.href = '/about'}
          >
            Learn More
          </SecondaryButton>
        </ButtonGroup>
        
        <StatsContainer>
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
            <StatLabel>Success Rate</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>24/7</StatValue>
            <StatLabel>Expert Support</StatLabel>
          </StatItem>
        </StatsContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
