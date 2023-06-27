// src/pages/blog.js
import React from 'react';
import BlogPreviews from '../sections/blog-previews';

const BlogPage = ({ data }) => {
  return (
    <div>
      <h1>My Blog Posts</h1>
      <BlogPreviews />
    </div>
  );
};

export default BlogPage;



