import React from 'react';
import styled from 'styled-components';

const PricingContainer = styled.div`
  background: linear-gradient(120deg, #1a1a2e 0%, #16213e 100%);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 135, 0.1) 0%, transparent 70%);
  
  &.top-left {
    top: -10%;
    left: -10%;
  }
  
  &.bottom-right {
    bottom: -10%;
    right: -10%;
    background: radial-gradient(circle, rgba(96, 239, 255, 0.1) 0%, transparent 70%);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const PricingCard = styled.div<{ highlighted?: boolean }>`
  background: ${props => props.highlighted 
    ? 'linear-gradient(135deg, rgba(0, 255, 135, 0.1) 0%, rgba(96, 239, 255, 0.1) 100%)'
    : 'rgba(255, 255, 255, 0.03)'};
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid ${props => props.highlighted 
    ? 'rgba(0, 255, 135, 0.2)'
    : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  ${props => props.highlighted && `
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(0, 255, 135, 0.1);
  `}
  
  &:hover {
    transform: ${props => props.highlighted ? 'scale(1.08)' : 'scale(1.03)'};
    box-shadow: 0 0 50px rgba(96, 239, 255, 0.1);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a2e;
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PlanPrice = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin: 1.5rem 0;
  color: #fff;
  
  span {
    font-size: 1rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const PlanDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

const FeatureItem = styled.li<{ included: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${props => props.included ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)'};
  font-size: 0.95rem;
  
  &:before {
    content: ${props => props.included ? '"✓"' : '"×"'};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 0.75rem;
    background: ${props => props.included 
      ? 'linear-gradient(135deg, #00ff87 0%, #60efff 100%)'
      : 'rgba(255, 255, 255, 0.1)'};
    border-radius: 50%;
    font-size: 0.75rem;
    color: ${props => props.included ? '#1a1a2e' : 'rgba(255, 255, 255, 0.4)'};
  }
`;

const CTAButton = styled.a<{ highlighted?: boolean }>`
  display: inline-block;
  width: 100%;
  padding: 1rem;
  text-align: center;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  ${props => props.highlighted
    ? `
      background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
      color: #1a1a2e;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 255, 135, 0.2);
      }
    `
    : `
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      
      &:hover {
        transform: translateY(-2px);
        border-color: rgba(96, 239, 255, 0.4);
      }
    `}
`;

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Demo License',
      price: '$15',
      period: 'One-time payment',
      description: 'Perfect for beginners who want to try out our USDT flashing software.',
      features: [
        { text: '$40 Max Flash USDT (One Time)', included: true },
        { text: '1 Day of Access', included: true },
        { text: 'All Supported Networks', included: true },
        { text: '365+ Days Live Flash', included: true },
        { text: 'Email Support', included: true },
        { text: 'Software Updates', included: false },
        { text: 'Priority Support', included: false },
      ],
      ctaText: 'Try Demo',
      ctaLink: '/payment/demo',
      highlighted: false,
    },
    {
      title: 'Basic License',
      price: '$2,500',
      period: 'One-time payment',
      description: 'Our most popular plan for serious users who need more flashing power.',
      features: [
        { text: '$20,000,000 Daily Flash USDT', included: true },
        { text: '365 Days of Access', included: true },
        { text: 'All Supported Networks', included: true },
        { text: '365+ Days Live Flash', included: true },
        { text: 'Email Support', included: true },
        { text: 'Software Updates', included: true },
        { text: 'Priority Support', included: true },
      ],
      ctaText: 'Get Started',
      ctaLink: '/payment/basic',
      highlighted: true,
    },
    {
      title: 'Pro License',
      price: '$5,000',
      period: 'One-time payment',
      description: 'For professional traders and businesses who need maximum flashing capacity.',
      features: [
        { text: '$200,000,000 Daily Flash USDT', included: true },
        { text: 'Lifetime Access', included: true },
        { text: 'All Supported Networks', included: true },
        { text: '365+ Days Live Flash', included: true },
        { text: 'Email Support', included: true },
        { text: 'Software Updates', included: true },
        { text: 'Priority Support', included: true },
      ],
      ctaText: 'Go Pro',
      ctaLink: '/payment/pro',
      highlighted: false,
    },
  ];

  return (
    <PricingContainer id="pricing">
      <GlowEffect className="top-left" />
      <GlowEffect className="bottom-right" />
      <ContentWrapper>
        <SectionTitle>Choose Your Plan</SectionTitle>
        <SectionSubtitle>
          Select the perfect plan for your needs with our flexible pricing options.
          All plans include core features with different flashing limits.
        </SectionSubtitle>
        <PricingGrid>
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} highlighted={plan.highlighted}>
              {plan.highlighted && <PopularBadge>Most Popular</PopularBadge>}
              <PlanTitle>{plan.title}</PlanTitle>
              <PlanPrice>
                {plan.price} <span>/ {plan.period}</span>
              </PlanPrice>
              <PlanDescription>{plan.description}</PlanDescription>
              <FeaturesList>
                {plan.features.map((feature, featureIndex) => (
                  <FeatureItem key={featureIndex} included={feature.included}>
                    {feature.text}
                  </FeatureItem>
                ))}
              </FeaturesList>
              <CTAButton 
                href={plan.ctaLink}
                highlighted={plan.highlighted}
              >
                {plan.ctaText}
              </CTAButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </ContentWrapper>
    </PricingContainer>
  );
};

export default Pricing;
