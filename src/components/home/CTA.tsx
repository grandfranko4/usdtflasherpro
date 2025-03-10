import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const CTAContainer = styled.div`
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

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CTA: React.FC = () => {
  return (
    <CTAContainer>
      <CTAContent>
        <CTATitle>
          Ready to Experience the Power of <span>USDT FLASHER PRO</span>?
        </CTATitle>
        <CTASubtitle>
          Join thousands of satisfied users who are already benefiting from our advanced USDT flashing technology.
          Get started today and revolutionize your cryptocurrency transactions.
        </CTASubtitle>
        <Button size="large" onClick={() => window.location.href = '/contact'}>
          Get Started Now
        </Button>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTA;
