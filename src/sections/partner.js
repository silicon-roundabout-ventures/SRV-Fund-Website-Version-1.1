import { Box, Text, Container, Flex, Image } from 'theme-ui';
import React from 'react';
// import { OutboundLink } from "gatsby-plugin-google-gtag"

import Wholesale from 'assets/wholesale.png';
// import FD from 'assets/FD.png';
import EGSA from 'assets/EGSA.png';


const Partner = () => {
  return (
    <Box as="section" sx={styles.workflow}>
      <Container sx={{textAlign: 'center !important'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', rowGap: '40px'}}>
          <Text as='H2' sx={{
                          fontSize: '32px',
                          fontWeight: 'bold',
                          lineHeight: 2,
                          color: '#fff',
                          '@media only screen and (max-width: 720px)': {
                            fontSize: '20px',
                          },
                        }}>
                      Trusted by world class partners
            </Text>
        <Flex sx={styles.workflow.row}>
          <Box as="span" sx={styles.workflow.box}>
          <a
              target= '_blank'
              href= "https://wholesaleinvestor.com.au/"
              variant= "buttons.primary"
              label="wholesale-label"
              rel="noreferrer"
              alt= "wholesale_investor in partnership with Silicon Roundabout Community"
              sx={{
                cursor: 'pointer',
              }}
              >
              <Image src={Wholesale} sx={styles.workflow.box.img} alt="wholesale investor" />
            </a>
          </Box>
          {/* <Box as="span" sx={styles.workflow.box}>
            <a
              target= '_blank'
              href= "https://airtable.com/shrWqbcCtbPaXXfQ3"
              variant= "buttons.primary"
              rel="noreferrer"
              sx={{
                cursor: 'pointer',
              }}
              >
                <Image src={FD} sx={styles.workflow.box.img} alt="Frazier and Deeter" />
            </a>
          </Box> */}
          <Box as="span" sx={styles.workflow.box}>
          <a
              target= '_blank'
              href= "https://airtable.com/shrWqbcCtbPaXXfQ3"
              variant= "buttons.primary"
              rel="noreferrer"
              sx={{
                cursor: 'pointer',
              }}
              >
              <Image src={EGSA} sx={styles.workflow.box.img} alt="European Global Navigation Satellite Systems Agency" />
            </a>
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
    backgroundColor: '#0f0f0f',
    position: 'relative',
    pt: '100px',
    pb: '100px',
    '@media screen and (max-width: 1366px)': {
      pb: '100px',
    },
    '@media screen and (max-width: 992px)': {
      pb: '60px',
      paddingTop: '60px',
    },
    blockTitle: {
      marginBottom: [30, null, 55],
      textAlign: 'center',
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },

    box: {
      width: '100%',
      flex: '1 1 33.333333333%',

      img: {
        width: '250px',
        backgroundColor: '#ffffff',
        borderRadius: '9px',
        padding: '20px',
      },
    },

    iconBox: {
      width: '70px',
      height: '70px',
      borderRadius: '40%',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      mb: 30,
      fontSize: 30,
      fontWeight: 700,
      justifyContent: 'center',
      color: 'black',
      boxShadow: '0px 14px 20px rgba(76, 119, 171, 0.1)',
      '@media screen and (max-width: 560px)': {
        width: '50px',
        height: '50px',
        fontSize: 24,
        borderRadius: 20,
        mb: 25,
      },
      '@media screen and (max-width: 480px)': {
        mb: 20,
      },
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      mt: '-5px',
      title: {
        fontSize: 22,
        color: 'black',
        lineHeight: 1.55,
        fontWeight: 500,
        mb: '15px',
        '@media screen and (max-width: 1200px)': {
          fontSize: 20,
          lineHeight: 1.4,
        },
        '@media screen and (max-width: 480px)': {
          fontSize: '18px',
          lineHeight: 1.45,
          mb: '10px',
        },
      },

      subTitle: {
        fontSize: '15px',
        fontWeight: 400,
        lineHeight: '1.73',
        color: '#343D48',
        '@media screen and (max-width: 480px)': {
          fontSize: '15px',
          lineHeight: '1.85',
        },
      },
    },
  },
};
