import React, { useContext } from 'react';
import { Button, Box, Text } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from 'contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'components/link';
import menuItems from './header.data';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="22px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      // closeButton={<IoMdClose size="24px" color="#fff" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Logo src={LogoDark} />
          <Box sx={styles.menu}>
            {menuItems.map(({ path, label }, i) => (
              <Link path={path} key={i} label={label} sx={styles.menu.link} />
            ))}
          </Box>
          <Button target="_blank" to={'https://forms.gle/a5fMMSitNDHFLej17'} variant="primary" sx={styles.button}>
              Apply Here
            </Button>

          <Box sx={styles.menuFooter}>
            <Link to={'https://github.com/silicon-roundabout-ventures/'}><FaGithub sx={styles.menuFooter.icons}/></Link>
            <Link to={'https://twitter.com/SiliconLondon'}><FaTwitter sx={styles.menuFooter.icons}/></Link>
            <Link to={'https://www.linkedin.com/company/siliconroundabout/'}><FaLinkedinIn sx={styles.menuFooter.icons}/></Link>
            <Text as="p">
                  hello@siliconroundabout.tech
            </Text>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    color: '#fff',

    '@media screen and (min-width: 992px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    background: '#000',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30px',
    right: '30px',
    zIndex: '1',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '30px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',

    link: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#fff',
      py: '5px',
      cursor: 'pointer',
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
    color: "#fff",
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',

    icons: {

    },
  },
  
  button: {
    fontSize: '15px',
    fw: '700',
    height: '48px',
    // borderRadius: '0px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
    marginTop:'10px',
    backgroundColor: '#fff',
    color: '#000',
  },
};

export default MobileDrawer;
