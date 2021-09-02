/** @jsx jsx */

import {
  Box,
  Flex,
  Container,
  Text,
  jsx,
  Image,
} from 'theme-ui';

// import {
//   FaGithub,
//   FaLinkedinIn,
//   FaTwitter,
//   FaLocationArrow,
//   FaMailBulk,
//   FaCopyright,
// } from "react-icons/fa"

import styled from 'styled-components'
import Logo from 'assets/sr_launchpad.png'
import FI from 'assets/fi.png'


import Particles from 'react-particles-js';

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
                    "value": 20,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": ["#EEB23D","#243141","#DC4F45"]
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 2,
                      "color": "",
                    },
                    "polygon": {
                      "nb_sides": 9
                    },
                  },
                  "opacity": {
                    "value": 2,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 130,
                    "color": "#a7a7a7",
                    "opacity": 0.4,
                    "width": 1,
                  },
                  "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "top",
                    "random": false,
                    "straight": true,
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
              <Image sx={styles.banner.logo} src={Logo} alt="Silicon Roundabout Community Logo" />
              <Text sx={{
                    fontSize: '42px',
                    fontWeight: 'bolder',
                    lineHeight: 1.7,
                    color: '#000',
                    '@media only screen and (max-width: 992px)': {
                      fontSize: '22px',
                    },
                  }}>
               London's first 4-month bootcamp for <br></br> <u>Deep-Tech</u> founders<br></br>
                <Image sx={styles.banner.FI} src={FI} alt="Founders Institute Logo" />
              </Text>
              <Link
                target= '_blank'
                path="https://forms.gle/8D5pEUdd59R7NNJg8"
                label="Apply!"
                sx={styles.banner.form.link.button}
                variant="buttons.primary"
              />
              <Text sx={{
                    fontSize: '14px',
                    fontWeight: 'light',
                    lineHeight: 2,
                    color: '#000000',
                    '@media only screen and (max-width: 992px)': {
                      fontSize: '12px',
                    },
              }}>
              <styles sx={{fontSize: '28px'}}>&#9202;</styles><styles sx={{fontWeight:'bold'}}>  Deadline: </styles> 9th September, 2021 @11 AM
              </Text>
            </Box>
          </Box>
          </Flex>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    fontColor: '#000000 !important',
    fontFamily: 'futura !important',
    backgroundColor: '#fafafa',
    height: '100vh',
    overflowX: 'hidden',
    paddingTop: ['40px', '0px'],
    paddingBottom: ['0px', null, '40px'],
    // backgroundImage: [
    //   `url(${BannerBG})`,
    // ],
    backgroundPosition: 'left top',
    backgroundRepeat: 'round',

    logo: {
      width: '250px',
      '@media only screen and (max-width: 720px)': {
        width: '175px',
      },
    },
    FI: {
      width: '650px',
      pt: '20px',
      '@media only screen and (max-width: 720px)': {
        width: '275px',
      },
    },

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
    purple: {
      color: '#775AFF',
    },
    yellow: {
      color: '#edbc3e',
    },
    red: {
      color: '#D94738',
    },

    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '100%',
      marginTop: '120px',
      alignItems: 'center',
      flexWrap: 'wrap',
      zIndex: 100,

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
        backgroundColor: '#0f0f0f !important',
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
      flexDirection: 'column',
      zIndex: '100',
      paddingLeft: '20px',
      alignItems: 'center',

      row2: {
          flexWrap: 'wrap',
          display: 'flex',
          // marginLeft: '-15px',
          // marginRight: '-15px',
          flexDirection: 'column',
          zIndex: '100',
          paddingLeft: '40px',
          paddingRight: '40px',
          backgroundColor: '#0f0f0f',
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
      mt: '160px',
      mb: '80px',
      flex: ['1 1 100%', null, '0 0 50%'],
      zIndex: '100',

      '@media only screen and (max-width: 720px)': {
        pl: '0px',
        pr: '0px',
        mt: '120px',
        mb: '40px',
        mr: '20px',
      },

    },
    content: {
      textAlign: 'center',
      paddingRight: [0, 0, 0, 0, '40px', 0, 0],
      backgroundColor: '#fafafa',
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
      maxWidth: ['250px', null, null, '250px'],
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
      marginTop: ['15px', '40px'],
      height: ['100%', null, null, '100%', null, null, '100%'],
      marginBottom: ['10px', null, null, null, null],
      alignItems: 'center',

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
          marginTop: '20px',
          marginBottom: '0px',
          alignItems: 'center',
          color: '#fff',
          width: '200px',
          fontSize: '20px !important',
          backgroundColor: '#000',
          borderRadius: '9px',
          textAlign: 'center',
          '&:hover': {
            color: '#fff',
            backgroundColor: '#D94738',
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
