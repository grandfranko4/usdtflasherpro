import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import styled from 'styled-components';

const ThankYouContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 2rem;
`;

const SuccessIcon = styled.div`
  margin-bottom: 2rem;
  
  svg {
    width: 100px;
    height: 100px;
    color: #00c000;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
`;

const Message = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const InfoCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  margin-top: 3rem;
  text-align: left;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
  
  ul {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    
    li {
      margin-bottom: 0.75rem;
      line-height: 1.7;
    }
  }
`;

const ThankYouPage: React.FC = () => {
  const location = useLocation();
  
  // Get purchase details from location state or use default values
  const purchaseDetails = location.state?.purchase || {
    product: 'USDT FLASHER PRO License',
    email: 'your email address',
  };
  
  return (
    <Layout>
      <SEO
        title="Thank You | USDT FLASHER PRO"
        description="Thank you for your purchase of USDT FLASHER PRO. Your order has been received and is being processed."
        keywords="thank you, order confirmation, purchase complete, USDT flasher"
      />
      
      <Section
        title="Thank You for Your Purchase"
        subtitle="Your order has been received and is being processed. We appreciate your business and trust in USDT FLASHER PRO."
        background="light"
        padding="large"
        isMainTitle={true}
      >
        <ThankYouContainer>
          <SuccessIcon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
          </SuccessIcon>
          
          <Title>Thank You for Your Purchase!</Title>
          <Message>
            Your order for {purchaseDetails.product} has been received and is being processed. We've sent a confirmation email to {purchaseDetails.email} with your order details.
          </Message>
          
          <InfoCard>
            <h3>What Happens Next?</h3>
            <ul>
              <li>Our team will verify your payment (this typically takes 1-24 hours).</li>
              <li>Once verified, we'll send your USDT FLASHER PRO license key to your email address.</li>
              <li>You'll also receive download instructions and setup guides to get started quickly.</li>
              <li>If you have any questions or concerns, please don't hesitate to contact our support team.</li>
            </ul>
          </InfoCard>
          
          <ButtonContainer>
            <Button to="/documentation" variant="outline">
              View Documentation
            </Button>
            <Button to="/contact" variant="outline">
              Contact Support
            </Button>
            <Button to="/" variant="primary">
              Return to Home
            </Button>
          </ButtonContainer>
        </ThankYouContainer>
      </Section>
    </Layout>
  );
};

export default ThankYouPage;
