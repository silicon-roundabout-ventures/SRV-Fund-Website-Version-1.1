// src/pages/blog.js
import React from 'react';
import BlogPreviews from '../sections/blog-previews';
import { StickyProvider } from "contexts/app/app.provider";
import Seo from "components/seo";
import Layout from "components/layout";

const BlogPage = ({ data }) => {
  return (
    <StickyProvider>
      <Layout>
        <Seo
        description="Blogging about DeepTech, Venture Capital and how we are building Silicon Roundabout Ventures"
        title="Building in Public"
        />
        <BlogPreviews />
      </Layout>
    </StickyProvider>
  );
};

export default BlogPage;



