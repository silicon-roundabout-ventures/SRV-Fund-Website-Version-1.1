// src/components/blog-post-preview.js
import React from 'react';
import './blog-post-preview.css';

const BlogPostPreview = ({ title, brief, url, coverImage }) => {
  return (
    <div className="blog-post-preview">
      <div className="blog-post-preview__image" style={{ backgroundImage: `url(${coverImage})` }} />
      <div className="blog-post-preview__content">
        <h2 className="blog-post-preview__title">{title}</h2>
        <p className="blog-post-preview__brief">{brief}</p>
        <a className="blog-post-preview__read-more" href={url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  );
};

export default BlogPostPreview;
