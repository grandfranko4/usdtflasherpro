import React from 'react';
import styled from 'styled-components';
import Section from '../common/Section';

const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background-color: var(--background-dark);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  color: var(--text-color);
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-weight: bold;
  color: var(--primary-color);
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: bold;
  color: var(--text-color);
`;

const AuthorTitle = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "I've been using the USDT FLASHER PRO for six months, and it has transformed my trading strategy. The ability to flash up to $10,000,000 daily is a game-changer!",
      name: "Mark T.",
      title: "Professional Crypto Trader",
      initials: "MT",
    },
    {
      text: "This software is incredibly intuitive and secure. The 365-day flash period gives me plenty of time to plan my financial moves.",
      name: "Sarah L.",
      title: "Financial Analyst",
      initials: "SL",
    },
    {
      text: "With this software, I can flash large amounts of USDT for arbitrage trading across multiple exchanges. The ability to transfer, swap, and trade flashed USDT just like real USDT makes it the perfect tool for maximizing profits.",
      name: "James R.",
      title: "Arbitrage Trader",
      initials: "JR",
    },
    {
      text: "I use the USDT FLASHER PRO for liquidity testing in my business. The software allows me to simulate real transactions before committing actual funds, helping me make smarter financial decisions.",
      name: "Emily W.",
      title: "Business Owner",
      initials: "EW",
    },
    {
      text: "As a blockchain developer, I need to test my projects in real-time without spending actual USDT. The software allows me to flash up to $10,000,000, making it an essential tool for smart contract testing and blockchain simulations.",
      name: "Daniel K.",
      title: "Blockchain Developer",
      initials: "DK",
    },
    {
      text: "Managing digital assets requires flexibility, and this software provides just that! I can flash USDT, use it across wallets and platforms, and take advantage of market opportunities without exposing real funds.",
      name: "Olivia S.",
      title: "Digital Asset Manager",
      initials: "OS",
    },
  ];

  return (
    <Section
      id="testimonials"
      title="Success Stories"
      subtitle="Don't just take our word for it. Here's what our users have to say about USDT FLASHER PRO."
      centered
      background="dark"
      padding="large"
    >
      <TestimonialsContainer>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <TestimonialAuthor>
              <AuthorAvatar>{testimonial.initials}</AuthorAvatar>
              <AuthorInfo>
                <AuthorName>{testimonial.name}</AuthorName>
                <AuthorTitle>{testimonial.title}</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialsContainer>
    </Section>
  );
};

export default Testimonials;
