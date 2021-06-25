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
  Checkbox,
  Label,
  Radio,
  Textarea,
  Select,
  Slider,
} from 'theme-ui';

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaLocationArrow,
  FaMailBulk,
  FaCopyright,
  FaStar,
} from "react-icons/fa"

import React, { Component } from 'react';

// import VideoBtn from 'components/video-btn';
import Particles from 'react-particles-js';
import styled from 'styled-components'

import BannerBG from 'assets/banner-bg-1-1.png';
import BannerTextLine from 'assets/banner-text-line.png';
import BannerPattern from 'assets/banner-pattern.png';
import BannerImage from 'assets/banner-image-1.png';
import PartnerImage from 'assets/brands.svg';
import { Link } from 'components/link';


export const ParticleClass = styled.main`
  width: 100%;
  z-index: 1;
`

const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Flex sx={styles.banner.row}>
          <Box sx={styles.banner.col}>
            <Box sx={styles.banner.content}>  
              <Text sx={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    lineHeight: 2.0,
                    marginTop: '40px',
                    color: '#fff',
                    '@media only screen and (max-width: 992px)': {
                      fontSize: '1rem',
                    },
                  }}>
                Application_Form
              </Text>
              <Box as="form" id={"form1"} sx={styles.banner.form} onSubmit={(e) => e.preventDefault()}>
                  <Label htmlFor="founder1fname">Founders First Name</Label>
                  <Input required type="text" name="founder1fname" id="founder1fname" mb={3} />
                  
                  <Label htmlFor="founder1lname">Founders Last Name</Label>
                  <Input required type="text" name="founder1lname" id="founder1lname" mb={3} />

                  <Label htmlFor="bio">Bio</Label>
                  <Input required as="textarea" rows="3" type="text" name="bio" id="bio" mb={3} />
                  
                  <Label htmlFor="email">Email Address</Label>
                  <Input required type="email" name="email" id="email" mb={3} />
                  
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input required type="number" name="phone" id="phone" mb={3} />
                  
                  <Button type="submit">Submit</Button>
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
              <span sx={{fontSize: '1'}}><FaCopyright/> Silicon Roundabout Ventures @2021</span>
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
      marginTop: '160px',
      alignItems: 'center',
      flexWrap: 'wrap',

      '@media only screen and (max-width: 720px)': {
        marginTop: '120px',
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

    container: {
      maxWidth: ['100%', null, null, null, null, '1240px', '1440px'],
    },
    row: {
      flexWrap: 'wrap',
      display: 'flex',
      marginLeft: '-15px',
      marginRight: '-15px',
      flexDirection: 'column',
    },
    col: {
      pl: '40px',
      pr: '15px',
      flex: ['1 1 100%', null, '0 0 50%'],
      zIndex: '100',
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
      h3: {
        lineHeight: 1.18,
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
      maxWidth: ['200px', null, null, '345px'],
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
      marginTop: ['15px', '40px'],
      marginLeft: ['15px', '40px'],
      height: ['100%', null, null, '100%', null, null, '100%'],
      marginBottom: ['20px', '30px', null, null, '40px'],
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',

      input: {
        backgroundColor: '#000',
        top: 0,
        left: 0,
        paddingLeft: '25px',
        '-webkit-transition': 'width .35s ease-in-out',
        transition: 'width .35s ease-in-out',

        width: '100%',
        height: '100%',
        color: '#fff',
        boxShadow: 'none !important',
        outline: 'none !important',
        borderRadius: '8px',
        fontSize: ['15px', '16px'],

        '&:focus':{
          
        },
      },

      link: {
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        right: '25px',
        transform: 'translateY(-50%)',
        fontSize: ['16px', '22px'], 
        display: 'flex',
        alignItems: 'center',

        button: {
          paddingLeft: '25px',
          paddingRight: '25px',
          color: '#000',
          backgroundColor: '#fff',
          borderRadius: '9px',
          '&:hover': {
            color: '#000',
            backgroundColor: 'grey',
            borderRadius: '9px',
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
      marginTop: ['60px', null, null, '0'],
    },
    imageInner: {
      position: 'relative',
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        border: '2px solid #FFDC6B',
        borderRadius: '5px',
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
