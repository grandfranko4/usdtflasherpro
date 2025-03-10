import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/Flasher_logo.png';

const HeaderContainer = styled.header`
  background-color: var(--background-light);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    margin-right: 1rem;
  }
  
  h1 {
    font-size: 1.5rem;
    margin: 0;
    color: var(--primary-color);
    font-weight: 700;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  margin-left: 2rem;
  font-weight: 500;
  transition: color 0.3s ease;
  text-decoration: none;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background-color: var(--background-dark);
  padding: 2rem;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  z-index: 200;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  color: var(--text-color);
  margin-bottom: 1.5rem;
  font-weight: 500;
  font-size: 1.2rem;
  text-decoration: none;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 2rem;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 150;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="USDT FLASHER PRO Logo" />
            <h1>USDT FLASHER PRO</h1>
          </Link>
        </Logo>
        
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/#features" onClick={() => window.location.href = '/#features'}>Features</NavLink>
          <NavLink to="/#pricing" onClick={() => window.location.href = '/#pricing'}>Pricing</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/#faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          ☰
        </MobileMenuButton>
      </NavContainer>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={closeMobileMenu}>✕</CloseButton>
        <MobileNavLink to="/" onClick={closeMobileMenu}>Home</MobileNavLink>
        <MobileNavLink to="/#features" onClick={() => {closeMobileMenu(); window.location.href = '/#features';}}>Features</MobileNavLink>
        <MobileNavLink to="/#pricing" onClick={() => {closeMobileMenu(); window.location.href = '/#pricing';}}>Pricing</MobileNavLink>
        <MobileNavLink to="/about" onClick={closeMobileMenu}>About</MobileNavLink>
        <MobileNavLink to="/#faq" onClick={closeMobileMenu}>FAQ</MobileNavLink>
        <MobileNavLink to="/contact" onClick={closeMobileMenu}>Contact</MobileNavLink>
      </MobileMenu>
      
      <Overlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
    </HeaderContainer>
  );
};

export default Header;
