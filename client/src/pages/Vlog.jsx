
import React, { useState } from 'react';
import blogsData from '../Datablog/blogs.json';
import '../style/BlogPage.css';



const BlogCard = ({ image, title, content }) => {
  const [expanded, setExpanded] = useState(false);

  // Split paragraphs
  const paragraphs = content.split(/<\/p>/).filter(p => p.trim() !== '');

  const firstParagraph = paragraphs[0] + '</p>';
  const remainingParagraphs = paragraphs.slice(1).join('</p>') + '</p>';

  return (
    <div className="content-block">
      <div className="content-image-card">
        <img
          src={image}
          alt={title}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background =
              'linear-gradient(45deg, #667eea, #764ba2)';
          }}
        />
      </div>

      <div className="content-text-wrapper">
        <h2>{title}</h2>

        {/* Always show the first paragraph */}
        <div
          className="content-text"
          dangerouslySetInnerHTML={{ __html: firstParagraph }}
        />

        {/* Show rest only when expanded */}
        {expanded && (
          <div
            className="content-text"
            dangerouslySetInnerHTML={{ __html: remainingParagraphs }}
          />
        )}

        {/* Toggle Button */}
        {paragraphs.length > 1 && (
          <button
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Read Less' : 'Read More'} <i>▼</i>
          </button>
        )}
      </div>
    </div>
  );
};




const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="container">
        <div className="hero-image">
          <div className="hero-content">
            <h1>Blogs</h1>
          </div>
        </div>

        <div className="content-section">
          {blogsData && blogsData.length > 0 ? (
            blogsData.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                title={blog.title}
                content={blog.content}
              />
            ))
          ) : (
            <p>No blog content available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

