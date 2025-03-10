import React from 'react';
import styled from 'styled-components';
import Section from '../common/Section';

const FeaturesContainer = styled.div`
  background: linear-gradient(120deg, #1a1a2e 0%, #16213e 100%);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto 4rem auto;
`;

const Features: React.FC = () => {
  const features = [
    {
      title: 'Advanced Flash Technology',
      description: 'Experience cutting-edge USDT flashing with our proprietary technology that ensures maximum efficiency and success rates.',
      icon: '⚡',
    },
    {
      title: 'Extended Validity Period',
      description: 'Benefit from our industry-leading 365-day validity period, giving you maximum flexibility for your transactions.',
      icon: '📅',
    },
    {
      title: 'Complete Trading Freedom',
      description: 'Trade, swap, and transfer your flashed USDT across any platform or wallet with full blockchain confirmation.',
      icon: '🔄',
    },
    {
      title: 'Enhanced Security',
      description: 'Rest easy with our military-grade encryption and privacy protection systems ensuring untraceable transactions.',
      icon: '🔒',
    },
    {
      title: 'Real-time Verification',
      description: 'Every transaction receives instant blockchain confirmation, maintaining authenticity and reliability.',
      icon: '✅',
    },
    {
      title: 'Premium Support',
      description: 'Access our dedicated 24/7 expert support team for immediate assistance and guidance.',
      icon: '💫',
    },
  ];

  return (
    <FeaturesContainer>
      <SectionTitle>Powerful Features</SectionTitle>
      <SectionSubtitle>
        Discover why our USDT Flash platform leads the industry with innovative features
        and unmatched capabilities.
      </SectionSubtitle>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconContainer>{feature.icon}</IconContainer>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </FeaturesContainer>
  );
};

export default Features;
