import { Box, Text, Container, Flex, Image } from "theme-ui";
//import BlockTitle from 'components/block-title';
import React from "react";

//import ArrowOdd from 'assets/arrow-odd.png';
//import ArrowEven from 'assets/arrow-even.png';
import Intro1 from "assets/intro-1.png";
import Intro2 from "assets/intro-2.png";

const WorkFlow = () => {
  return (
    <Box as="section" sx={styles.workflow}>
      <Container
        sx={{
          padding: "0px !important",
          margin: "0px !important",
          maxWidth: "100%",
          textAlign: "center !important",
        }}
      >
        <Flex sx={styles.workflow.row}>
          <Box
            sx={{
              position: "relative !important",
              marginLeft: "33.33333333%",
              flex: "0 0 auto",
              width: "33.3333333%",
            }}
          >
            <Image src={Intro1} sx={styles.workflow.intro1} alt="Intro1" />
            <Image src={Intro2} sx={styles.workflow.intro2} alt="Intro2" />
            <Text
              as="H2"
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: 2,
                color: "#000",
                "@media only screen and (max-width: 720px)": {
                  fontSize: "20px",
                },
              }}
            >
              Connect.Grow.Innovate
            </Text>
            <Text
              as="p"
              sx={{
                fontSize: "18px",
                fontWeight: "regular",
                lineHeight: 2,
                color: "#000",
                marginTop: "20px",
                "@media only screen and (max-width: 720px)": {
                  fontSize: "14px",
                },
              }}
            >
              Connect with people who have similar interests and are equally
              passionate about learning, sharing and creating fun new
              experiences.
            </Text>
            <Text
              as="p"
              sx={{
                fontSize: "18px",
                fontWeight: "regular",
                lineHeight: 2,
                color: "#000",
                marginTop: "10px",
                "@media only screen and (max-width: 720px)": {
                  fontSize: "14px",
                },
              }}
            >
              Get advice and feedback from founders who have been there, done
              that, bought the t-shirt and everything in between.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default WorkFlow;

const styles = {
  workflow: {
    fontFamily: "futura !important",
    backgroundColor: "#fafafa",
    position: "relative",
    pt: "100px",
    pb: "20px",
    "@media screen and (max-width: 1366px)": {
      pb: "100px",
    },
    "@media screen and (max-width: 992px)": {
      pb: "60px",
      paddingTop: "60px",
    },
    blockTitle: {
      marginBottom: [30, null, 55],
      textAlign: "center",
    },

    row: {
      flexWrap: "wrap",
      display: "flex",
      overflow: "hidden",
      paddingBottom: "80px",
    },

    intro1: {
      position: "absolute",
      top: "0",
      left: "0",
      transform: "translateX(-120%)",
      width: "500px",
    },
    intro2: {
      position: "absolute",
      top: "0",
      left: "0",
      transform: "translateX(120%)",
      width: "500px",
    },

    iconBox: {
      width: "70px",
      height: "70px",
      borderRadius: "40%",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      mb: 30,
      fontSize: 30,
      fontWeight: 700,
      justifyContent: "center",
      color: "black",
      boxShadow: "0px 14px 20px rgba(76, 119, 171, 0.1)",
      "@media screen and (max-width: 560px)": {
        width: "50px",
        height: "50px",
        fontSize: 24,
        borderRadius: 20,
        mb: 25,
      },
      "@media screen and (max-width: 480px)": {
        mb: 20,
      },
    },
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      mt: "-5px",
      title: {
        fontSize: 22,
        color: "black",
        lineHeight: 1.55,
        fontWeight: 500,
        mb: "15px",
        "@media screen and (max-width: 1200px)": {
          fontSize: 20,
          lineHeight: 1.4,
        },
        "@media screen and (max-width: 480px)": {
          fontSize: "18px",
          lineHeight: 1.45,
          mb: "10px",
        },
      },

      subTitle: {
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: "1.73",
        color: "#343D48",
        "@media screen and (max-width: 480px)": {
          fontSize: "15px",
          lineHeight: "1.85",
        },
      },
    },
  },
};
