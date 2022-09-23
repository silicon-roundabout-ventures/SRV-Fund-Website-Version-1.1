/** @jsx jsx */

import { Box, Flex, Container, Text, Image, jsx } from "theme-ui";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaLocationArrow,
  FaMailBulk,
  FaCopyright,
} from "react-icons/fa";

import Particles from "react-particles-js";
import styled from "styled-components";

import { Link } from "components/link";

import Comm1 from "assets/community/community-meetup-square.jpg";
import Comm2 from "assets/community/community-womanpitch-square.jpg";
import Comm3 from "assets/community/community-franpitch-square.jpg";

export const ParticleClass = styled.main`
  width: 100%;
  z-index: 2;
`;

const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Flex sx={styles.banner.row}>
          <ParticleClass>
            <Particles
              id="particles-js"
              params={{
                particles: {
                  number: {
                    value: 120,
                    density: {
                      enable: true,
                      value_area: 691.3181133058181,
                    },
                  },
                  color: {
                    value: "#000",
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 3.5,
                      color: "#a7a7a7",
                    },
                    polygon: {
                      nb_sides: 9,
                    },
                  },
                  opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  size: {
                    value: 0,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false,
                    },
                  },
                  line_linked: {
                    enable: true,
                    distance: 130,
                    color: "#a7a7a7",
                    opacity: 0.4,
                    width: 1,
                  },
                  move: {
                    enable: true,
                    speed: 0.9,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200,
                    },
                  },
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: false,
                      mode: "repulse",
                    },
                    onclick: {
                      enable: false,
                      mode: "push",
                    },
                    resize: false,
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1,
                      },
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3,
                    },
                    repulse: {
                      distance: 150,
                      duration: 0.4,
                    },
                    push: {
                      particles_nb: 4,
                    },
                    remove: {
                      particles_nb: 2,
                    },
                  },
                },
                retina_detect: true,
              }}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
              }}
            />
          </ParticleClass>
          <Box sx={styles.banner.col}>
            <Text
              sx={{
                fontSize: "40px",
                fontWeight: "bold",
                lineHeight: 2.0,
                marginTop: "40px",
                marginBottom: "20px",
                color: "#fff",
                "@media only screen and (max-width: 992px)": {
                  fontSize: "24px",
                  marginTop: "20px",
                },
              }}
            >
              Silicon Roundabout Ventures
            </Text>
            <Box sx={styles.banner.content}>
              <Text
                sx={{
                  fontSize: "26px",
                  fontWeight: "regular",
                  lineHeight: 1.7,
                  color: "#fff",
                  "@media only screen and (max-width: 992px)": {
                    fontSize: "16px",
                  },
                }}
              >
                Connecting (
                <styles sx={styles.banner.content.yellow}>Capital</styles>)
                &#123; <br></br>
                &nbsp; <styles sx={styles.banner.content.pink}>with</styles>
                <br></br>
                &nbsp;&nbsp;&nbsp; Next-Generation.
                <styles sx={styles.banner.content.yellow}>Technologies</styles>
                <br></br>
                &nbsp; <styles sx={styles.banner.content.pink}>in </styles>
                Computer & Physical
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{" "}
                <styles sx={styles.banner.content.yellow}>Science</styles>
                <br></br>
                &#125;
              </Text>
              <Box as="form" sx={styles.banner.form}>
                <Link
                  target="_blank"
                  path="https://airtable.com/shrWqbcCtbPaXXfQ3"
                  label="Apply for Funding"
                  sx={styles.banner.form.link.button}
                  variant="buttons.primary"
                />
              </Box>
            </Box>
          </Box>

          <Flex sx={styles.banner.row.row2}>
            <Text
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: 2.0,
                marginTop: "80px",
                color: "#fff",
                "@media only screen and (max-width: 992px)": {
                  fontSize: "20px",
                  marginTop: "40px",
                },
              }}
            >
              &lt;Who we are/&gt;
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
              <p>
                We are a Community-Driven VC firm backing{" "}
                <styles sx={styles.banner.content.yellow}>
                  Deep Tech and Big Data
                </styles>{" "}
                startups at{" "}
                <styles sx={styles.banner.content.pink}>pre-seed</styles> and{" "}
                <styles sx={styles.banner.content.pink}>seed</styles>,
                leveraging our community of 15,000 founders and engineers and
                our live pitching competitions that over the years featured
                winners now worth over £6 Billion.
              </p>
            </Text>

            <Container sx={styles.banner.container}>
              <Box sx={styles.banner.community}>
                <Box as="span" sx={styles.banner.community.pic}>
                  <Image src={Comm1} alt="Silicon Roundabout Meetup" />
                </Box>
                <Box as="span" sx={styles.banner.community.pic}>
                  <Image src={Comm2} alt="Silicon Roundabout Meetup" />
                </Box>
                <Box as="span" sx={styles.banner.community.pic}>
                  <Image src={Comm3} alt="Silicon Roundabout Meetup" />
                </Box>
              </Box>
            </Container>

            <Text
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: 2.0,
                marginTop: "80px",
                color: "#fff",
                "@media only screen and (max-width: 992px)": {
                  fontSize: "20px",
                  marginTop: "40px",
                },
              }}
            >
              &lt;Our Mission/&gt;
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
              <p>
                <span
                  role="img"
                  aria-label="information"
                  sx={styles.banner.content.yellow}
                >
                  ⚙️
                </span>{" "}
                We are building a new kind of financial institution at the
                intersection of{" "}
                <styles sx={styles.banner.content.pink}>
                  Venture, Science and Community
                </styles>
                . We provide investment capital, community connections and
                hands-on support to seed founders.
              </p>
              <br />
              <p>
                <span
                  role="img"
                  aria-label="information"
                  sx={styles.banner.content.yellow}
                >
                  💪
                </span>{" "}
                {/* Our mission is to help founders of computer and physical science
                based companies with investment capital and hands-on support as
                they scale up towards mass adoption! */}
                Our mission is to help technical founding teams building
                solutions based on{" "}
                <styles sx={styles.banner.content.pink}>computer</styles> or{" "}
                <styles sx={styles.banner.content.pink}>
                  physical sciences
                </styles>{" "}
                that are solving large-scale global problems.
              </p>
              <br />
              <p>
                <span
                  role="img"
                  aria-label="information"
                  sx={styles.banner.content.yellow}
                >
                  🚀
                </span>{" "}
                If you are a{" "}
                <styles sx={styles.banner.content.yellow}>
                  deep tech or big data
                </styles>{" "}
                entrepreneur based in the UK or Europe, get in touch and{" "}
                <a
                  style={{ color: "#fff" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://airtable.com/shrWqbcCtbPaXXfQ3"
                >
                  apply for funding
                </a>
                . We'd like to see if we can help you. Equally, if you would
                like to join us as an investor, please visit our{" "}
                <Link sx={{ textDecoration: "underline" }} to="/investors/">
                  Investors
                </Link>{" "}
                page to request more info on becoming a Limited Partner in our
                Seed fund.
              </p>
              <br />
              <br />
            </Text>
            <Text
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: 2.0,
                marginTop: "80px",
                color: "#fff",
                "@media only screen and (max-width: 992px)": {
                  fontSize: "20px",
                  marginTop: "40px",
                },
              }}
            >
              &lt;What makes us unique/&gt;
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
              <ul>
                <li>
                  We run a 15k member strong tech meetup community,{" "}
                  <styles sx={styles.banner.content.yellow}>
                    Silicon Roundabout
                  </styles>
                  , which gives us direct access to 5000+ startups and has
                  already helped grow 2 billion-dollar companies
                </li>
                <br />
                <li>
                  We all have{" "}
                  <styles sx={styles.banner.content.yellow}>
                    technical backgrounds
                  </styles>
                  , helping us select and support founders
                </li>
                <br />
                <li>
                  We offer our portfolio companies access to our Proprietary
                  Ecosystem to help with{" "}
                  <styles sx={styles.banner.content.yellow}>
                    specialist hiring and industry connections
                  </styles>
                </li>
                <br />
              </ul>
            </Text>
            <Text
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: 2.0,
                marginTop: "80px",
                color: "#fff",
                "@media only screen and (max-width: 992px)": {
                  fontSize: "20px",
                  marginTop: "80px",
                },
              }}
            >
              &lt;We invest in startups whose technology is/&gt;
            </Text>

            <Box sx={styles.banner.startups}>
              <Box as="span" sx={styles.banner.startups.avatar}>
                <Text as="H3">
                  &#91;{" "}
                  <styles sx={styles.banner.content.red}>Innovative</styles>{" "}
                  &#93;
                </Text>
                <Box sx={styles.banner.startups.title}>
                  <Text as="p">
                    They leverage significant technological development vs. the
                    status quo
                  </Text>
                </Box>
              </Box>
              <Box as="span" sx={styles.banner.startups.avatar}>
                <Text as="H3">
                  &#123;{" "}
                  <styles sx={styles.banner.content.red}>Critical</styles>{" "}
                  &#125;
                </Text>
                <Box as="p" sx={styles.banner.startups.title}>
                  <Text as="p">
                    They solve (or bring to light) essential user needs
                  </Text>
                </Box>
              </Box>
              <Box as="span" sx={styles.banner.startups.avatar}>
                <Text as="H3">
                  &#183;{" "}
                  <styles sx={styles.banner.content.red}>Defensible</styles>{" "}
                  &#183;
                </Text>
                <Box as="p" sx={styles.banner.startups.title}>
                  <Text as="p">
                    They offer their makers an IP moat against challengers
                  </Text>
                </Box>
              </Box>
              <Box as="span" sx={styles.banner.startups.avatar}>
                <Text as="H3">
                  &#47;{" "}
                  <styles sx={styles.banner.content.red}>Trend-Setting</styles>{" "}
                  &#47;
                </Text>
                <Box as="p" sx={styles.banner.startups.title}>
                  <Text as="p">
                    Disrupt the way an industry operates (1B+ potential revenue
                    in 10+ years)
                  </Text>
                </Box>
              </Box>
              <Box as="span" sx={styles.banner.startups.avatar}>
                <Text as="H3">
                  &#60;
                  <styles sx={styles.banner.content.red}>
                    {" "}
                    Unicorn-Material{" "}
                  </styles>
                  &#62;
                </Text>
                <Box as="p" sx={styles.banner.startups.title}>
                  <Text as="p">
                    Potential to make their creators scale 30-100X via M&amp;A
                    or listing exit in 5-8 years
                  </Text>
                </Box>
              </Box>
            </Box>
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
            <span sx={{ fontSize: "12px" }}>
              <FaCopyright /> Silicon Roundabout Ventures @2022
            </span>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    height: "100vh",
    overflowX: "hidden",
    paddingTop: ["100px", "120px"],
    paddingBottom: ["0px", null, "40px"],
    // backgroundImage: [
    //   'linear-gradient(-180deg, #E0F5FA 0%, #FFFDE6 100%)',
    //   `url(${BannerBG})`,
    // ],
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",

    community: {
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

      pic: {
        height: "230px",
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
          border: "1px solid white",
        },
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
    },

    footer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "100%",
      marginTop: "120px",
      alignItems: "center",
      flexWrap: "wrap",
      zIndex: 100,

      "@media only screen and (max-width: 720px)": {
        marginTop: "0px",
        marginRight: "20px",
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

    startups: {
      display: "flex",
      flexDirection: "row",
      marginTop: "40px",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
      rowGap: "20px",
      columnGap: "40px",

      "@media only screen and (max-width: 992px)": {
        rowGap: "20px",
        columnGap: "0px",
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
      },

      h3: {
        color: "white",
        fontSize: "26px",

        "@media only screen and (max-width: 992px)": {
          fontSize: "20px",
          maxWidth: "max-content",
          width: "300px",
        },
      },
      title: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",

        p: {
          color: "white",
          fontSize: "16px",
        },

        "@media only screen and (max-width: 992px)": {
          fontSize: "10px",
          maxWidth: "max-content",
          width: "150px",

          p: {
            color: "white",
            fontSize: "12px",
          },
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
        marginBottom: "40px",
        rowGap: "20px",

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
      // marginLeft: '-15px',
      // marginRight: '-15px',
      flexDirection: "column",
      zIndex: "100",
      paddingLeft: "20px",

      row2: {
        flexWrap: "wrap",
        display: "flex",
        // marginLeft: '-15px',
        // marginRight: '-15px',
        flexDirection: "column",
        zIndex: "100",
        paddingLeft: "40px",
        paddingRight: "40px",
        backgroundColor: "#0f0f0f",
        borderRadius: "20px",
        paddingBottom: "80px",

        "@media only screen and (max-width: 720px)": {
          pl: "20px",
          pr: "20px",
          pb: "20px",
          mb: "40px",
          mr: "20px",
        },
      },
    },
    col: {
      pl: "0px",
      pr: "0px",
      mt: "120px",
      mb: "80px",
      flex: ["1 1 100%", null, "0 0 50%"],
      zIndex: "100",

      "@media only screen and (max-width: 720px)": {
        pl: "0px",
        pr: "0px",
        mt: "120px",
        mb: "40px",
        mr: "20px",
      },
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
      blue: {
        color: "#5AC4FF",
      },
      yellow: {
        color: "#edbc3e",
      },
      yellow2: {
        color: "#ffdb15",
      },
      red: {
        color: "#D94738",
      },
      cyan: {
        color: "#6af3f8",
      },
      h3: {
        lineHeight: 2,
        color: "black",
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
      maxWidth: ["250px", null, null, "345px"],
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
      marginTop: ["15px", "40px"],
      height: ["100%", null, null, "100%", null, null, "100%"],
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
        fontSize: ["16px", "20px"],
        display: "flex",
        alignItems: "center",

        button: {
          paddingLeft: "25px",
          paddingRight: "25px",
          alignItems: "center",
          color: "#000",
          width: "100%",
          fontSize: "20px !important",
          backgroundColor: "#fff",
          borderRadius: "9px",
          textAlign: "center",
          "&:hover": {
            color: "#000",
            backgroundColor: "grey",
            borderRadius: "9px",
          },
          "@media only screen and (max-width: 720px)": {
            fontSize: "16px !important",
            width: "70%",
          },
        },
        button2: {
          paddingLeft: "25px",
          paddingRight: "25px",
          alignItems: "center",
          textAlign: "center",
          color: "#000",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "9px",
          marginTop: "20px",
          "&:hover": {
            color: "#000",
            backgroundColor: "grey",
            borderRadius: "9px",
          },

          "@media only screen and (min-width: 992px)": {
            display: "none",
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
