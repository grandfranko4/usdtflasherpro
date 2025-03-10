import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import styled from 'styled-components';
import Button from '../components/common/Button';

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    ${BlogCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogDate = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const BlogExcerpt = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const BlogPage: React.FC = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding USDT Flashing: A Beginner\'s Guide',
      date: 'March 5, 2025',
      excerpt: 'Learn the basics of USDT flashing, how it works, and why it\'s becoming increasingly popular in the cryptocurrency world.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 2,
      title: 'Top 5 Security Practices for USDT Flashing',
      date: 'February 28, 2025',
      excerpt: 'Discover the essential security measures you should implement to protect your assets when using USDT flashing software.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 3,
      title: 'How to Maximize Your Returns with USDT Flashing',
      date: 'February 20, 2025',
      excerpt: 'Explore advanced strategies and techniques to optimize your USDT flashing operations and increase your profits.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 4,
      title: 'The Evolution of USDT Flashing Technology',
      date: 'February 15, 2025',
      excerpt: 'Take a journey through the history and development of USDT flashing technology, from its early days to current innovations.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 5,
      title: 'USDT Flashing vs. Traditional Crypto Trading: Pros and Cons',
      date: 'February 10, 2025',
      excerpt: 'Compare the advantages and disadvantages of USDT flashing against conventional cryptocurrency trading methods.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 6,
      title: 'Common Mistakes to Avoid in USDT Flashing',
      date: 'February 5, 2025',
      excerpt: 'Learn about the typical errors beginners make when starting with USDT flashing and how to avoid them for better results.',
      image: 'https://via.placeholder.com/600x400',
    },
  ];

  return (
    <Layout>
      <SEO
        title="Blog | USDT FLASHER PRO"
        description="Stay updated with the latest news, tips, and insights about USDT flashing and cryptocurrency trends."
        keywords="USDT flasher blog, cryptocurrency blog, blockchain news, USDT flashing tips, crypto guides"
      />
      
      <Section
        title="USDT FLASHER PRO Blog"
        subtitle="Stay updated with the latest news, tips, and insights about USDT flashing and cryptocurrency trends."
        background="light"
        padding="large"
        isMainTitle={true}
      >
        <BlogGrid>
          {blogPosts.map((post) => (
            <BlogCard key={post.id}>
              <BlogImage>
                <img src={post.image} alt={post.title} />
              </BlogImage>
              
              <BlogContent>
                <BlogDate>{post.date}</BlogDate>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <Button variant="outline" size="small">
                  Read More
                </Button>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
        
        <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '3rem' }}>
          <Button variant="primary" size="large">
            Load More Articles
          </Button>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: 'var(--background-light)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-color)' }}>About Our Blog</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', color: 'var(--text-color)' }}>
            Welcome to the USDT FLASHER PRO blog, your go-to resource for everything related to USDT flashing, cryptocurrency trends, and blockchain technology. Our team of experts regularly publishes in-depth articles, guides, and analysis to help you stay informed and make better decisions in the crypto space.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', color: 'var(--text-color)' }}>
            Whether you're a beginner looking to understand the basics of USDT flashing or an experienced user seeking advanced strategies, our blog offers valuable insights for everyone. We cover a wide range of topics including security best practices, market analysis, technical tutorials, and the latest developments in cryptocurrency.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', color: 'var(--text-color)' }}>
            Subscribe to our newsletter to receive the latest articles directly in your inbox and never miss an important update. If you have suggestions for topics you'd like us to cover or questions about any of our articles, feel free to reach out to our editorial team at <a href="mailto:blog@usdtflasherpro.com" style={{ color: 'var(--primary-color)' }}>blog@usdtflasherpro.com</a>.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <Button variant="outline">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default BlogPage;
