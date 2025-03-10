import React from 'react';
import styled from 'styled-components';
import Section from '../common/Section';

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Step = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-color);
`;

const StepDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Register an Account',
      description: 'Sign up to gain access to our USDT TRC20 Flashing Software. The registration process is quick and straightforward, requiring only basic information.',
    },
    {
      title: 'Download and Install',
      description: 'Get the software on your preferred device. Our software is compatible with Windows, macOS, and Linux operating systems.',
    },
    {
      title: 'Generate Flash USDT',
      description: 'Select the amount (up to $10,000,000) and initiate the flashing process. Our software will generate the flash USDT tokens instantly.',
    },
    {
      title: 'Confirm Transactions',
      description: 'Complete the process with full blockchain confirmation. This ensures that your flashed USDT appears legitimate on the blockchain.',
    },
    {
      title: 'Trade, Swap, or Transfer',
      description: 'Use the flashed USDT across any platform that supports it. You can trade on exchanges, swap for other cryptocurrencies, or transfer to other wallets.',
    },
  ];

  return (
    <Section
      id="how-it-works"
      title="How It Works"
      subtitle="Our USDT FLASHER PRO software is designed to be simple and efficient. Follow these steps to get started."
      
      background="dark"
      padding="large"
    >
      <StepsContainer>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepNumber>{index + 1}</StepNumber>
            <StepContent>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </Step>
        ))}
      </StepsContainer>
    </Section>
  );
};

export default HowItWorks;
