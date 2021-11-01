import { Box, Text, Container, Flex /*Image*/ } from "theme-ui";
import React from "react";
// import { OutboundLink } from "gatsby-plugin-google-gtag"

// import Wholesale from "assets/wholesale.png";
// import Frazier from "assets/frazier.png";
// import EGSA from "assets/EGSA.png";

const Partner = () => {
  return (
    <Box as="section" sx={styles.workflow}>
      <Container sx={{ textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            mb: "80px",
          }}
        >
          <Text
            as="H2"
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              lineHeight: 2,
              color: "#000",
              "@media only screen and (max-width: 720px)": {
                fontSize: "22px",
              },
            }}
          >
            In 2019 we mentored 6 teams who ended up rasing over £3m! <br></br>
          </Text>
          <Flex sx={styles.workflow.row}>
            <Box as="span" sx={styles.workflow.box}>
              <Text
                sx={{
                  fontSize: "42px",
                  fontWeight: "bolder",
                  lineHeight: 1.7,
                  color: "#000",
                  "@media only screen and (max-width: 992px)": {
                    fontSize: "22px",
                  },
                }}
              >
                <a
                  href="https://www.circagene.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CircaGene
                </a>
                <br></br>
                <Text
                  sx={{
                    fontSize: "22px",
                    fontWeight: "bolder",
                    lineHeight: 1.7,
                    color: "#8a94a6",
                    "@media only screen and (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  £230,000 (Pre-Seed)
                </Text>
              </Text>
            </Box>
            <Box as="span" sx={styles.workflow.box}>
              <Text
                sx={{
                  fontSize: "42px",
                  fontWeight: "bolder",
                  lineHeight: 1.7,
                  color: "#000",
                  "@media only screen and (max-width: 992px)": {
                    fontSize: "22px",
                  },
                }}
              >
                <a href="https://zobi.ai/" target="_blank" rel="noreferrer">
                  Zobi
                </a>
                <br></br>
                <Text
                  sx={{
                    fontSize: "22px",
                    fontWeight: "bolder",
                    lineHeight: 1.7,
                    color: "#8a94a6",
                    "@media only screen and (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  £1,000,000 (Seed)
                </Text>
              </Text>
            </Box>
            <Box as="span" sx={styles.workflow.box}>
              <Text
                sx={{
                  fontSize: "42px",
                  fontWeight: "bolder",
                  lineHeight: 1.7,
                  color: "#000",
                  "@media only screen and (max-width: 992px)": {
                    fontSize: "22px",
                  },
                }}
              >
                <a
                  href="https://www.getsubly.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Subly
                </a>
                <br></br>
                <Text
                  sx={{
                    fontSize: "22px",
                    fontWeight: "bolder",
                    lineHeight: 1.7,
                    color: "#8a94a6",
                    "@media only screen and (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  £1,000,000 (Seed)
                </Text>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            mb: "80px",
          }}
        >
          <Text
            as="H2"
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              lineHeight: 2,
              color: "#000",
              "@media only screen and (max-width: 720px)": {
                fontSize: "22px",
              },
            }}
          >
            Silicon Roundabout has created a supportive ecosystem for...
          </Text>
          <Flex sx={styles.workflow.row}>
            <Box as="span" sx={styles.workflow.box}>
              <Text
                sx={{
                  fontSize: "42px",
                  fontWeight: "bolder",
                  lineHeight: 1.7,
                  color: "#000",
                  "@media only screen and (max-width: 992px)": {
                    fontSize: "22px",
                  },
                }}
              >
                5,000+ <br></br>
                <Text
                  sx={{
                    fontSize: "22px",
                    fontWeight: "bolder",
                    lineHeight: 1.7,
                    color: "#8a94a6",
                    "@media only screen and (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  Startup Founders &#128293;{" "}
                </Text>
              </Text>
            </Box>
            <Box as="span" sx={styles.workflow.box}>
              <Text
                sx={{
                  fontSize: "42px",
                  fontWeight: "bolder",
                  lineHeight: 1.7,
                  color: "#000",
                  "@media only screen and (max-width: 992px)": {
                    fontSize: "22px",
                  },
                }}
              >
                3 <br></br>
                <Text
                  sx={{
                    fontSize: "22px",
                    fontWeight: "bolder",
                    lineHeight: 1.7,
                    color: "#8a94a6",
                    "@media only screen and (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  Unicorns &#128640;
                </Text>
              </Text>
            </Box>
            <Box as="span" sx={styles.workflow.box}>
              <Text
                sx={{
                  fontSize: "42px",
                  fontWeight: "bolder",
                  lineHeight: 1.7,
                  color: "#000",
                  "@media only screen and (max-width: 992px)": {
                    fontSize: "22px",
                  },
                }}
              >
                4,000+ <br></br>
                <Text
                  sx={{
                    fontSize: "22px",
                    fontWeight: "bolder",
                    lineHeight: 1.7,
                    color: "#8a94a6",
                    "@media only screen and (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  Tech Developers &#128187;
                </Text>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        >
          <Text
            as="H2"
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              lineHeight: 2,
              color: "#000",
              "@media only screen and (max-width: 720px)": {
                fontSize: "22px",
              },
            }}
          >
            Founder Institute has already helped over...
          </Text>
          <Flex sx={styles.workflow.row}>
            <Box as="span" sx={styles.workflow.box}>
              <Text
                sx={{
                  fontSize: "42px",
                  fontWeight: "bolder",
                  lineHeight: 1.7,
                  color: "#000",
                  "@media only screen and (max-width: 992px)": {
                    fontSize: "22px",
                  },
                }}
              >
                5,000+ <br></br>
                <Text
                  sx={{
                    fontSize: "22px",
                    fontWeight: "bolder",
                    lineHeight: 1.7,
                    color: "#8a94a6",
                    "@media only screen and (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  Startups &#127906;
                </Text>
              </Text>
            </Box>
            <Box as="span" sx={styles.workflow.box}>
              <Text
                sx={{
                  fontSize: "42px",
                  fontWeight: "bolder",
                  lineHeight: 1.7,
                  color: "#000",
                  "@media only screen and (max-width: 992px)": {
                    fontSize: "22px",
                  },
                }}
              >
                $1+ Billion <br></br>
                <Text
                  sx={{
                    fontSize: "22px",
                    fontWeight: "bolder",
                    lineHeight: 1.7,
                    color: "#8a94a6",
                    "@media only screen and (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  Funding by Alumni &#127891;
                </Text>
              </Text>
            </Box>
            <Box as="span" sx={styles.workflow.box}>
              <Text
                sx={{
                  fontSize: "42px",
                  fontWeight: "bolder",
                  lineHeight: 1.7,
                  color: "#000",
                  "@media only screen and (max-width: 992px)": {
                    fontSize: "22px",
                  },
                }}
              >
                20,000+ <br></br>
                <Text
                  sx={{
                    fontSize: "22px",
                    fontWeight: "bolder",
                    lineHeight: 1.7,
                    color: "#8a94a6",
                    "@media only screen and (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  Mentors &amp; investors network &#128181;
                </Text>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Partner;

const styles = {
  workflow: {
    fontFamily: "futura",
    backgroundColor: "#fafafa",
    position: "relative",
    pt: "100px",
    pb: "100px",
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
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      mt: "40px",
      "@media only screen and (max-width: 720px)": {
        flexDirection: "column",
        rowGap: "40px",
      },
    },

    box: {
      width: "100%",
      flex: "1 1 33.333333333%",

      img: {
        width: "300px",
        backgroundColor: "#ffffff",
        borderRadius: "32px",
        padding: "40px",
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
