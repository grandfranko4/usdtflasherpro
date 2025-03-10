import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/blog/BlogPost';
import DocumentationPage from './pages/DocumentationPage';
import TutorialsPage from './pages/TutorialsPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';
import DisclaimerPage from './pages/DisclaimerPage';
import ContactPage from './pages/ContactPage';
import SupportPage from './pages/SupportPage';
import PartnershipsPage from './pages/PartnershipsPage';
import CareersPage from './pages/CareersPage';
import PaymentPage from './pages/PaymentPage';
import ThankYouPage from './pages/ThankYouPage';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/payment/:plan" element={<PaymentPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default App;
