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
  FaCopyright,
} from "react-icons/fa"

import React from 'react';

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
  z-index: 2;
`

const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Flex sx={styles.banner.row}>
        <ParticleClass>
        <Particles id="particles-js"
            params={
              {
                "particles": {
                  "number": {
                    "value": 120,
                    "density": {
                      "enable": true,
                      "value_area": 691.3181133058181
                    }
                  },
                  "color": {
                    "value": "#fff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 3.5,
                      "color": "#f7f7f7",
                    },
                    "polygon": {
                      "nb_sides": 9
                    },
                  },
                  "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 0,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 130,
                    "color": "#a7a7a74a",
                    "opacity": 0.4,
                    "width": 1,
                  },
                  "move": {
                    "enable": true,
                    "speed": 0.2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "repulse",
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": false
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 150,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }
            }
            style={{
              "position": "absolute",
              "top": "0",
              "left": "0",
              "right": "0",
              "bottom": "0",
            }}
          />
        </ParticleClass>
          <Box sx={styles.banner.col}>
            <Box sx={styles.banner.content}>  
              <Text sx={{
                    fontSize: 6,
                    fontWeight: 'bold',
                    lineHeight: 2.0,
                    marginTop: '80px',
                    color: '#fff',
                    '@media only screen and (max-width: 992px)': {
                      fontSize: 4,
                      marginTop: '80px',
                    },
                  }}>
                Connecting (<styles sx={styles.banner.content.orange}>Capital</styles>) &#123; <br></br>
                <styles sx={styles.banner.content.pink}>with</styles><br></br>
                Next-Generation.<styles sx={styles.banner.content.green}>Technologies</styles><br></br>
                &#125;
              </Text>
              <Box as="form" sx={styles.banner.form}>
                <Link
                  path="/form"
                  label="Startups Apply"
                  sx={styles.banner.form.link.button}
                  variant="buttons.primary"
                />
                <Link
                  path="/investors"
                  label="For Investors"
                  sx={styles.banner.form.link.button2}
                  variant="buttons.primary"
                />
                {/* <Box as="label" htmlFor="search" variant="styles.srOnly">
                  Search
                </Box>
                <Input
                  name="search"
                  id="search"
                  placeholder="Search Course Name"
                  sx={styles.banner.form.input}
                />
                <Button
                  type="submit"
                  aria-label="search btn"
                  sx={(styles.banner.form.button, { color: '#fff' })}
                >
                </Button> */}
              </Box>
              {/* <Box sx={styles.banner.partner}>
                <span>Sponsored by:</span>
                <Image src={PartnerImage} alt="banner image" />
              </Box> */}
            </Box>
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
          </Box>
          {/* <Box sx={styles.banner.col}>
            <Box sx={styles.banner.imageBox}>
              <Box sx={styles.banner.imageInner}>
                <Image src={BannerImage} alt="banner image" />
                <VideoBtn path="L9jU-IIN0ng" />
              </Box>
            </Box>
          </Box> */}
        </Flex>
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

      '@media only screen and (max-width: 992px)': {
        marginTop: '120px',
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
      pr: '0px',
      flex: ['1 1 100%', null, '0 0 50%'],
      zIndex: '100',

      '@media only screen and (max-width: 992px)': {
        pl: '15px',
        pr: '15px',
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
      maxWidth: ['150px', null, null, '345px'],
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
        button2: {
          paddingLeft: '25px',
          paddingRight: '25px',
          color: '#000',
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
