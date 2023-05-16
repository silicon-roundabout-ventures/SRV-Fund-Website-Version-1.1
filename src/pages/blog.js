// src/pages/blog.js
import React from 'react';
import { graphql } from 'gatsby';

const BlogPage = ({ data }) => {
  const posts = data.hashnode.user.publication.posts;

  return (
    <div>
      <h1>My Blog Posts</h1>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.brief}</p>
          <a href={post.slug} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query {
    hashnode {
      user(username: "fpert041") {
        publication {
          posts(page: 0) {
            _id
            title
            brief
            slug
          }
        }
      }
    }
  }
`;

export default BlogPage;
