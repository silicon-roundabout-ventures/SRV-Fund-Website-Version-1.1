/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';

import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import MobileDrawer2 from './mobileDrawer2';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          {/* <Logo /> */}

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
            path="/"
            ml={2}
            target= "_blank"
            label="Ventures()"
            sx={styles.headerBtn}
            variant="buttons.primary"
          />

          <MobileDrawer2 />
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
    pt: '40px',
    pb: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#00000000',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: '#00000000',
      color: 'text',
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
    '@media(max-width:1440px)': {
      maxWidth: '1230px',
      justifyContent: 'flex-end',
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
