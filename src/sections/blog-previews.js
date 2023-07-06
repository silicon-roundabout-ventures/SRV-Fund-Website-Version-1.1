// src/sections/blog-previews.js
import React from 'react';
import BlogPostPreview from '../components/blog-post-preview';
import { useStaticQuery, graphql } from 'gatsby';

import { Box, Flex, Container, Text } from "theme-ui";
// import srvgif from 'assets/srv.gif';
import { Link } from "components/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaLocationArrow,
  FaMailBulk,
  FaCopyright,
} from "react-icons/fa";


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

  // Rest of component implementation
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Flex sx={styles.banner.row}>
          {/* <Image sx={{width:'350px',height: '250px'}} src={srvgif}/> */}
          <Text
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              lineHeight: 2.0,
              marginTop: "120px",
              color: "#fff",
              textAlign: "center",
              paddingLeft: "120px",
              paddingRight: "120px",
              // textDecoration: 'underline',

              "@media only screen and (max-width: 992px)": {
                fontSize: "18px",
                marginTop: "140px",
                paddingLeft: "40px",
                paddingRight: "40px",
              },
            }}
          >
            Building our VC firm in the open:
          </Text>
          <Link
            path="https://blog.francescoperticarari.com/newsletter"
            label="New Articles Release Signup"
            sx={styles.banner.form.link.button}
            variant="buttons.primary"
          />


          <Box sx={styles.banner.startups}>
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
          </Box>
          <Text
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              lineHeight: 2.0,
              marginTop: "60px",
              color: "#fff",
              textAlign: "center",
              paddingLeft: "120px",
              paddingRight: "120px",
              // textDecoration: 'underline',

              "@media only screen and (max-width: 992px)": {
                fontSize: "18px",
                marginTop: "140px",
                paddingLeft: "40px",
                paddingRight: "40px",
              },
            }}
          >
            Check out more articles:
          </Text>
          <Link
            path="https://blog.francescoperticarari.com"
            label="@ TheEngineerVC.com"
            sx={styles.banner.form.link.button}
            variant="buttons.primary"
          />
        </Flex>


        <Box sx={styles.banner.footer}>
          <Box sx={styles.banner.footer.contact}>
            <span sx={{ fontSize: "1" }}>
              <FaMailBulk /> hello@siliconroundabout.tech
            </span>
            <span sx={{ fontSize: "1" }}>
              <FaLocationArrow /> London, UK
            </span>
          </Box>
          <Link
            target={"_blank"}
            to={"https://github.com/silicon-roundabout-ventures/"}
          >
            <FaGithub sx={styles.banner.footer.icons} />
          </Link>
          <Link target={"_blank"} to={"https://twitter.com/SiliconLondon"}>
            <FaTwitter sx={styles.banner.footer.icons} />
          </Link>
          <Link
            target={"_blank"}
            to={"https://www.linkedin.com/company/siliconroundabout/"}
          >
            <FaLinkedinIn sx={styles.banner.footer.icons} />
          </Link>
          <span sx={{ fontSize: "1" }}>
            <FaCopyright /> Silicon Roundabout Ventures @2022
          </span>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPreviews;




const styles = {
  banner: {
    background: "#000",
    height: "100vh",
    overflowX: "hidden",
    paddingTop: ["100px", "120px"],
    paddingBottom: ["0px", null, "30px"],
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",

    footer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "100%",
      marginTop: "160px",
      alignItems: "center",
      flexWrap: "wrap",

      "@media only screen and (max-width: 720px)": {
        marginTop: "160px",
        padding: "10px",
        paddingBottom: "40px",
        justifyContent: "space-evenly",
      },

      contact: {
        fontSize: 2,
        color: "#fff",
        flex: "0 0 84%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",

        "@media only screen and (max-width: 992px)": {
          display: "none",
        },

        text: {
          fontSize: 2,
          color: "#fff",
          flex: "0 0 84%",
        },
      },
      icons: {
        marginTop: "8%",
        color: "#fff",
        width: "3rem",
        height: "3rem",
        backgroundColor: "#000",
        display: "inline-flex",
        alignItems: "center",

        "@media only screen and (max-width: 992px)": {
          width: "2rem",
          height: "2rem",
        },
      },
    },


    container: {
      maxWidth: ["100%", null, null, null, null, "1240px", "1440px"],
    },
    row: {
      flexWrap: "wrap",
      display: "flex",
      marginLeft: "25px",
      marginTop: "40px",
      marginRight: "0",
      flexDirection: "column",
      "@media only screen and (max-width: 992px)": {
        marginLeft: "0px",
        marginRight: "0px",
      },
      alignItems: "center",
      gap: "20px",
    },
    col: {
      pl: "40px",
      pr: "15px",
      flex: ["1 1 100%", null, "0 0 50%"],
      zIndex: "100",
    },
    content: {
      paddingRight: [0, 0, 0, 0, "40px", 0, 0],
      yellow: {
        color: "#edbc3e",
      },

      p: {
        lineHeight: 2.33,
        color: "#02073E",
        marginTop: ["10px", null, null, "35px"],
        fontSize: ["15px", "18px"],
        pr: ["15px", 0],
        br: {
          display: ["none", null, null, null, null, "block"],
        },
      },
    },

    form: {
      position: "relative",
      width: "100%",
      maxWidth: ["200px", null, null, "345px"],
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
      marginTop: ["15px", null],
      height: ["50px", null, null, "50px", null, null, "50px"],
      marginBottom: ["20px", "30px", null, null, "40px"],
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "10px",

      input: {
        backgroundColor: "#000",
        position: "relative",
        top: 0,
        left: 0,
        paddingLeft: "25px",
        width: "100%",
        height: "100%",
        color: "#fff",
        boxShadow: "none !important",
        outline: "none !important",
        borderRadius: "8px",
        fontSize: ["15px", "16px"],
      },

      link: {
        textAlign: "center",
        position: "absolute",
        top: "50%",
        right: "25px",
        transform: "translateY(-50%)",
        fontSize: ["16px", "22px"],
        display: "flex",
        alignItems: "center",

        button: {
          paddingLeft: "25px",
          paddingRight: "25px",
          color: "#000",
          fontSize: "20px !important",
          backgroundColor: "#fff",
          borderRadius: "9px",
          marginTop: "40px",
          "&:hover": {
            color: "#000",
            backgroundColor: "grey",
            borderRadius: "9px",
          },
        },
      },
    },
  },
};
