import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/common/SEO';
import styled from 'styled-components';
import { getBlogPostBySlug } from '../../services/blogService';

const BlogPostContainer = styled.div`
  background: linear-gradient(120deg, #1a1a2e 0%, #16213e 100%);
  padding: 6rem 0;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const BlogTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BlogDate = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2rem;
`;

const FeaturedImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 3rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const BlogContent = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.8;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2.5rem 0 1.5rem;
    background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 2rem 0 1rem;
    background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #60efff;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #00ff87;
    }
  }
`;

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <SEO
        title={`${post.title} | USDT FLASHER PRO Blog`}
        description={post.excerpt}
        keywords="USDT flasher, cryptocurrency, blockchain, digital assets"
      />
      
      <BlogPostContainer>
        <ContentWrapper>
          <BlogHeader>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogDate>{post.date}</BlogDate>
          </BlogHeader>
          
          {post.image && (
            <FeaturedImage>
              <img src={post.image} alt={post.title} />
            </FeaturedImage>
          )}
          
          <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
        </ContentWrapper>
      </BlogPostContainer>
    </Layout>
  );
};

export default BlogPost; 