// src/sections/blog-previews.js
import React from 'react';
import BlogPostPreview from '../components/blog-post-preview';
import { useStaticQuery, graphql } from 'gatsby';

const blogDomain = 'https://blog.francescoperticarari.com';

const BlogPreviews = () => {
    const data = useStaticQuery(graphql`
      query {
        hashnode {
          user(username: "fpert041") {
            publication {
              posts(page: 0) {
                _id
                title
                brief
                slug
                coverImage
              }
            }
          }
        }
      }
    `);
  
    const posts = data.hashnode.user.publication.posts;
  
    // Rest of your component implementation
    return (
        <div>
          <h2>Posts</h2>
          {posts.map(post => (
            <BlogPostPreview
              key={post._id}
              title={post.title}
              brief={post.brief}
              url={`${blogDomain}/${post.slug}`}
              coverImage={post.coverImage}
            />
          ))}
        </div>
      );
  };

export default BlogPreviews;



