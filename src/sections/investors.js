/** @jsx jsx */

import { Box, Flex, Container, Text, jsx } from "theme-ui";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaLocationArrow,
  FaMailBulk,
  FaCopyright,
} from "react-icons/fa";

//import styled from "styled-components";

// import srvgif from 'assets/srv.gif';

import { Link } from "components/link";

export const ParticleClass = styled.main`
  width: 100%;
  z-index: 1;
`;

const Banner = () => {
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
            If you are interested in investing in{" "}
            <styles sx={styles.banner.content.yellow}>
              Next Generation Technologies
            </styles>
            , register your interest as an LP below:
          </Text>
          <Link
            target="_blank"
            path="https://forms.gle/NcDPJMSRMEdPdzG7A"
            label="Apply Here!"
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
            <FaCopyright /> Silicon Roundabout Ventures @2021
          </span>
        </Box>
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
      marginLeft: "-15px",
      marginTop: "40px",
      marginRight: "-15px",
      flexDirection: "column",
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
      // marginTop: ['60px', null, null, '0'],
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
    },
  },
};
