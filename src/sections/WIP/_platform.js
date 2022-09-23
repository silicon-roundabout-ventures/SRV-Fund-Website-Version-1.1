import React, { useState } from "react";
import { Box, Grid, Container, Image, Text } from "theme-ui";
// import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
// import BlockTitle from 'components/block-title';
// import PriceCard from '../components/price-card';
import Circle1 from "assets/circle1.png";
//import Circle2 from 'assets/circle2.png';
import Circle3 from "assets/circle3.png";

const Platform = () => {
  const [plan, setPlan] = useState(false);
  return (
    <Box as="section" id="platform" sx={styles.platform}>
      <Container>
        {/* <BlockTitle
          sx={styles.platform.blockTitle}
          // tagline="Pricing Plan"
          heading="Our Community Platform"
        /> */}
        <Text
          as="H3"
          sx={{
            fontSize: "32px",
            fontWeight: "700",
            lineHeight: 1.7,
            color: "#000",
            textAlign: "center",
            "@media only screen and (max-width: 992px)": {
              fontSize: "22px",
            },
          }}
        >
          Our Community Platform
        </Text>
        <Box sx={styles.platform.btnWrap}>
          <Box as="ul" sx={styles.platform.btnUl}>
            <Box
              as="li"
              className={` ${plan === true ? "active" : ""}`}
              variant="buttons.primary"
              sx={styles.platform.btn}
              onClick={() => {
                setPlan(true);
              }}
            >
              Organise Discussions
            </Box>
            <Box
              as="li"
              className={` ${plan === false ? "active" : ""}`}
              variant="buttons.primary"
              sx={styles.platform.btn}
              onClick={() => {
                setPlan(false);
              }}
            >
              Empower Interest Groups
            </Box>
          </Box>
        </Box>

        <Grid sx={styles.platform.wrapper}>
          {plan === true ? (
            <Image src={Circle1} sx={styles.platform.circle} alt="Intro1" />
          ) : null}

          {plan === false ? <Image src={Circle3} alt="Logo" /> : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Platform;

const styles = {
  platform: {
    fontFamily: "futura !important",
    backgroundColor: "#fafafa",
    paddingTop: 100,
    paddingBottom: 100,
    "@media(max-width:991px)": {
      paddingTop: 60,
      paddingBottom: 60,
    },
    "@keyframes fadeInUp": {
      from: {
        opacity: 0,
        transform: "translate3d(0, 100%, 0)",
      },
      to: {
        opacity: 1,
        transform: "translate3d(0, 0%, 0)",
      },
    },
    ".priceFade": {
      animationName: "fadeInUp",
      animationDuration: "1s",
    },
    blockTitle: {
      textAlign: "center",
    },
    btnWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "60px",
      marginTop: "25px",
    },
    btnUl: {
      margin: 0,
      listStyle: "none",
      backgroundColor: "#F7F8FB",
      padding: "12px",
      borderRadius: "12px",
      display: "inline-block",
    },
    btn: {
      color: "black",
      padding: "10px 25px",
      fontSize: 16,
      fontWeight: 500,
      cursor: "pointer",
      backgroundColor: "transparent",
      "&:hover": {
        color: "black",
        backgroundColor: "transparent",
      },
      "&.active": {
        backgroundColor: "#fff",
        color: "black",
        boxShadow: "0px 3px 3.8px rgba(38, 78, 118, 0.1)",
      },
      "@media(max-width: 375px)": {
        padding: "10px 22px",
      },
    },
    wrapper: {
      marginLeft: "auto",
      marginRight: "auto",
      width: ["100%", null, null, null, "990px"],
    },
    circle: {
      width: "1000px !important",
    },
  },
};
