/** @jsx jsx */

import { Box, Flex, Container, Image, Text, jsx } from "theme-ui";

import {
  FaBatteryFull,
  FaMicrochip,
  FaSatellite,
  FaPlane,
  FaAtom
} from "react-icons/fa";

import styled from "styled-components";

import Proximie from "assets/startups/community/proximie.png";
import CQ from "assets/startups/community/cq.png";
import Monzo from "assets/startups/community/monzo.png";
import Zego from "assets/startups/community/zego.png";
import Gardin from "assets/startups/community/gardin.png";
import Causalens from "assets/startups/community/causalens.png";

import Anaphite from "assets/startups/anaphite.png";
import Archangel from "assets/startups/archangel-whitenobg.png";
import Greenjets from "assets/startups/greenjets-white.png";
import Stealth from "assets/stealth-bomber.png";
import Vypercore from "assets/startups/vypercore-white.png";


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
            Portfolio_Startups()
          </Text>
          <Text
              sx={{
                fontSize: "20px",
                fontWeight: "regular",
                lineHeight: 2.0,
                marginTop: "40px",
                color: "#fff",
                "@media only screen and (max-width: 992px)": {
                  fontSize: "12px",
                  marginTop: "20px",
                },
              }}
            >
              <p>After a decade of community building, we launched Silicon Roundabout Ventures as a Deeptech Super-Angel VC in 2023. The fund is backed by top-tier VC Molten Ventures (LSE:GROW) and exited founders, engineers and execs: including ex googlers, amazonians and from 2 unicorns.</p>
                <p>Our main focus within deeptech is on startups building infrastructure technologies in Computing, Impact in Climate or Health, and Defence.</p>
            </Text>

          <Box sx={styles.banner.startups}>
          <Box as="span" sx={styles.banner.startups.avatar}>
              <Image src={Anaphite} alt="Anaphite" />
              <Text as="H3">Anaphite</Text>
              <Box as="p" sx={styles.banner.startups.title}>
                <Box sx={styles.banner.startups.socials}>
                  <Link target={"_blank"} to={"https://sifted.eu/articles/anaphite-battery-tech-graphene-lithium-ion/"}>
                    <FaBatteryFull sx={styles.banner.startups.icons} />
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box as="span" sx={styles.banner.startups.avatar}>
              <Image src={Archangel} alt="Archangel Lightworks" />
              <Text as="H3">Archangel Lightworks</Text>
              <Box as="p" sx={styles.banner.startups.title}>
                <Box sx={styles.banner.startups.socials}>
                  <Link target={"_blank"} to={"https://sifted.eu/articles/spacetech-archangel-lightworks-raises-4m-news/"}>
                    <FaSatellite sx={styles.banner.startups.icons} />
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box as="span" sx={styles.banner.startups.avatar}>
              <Image src={Greenjets} alt="Greenjets" />
              <Text as="H3">Greenjets</Text>
              <Box as="p" sx={styles.banner.startups.title}>
                <Box sx={styles.banner.startups.socials}>
                  <Link target={"_blank"} to={"https://www.greenjets.co.uk/#News"}>
                    <FaPlane sx={styles.banner.startups.icons} />
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box as="span" sx={styles.banner.startups.avatar}>
              <Image src={Stealth} alt="Stealth" />
              <Text as="H3">Stealth (Quantum / Photonics)</Text>
              <Box as="p" sx={styles.banner.startups.title}>
                <Box sx={styles.banner.startups.socials}>
                  <Link target={"_blank"} to={""}>
                    <FaAtom sx={styles.banner.startups.icons} />
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box as="span" sx={styles.banner.startups.avatar}>
              <Image src={Vypercore} alt="VyperCore" />
              <Text as="H3">VyperCore</Text>
              <Box as="p" sx={styles.banner.startups.title}>
                <Box sx={styles.banner.startups.socials}>
                  <Link target={"_blank"} to={"https://www.eetimes.com/processor-startup-innovates-memory-allocation-management"}>
                    <FaMicrochip sx={styles.banner.startups.icons} />
                  </Link>
                </Box>
              </Box>
            </Box>  
            <Box as="span" sx={styles.banner.startups.avatar}>
              <Image src={Stealth} alt="Stealth" />
              <Text as="H3">Stealth (Climate Hardware)</Text>
              <Box as="p" sx={styles.banner.startups.title}>
                <Box sx={styles.banner.startups.socials}>
                  <Link target={"_blank"} to={""}>
                    <FaAtom sx={styles.banner.startups.icons} />
                  </Link>
                </Box>
              </Box>
            </Box> 
            <Box as="span" sx={styles.banner.startups.avatar}>
              <Image src={Stealth} alt="Stealth" />
              <Text as="H3">Stealth (TechBio)</Text>
              <Box as="p" sx={styles.banner.startups.title}>
                <Box sx={styles.banner.startups.socials}>
                  <Link target={"_blank"} to={""}>
                    <FaAtom sx={styles.banner.startups.icons} />
                  </Link>
                </Box>
              </Box>
            </Box>      
          </Box>
        </Flex>
        <Flex sx={styles.banner.row}>
          <Text
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              lineHeight: 2.0,
              marginTop: "80px",
              color: "#fff",
              "@media only screen and (max-width: 992px)": {
                fontSize: "22px",
                marginTop: "120px",
                ml: "20px",
              },
            }}
          >
            Community_Startups()
          </Text>
          <Text
              sx={{
                fontSize: "20px",
                fontWeight: "regular",
                lineHeight: 2.0,
                marginTop: "40px",
                color: "#fff",
                "@media only screen and (max-width: 992px)": {
                  fontSize: "12px",
                  marginTop: "20px",
                },
              }}
            >
              <p>Our firms is built on top and leverages our meetup community of 15,000 entrepreneurs and engineers, through which we previously attracted, selected and helped launch 33 Deep Tech and Big Data startups now valued at over £6 Billion.</p>
            </Text>
          <Box sx={styles.banner.community}>
            <Box as="span" sx={styles.banner.community.avatar}>
              <Image src={Causalens} alt="CausaLens" />
              <Text as="h3">CausaLens</Text>
            </Box>
            <Box as="span" sx={styles.banner.community.avatar}>
              <Image src={Monzo} alt="monzo" />
              <Text as="h3">monzo</Text>
            </Box>
            <Box as="span" sx={styles.banner.community.avatar}>
              <Image src={Zego} alt="Zego" />
              <Text as="h3">Zego</Text>
            </Box>
            <Box as="span" sx={styles.banner.community.avatar}>
              <Image src={Proximie} alt="Proximie" />
              <Text as="h3">Proximie </Text>
            </Box>
            <Box as="span" sx={styles.banner.community.avatar}>
              <Image src={CQ} alt="Crypto Quantique" />
              <Text as="h3">Crypto Quantique </Text>
            </Box>
            <Box as="span" sx={styles.banner.community.avatar}>
              <Image src={Gardin} alt="Gardin" />
              <Text as="h3">Gardin </Text>
            </Box>
            <Box as="span" sx={styles.banner.community.avatar}>
              {/* <Image src={Oxbotica} alt="Oxbotica" /> */}
              <Text
                as="h3"
                sx={{
                  fontSize: "32px !important",
                  "@media only screen and (max-width: 992px)": {
                    fontSize: "20px !important",
                  },
                }}
              >
                {" "}
                + 5000 more
              </Text>
            </Box>
          </Box>
        </Flex>

        <Footer/>
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

    startups: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
      rowGap: "40px",
      columnGap: "20px",
      marginTop: "80px",

      "@media only screen and (max-width: 992px)": {
        rowGap: "80px",
        columnGap: "40px",
        marginTop: "20px",
      },

      h3: {
        color: "white",
        fontSize: "20px",

        "@media only screen and (max-width: 992px)": {
          fontSize: "16px",
          maxWidth: "max-content",
          width: "200px",
        },
      },
      title: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        p: {
          color: "white",
          fontSize: "2",
        },

        "@media only screen and (max-width: 992px)": {
          fontSize: "10px",
          maxWidth: "max-content",
          width: "200px",
        },
      },

      // icons: {
      //   color:'white',
      //   marginLeft: '5px',
      //   marginRight: '5px',
      // },

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
        height: "80px",
        width: "80px",
        alignItems: "center",
        flex: "0 0 30.333333333%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "60px",

        "@media only screen and (max-width: 992px)": {
          width: "45px",
          height: "45px",
          margin: "15px",
        },

        img: {
          margin: ["0px", null, null, null, null, "0"],
          height: "100%",
        },

        h1: {
          fontSize: "32px",
        },
      },
    },

    community: {
      display: "flex",
      flexDirection: "row",
      marginTop: "80px",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
      rowGap: "40px",
      columnGap: "20px",

      "@media only screen and (max-width: 992px)": {
        rowGap: "80px",
        columnGap: "40px",
        marginTop: "40px",
      },

      h3: {
        color: "white",
        fontSize: "20px",

        "@media only screen and (max-width: 992px)": {
          fontSize: "16px",
          maxWidth: "max-content",
          width: "200px",
        },
      },
      title: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        p: {
          color: "white",
          fontSize: "2",
        },

        "@media only screen and (max-width: 992px)": {
          fontSize: "1",
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
        height: "80px",
        width: "80px",
        alignItems: "center",
        flex: "0 0 30.333333333%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "60px",

        "@media only screen and (max-width: 992px)": {
          width: "45px",
          height: "45px",
          margin: "15px",
        },

        img: {
          margin: ["0px", null, null, null, null, "0"],
          height: "100%",
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
      marginRight: "0px",
      flexDirection: "column",

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
      orange: {
        color: "#fb966e",
      },
      pink: {
        color: "#FF7EF5",
      },
      green: {
        color: "#9dff65",
      },
      red: {
        color: "#D94738",
      },
      yellow: {
        color: "#edbc3e",
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
        flexShrink: 0,
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
