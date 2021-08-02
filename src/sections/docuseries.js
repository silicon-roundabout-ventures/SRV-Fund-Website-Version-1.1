/** @jsx jsx */

import {
  Box,
  Flex,
  Container,
  Text,
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

import Particles from 'react-particles-js';
import styled from 'styled-components'


// import Mailchimp from 'components/mailchimp';

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
                    "value": "#000"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 2.5,
                      "color": "#ffffff",
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
                    "enable": false,
                    "distance": 130,
                    "color": "#a7a7a7",
                    "opacity": 0.4,
                    "width": 1,
                  },
                  "move": {
                    "enable": true,
                    "speed": 0.9,
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
          <Box sx={styles.banner.textcol}>
          <Box sx={styles.banner.content}>
              <Text sx={{
                    fontSize: '64px',
                    fontWeight: 'bold',
                    lineHeight: 1.7,
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '@media only screen and (max-width: 992px)': {
                      fontSize: '32px',
                    },
                  }}>
               <Box><styles sx={styles.banner.content.yellow}>Engineer</styles> A Startup</Box>
                <Text sx={{
                    fontSize: '18px',
                    fontWeight: '100',
                    lineHeight: 2,
                    color: '#fff',
                    width: '1080px',
                    // display: 'flex',
                    // flexDirection: 'column',
                    // alignItems: 'center',
                    '@media only screen and (max-width: 992px)': {
                      fontSize: '10px',
                      width: 'auto',
                    },
                  }}>
                A 20 Episodes docuseries featuring real-life stories and actionable insights from entrepreneurs, executives, and investors who have built billion dollar startups or helped founders get there.
                </Text>
                  <Text sx={{
                      fontSize: '18px',
                      fontWeight: '100',
                      lineHeight: 1.7,
                      display: 'none',
                      '@media only screen and (max-width: 992px)': {
                        fontSize: '10px',
                        display: 'none',
                      },
                    }}>
                  Register your interest below to get 2-week early access to the episodes.
                  </Text>
                <Box as="form" sx={styles.banner.form}>
                  <Link
                    path={"https://airtable.com/shrIqwcK5JpishUan"}
                    target= '_blank'
                    spy={true}
                    smooth={true}
                    duration={800}
                    label="Get 2-Week Early Access!"
                    sx={styles.banner.form.link.button}
                    variant="buttons.primary"
                  />
                </Box>
              </Text>
            </Box>     
       
          </Box>

        <Flex sx={styles.banner.row.row2}>
              <Text sx={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      lineHeight: 2.0,
                      marginTop: '80px',
                      color: '#fff',
                      '@media only screen and (max-width: 992px)': {
                        fontSize: '20px',
                        marginTop: '40px',
                      },
                    }}>
                    &lt;/About_DocuSeries&gt;
              </Text>
              <Text sx={{
                      fontSize: '20px',
                      fontWeight: 'regular',
                      lineHeight: 2.0,
                      marginTop: '40px',
                      color: '#fff',
                      '@media only screen and (max-width: 992px)': {
                        fontSize: '12px',
                        marginTop: '20px',
                      },
                    }}>
                  <p> <styles sx={styles.banner.content.yellow}>Engineer</styles> A Startup is an interview format docuseries focusing on the trials, tribulations and all the struggles that come with starting your own business. From getting <styles sx={styles.banner.content.pink}>funding</styles>, <styles sx={styles.banner.content.red}>hiring</styles> great people, <styles sx={styles.banner.content.green}>growing</styles> your business as well as raising funds for growth is what this docuseries is all about.</p>
                  <p>The show will be a '<styles sx={styles.banner.content.blue}>fly on the wall</styles>’ documentary style look at startup founders, executives and investors who made it through all of the struggles to bring an idea to reality in order to share their stories from start to finish.</p>
                  <p>Our hope is that this series will inspire others that there is no such thing as failure.</p>
                  <p></p>
              </Text>
              <Box sx={styles.banner.register}>
                {/* <Box sx={styles.banner.register.col}>
                  <Text sx={{
                          fontSize: '32px',
                          fontWeight: 'bold',
                          lineHeight: 2.0,
                          marginTop: '40px',
                          color: '#fff',
                          '@media only screen and (max-width: 992px)': {
                            fontSize: '20px',
                            marginTop: '40px',
                          },
                        }}>
                        &lt;/Register_Interest&gt;
                  </Text>
                  <Mailchimp/>
                </Box> */}
                <Box sx={styles.banner.register.col2}>
                  <Text sx={{
                            fontSize: '32px',
                            fontWeight: 'bold',
                            lineHeight: 2.0,
                            marginTop: '40px',
                            color: '#fff',
                            // display: 'none',
                            '@media only screen and (max-width: 992px)': {
                              fontSize: '20px',
                              marginTop: '40px',
                              display: 'block',
                            },
                          }}>
                          &lt;/Why_Register&gt;
                    </Text>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    mt: '40px',
                    '@media only screen and (max-width: 992px)': {
                      marginTop: '0px',
                    },
                  }}>
                    <Box sx={styles.banner.startups}>

                      <Box as="span" sx={styles.banner.startups.avatar}>
                        <Text as="H3">&#91; <styles sx={styles.banner.content.red}>Premium</styles> &#93;</Text>
                        <Box sx={styles.banner.startups.title}>
                          <Text as="p">Get access to the premium rich content of the episodes</Text>
                        </Box>
                      </Box>
                      <Box as="span" sx={styles.banner.startups.avatar}>
                        <Text as="H3">&#123; <styles sx={styles.banner.content.red}>Early Access</styles> &#125;</Text>
                        <Box as="p" sx={styles.banner.startups.title}>
                          <Text as="p">Get 2-week early access to the episodes</Text>
                        </Box>
                      </Box>
                      <Box as="span" sx={styles.banner.startups.avatar}>
                        <Text as="H3">&#47; <styles sx={styles.banner.content.red}>Community</styles> &#47;</Text>
                        <Box as="p" sx={styles.banner.startups.title}>
                          <Text as="p">Exclusive invite to the community platform</Text>
                        </Box>
                      </Box>
                      <Box as="span" sx={styles.banner.startups.avatar}>
                        <Text as="H3">&#183; <styles sx={styles.banner.content.red}>Pitch</styles> &#183;</Text>
                        <Box as="p" sx={styles.banner.startups.title}>
                          <Text as="p">Opportunity to present at one of our monthly events</Text>
                        </Box>
                      </Box> 
                    </Box>
                    <Link
                          path={"https://airtable.com/shrIqwcK5JpishUan"}
                          target= '_blank'
                          spy={true}
                          smooth={true}
                          duration={800}
                          label="Get 2-Week Early Access!"
                          sx={styles.banner.form.link.button}
                          variant="buttons.primary"
                        />
                  </Box>
                </Box>
              </Box> 
        </Flex>
        
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

    register: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      mt: '40px',

      '@media only screen and (max-width: 720px)': {
        flexDirection: 'column',
      },

      col: {
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '100%',
      flex: '1',
      },

      col2: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        alignItems: 'flex-start',
        '@media only screen and (max-width: 720px)': {
          alignItems: 'center',
        },
      },
    },

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
        marginRight: '0px',
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
        width: '100%',
        alignItems: 'center',
        flex: '0 0 30.333333333%;',
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
            pb: '40px',
            mb: '40px',
            mr: '20px',
          },
      },
    },
    col: {
      pl: '0px',
      pr: '0px',
      mt: '120px',
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

    textcol: {
      pl: '0px',
      pr: '0px',
      mt: '120px',
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
      maxWidth: ['350px', null, null, '350px'],
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
      marginTop: ['0px', '0px'],
      height: ['100%', null, null, '100%', null, null, '100%'],
      marginBottom: ['40px', '40px', null, null, '40px'],

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
          width: '350px',
          fontSize: '20px !important',
          backgroundColor: '#fff',
          borderRadius: '10px',
          textAlign: 'center',
          mt: '40px',
          '&:hover': {
            color: '#000',
            backgroundColor: 'grey',
            borderRadius: '10px',
          },
          '@media only screen and (max-width: 720px)': {
            fontSize: '14px !important',
            width: '100%',
            mt: '40px',
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
          borderRadius: '10px',
          marginTop: '20px',
          '&:hover': {
            color: '#000',
            backgroundColor: 'grey',
            borderRadius: '10px',
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
