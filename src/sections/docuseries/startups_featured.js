import { Box, Text, Container, Flex, Image } from "theme-ui";
import React from "react";

import { OutboundLink } from "gatsby-plugin-google-gtag";
import Zego from "assets/zego.png";
import Proximie from "assets/proximie.png";
import Blur from "assets/blur.png";

const FoundersTestimonial = () => {
  return (
    <Box as="section" sx={styles.workflow}>
      <Container
        sx={{
          padding: "0px !important",
          margin: "0px !important",
          maxWidth: "100%",
        }}
      >
        <Box sx={{ margingLeft: "40px", margingRight: "40px" }}>
          <Flex
            sx={{
              textAlign: "center !important",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              as="H2"
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: 2,
                color: "#fff",
                "@media only screen and (max-width: 720px)": {
                  fontSize: "22px",
                },
              }}
            >
              &#128561; Featuring!
            </Text>
            {/* <Text as='p' sx={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          lineHeight: 2,
                          color: '#fff',
                          '@media only screen and (max-width: 720px)': {
                            fontSize: '16px',
                          },
                        }}>
                      Their feedback, experiences, &amp; reviews have helped to develop program's ever-adapting structure.
            </Text> */}
          </Flex>
          <Flex sx={styles.workflow.column}>
            <Box as="div" sx={styles.workflow.box}>
              <Box sx={styles.workflow.box.testimonial}>
                <Image src={Zego} alt="Zego" />
                <Box>
                  <Text as="p" sx={styles.workflow.box.namebox.name}>
                    Stuart Kelly
                  </Text>
                  <Text as="p" sx={styles.workflow.box.namebox.position}>
                    Co-founder, CTO
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box as="div" sx={styles.workflow.box}>
              <Box sx={styles.workflow.box.testimonial}>
                <Image src={Proximie} alt="Proximie" />
                <Box>
                  <Text as="p" sx={styles.workflow.box.namebox.name}>
                    Nadine Hachach-Haram
                  </Text>
                  <Text as="p" sx={styles.workflow.box.namebox.position}>
                    Founder, CEO
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box as="div" sx={styles.workflow.box}>
              <Box sx={styles.workflow.box.testimonial}>
                <Image src={Blur} alt="Blur" />
                <Box>
                  <Text as="p" sx={styles.workflow.box.namebox.name}>
                    Announcing Soon!
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default FoundersTestimonial;

const styles = {
  workflow: {
    zIndex: 10,
    position: "relative",
    pb: "60px",
    pt: "20px",
    "@media screen and (max-width: 1366px)": {
      pb: "60px",
    },
    "@media screen and (max-width: 992px)": {
      pb: "20px",
    },
    blockTitle: {
      marginBottom: [30, null, 55],
      textAlign: "center",
    },

    column: {
      display: "flex",
      mt: "40px",
      overflow: "scroll",
      overflowX: "scroll",
      "@media only screen and (max-width: 720px)": {
        flexDirection: "column",
      },
    },

    box: {
      // width: '100%',
      px: "20px",
      minWidth: "400px",
      "@media only screen and (max-width: 720px)": {
        minWidth: "auto",
      },

      testimonial: {
        marginBottom: "20px",
        textAlign: "left !important",
        // backgroundColor: '#efefef',
        borderRadius: "9px",
        padding: "0px",
      },

      namebox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "20px",
        columnGap: "20px",

        name: {
          fontSize: "22px",
          fontWeight: "bold",
          lineHeight: 2,
          color: "#fff",
          textAlign: "center",
          "@media only screen and (max-width: 720px)": {
            fontSize: "16px",
          },
        },

        position: {
          fontSize: "16px",
          fontWeight: "light !important",
          lineHeight: "2",
          color: "#fff",
          textAlign: "center",
          "@media only screen and (max-width: 720px)": {
            fontSize: "14px",
          },
        },
      },

      img: {
        width: "512px",
        backgroundColor: "#ffffff00",
        // borderRadius: '9999px',
      },

      text: {
        fontSize: "14px",
        fontWeight: "light",
        lineHeight: 2,
        color: "#000",
        "@media only screen and (max-width: 720px)": {
          fontSize: "16px",
        },
      },
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
