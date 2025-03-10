import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import styled from 'styled-components';

const DocContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SidebarTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li<{ active: boolean }>`
  margin-bottom: 0.5rem;
  
  a {
    display: block;
    padding: 0.75rem 1rem;
    color: ${({ active }) => (active ? 'var(--primary-color)' : 'var(--text-color)')};
    background-color: ${({ active }) => (active ? 'var(--background-light)' : 'transparent')};
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: ${({ active }) => (active ? '600' : '400')};
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--background-light);
      color: var(--primary-color);
    }
  }
`;

const SubNavList = styled.ul`
  list-style: none;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
`;

const Content = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
    color: var(--text-color);
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
    color: var(--text-color);
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.7;
    }
  }
  
  code {
    background-color: var(--background-dark);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: monospace;
    font-size: 0.9em;
  }
  
  pre {
    background-color: var(--background-dark);
    padding: 1rem;
    border-radius: var(--border-radius);
    overflow-x: auto;
    margin-bottom: 1.5rem;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
    
    th, td {
      padding: 0.75rem;
      border: 1px solid var(--border-color);
    }
    
    th {
      background-color: var(--background-dark);
      text-align: left;
    }
    
    tr:nth-child(even) {
      background-color: var(--background-light);
    }
  }
`;

const DocumentationPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  
  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      subsections: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'installation', title: 'Installation' },
        { id: 'quick-start', title: 'Quick Start Guide' },
      ],
    },
    {
      id: 'basic-usage',
      title: 'Basic Usage',
      subsections: [
        { id: 'interface', title: 'User Interface' },
        { id: 'flashing', title: 'Flashing USDT' },
        { id: 'wallet-setup', title: 'Wallet Setup' },
      ],
    },
    {
      id: 'advanced',
      title: 'Advanced Features',
      subsections: [
        { id: 'multi-network', title: 'Multi-Network Support' },
        { id: 'batch-flashing', title: 'Batch Flashing' },
        { id: 'scheduling', title: 'Scheduling Operations' },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      subsections: [
        { id: 'common-issues', title: 'Common Issues' },
        { id: 'error-codes', title: 'Error Codes' },
        { id: 'support', title: 'Getting Support' },
      ],
    },
    {
      id: 'api',
      title: 'API Reference',
      subsections: [
        { id: 'authentication', title: 'Authentication' },
        { id: 'endpoints', title: 'Endpoints' },
        { id: 'examples', title: 'Code Examples' },
      ],
    },
  ];
  
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };
  
  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <>
            <h2>Getting Started with USDT FLASHER PRO</h2>
            
            <h3 id="introduction">Introduction</h3>
            <p>
              Welcome to the USDT FLASHER PRO documentation! This guide will help you understand how to use our software to flash USDT efficiently and securely. USDT FLASHER PRO is designed to be user-friendly while providing powerful features for both beginners and advanced users.
            </p>
            <p>
              USDT flashing is a process that allows you to create temporary USDT tokens that can be used for various purposes. Our software ensures that these tokens are fully tradable, swappable, and transferable with a validity of 365+ days.
            </p>
            
            <h3 id="installation">Installation</h3>
            <p>
              To install USDT FLASHER PRO, follow these simple steps:
            </p>
            <ol>
              <li>Download the latest version from your account dashboard after purchase</li>
              <li>Extract the ZIP file to your preferred location</li>
              <li>Run the installer and follow the on-screen instructions</li>
              <li>Launch the application and enter your license key when prompted</li>
            </ol>
            <p>
              System Requirements:
            </p>
            <ul>
              <li>Windows 10/11 or macOS 10.15+</li>
              <li>4GB RAM minimum (8GB recommended)</li>
              <li>500MB free disk space</li>
              <li>Stable internet connection</li>
            </ul>
            
            <h3 id="quick-start">Quick Start Guide</h3>
            <p>
              After installation, follow these steps to start flashing USDT:
            </p>
            <ol>
              <li>Launch USDT FLASHER PRO</li>
              <li>Connect your wallet using the "Connect Wallet" button</li>
              <li>Select the network you want to use (TRC20, ERC20, etc.)</li>
              <li>Enter the amount of USDT you want to flash</li>
              <li>Click "Flash USDT" to start the process</li>
              <li>Wait for the confirmation message</li>
              <li>Check your wallet to verify the flashed USDT</li>
            </ol>
            <p>
              Congratulations! You've successfully flashed your first USDT with our software. For more detailed instructions, please refer to the Basic Usage section.
            </p>
          </>
        );
      
      case 'basic-usage':
        return (
          <>
            <h2>Basic Usage</h2>
            
            <h3 id="interface">User Interface</h3>
            <p>
              The USDT FLASHER PRO interface is designed to be intuitive and easy to navigate. Here's an overview of the main sections:
            </p>
            <ul>
              <li><strong>Dashboard:</strong> Displays your flashing statistics, account balance, and recent activities</li>
              <li><strong>Flash:</strong> The main section where you can flash new USDT</li>
              <li><strong>Wallet:</strong> Manage your connected wallets and view transaction history</li>
              <li><strong>Settings:</strong> Configure application preferences and security options</li>
              <li><strong>Support:</strong> Access help resources and contact customer support</li>
            </ul>
            
            <h3 id="flashing">Flashing USDT</h3>
            <p>
              To flash USDT, navigate to the Flash section and follow these steps:
            </p>
            <ol>
              <li>Select the network you want to use (TRC20 is recommended for beginners)</li>
              <li>Enter the amount of USDT you want to flash (within your plan limits)</li>
              <li>Choose the destination wallet address (or use your connected wallet)</li>
              <li>Set the flash duration (default is 365 days)</li>
              <li>Review the transaction details</li>
              <li>Click "Flash USDT" to execute</li>
            </ol>
            <p>
              The flashing process typically takes 1-3 minutes to complete. You'll receive a notification once the transaction is confirmed on the blockchain.
            </p>
            
            <h3 id="wallet-setup">Wallet Setup</h3>
            <p>
              USDT FLASHER PRO supports various wallet types. To set up your wallet:
            </p>
            <ol>
              <li>Go to the Wallet section</li>
              <li>Click "Add Wallet"</li>
              <li>Choose your wallet provider (MetaMask, TronLink, etc.)</li>
              <li>Follow the connection prompts</li>
              <li>Verify your wallet is connected by checking the status indicator</li>
            </ol>
            <p>
              For security reasons, we recommend using a dedicated wallet for flashing operations, separate from your main investment wallet.
            </p>
          </>
        );
      
      default:
        return (
          <div>
            <h2>Documentation</h2>
            <p>Please select a topic from the sidebar to view its documentation.</p>
          </div>
        );
    }
  };
  
  return (
    <Layout>
      <SEO
        title="Documentation | USDT FLASHER PRO"
        description="Comprehensive documentation for USDT FLASHER PRO software. Learn how to install, configure, and use all features effectively."
        keywords="USDT flasher documentation, user guide, tutorial, how to use, USDT flashing instructions"
      />
      
      <Section
        title="Documentation"
        subtitle="Comprehensive guides and reference materials to help you get the most out of USDT FLASHER PRO."
        background="light"
        padding="large"
      >
        <DocContainer>
          <Sidebar>
            <SidebarTitle>Contents</SidebarTitle>
            <NavList>
              {sections.map((section) => (
                <NavItem key={section.id} active={activeSection === section.id}>
                  <a href={`#${section.id}`} onClick={() => handleSectionClick(section.id)}>
                    {section.title}
                  </a>
                  {activeSection === section.id && (
                    <SubNavList>
                      {section.subsections.map((subsection) => (
                        <NavItem key={subsection.id} active={false}>
                          <a href={`#${subsection.id}`}>{subsection.title}</a>
                        </NavItem>
                      ))}
                    </SubNavList>
                  )}
                </NavItem>
              ))}
            </NavList>
          </Sidebar>
          
          <Content>
            {renderContent()}
          </Content>
        </DocContainer>
      </Section>
    </Layout>
  );
};

export default DocumentationPage;
