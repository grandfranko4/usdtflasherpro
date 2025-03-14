import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonicalUrl }) => {
  const location = useLocation();
  const currentUrl = `https://usdtflasherpro.com${location.pathname}`;
  // In a real application, we would use react-helmet-async here
  // But for simplicity, we'll just update the document title directly
  React.useEffect(() => {
    document.title = title;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }
    
    // Add or update canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const finalCanonicalUrl = canonicalUrl || currentUrl;
    
    if (canonicalLink) {
      canonicalLink.setAttribute('href', finalCanonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = finalCanonicalUrl;
      document.head.appendChild(link);
    }
  }, [title, description, keywords, canonicalUrl, currentUrl]);
  
  return null;
};

export default SEO;
