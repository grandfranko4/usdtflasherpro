import React from 'react';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import styled from 'styled-components';

const TutorialsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const VideoSection = styled.div`
  margin-bottom: 4rem;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background-color: var(--background-dark);
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: var(--box-shadow);
`;

const VideoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  
  svg {
    width: 80px;
    height: 80px;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    font-size: 1rem;
    max-width: 500px;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const TutorialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TutorialCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .thumbnail {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    background-color: var(--background-dark);
    
    .play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      svg {
        width: 24px;
        height: 24px;
        color: white;
      }
    }
  }
  
  .content {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: var(--text-color);
    }
    
    p {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }
    
    .meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--text-secondary);
    }
  }
`;

const ComingSoonSection = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  margin-top: 4rem;
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const TutorialsPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Video Tutorials | USDT FLASHER PRO"
        description="Learn how to use USDT FLASHER PRO with our comprehensive video tutorials. Step-by-step guides for beginners and advanced users."
        keywords="tutorials, video guides, how to use USDT flasher, USDT flasher tutorial, crypto tutorial"
      />
      
      <Section
        title="Video Tutorials"
        subtitle="Learn how to use USDT FLASHER PRO with our step-by-step video tutorials. From basic setup to advanced features, we've got you covered."
        background="light"
        padding="large"
      >
        <TutorialsContainer>
          <VideoSection>
            <h2>Getting Started with USDT FLASHER PRO</h2>
            <VideoContainer>
              <VideoPlaceholder>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
                <h3>Tutorial Video Coming Soon</h3>
                <p>
                  We're currently working on a comprehensive tutorial video to help you get started with USDT FLASHER PRO. Check back soon for updates!
                </p>
                <Button variant="primary">
                  Subscribe for Updates
                </Button>
              </VideoPlaceholder>
            </VideoContainer>
            
            <p>
              This comprehensive tutorial will walk you through the entire process of setting up and using USDT FLASHER PRO. You'll learn how to install the software, connect your wallet, configure the settings, and perform your first USDT flash. Perfect for beginners who are just getting started with cryptocurrency flashing.
            </p>
          </VideoSection>
          
          <h2>More Tutorials</h2>
          <TutorialsList>
            <TutorialCard>
              <div className="thumbnail">
                <div className="play-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>
                </div>
              </div>
              <div className="content">
                <h3>Wallet Connection Guide</h3>
                <p>
                  Learn how to securely connect your cryptocurrency wallet to USDT FLASHER PRO for seamless transactions.
                </p>
                <div className="meta">
                  <span>Duration: 8:45</span>
                  <span>Coming Soon</span>
                </div>
              </div>
            </TutorialCard>
            
            <TutorialCard>
              <div className="thumbnail">
                <div className="play-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>
                </div>
              </div>
              <div className="content">
                <h3>Advanced Settings Configuration</h3>
                <p>
                  Discover how to optimize your USDT FLASHER PRO settings for maximum efficiency and success rate.
                </p>
                <div className="meta">
                  <span>Duration: 12:20</span>
                  <span>Coming Soon</span>
                </div>
              </div>
            </TutorialCard>
            
            <TutorialCard>
              <div className="thumbnail">
                <div className="play-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>
                </div>
              </div>
              <div className="content">
                <h3>Multi-Network Flashing</h3>
                <p>
                  Master the technique of flashing USDT across multiple blockchain networks for increased profits.
                </p>
                <div className="meta">
                  <span>Duration: 15:30</span>
                  <span>Coming Soon</span>
                </div>
              </div>
            </TutorialCard>
            
            <TutorialCard>
              <div className="thumbnail">
                <div className="play-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>
                </div>
              </div>
              <div className="content">
                <h3>Troubleshooting Common Issues</h3>
                <p>
                  Solutions to common problems you might encounter while using USDT FLASHER PRO and how to resolve them.
                </p>
                <div className="meta">
                  <span>Duration: 10:15</span>
                  <span>Coming Soon</span>
                </div>
              </div>
            </TutorialCard>
          </TutorialsList>
          
          <ComingSoonSection>
            <h3>More Tutorials Coming Soon</h3>
            <p>
              We're constantly working on new tutorial videos to help you get the most out of USDT FLASHER PRO. Subscribe to our newsletter to be notified when new tutorials are available.
            </p>
            <Button variant="primary">
              Subscribe to Updates
            </Button>
          </ComingSoonSection>
        </TutorialsContainer>
      </Section>
    </Layout>
  );
};

export default TutorialsPage;
