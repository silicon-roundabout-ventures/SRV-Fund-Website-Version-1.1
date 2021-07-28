/** @jsx jsx */

import {
  Box,
  Flex,
  Container,
  Image,
  Heading,
  Text,
  Input,
  Button,
  Paragraph,
  jsx,
} from 'theme-ui';

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaLocationArrow,
  FaMailBulk,
  FaLinkedin,
  FaMailchimp,
  FaCopyright,
  FaTerminal,
  FaPlaystation,
  FaNetworkWired,
  FaLightbulb,
  FaRegLightbulb,
  FaAtom,
  FaPoundSign,
  FaGgCircle,
  FaFolderMinus,
  FaUserNurse,
  FaRobot,
  FaArrowLeft,
  FaArrowCircleLeft,
  FaArrowAltCircleLeft,
  FaArrowsAlt,
  FaArrowsAltH,
  FaArrowsAltV,
  FaCentercode,
  FaLifeRing,
  FaLongArrowAltLeft,
} from "react-icons/fa"

import React from 'react';

import Particles from 'react-particles-js';
import styled from 'styled-components'

import Axiom from 'assets/startups/axiom.png';
import Ori from 'assets/startups/ori.png';
import Zego from 'assets/zego.svg';
import PopularCourse from 'sections/popular-course';

import { Link } from 'components/link';


