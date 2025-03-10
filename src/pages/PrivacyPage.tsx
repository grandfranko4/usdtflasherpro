import React from 'react';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
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
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LastUpdated = styled.p`
  font-style: italic;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const PrivacyPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | USDT FLASHER PRO"
        description="Learn how USDT FLASHER PRO collects, uses, and protects your personal information. Our privacy policy explains our data practices and your rights."
        keywords="privacy policy, data protection, personal information, USDT flasher privacy, data security"
      />
      
      <Section
        title="Privacy Policy"
        subtitle="We are committed to protecting your privacy and personal data."
        background="light"
        padding="large"
      >
        <PrivacyContainer>
          <LastUpdated>Last Updated: March 1, 2025</LastUpdated>
          
          <h3>1. Introduction</h3>
          <p>
            This Privacy Policy explains how USDT FLASHER PRO ("we", "us", or "our") collects, uses, and shares your personal information when you use our software, website, or services (collectively, the "Services").
          </p>
          <p>
            By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
          </p>
          
          <h3>2. Information We Collect</h3>
          <p>
            We collect several types of information from and about users of our Services, including:
          </p>
          <ul>
            <li><strong>Personal Information:</strong> This includes information that can be used to identify you, such as your name, email address, and payment information.</li>
            <li><strong>Usage Data:</strong> We collect information about how you use our Services, including your IP address, browser type, operating system, and the pages you visit.</li>
            <li><strong>Transaction Data:</strong> When you purchase our software, we collect information about the transaction, including the purchase amount and date.</li>
            <li><strong>Wallet Information:</strong> If you connect your cryptocurrency wallet to our Services, we may collect your wallet address and transaction history related to our Services.</li>
          </ul>
          
          <h3>3. How We Collect Information</h3>
          <p>
            We collect information in the following ways:
          </p>
          <ul>
            <li><strong>Direct Collection:</strong> Information you provide to us when you create an account, purchase our software, or contact our support team.</li>
            <li><strong>Automated Collection:</strong> As you interact with our Services, we may use cookies and similar technologies to collect information about your equipment, browsing actions, and patterns.</li>
            <li><strong>Third-Party Sources:</strong> We may receive information about you from third-party partners, such as payment processors and analytics providers.</li>
          </ul>
          
          <h3>4. How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our Services</li>
            <li>Process transactions and send related information</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Protect against harmful, unauthorized, or illegal activity</li>
          </ul>
          
          <h3>5. How We Share Your Information</h3>
          <p>
            We may share your personal information with:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> Companies that perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.</li>
            <li><strong>Business Partners:</strong> Trusted third parties who help us provide and improve our Services.</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.</li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>
          
          <h3>6. Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h3>7. Your Rights and Choices</h3>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul>
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to correct inaccurate or incomplete information</li>
            <li>The right to delete your personal information</li>
            <li>The right to restrict or object to processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent at any time</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
          </p>
          
          <h3>8. Cookies and Similar Technologies</h3>
          <p>
            We use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our Services. This helps us provide you with a good experience when you use our Services and allows us to improve our Services.
          </p>
          <p>
            You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of our Services may be inaccessible or not function properly.
          </p>
          
          <h3>9. Children's Privacy</h3>
          <p>
            Our Services are not intended for children under the age of 18, and we do not knowingly collect personal information from children under 18. If we learn we have collected or received personal information from a child under 18, we will delete that information.
          </p>
          
          <h3>10. International Data Transfers</h3>
          <p>
            Your personal information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.
          </p>
          <p>
            By using our Services, you consent to the transfer of your personal information to countries outside your country of residence, including the United States, where our servers are located.
          </p>
          
          <h3>11. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p>
            We encourage you to review this Privacy Policy periodically for any changes.
          </p>
          
          <h3>12. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p>
            Email: <a href="mailto:privacy@usdtflasherpro.com">privacy@usdtflasherpro.com</a>
          </p>
        </PrivacyContainer>
      </Section>
    </Layout>
  );
};

export default PrivacyPage;
