/** @jsx jsx */
import { jsx, Heading, Box, Divider, Container } from 'theme-ui';
import { Link } from 'components/link';
import menuItems from './footer.data';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaLocationArrow,
  FaMailBulk,
  FaCopyright,
} from "react-icons/fa"
import { Autoplay } from 'swiper';

export default function Footer() {
  return (
    <footer id="footer" sx={styles.main}>
      <Divider sx={styles.main.divider} />
      <Container>
        {/* {menuItems.map(({ header, items }, i) => (
          <Box key={i} sx={styles.footer.widget}>
            <Heading sx={styles.footer.title}>{header}</Heading>
            {items.map(({ path, label }, i) => (
              <Link
                sx={styles.footer.text}
                path={path}
                key={i}
                label={label}
                variant="footer"
              />
            ))}
          </Box>
        ))} */}
         <Box sx={styles.main.footer}>
              <Box sx={styles.main.footer.contact}>
                <span sx={{fontSize: '1',}}><FaMailBulk/> hello@siliconroundabout.tech</span>
                <span sx={{fontSize: '1',}}><FaLocationArrow/> London, UK</span>
              </Box>
              <Link target={'_blank'} to={'https://github.com/silicon-roundabout-ventures/'}><FaGithub sx={styles.main.footer.icons}/></Link>
              <Link target={'_blank'} to={'https://twitter.com/SiliconLondon'}><FaTwitter sx={styles.main.footer.icons}/></Link>
              <Link target={'_blank'} to={'https://www.linkedin.com/company/siliconroundabout/'}><FaLinkedinIn sx={styles.main.footer.icons}/></Link>
              <span sx={{fontSize: '12px'}}><FaCopyright/> Silicon Roundabout Ventures @2022</span>
          </Box>
      </Container>
    </footer>
  );
}

const styles = {
  main: {
    fontFamily: 'futura !important',
    paddingBottom: '60px',
    '@media(max-width: 1024px)': {
      paddingBottom: '70px',
    },
    '@media(max-width: 991px)': {
      paddingBottom: '30px',
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
        backgroundColor: '#000',
        display: 'inline-flex',
        alignItems: 'center',


        '@media only screen and (max-width: 992px)': {
          width: '2rem',
          height: '2rem',
        },
      },
    },

    divider: {
      borderColor: '#E5ECF4',
      margin: 0,
      borderWidth: '1px',
      width: '100%',
      maxWidth: '900px',
      marginBottom: '40px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
};
