import { Heading, Box, Container, Text } from 'theme-ui';
import React from 'react';
import { Link } from 'components/link';

const BackToVentures = () => {
  return (
    <Box as="section" sx={styles.ctaBox}>
      <Container>
        <Text as='H2' sx={{
                          fontSize: '32px',
                          fontWeight: 'bold',
                          lineHeight: 2,
                          color: '#000',
                          '@media only screen and (max-width: 720px)': {
                            fontSize: '22px',
                          },
                        }}>
            &#128586; Oops! I am at the wrong place <br></br> taking me to ventures site
            </Text>
        <Link
          path="/"
          label="Ventures ()"
          sx={styles.ctaBox.button}
          variant="buttons.primary"
        />
      </Container>
    </Box>
  );
};

export default BackToVentures;

const styles = {
  ctaBox: {
    backgroundColor: '#fafafa',
    textAlign: 'center',
    paddingTop: [70, null, null, null, 40],
    paddingBottom: [80, null, null, null, 80],
    p: {
      margin: 0,
      color: '#000000 !important',
      fontWeight: 'bold',
      fontSize: '14',
      letterSpacing: '2.1px',
      textTransform: 'uppercase',
    },
    h3: {
      margin: 0,
      color: '#000000 !important',
      lineHeight: [1.25, 1.3],
      fontWeight: 700,
      whiteSpace: 'pre-line',
      marginBottom: ['20px', '45px', '68px'],
      marginTop: '10px',
      fontSize: ['24px', null, null, '36px', null, '36px', '45px', '50px'],
    },
    button: {
      paddingLeft: '20px',
      paddingRight: '20px',
      fontSize: '16px',
      mt: '20px',
      backgroundColor: '#000000 !important',
      color: '#ffffff !important',
      '&:hover': {
        backgroundColor: '#D94738 !important',
      },
    },
  },
};
