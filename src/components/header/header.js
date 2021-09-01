/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';

import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import MobileDrawer from './mobileDrawer';
import menuItems from './header.data';
import Helmet from 'react-helmet';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Flex sx={{
          display:'flex',
          justifyContent: 'center',
          color: '#fafafa',
          backgroundColor: '#d94838',
          mb: '25px',
          fontWeight: 'bold',
          py:'5px',
          fontSize: '14px',
          '@media only screen and (max-width: 1200px)': {
            display: 'none',
          },
        }}>
          <styles sx={{fontSize: '20px',}}>&#128227; &#127881;</styles>&nbsp; Silicon Roundabout Ventures presents a 4-month startup program in partnership with Founders Institute&nbsp; <styles sx={{fontSize: '20px',}}>&#128227; &#127881;</styles>&nbsp;<a href="/founders">click here to know more</a>
        </Flex>
        <Container sx={styles.container}>
          <Logo />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                target='_blank'
                activeClass="active"
                sx={styles.nav.navLink}
                path={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          <Link
            path="/investors"
            ml={2}
            target= "_blank"
            label="For Investors"
            sx={styles.headerBtn}
            variant="buttons.primary"
          />

          <MobileDrawer />
          <Helmet>
              <script>{`
                  (function (w,d,s,o,f,js,fjs) {
                      w['circleWidget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
                  }(window, document, 'script', 'mw', 'https://silicon-roundabout-community.circle.so/external/widget.js'));

                  mw('init', {
                    community_public_uid: 'acc8b6e6',
                    brand_color: '#D94738',
                  });

                  // Optional: pass in a default space slug and/or post slug
                  mw('setDefaults', {
                    space_slug: 'start-here',
                  //  post_slug: ''
                  });
                `}
              </script>
            </Helmet>
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    fontSize: '16px',
    fontWeight: 700,
    backgroundColor: '#fff',
    borderRadius: '9px !important',
    display: ['none', null, null, null, 'inline-block'],
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    pb: '20px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#000000ad',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: '#000',
      color: 'text',
      pb: '15px',
    },
    '@media only screen and (max-width: 1200px)': {
      pt: '20px',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1430px',
    '@media(max-width:1440px)': {
      maxWidth: '1230px',
    },
    '@media screen and (max-width: 991px)': {
      justifyContent: 'space-between',
    },
  },
  nav: {
    marginLeft: 'auto',
    '@media screen and (max-width: 991px)': {
      display: 'none',
    },
    navLink: {
      fontSize: '16px',
      color: '#fff',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      padding: '12px',
      
      '&:hover, &:active': {
        color: '#000',
        bg: '#fff',
        padding: '12px',
        borderRadius: '9px',

      },
    },
  },
};
