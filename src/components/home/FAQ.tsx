import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../common/Section';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItemContainer = styled.div`
  margin-bottom: 1rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: var(--background-dark);
  box-shadow: var(--box-shadow);
`;

const FAQQuestion = styled.div<{ isOpen: boolean }>`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  color: ${({ isOpen }) => (isOpen ? 'var(--primary-color)' : 'var(--text-color)')};
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FAQAnswer = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem')};
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Icon = styled.span<{ isOpen: boolean }>`
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
`;

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <FAQItemContainer>
      <FAQQuestion isOpen={isOpen} onClick={onClick}>
        {question}
        <Icon isOpen={isOpen}>+</Icon>
      </FAQQuestion>
      <FAQAnswer isOpen={isOpen} dangerouslySetInnerHTML={{ __html: answer }} />
    </FAQItemContainer>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'How do I guarantee I get the software?',
      answer: 'We offer a 30-day refund policy if you\'re not satisfied with our product. Our software is 100% functional as described, and we provide immediate delivery after payment confirmation. Your purchase is risk-free, and our customer support team is available to assist with any issues you might encounter.',
    },
    {
      question: 'How do I know the software is working?',
      answer: 'We recommend purchasing our Demo License first to test the functionality before committing to a higher-tier plan. The Demo License allows you to experience all features with a limited flash amount, giving you confidence in our product\'s capabilities. You can verify transactions on the blockchain and see the flashed USDT in your wallet.',
    },
    {
      question: 'What is USDT TRC20 Flashing Software?',
      answer: 'USDT TRC20 Flashing Software is a tool that allows users to generate and transfer flash USDT on the TRON network. The flashed USDT remains active for 365 days before disappearing and can be traded, swapped, and transferred to all supported wallets and platforms.',
    },
    {
      question: 'How does USDT TRC20 Flashing Software work?',
      answer: 'It creates temporary yet functional USDT transactions that are confirmed on the blockchain. These transactions can be used for trading, swapping, and transfers, just like real USDT.',
    },
    {
      question: 'How long does flashed USDT last?',
      answer: 'Flashed USDT remains active for 365 days before automatically disappearing.',
    },
    {
      question: 'Is the flashed USDT real?',
      answer: 'Flashed USDT behaves like real USDT—it can be traded, swapped, and transferred—but it disappears after the validity period.',
    },
    {
      question: 'What is the maximum amount I can flash daily?',
      answer: 'You can flash up to $10,000,000 USDT daily, depending on your plan.',
    },
    {
      question: 'Can flashed USDT be swapped for other cryptocurrencies?',
      answer: 'Yes, flashed USDT can be swapped for Bitcoin (BTC), Ethereum (ETH), and other cryptocurrencies on supported platforms.',
    },
    {
      question: 'Is USDT TRC20 Flashing Software safe to use?',
      answer: 'Yes, our software uses advanced encryption to ensure secure and untraceable transactions.',
    },
    {
      question: 'Which wallets support flashed USDT?',
      answer: 'Flashed USDT works with any wallet that supports USDT TRC20, including Trust Wallet, TronLink, MetaMask (TRON network), and exchange wallets.',
    },
  ];

  return (
    <Section
      id="faq"
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about USDT FLASHER PRO."
      centered
      background="light"
      padding="large"
    >
      <FAQContainer>
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </FAQContainer>
    </Section>
  );
};

export default FAQ;
