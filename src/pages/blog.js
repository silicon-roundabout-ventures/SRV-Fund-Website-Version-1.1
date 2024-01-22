// src/pages/blog.js
import React from 'react';
import BlogPreviews from '../sections/blog-previews';
import { StickyProvider } from "contexts/app/app.provider";
import Seo from "components/seo";
import Layout from "components/layout";
import Helmet from 'react-helmet';

const BlogPage = ({ data }) => {
  window.SubstackFeedWidget = {
    substackUrl: "siliconroundaboutcommunity.substack.com",
    posts: 12,
    layout: "right",
    colors: {
      primary: "#FFFFFF",
      secondary: "#DBDBDB",
      background: "#000000",
    }
  };
  return (
    <StickyProvider>
      <Helmet>
        <script src="https://substackapi.com/embeds/feed.js"></script>
       </Helmet>
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
