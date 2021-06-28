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
  FaChargingStation,
  FaEarlybirds,
  FaPoundSign,
  FaMeetup,
  FaHireAHelper,
} from "react-icons/fa"

import React from 'react';

import styled from 'styled-components'

import BannerPattern from 'assets/banner-pattern.png';
import BannerImage from 'assets/banner-image-1.png';
import PartnerImage from 'assets/brands.svg';
import Paul from 'assets/team/paul.png';
import Franco from 'assets/team/franco.png';
import Deep from 'assets/team/deep.png';
import Ruhitha from 'assets/team/ruhitha.png';
import VP from 'assets/team/vp.png';

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
            {/* <Box sx={styles.banner.content}>   */}
              <Text sx={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      lineHeight: 2.0,
                      marginTop: '40px',
                      color: '#fff',
                      '@media only screen and (max-width: 992px)': {
                        fontSize: '22px',
                        marginTop: '40px',
                      },
                    }}>
                    &lt;/Who we are&gt;	
              </Text>
              <Text sx={{
                      fontSize: '20px',
                      fontWeight: 'regular',
                      lineHeight: 2.0,
                      marginTop: '20px',
                      color: '#fff',
                      '@media only screen and (max-width: 992px)': {
                        fontSize: '12px',
                        marginTop: '0px',
                      },
                    }}>
                We are a Community-Driven VC investment vehicle backing UK-based NEXT-GENERATION Tech Startups at pre-seed/seed. 
                Our mission is to help investors capitalise on their Future Success and Mass Adoption. 
                  <br/>
                  
                  <ul>
                  <FaMeetup/>&nbsp;	&nbsp;We run the Largest Tech Meetup Community in Europe, giving us direct access to 5000+ startups<br/>
                  <FaTerminal/>&nbsp;	&nbsp;We all have Technical Startup/Scaleup Backgrounds, helping us select and support founders <br />
                  <FaHireAHelper/>&nbsp; &nbsp;We offer access to our Proprietary Ecosystem to help with specialist hiring and supply chain connections
                  </ul>
              </Text>
              <Text sx={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      lineHeight: 2.0,
                      marginTop: '40px',
                      color: '#fff',
                      '@media only screen and (max-width: 992px)': {
                        fontSize: '22px',
                        marginTop: '20px',
                      },
                    }}>
                  Team_
                </Text>
                <Box sx={styles.banner.team}>
                  
                  <Box as="span" sx={styles.banner.team.avatar}>
                    <Image src={Franco} alt="Francesco P." />
                    <Text as="H3">Francesco P.</Text>
                    <Box sx={styles.banner.team.title}>
                      <Text as="p">General Partner</Text>
                      <Box sx={styles.banner.team.socials}>
                        <Link target={'_blank'} to={'https://www.linkedin.com/in/fperticarari/'}><FaLinkedin sx={styles.banner.team.icons}/></Link>
                        <Link target={'_blank'} to={'hhttps://github.com/fpert041'}><FaGithub sx={styles.banner.team.icons}/></Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box as="span" sx={styles.banner.team.avatar}>
                    <Image src={Paul} alt="Paul D." />
                    <Text as="H3">Paul D.</Text>
                    <Box as="p" sx={styles.banner.team.title}>
                      <Text as="p">General Partner</Text>
                      <Box sx={styles.banner.team.socials}>
                        <Link target={'_blank'} to={'https://www.linkedin.com/in/pauldinulescu/'}><FaLinkedin sx={styles.banner.team.icons}/></Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box as="span" sx={styles.banner.team.avatar}>
                    <Image src={Deep} alt="Lord Deep" />
                    <Text as="h3">Deep G.</Text>
                    <Box as="p" sx={styles.banner.team.title}>
                      <Text as="p">Portfolio Analyst</Text>
                      <Box sx={styles.banner.team.socials}>
                        <Link target={'_blank'} to={'https://www.linkedin.com/in/deepgodara/'}><FaLinkedin sx={styles.banner.team.icons}/></Link>
                        <Link target={'_blank'} to={'https://twitter.com/deeepgodara'}><FaTwitter sx={styles.banner.team.icons}/></Link>
                        <a target={'_blank'} href='mailto:deep@siliconroundabout.tech'><FaTerminal sx={styles.banner.team.icons}/></a>
                      </Box>
                    </Box>
                  </Box>
                  <Box as="span" sx={styles.banner.team.avatar}>
                    <Image src={Ruhitha} alt="Ruhitha R." />
                    <Text as="H3">Ruhitha R.</Text>
                    <Box as="p" sx={styles.banner.team.title}>
                      <Text as="p">Community Manager</Text>
                      <Box sx={styles.banner.team.socials}>
                        <Link target={'_blank'} to={'https://www.linkedin.com/in/ruhitha-reddy-7239b2162/'}><FaLinkedin sx={styles.banner.team.icons}/></Link>
                        <a href='mailto:ruhitha@siliconroundabout.tech'><FaMailchimp sx={styles.banner.team.icons}/></a>
                      </Box>
                    </Box>
                  </Box>
            </Box>
            </Flex>
            
  
        <Flex sx={styles.banner.row}>
            <Text sx={{
                          fontSize: '32px',
                          fontWeight: 'bold',
                          lineHeight: 2.0,
                          marginTop: '80px',
                          color: '#fff',
                          '@media only screen and (max-width: 992px)': {
                            fontSize: '22px',
                            marginTop: '80px',
                          },
                          }}>
                        Venture_Partners
                    </Text>
            <Box sx={styles.banner.team}>
              
              <Box as="span" sx={styles.banner.team.avatar}>
                <Image src={VP} alt="Filippo B." />
                <Text as="H3">Filippo B.</Text>
                <Box sx={styles.banner.team.title}>
                  <Text as="p">CMO @Indeed</Text>
                  <Box sx={styles.banner.team.socials}>
                    <Link target={'_blank'} to={'https://www.linkedin.com/in/filippobonsanti/'}><FaLinkedin sx={styles.banner.team.icons}/></Link>
                  </Box>
                </Box>
              </Box>
              <Box as="span" sx={styles.banner.team.avatar}>
                <Image src={VP} alt="Massimo C." />
                <Text as="H3">Massimo C.</Text>
                <Box as="p" sx={styles.banner.team.title}>
                  <Text as="p">Head of Economic @Italian Embassy</Text>
                  <Box sx={styles.banner.team.socials}>
                    <Link target={'_blank'} to={'https://www.linkedin.com/in/massimo-carnelos-077606b2/'}><FaLinkedin sx={styles.banner.team.icons}/></Link>
                  </Box>
                </Box>
              </Box>
              <Box as="span" sx={styles.banner.team.avatar}>
                <Image src={VP} alt="Aapo B." />
                <Text as="H3">Aapo B.</Text>
                <Box as="p" sx={styles.banner.team.title}>
                  <Text as="p">Founding Partner @Proxy.VC</Text>
                  <Box sx={styles.banner.team.socials}>
                    <Link target={'_blank'} to={'https://www.linkedin.com/in/aapobovellan/'}><FaLinkedin sx={styles.banner.team.icons}/></Link>
                  </Box>
                </Box>
              </Box>
              <Box as="span" sx={styles.banner.team.avatar}>
                <Image src={VP} alt="Felix H." />
                <Text as="h3">Felix H.</Text>
                <Box as="p" sx={styles.banner.team.title}>
                  <Text as="p">Former Professor &#38; CTO</Text>
                  <Box sx={styles.banner.team.socials}>
                    <Link target={'_blank'} to={'https://www.linkedin.com/in/felixhovsepian/'}><FaLinkedin sx={styles.banner.team.icons}/></Link>
                  </Box>
                </Box>
              </Box>
              <Box as="span" sx={styles.banner.team.avatar}>
                <Image src={VP} alt="Marc S." />
                <Text as="h3">Marc S.</Text>
                <Box as="p" sx={styles.banner.team.title}>
                  <Text as="p">Mentor @Techstars, Wayra <br/> Investment Director @Ship2B</Text>
                  <Box sx={styles.banner.team.socials}>
                    <Link target={'_blank'} to={'https://www.linkedin.com/in/felixhovsepian/'}><FaLinkedin sx={styles.banner.team.icons}/></Link>
                  </Box>
                </Box>
              </Box>
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
        </Flex>
        
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    background: '#000',
    height: '100vh',
    overflowX: 'hidden',
    paddingTop: ['100px', '120px'],
    paddingBottom: ['0px', null, '30px'],
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',

    team: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: '40px',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      rowGap: '40px',
      columnGap: '20px',

      '@media only screen and (max-width: 992px)': {
        marginTop: '10px',
        rowGap: '60px',
        columnGap: '60px',
      },

      h3:{
        color: 'white',
        fontSize: '32px',

        '@media only screen and (max-width: 992px)': {
          fontSize: '16px',
          maxWidth: 'max-content',
          width: '200px',
        },
      },
      title:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        p: {
          color: 'white',
          fontSize: '16px',

          '@media only screen and (max-width: 992px)': {
            fontSize: '10px',
            maxWidth: 'max-content',
            width: '200px',
          },
        },
      },

      icons: {
        color:'white',
        marginLeft: '5px',
        marginRight: '5px',
      },

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
        height: '130px',
        width: '130px',
        alignItems: 'center',
        flex: '0 0 30.333333333%',
        display:'flex',
        flexDirection: 'column',
        marginBottom: '60px',

        '@media only screen and (max-width: 992px)': {
          width: '80px',
          height: '80px',
        },

        img: {
          margin: ['0px', null, null, null, null, '0'],
          height: '100%',
        },
      },
    },

    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '100%',
      marginTop: '10%',
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
      marginLeft: '25px',
      marginRight: '-15px',
      flexDirection: 'column',
      gap: '20px',

      '@media only screen and (max-width: 992px)': {
        marginLeft: '0px',
        marginRight: '0px',
  },

    },
    col: {
      pl: '40px',
      pr: '15px',
      flex: ['1 1 100%', null, '0 0 50%'],
      zIndex: '100',
    },
    content: {
      paddingRight: [0, 0, 0, 0, '40px', 0, 0],

      headline: {
        display: 'flex',
        flexDirection: 'column',
      },

      h3: {
        lineHeight: 1.18,
        color: 'white',
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
      height: ['50px', null, null, '50px', null, null, '50px'],
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
