import React from 'react';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import styled from 'styled-components';

const TermsContainer = styled.div`
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

const TermsPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Service | USDT FLASHER PRO"
        description="Read the terms of service for USDT FLASHER PRO. Learn about the rules, guidelines, and legal terms governing the use of our software."
        keywords="terms of service, legal terms, USDT flasher terms, user agreement, conditions of use"
      />
      
      <Section
        title="Terms of Service"
        subtitle="Please read these terms carefully before using USDT FLASHER PRO."
        background="light"
        padding="large"
      >
        <TermsContainer>
          <LastUpdated>Last Updated: March 1, 2025</LastUpdated>
          
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using USDT FLASHER PRO software ("the Software"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Software.
          </p>
          <p>
            We reserve the right to modify these Terms at any time. Your continued use of the Software after any such changes constitutes your acceptance of the new Terms.
          </p>
          
          <h3>2. License and Restrictions</h3>
          <p>
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to use the Software for your personal or business purposes.
          </p>
          <p>
            You may not:
          </p>
          <ul>
            <li>Copy, modify, or create derivative works of the Software</li>
            <li>Reverse engineer, decompile, or disassemble the Software</li>
            <li>Remove any copyright or proprietary notices from the Software</li>
            <li>Use the Software for any illegal purpose</li>
            <li>Transfer, sublicense, or resell the Software to any third party</li>
            <li>Use the Software to harm, threaten, or harass any person or entity</li>
          </ul>
          
          <h3>3. Account Registration</h3>
          <p>
            To use certain features of the Software, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
          <p>
            You agree to provide accurate and complete information when creating your account and to update your information as necessary to keep it accurate and complete.
          </p>
          
          <h3>4. Payment and Refunds</h3>
          <p>
            The Software is available for purchase under different pricing plans. By purchasing a license, you agree to pay the applicable fees as described on our website.
          </p>
          <p>
            All purchases are final and non-refundable, except as described in our Refund Policy or as required by applicable law. Please refer to our <a href="/refund">Refund Policy</a> for more information.
          </p>
          
          <h3>5. Intellectual Property</h3>
          <p>
            The Software and all related content, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the property of USDT FLASHER PRO or its licensors and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You may not use our trademarks, logos, or other proprietary information without our prior written consent.
          </p>
          
          <h3>6. Disclaimer of Warranties</h3>
          <p>
            THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SOFTWARE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
          
          <h3>7. Limitation of Liability</h3>
          <p>
            IN NO EVENT SHALL USDT FLASHER PRO, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
          </p>
          <ul>
            <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SOFTWARE</li>
            <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SOFTWARE</li>
            <li>ANY CONTENT OBTAINED FROM THE SOFTWARE</li>
            <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
          </ul>
          <p>
            IN ANY CASE, OUR AGGREGATE LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SOFTWARE.
          </p>
          
          <h3>8. Indemnification</h3>
          <p>
            You agree to defend, indemnify, and hold harmless USDT FLASHER PRO and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Software or your violation of these Terms.
          </p>
          
          <h3>9. Termination</h3>
          <p>
            We may terminate or suspend your access to the Software immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
          </p>
          <p>
            Upon termination, your right to use the Software will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
          
          <h3>10. Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which USDT FLASHER PRO is established, without regard to its conflict of law provisions.
          </p>
          
          <h3>11. Contact Information</h3>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:support@usdtflasherpro.com">support@usdtflasherpro.com</a>.
          </p>
        </TermsContainer>
      </Section>
    </Layout>
  );
};

export default TermsPage;
