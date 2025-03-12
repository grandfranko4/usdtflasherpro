import React from 'react';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="USDT Flashing Software | USDT FLASHER PRO"
        description="Flash up to $20,000,000 USDT daily with our secure and flexible solution. Our USDT TRC20 Flashing Software enables fully tradable, swappable, and transferable flash USDT with 365-day validity."
        keywords="USDT flashing software, USDT flasher, USDT flash software, flash USDT, USDT TRC20 flashing, cryptocurrency, blockchain, crypto trading"
      />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default HomePage;
