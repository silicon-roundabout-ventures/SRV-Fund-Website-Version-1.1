/** @jsx jsx */

import { Box, Flex, Container, Image, Text, jsx } from "theme-ui";

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBlog,
} from "react-icons/fa";

import styled from "styled-components";

import Franco from "assets/team/franco.jpeg";
import Olivia from "assets/team/olivia.jpeg";
import Maria from "assets/team/maria.jpeg";
import Ralph from "assets/team/ralph-pic.jpeg";

import { Link } from "components/link";
import Footer from "../components/footer/footer";

export const ParticleClass = styled.main`
  width: 100%;
  z-index: 1;
`;

const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Flex sx={styles.banner.row}>
          {/* <Box sx={styles.banner.content}>   */}
          <Text
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              lineHeight: 2.0,
              marginTop: "40px",
              color: "#fff",
              "@media only screen and (max-width: 992px)": {
                fontSize: "22px",
                marginTop: "40px",
                ml: "20px",
              },
            }}
          >
            &lt;Team/&gt;
          </Text>
          <Box sx={styles.banner.team}>
            <Box as="span" sx={styles.banner.team.avatar}>
            <Image src={Franco} alt="Francesco Perticarari" />
              <Text as="H3">Francesco Perticarari</Text>
              <Box sx={styles.banner.team.title}>
                <Text as="p">General Partner</Text>
                <Box sx={styles.banner.team.socials}>
                  <Link
                    target={"_blank"}
                    to={"https://blog.francescoperticarari.com"}
                  >
                    <FaBlog sx={styles.banner.team.icons} />
                  </Link>
                  <Link
                    target={"_blank"}
                    to={"https://www.linkedin.com/in/fperticarari/"}
                  >
                    <FaLinkedin sx={styles.banner.team.icons} />
                  </Link>
                  <Link
                    target={"_blank"}
                    to={"https://twitter.com/francesco_srv"}
                  >
                    <FaTwitter sx={styles.banner.team.icons} />
                  </Link>
                  <Link target={"_blank"} to={"https://github.com/fpert041"}>
                    <FaGithub sx={styles.banner.team.icons} />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>

        <Flex sx={styles.banner.row}>
          <Text
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              lineHeight: 2.0,
              marginTop: "80px",
              color: "#fff",
              "@media only screen and (max-width: 992px)": {
                fontSize: "16px",
                marginTop: "40px",
                ml: "20px",
              },
            }}
          >
            Venture.Partners()
          </Text>
          <Box sx={styles.banner.vp}>
            <Box as="span" sx={styles.banner.team.avatar}>
              <Image src={Olivia} alt="Olivia N" />
              <Text as="H3">Olivia Nicoletti, PhD</Text>
              <Box as="p" sx={styles.banner.team.title}>
                <Text as="p">Nanophysicist and Tech Spinout Expert</Text>
                <Text as="p">Ex Cambridge Enterprise</Text>
                <Box sx={styles.banner.team.socials}>
                  <Link
                    target={"_blank"}
                    to={
                      "https://www.linkedin.com/in/olivia-nicoletti-phd-6307724/"
                    }
                  >
                    <FaLinkedin sx={styles.banner.team.icons} />
                  </Link>
                </Box>
              </Box>add
            </Box>
            <Box as="span" sx={styles.banner.team.avatar}>
              <Image src={Ralph} alt="Ralph King" />
              <Text as="H3">Ralph King</Text>
              <Box as="p" sx={styles.banner.team.title}>
                <Text as="p">Exited CTO & Tech Whiz</Text>
                <Text as="p">Building our VC superpowers</Text>
                <Box sx={styles.banner.team.socials}>
                  <Link
                    target={"_blank"}
                    to={"https://www.linkedin.com/in/ralph-king/"}
                  >
                    <FaLinkedin sx={styles.banner.team.icons} />
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box as="span" sx={styles.banner.team.avatar}>
              <Image src={Maria} alt="Maria GV" />
              <Text as="H3">Maria Grazia Vigliotti, PhD</Text>
              <Box as="p" sx={styles.banner.team.title}>
                <Text as="p">AI, Blockchain & Cybersecurity Expert</Text>
                <Text as="p">Angel investor & Entrepreneur</Text>
                <Box sx={styles.banner.team.socials}>
                  <Link
                    target={"_blank"}
                    to={"https://www.linkedin.com/in/mgvigliotti/"}
                  >
                    <FaLinkedin sx={styles.banner.team.icons} />
                  </Link>
                </Box>
              </Box>
            </Box>     
          </Box>
          
          <Footer/>
        </Flex>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    background: "#000",
    height: "100vh",
    overflowX: "hidden",
    paddingTop: ["100px", "120px"],
    paddingBottom: ["0px", null, "30px"],
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",

    team: {
      display: "flex",
      flexDirection: "row",
      marginTop: "40px",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
      rowGap: "80px",
      columnGap: "20px",

      "@media only screen and (max-width: 992px)": {
        display: "flex",
        flexDirection: "column",
        marginTop: "40px",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: "0px",
      },

      h3: {
        color: "white",
        fontSize: "20px",
        mt: "10px",

        "@media only screen and (max-width: 992px)": {
          fontSize: "16px",
          maxWidth: "max-content",
          width: "300px",
          mt: "10px",
        },
      },

      title: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        p: {
          color: "white",
          fontSize: "16px",

          "@media only screen and (max-width: 992px)": {
            fontSize: "12px",
            maxWidth: "max-content",
            width: "300px",
          },
        },
      },

      icons: {
        color: "white",
        marginLeft: "5px",
        marginRight: "5px",
      },

      socials: {
        display: "flex",
        flexDirection: "row",
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

      avatar: {
        height: "130px",
        width: "130px",
        alignItems: "center",
        flex: "0 0 30.333333333%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "60px",

        '@media only screen and (max-width: 992px)': {
          width: '80px',
          height: '80px',
        },

        img: {
          margin: ["0px", null, null, null, null, "0"],
          height: "100%",
          flexShrink: 0,
          borderRadius: "100%",
        },
      },
    },

    vp: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
      rowGap: "20px",
      columnGap: "20px",

      "@media only screen and (max-width: 992px)": {
        display: "flex",
        flexDirection: "column",
        marginTop: "40px",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: "0px",
      },

      h3: {
        color: "white",
        fontSize: "20px",
        mt: "10px",

        "@media only screen and (max-width: 992px)": {
          fontSize: "16px",
          maxWidth: "max-content",
          width: "300px",
          mt: "10px",
        },
      },

      title: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        p: {
          color: "white",
          fontSize: "16px",

          "@media only screen and (max-width: 992px)": {
            fontSize: "12px",
            maxWidth: "max-content",
            width: "300px",
          },
        },
      },

      icons: {
        color: "white",
        marginLeft: "5px",
        marginRight: "5px",
      },

      socials: {
        display: "flex",
        flexDirection: "row",
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

      avatar: {
        height: "130px",
        width: "130px",
        alignItems: "center",
        flex: "0 0 30.333333333%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "60px",

        "@media only screen and (max-width: 992px)": {},

        img: {
          margin: ["0px", null, null, null, null, "0"],
          height: "100%",
          borderRadius: "100%",
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
      marginRight: "-15px",
      flexDirection: "column",
      gap: "20px",

      "@media only screen and (max-width: 992px)": {
        marginLeft: "0px",
        marginRight: "0px",
      },
    },
    col: {
      pl: "40px",
      pr: "15px",
      flex: ["1 1 100%", null, "0 0 50%"],
      zIndex: "100",
    },
    content: {
      paddingRight: [0, 0, 0, 0, "40px", 0, 0],

      headline: {
        display: "flex",
        flexDirection: "column",
      },

      h3: {
        lineHeight: 1.18,
        color: "white",
        fontWeight: "bold",
        position: "relative",
        width: "100%",
        fontSize: ["28px", "35px", null, "45px", null, "50px", "85px"],
        maxWidth: ["500px", null, null, null, null, null, "100%"],
        "&:before": {
          content: '""',
          width: ["290px", null, null, null, null, "260px", "381px"],
          height: "15px",
          // backgroundImage: `url(${BannerTextLine})`,
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          bottom: "-15px",
          right: ["15px", null, null, null, null, "140px", "100px"],
          display: ["none", null, null, null, null, "block"],
        },
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
    // stars: {
    //   marginTop: ['0', null, null, null, null, '40px'],
    //   marginBottom: '20px',
    //   display: 'flex',
    //   color: '#02073E',
    //   fontSize: ['15px'],
    //   alignItems: 'center',
    //   lineHeight: 1,
    //   svg: {
    //     color: 'primary',
    //     '+svg': {
    //       marginLeft: ['3px', null, '5px'],
    //     },
    //     '&:last-of-type': {
    //       color: 'rgba(2, 7, 62, 0.2)',
    //       marginRight: '10px',
    //     },
    //   },
    // },
    form: {
      position: "relative",
      width: "100%",
      maxWidth: ["200px", null, null, "345px"],
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
      marginTop: ["15px", "40px"],
      height: ["50px", null, null, "50px", null, null, "50px"],
      marginBottom: ["20px", "30px", null, null, "40px"],

      // input: {
      //   backgroundColor: '#fff',
      //   position: 'absolute',
      //   top: 0,
      //   left: 0,
      //   paddingLeft: '25px',
      //   width: '100%',
      //   height: '100%',
      //   color: 'rgba(2, 7, 62, .4)',
      //   boxShadow: 'none !important',
      //   outline: 'none !important',
      //   borderRadius: '8px',
      //   fontSize: ['15px', '16px'],
      // },

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
          backgroundColor: "#fff",
          borderRadius: "9px",
          "&:hover": {
            color: "#000",
            backgroundColor: "grey",
            borderRadius: "9px",
          },
        },
      },
    },
    partner: {
      display: "flex",
      flexDirection: ["column", null, null, null, null, "row"],
      alignItems: ["flex-start", null, null, null, null, "center"],
      color: "rgba(2, 7, 62,.6)",
      fontSize: ["15px", null, "16px"],
      span: {
        display: ["block", null, "inline-block"],
      },
      img: {
        marginLeft: ["0", "0px", null, null, null, "20px"],
        mt: ["20px", null, null, null, null, "0"],
      },
    },
    imageBox: {
      display: "flex",
      justifyContent: ["flex-start", null, null, "flex-end"],
      marginTop: ["60px", null, null, "0"],
    },
    imageInner: {
      position: "relative",
      "&:before": {
        content: '""',
        width: "100%",
        height: "100%",
        border: "2px solid #FFDC6B",
        borderRadius: "5px",
        top: "30px",
        left: "30px",
        position: "absolute",
        zIndex: 2,
        display: ["none", null, "block"],
        "@media(max-width: 991px)": {
          left: "10px",
          top: "15px",
          height: "calc(100% - 15px)",
        },
      },
      "&:after": {
        content: '""',
        width: "302px",
        height: "347px",
        // backgroundImage: `url(${BannerPattern})`,
        backgroundPosition: "center",
        top: "-30px",
        right: "-73px",
        position: "absolute",
        zIndex: 1,
        "@media(max-width: 991px)": {
          right: "-10px",
        },
      },
      img: {
        position: "relative",
        zIndex: 9,
        maxWidth: "100%",
      },
      ".videoBtn": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 10,
      },
    },
  },
};
