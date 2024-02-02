// src/sections/blog-previews.js
import React from 'react';
//import BlogPostPreview from '../components/blog-post-preview';
//import { useStaticQuery, graphql } from 'gatsby';

import { Box, Flex, Container, Text } from "theme-ui";
// import srvgif from 'assets/srv.gif';
import { Link } from "components/link";

import Footer from '../components/footer/footer';

const BlogPreviews = () => {
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
              marginTop: "80px",
              color: "#fff",
              textAlign: "center",
              paddingLeft: "120px",
              paddingRight: "120px",
              // textDecoration: 'underline',

              "@media only screen and (max-width: 992px)": {
                fontSize: "18px",
                marginTop: "60px",
                paddingLeft: "40px",
                paddingRight: "40px",
              },
            }}
          >
            Building our VC firm in Public:
          </Text>
          <Text
            sx={{
              fontSize: "16px",
              fontWeight: "regular",
              lineHeight: 2.0,
              marginTop: "30px",
              textAlign: "center",
              color: "#fff",
              "@media only screen and (max-width: 992px)": {
                fontSize: "8px",
                marginTop: "10px",
              },
            }}
          >
            <p>
              Every month Silicon Roundabout Ventures GP, Francesco Perticarari, sends this public list the (almost identical) update sent to our LPs. Exclusive perks, information, and sensitive information may need to be redacted, but as much as possible is shared publicly. We also, occasionally, share research articles, data on the state of European Deeptech, and tools we used to build our VC firm.
            </p>
            <i><blockquote>
              <span>“Francesco is blazing the trail, so that others can run along the path.”</span>
              <br />
              <span>─Dave Neumann, Molten Ventures FoF Team & Silicon Roundabout Ventures LP</span>
            </blockquote></i>
            <br/>
            <p>
              Get the next report in your inbox:
            </p>
          </Text>
          <Link
            path="https://blog.siliconroundabout.ventures/subscribe"
            label="New Articles Release Signup"
            sx={styles.banner.form.link.button}
            variant="buttons.primary"
          />
          <Box sx={styles.banner.startups}>
            <h2>Posts</h2>
            <div id="substack-feed-embed"></div>
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
            path="https://blog.siliconroundabout.ventures"
            label="Silicon Roundabout Ventures Community"
            sx={styles.banner.form.link.button}
            variant="buttons.primary"
          />
        </Flex>


        <Footer />

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
          marginTop: "10px",
          marginBottom: "10px",
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
