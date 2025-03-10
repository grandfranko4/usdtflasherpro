import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--background-light);
  padding: 3rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding: 1.5rem 1rem 0;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.875rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.25rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>USDT FLASHER PRO</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/#features">Features</FooterLink>
          <FooterLink to="/#pricing">Pricing</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink to="/#faq">FAQ</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/documentation">Documentation</FooterLink>
          <FooterLink to="/tutorials">Tutorials</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink to="/terms">Terms of Service</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/refund">Refund Policy</FooterLink>
          <FooterLink to="/disclaimer">Disclaimer</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
          <FooterLink to="/partnerships">Partnerships</FooterLink>
          <FooterLink to="/careers">Careers</FooterLink>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>© {new Date().getFullYear()} USDT FLASHER PRO. All rights reserved.</Copyright>
        <SocialLinks>
          <SocialLink href="#" aria-label="Twitter">𝕏</SocialLink>
          <SocialLink href="#" aria-label="Facebook">f</SocialLink>
          <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
          <SocialLink href="#" aria-label="Telegram">✈️</SocialLink>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