const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Flex sx={styles.banner.row}>    
          <Box sx={styles.banner.textcol}>
            <Box sx={styles.banner.content}>
              <Text sx={{
                    fontSize: '64px',
                    fontWeight: 'bold',
                    lineHeight: 1.7,
                    color: '#fff',
                    '@media only screen and (max-width: 992px)': {
                      fontSize: '48px',
                    },
                  }}>
                HOW TO <br></br> "<styles sx={styles.banner.content.yellow}>START-UP</styles>"
                <Text sx={{
                    fontSize: '18px',
                    fontWeight: '100',
                    lineHeight: 1.7,
                    color: '#fff',
                    '@media only screen and (max-width: 992px)': {
                      fontSize: '14px',
                    },
                  }}>
                A 2-part DocuSeries with Startup Founders.<br></br> Coming Soon!
                </Text>
              </Text>
            </Box>
          </Box>
          <Box sx={styles.banner.col}>
            <Box sx={styles.banner.imageBox}>
              <Box sx={styles.banner.imageInner}>
                <Image sx={{width: '700px'}} src={Zego} alt="banner image" />
                <Text sx={{
                    fontSize: '14px',
                    fontWeight: '100',
                    lineHeight: 0.1,
                    color: '#fff',
                    '@media only screen and (max-width: 992px)': {
                      fontSize: '10px',
                    },
                  }}>
                Stuart Kelly, Zego Co-founder
                </Text>
              </Box>
            </Box>
          </Box>
          
        </Flex>
        <Box sx={styles.banner.footer}>
              <Box sx={styles.banner.footer.contact}>
                <span sx={{fontSize: '1',}}><FaMailBulk/> hello@siliconroundabout.tech</span>
                <span sx={{fontSize: '1',}}><FaLocationArrow/> London, UK</span>
              </Box>
              <Link target={'_blank'} to={'https://github.com/silicon-roundabout-ventures/'}><FaGithub sx={styles.banner.footer.icons}/></Link>
              <Link target={'_blank'} to={'https://twitter.com/SiliconLondon'}><FaTwitter sx={styles.banner.footer.icons}/></Link>
              <Link target={'_blank'} to={'https://www.linkedin.com/company/siliconroundabout/'}><FaLinkedinIn sx={styles.banner.footer.icons}/></Link>
              <span sx={{fontSize: '12px'}}><FaCopyright/> Silicon Roundabout Ventures @2021</span>
          </Box>

      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    height: '100vh',
    overflowX: 'hidden',
    paddingTop: ['100px', '120px'],
    paddingBottom: ['0px', null, '40px'],
    // backgroundImage: [
    //   'linear-gradient(-180deg, #E0F5FA 0%, #FFFDE6 100%)',
    //   `url(${BannerBG})`,
    // ],
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',

    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '100%',
      marginTop: '120px',
      alignItems: 'center',
      flexWrap: 'wrap',

      '@media only screen and (max-width: 720px)': {
        marginTop: '0px',
        marginRight: '20px',
        padding: '10px',
        paddingBottom: '40px',
        justifyContent: 'space-evenly',
      },

      contact: {
        fontSize: 2,
        color: '#fff',
        flex: '0 0 84%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',

        '@media only screen and (max-width: 992px)': {
              display: 'none',
        },

        text: {
          fontSize: 2,
          color: '#fff',
          flex: '0 0 84%',
        },
      },
      icons: {
        marginTop: '8%',
        color: '#fff',
        width: '3rem',
        height: '3rem',
        backgroundColor: '#000',
        display: 'inline-flex',
        alignItems: 'center',


        '@media only screen and (max-width: 992px)': {
          width: '2rem',
          height: '2rem',
        },
      },
    },

    startups: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: '40px',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      rowGap: '20px',
      columnGap: '40px',

      '@media only screen and (max-width: 992px)': {
        rowGap: '20px',
        columnGap: '0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: '20px',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },

      h3:{
        color: 'white',
        fontSize: '26px',


        '@media only screen and (max-width: 992px)': {
          fontSize: '20px',
          maxWidth: 'max-content',
          width: '300px',
        },
      },
      title:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',

        p: {
          color: 'white',
          fontSize: '16px',
        },

        '@media only screen and (max-width: 992px)': {
          fontSize: '10px',
          maxWidth: 'max-content',
          width: '150px',

          p: {
            color: 'white',
            fontSize: '12px',
          },
        },
      },

      // icons: {
      //   color:'white',
      //   marginLeft: '5px',
      //   marginRight: '5px',
      // },

      socials: {
        display: 'flex',
        flexDirection: 'row',
      },

      contact: {
        fontSize: 2,
        color: '#fff',
        flex: '0 0 84%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',

        '@media only screen and (max-width: 992px)': {
              display: 'none',
        },

        text: {
          fontSize: 2,
          color: '#fff',
          flex: '0 0 84%',
        },
      },

      avatar: {
        height: '80px',
        width: '80px',
        alignItems: 'center',
        flex: '0 0 30.333333333%',
        display:'flex',
        flexDirection: 'column',
        marginBottom: '40px',
        rowGap: '20px',

        '@media only screen and (max-width: 992px)': {
          width: '45px',
          height: '45px',
          margin: '15px',
        },

        img: {
          margin: ['0px', null, null, null, null, '0'],
          height: '100%',
        },
      },
    },


    container: {
      maxWidth: ['100%', null, null, null, null, '1240px', '1440px'],
    },
    row: {
      flexWrap: 'wrap',
      display: 'flex',
      // marginLeft: '-15px',
      // marginRight: '-15px',
      flexDirection: 'row',
      zIndex: '100',
      paddingLeft: '20px',

      row2: {
          flexWrap: 'wrap',
          display: 'flex',
          // marginLeft: '-15px',
          // marginRight: '-15px',
          flexDirection: 'column',
          zIndex: '100',
          paddingLeft: '40px',
          paddingRight: '40px',
          background: '#0a0a0a',
          borderRadius: '20px',
          paddingBottom: '80px',

          '@media only screen and (max-width: 720px)': {
            pl: '20px',
            pr: '20px',
            pb: '20px',
            mb: '40px',
            mr: '20px',
          },
      },
    },
    col: {
      pl: '0px',
      pr: '0px',
      mt: '0px',
      mb: '0px',
      flex: ['1 1 100%', null, '0 0 50%'],
      zIndex: '100',

      '@media only screen and (max-width: 720px)': {
        pl: '0px',
        pr: '0px',
        mt: '0px',
        mb: '0px',
        mr: '20px',
      },

    },
    textcol: {
      pl: '0px',
      pr: '0px',
      mt: '160px',
      mb: '80px',
      flex: ['1 1 100%', null, '0 0 50%'],
      zIndex: '100',

      '@media only screen and (max-width: 720px)': {
        pl: '0px',
        pr: '0px',
        mt: '80px',
        mb: '0px',
        mr: '20px',
      },

    },
    content: {
      paddingRight: [0, 0, 0, 0, '40px', 0, 0],
      orange: {
        color: '#fb966e',
      },
      pink: {
        color: '#FF7EF5',
      },
      green: {
        color: '#9dff65',
      },
      blue: {
        color: '#5AC4FF',
      },
      yellow: {
        color: '#edbc3e',
      },
      red: {
        color: '#D94738',
      },
      h3: {
        lineHeight: 2,
        color: 'black',
        fontWeight: 'bold',
        position: 'relative',
        width: '100%',
        fontSize: ['28px', '35px', null, '45px', null, '50px', '85px'],
        maxWidth: ['500px', null, null, null, null, null, '100%'],
        '&:before': {
          content: '""',
          width: ['290px', null, null, null, null, '260px', '381px'],
          height: '15px',
          // backgroundImage: `url(${BannerTextLine})`,
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          bottom: '-15px',
          right: ['15px', null, null, null, null, '140px', '100px'],
          display: ['none', null, null, null, null, 'block'],
        },
      },
      p: {
        lineHeight: 2.33,
        color: '#02073E',
        marginTop: ['10px', null, null, '35px'],
        fontSize: ['15px', '18px'],
        pr: ['15px', 0],
        br: {
          display: ['none', null, null, null, null, 'block'],
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
      position: 'relative',
      width: '100%',
      maxWidth: ['250px', null, null, '345px'],
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
      marginTop: ['15px', '40px'],
      height: ['100%', null, null, '100%', null, null, '100%'],
      marginBottom: ['20px', '30px', null, null, '40px'],

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
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        right: '25px',
        transform: 'translateY(-50%)',
        fontSize: ['16px', '20px'],
        display: 'flex',
        alignItems: 'center',

        button: {
          paddingLeft: '25px',
          paddingRight: '25px',
          alignItems: 'center',
          color: '#000',
          width: '100%',
          fontSize: '20px !important',
          backgroundColor: '#fff',
          borderRadius: '9px',
          textAlign: 'center',
          '&:hover': {
            color: '#000',
            backgroundColor: 'grey',
            borderRadius: '9px',
          },
          '@media only screen and (max-width: 720px)': {
            fontSize: '16px !important',
            width: '70%',
          },
        },
        button2: {
          paddingLeft: '25px',
          paddingRight: '25px',
          alignItems: 'center',
          textAlign: 'center',
          color: '#000',
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: '9px',
          marginTop: '20px',
          '&:hover': {
            color: '#000',
            backgroundColor: 'grey',
            borderRadius: '9px',
          },

          '@media only screen and (min-width: 992px)': {
            display: 'none',
          },
        },
      },
    },
    partner: {
      display: 'flex',
      flexDirection: ['column', null, null, null, null, 'row'],
      alignItems: ['flex-start', null, null, null, null, 'center'],
      color: 'rgba(2, 7, 62,.6)',
      fontSize: ['15px', null, '16px'],
      span: {
        display: ['block', null, 'inline-block'],
      },
      img: {
        marginLeft: ['0', '0px', null, null, null, '20px'],
        mt: ['20px', null, null, null, null, '0'],
      },
    },
    imageBox: {
      display: 'flex',
      justifyContent: ['flex-start', null, null, 'flex-end'],
      marginTop: ['40px', null, null, '0'],
      marginBottom: ['80px', null, null, '0'],
    },
    imageInner: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        // border: '2px solid #FFDC6B',
        // borderRadius: '5px',
        top: '30px',
        left: '30px',
        position: 'absolute',
        zIndex: 2,
        display: ['none', null, 'block'],
        '@media(max-width: 991px)': {
          left: '10px',
          top: '15px',
          height: 'calc(100% - 15px)',
        },
      },
      '&:after': {
        content: '""',
        width: '302px',
        height: '347px',
        // backgroundImage: `url(${BannerPattern})`,
        backgroundPosition: 'center',
        top: '-30px',
        right: '-73px',
        position: 'absolute',
        zIndex: 1,
        '@media(max-width: 991px)': {
          right: '-10px',
        },
      },
      img: {
        position: 'relative',
        zIndex: 9,
        maxWidth: '100%',
      },
      '.videoBtn': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 10,
      },
    },
  },
};
