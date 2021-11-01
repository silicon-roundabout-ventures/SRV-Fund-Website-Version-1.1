import { Heading, Box, Text, Container, Grid, Flex } from "theme-ui";
// import BlockTitle from 'components/block-title';
import React from "react";
import { Link } from "components/link";

import ArrowOdd from "assets/arrow-odd.png";
import ArrowEven from "assets/arrow-even.png";

const workflowData = [
  {
    title: "Eligibility Criteria",
    text: (
      <span>
        <span role="img" aria-label="emoji">
          &#9989; Early-stage deep-tech startup (Pre-seed/ Seed)
        </span>
        <br></br>
        <span role="img" aria-label="emoji">
          &#9989; Atleast have an MVP or POC
        </span>
        <br></br>
        <span role="img" aria-label="emoji">
          &#9989; A technically qualified core team member
        </span>
        <br></br>
        <span role="img" aria-label="emoji">
          &#9989; Targeting a MultiBillion $ international market opportunity
        </span>
      </span>
    ),
  },
  {
    title: "Submit the application",
    text: (
      <span>
        <span role="img" aria-label="emoji">
          &#128196; Fill the application form
        </span>
        <br></br>
        <span role="img" aria-label="emoji">
          &#128128; <b>Deadline:</b> 9th September, 2021 @11 AM
        </span>
        <br></br>
        <Link
          target="_blank"
          path="https://forms.gle/kAoC7MzBviCgf7xx5"
          label="Application Form!"
          sx={{
            color: "white",
            backgroundColor: "#000000",
            mt: "20px",
            width: "200px",
            textAlign: "center",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#D94738",
              borderRadius: "9px",
            },
            "@media only screen and (max-width: 720px)": {
              fontSize: "16px !important",
              width: "70%",
            },
          }}
          variant="buttons.primary"
        />
      </span>
    ),
  },
  {
    title: "Interview",
    text: (
      <span>
        <span role="img" aria-label="emoji">
          &#127908; Eligible startups will then go through a hard &amp; rigorous
          selection process.
        </span>
        <br></br>
        <span role="img" aria-label="emoji">
          &#128507; Only <b>3 startups</b> will be selected to be part of this
          cohort commencing on <b>3rd October, 2021</b>
        </span>
      </span>
    ),
  },
  //   {
  //     title: 'Start Receiving Candidates',
  //     text:
  //     <span >
  //     <span role="img" aria-label="emoji" >&#9989; Your Job Is Now Live With The Job-Centre</span><br></br>
  //     <span role="img" aria-label="emoji" >&#127937; Application's Will Start Coming Through</span>
  //     </span>
  //   },
];

const WorkFlow = () => {
  return (
    <Box as="section" id="workflow" sx={styles.workflow}>
      <Container>
        {/* <BlockTitle
          sx={styles.workflow.blockTitle}
          tagline= 'How can you hire free workers &#129300;'
          heading="Let’s see how it works"
        /> */}
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
              color: "#000",
              "@media only screen and (max-width: 720px)": {
                fontSize: "22px",
              },
            }}
          >
            &#127942; Who should apply?
          </Text>
          <Text
            as="p"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              lineHeight: 2,
              color: "#000",
              "@media only screen and (max-width: 720px)": {
                fontSize: "16px",
              },
            }}
          >
            ONLY <u>Deep-Tech</u> founders who are looking to scale-up their
            startups growth by working hard, taking advantage of the resource
            &amp; network provided through this course, and looking to raise
            funding by the end of this highly curated Launchpad &#128640;
            programme.
          </Text>
        </Flex>
        <Grid gap="50px 54px" columns={3} sx={styles.workflow.grid}>
          {workflowData.map((item, index) => (
            <Box sx={styles.workflow.card} key={index}>
              <Box sx={styles.workflow.iconBox}>{`0${index + 1}`}</Box>
              <Box sx={styles.workflow.wrapper}>
                <Heading sx={styles.workflow.wrapper.title}>
                  {item.title}
                </Heading>
                <Text sx={styles.workflow.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        <Flex
          sx={{
            textAlign: "center !important",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            as="p"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              lineHeight: 2,
              color: "#000",
              mt: "40px",
              "@media only screen and (max-width: 720px)": {
                fontSize: "16px",
              },
            }}
          >
            The programme is limited to only 3 startups; and these startups will
            be mentored and supported by both Silicon Roundabout Ventures &amp;
            Founders Institute.
          </Text>
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
    grid: {
      pt: 80,
      pb: 40,
      "@media screen and (max-width: 1366px)": {
        pt: 40,
      },
      "@media screen and (max-width: 1200px)": {
        gridGap: "50px 30px",
      },
      "@media screen and (max-width: 992px)": {
        gridTemplateColumns: "repeat(2,1fr)",
        gridGap: "50px 50px",
      },
      "@media screen and (max-width: 480px)": {
        gridTemplateColumns: "repeat(1,1fr)",
        gridGap: "35px 0",
      },
    },
    card: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      "&::before": {
        position: "absolute",
        content: '""',
        top: 0,
        left: 75,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: "center center",
        width: 215,
        height: 60,
        "@media screen and (max-width: 1366px)": {
          left: 75,
        },
        "@media screen and (max-width:1200px)": {
          display: "none",
        },
      },
      "&:nth-of-type(2n-1)::before": {
        backgroundImage: `url(${ArrowOdd})`,
      },
      "&:nth-of-type(2n)::before": {
        backgroundImage: `url(${ArrowEven})`,
        top: 17,
      },
      "&:last-child::before": {
        display: "none",
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
        fontFamily: "futura !important",
        color: "black",
        lineHeight: 1.55,
        fontWeight: 700,
        mb: "25px",
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
        fontSize: "18px",
        fontWeight: 500,
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
