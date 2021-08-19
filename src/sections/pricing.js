import React, { useState } from 'react';
import { Box, Grid, Container, Image } from 'theme-ui';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import BlockTitle from 'components/block-title';
// import PriceCard from '../components/price-card';
import Circle1 from 'assets/circle1.png';
import Circle2 from 'assets/circle2.png';
import Circle3 from 'assets/circle3.png';


const Pricing = () => {
  const [plan, setPlan] = useState(false);
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          sx={styles.pricing.blockTitle}
          // tagline="Pricing Plan"
          heading="Our Community Platform"
        />
        <Box sx={styles.pricing.btnWrap}>
          <Box as="ul" sx={styles.pricing.btnUl}>
            <Box
              as="li"
              className={` ${plan === true ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.pricing.btn}
              onClick={() => {
                setPlan(true);
              }}
            >
              Organise Discussions
            </Box>
            <Box
              as="li"
              className={` ${plan === false ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.pricing.btn}
              onClick={() => {
                setPlan(false);
              }}
            >
              Empower Interest Groups
            </Box>
          
          </Box>
        </Box>

        <Grid sx={styles.pricing.wrapper}>
          {plan === true
            ? 
            <Image src={Circle1} sx={styles.pricing.circle} alt="Intro1" />
            : null}

          {plan === false
            ? 
            <Image src={Circle3} alt="Logo" />
            : null}
        
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  pricing: {
    backgroundColor: '#0f0f0f',
    paddingTop: 100,
    paddingBottom: 100,
    '@media(max-width:991px)': {
      paddingTop: 60,
      paddingBottom: 60,
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0)',
      },
    },
    '.priceFade': {
      animationName: 'fadeInUp',
      animationDuration: '1s',
    },
    blockTitle: {
      textAlign: 'center',
    },
    btnWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '60px',
      marginTop: '25px',
    },
    btnUl: {
      margin: 0,
      listStyle: 'none',
      backgroundColor: '#F7F8FB',
      padding: '12px',
      borderRadius: '12px',
      display: 'inline-block',
    },
    btn: {
      color: 'black',
      padding: '10px 25px',
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'black',
        backgroundColor: 'transparent',
      },
      '&.active': {
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
      },
      '@media(max-width: 375px)': {
        padding: '10px 22px',
      },
    },
    wrapper: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: ['100%', null, null, null, '990px'],
    },
    circle: {
      width: '1000px !important',
    }
  },
};
