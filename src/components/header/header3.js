/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/launchpad-logo';

import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import menuItems from './header.data';
import Helmet from 'react-helmet';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />

          {/* <Flex as="nav" sx={styles.nav}>
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
          </Flex> */}

          <Link
            path="/launchpad"
            ml={2}
            label="Launchpad 🚀"
            sx={styles.headerBtn}
            variant="buttons.primary"
          />

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
    backgroundColor: '#000',
    color: '#fff !important',
    borderRadius: '9px !important',
    display: ['inline-block', null, null, null, 'inline-block'],
    '&:hover': {
      color: '#fff',
      backgroundColor: '#D94738',
      borderRadius: '9px',
    },
  },
  header: {
    zIndex: '999',
    fontFamily: 'futura !important',
    color: 'text',
    fontWeight: 'normal',
    pt: '40px',
    pb: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#ffffff00',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: '#ffffff00',
      color: '#ffffff',
      py: '15px',
      // boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1430px',
    justifyContent: 'flex-end',
    columnGap: '40px',
    marginRight:'20px !important',

    '@media(max-width:1440px)': {
      maxWidth: '1380px',
      justifyContent: 'space-between',
      columnGap: '40px',
    },
    '@media screen and (max-width: 991px)': {
      justifyContent: 'flex-end',
      columnGap: '40px',
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
