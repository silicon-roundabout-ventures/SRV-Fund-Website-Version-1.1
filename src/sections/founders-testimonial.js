import { Box, Text, Container, Flex, Image } from 'theme-ui';
import React from 'react';

import { OutboundLink } from "gatsby-plugin-google-gtag"
import Harold from 'assets/fi_alumni_testimonial/haroldbandwagon.png';
import Amira from 'assets/fi_alumni_testimonial/amira.png';
import Dotuan from 'assets/fi_alumni_testimonial/dotuan.png';
import Eren from 'assets/fi_alumni_testimonial/eren.png';
import Erica from 'assets/fi_alumni_testimonial/erica.png';
import Evan from 'assets/fi_alumni_testimonial/evan.png';
import Khalil from 'assets/fi_alumni_testimonial/khalil.png';
import Lucy from 'assets/fi_alumni_testimonial/lucy.png';
import Mario from 'assets/fi_alumni_testimonial/mario.png';


const FoundersTestimonial = () => {
  return (
    <Box as="section" sx={styles.workflow}>
      <Container sx={{padding: '0px !important', margin: '0px !important', maxWidth: '100%'}}>
        <Box sx={{margingLeft: '40px', margingRight: '40px'}}>
          <Flex sx={{textAlign: 'center !important', display: 'flex', flexDirection: 'column'}}>
            <Text as='H2' sx={{
                          fontSize: '32px',
                          fontWeight: 'bold',
                          lineHeight: 2,
                          color: '#000',
                          '@media only screen and (max-width: 720px)': {
                            fontSize: '22px',
                          },
                        }}>
                      &#127891; Hear from the alumni themselves!
            </Text>
            <Text as='p' sx={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          lineHeight: 2,
                          color: '#000',
                          '@media only screen and (max-width: 720px)': {
                            fontSize: '16px',
                          },
                        }}>
                      Their feedback, experiences, &amp; reviews have helped to develop program's ever-adapting structure.
            </Text>
        </Flex>
        <Flex sx={styles.workflow.column}>
          <Box as="div" sx={styles.workflow.box}>
            <Box sx={styles.workflow.box.testimonial}>
              
                <Text as='p' sx={styles.workflow.box.text}>
                "I’m a huge advocate of learning all that you can, but at the end of the day, the best form of learning is trying for yourself. The curriculum for FI was solid because it encouraged Founders to put themselves out there."
                </Text>
                <Box sx={styles.workflow.box.namebox}>
                  <Image src={Harold} alt="Harold H." />
                  <Box>
                    <Text as='p' sx={styles.workflow.box.namebox.name}>
                    Harold Hughes
                    </Text>
                    <Text as='p' sx={styles.workflow.box.namebox.position}>
                    Founder &amp; CEO, Bandwagon
                    </Text>
                  </Box>
                </Box>
            </Box>
            <Box sx={styles.workflow.box.testimonial}>
              
                <Text as='p' sx={styles.workflow.box.text}>
                "After 3.5 months of FI, I was almost overwhelmed by how many new contacts I had in my startup/tech/innovation network. It really accelerates the early stages of your company with a network that broad."
                </Text>
                <Box sx={styles.workflow.box.namebox}>
                  <Image src={Erica} alt="Erica P." />
                  <Box>
                    <Text as='p' sx={styles.workflow.box.namebox.name}>
                    Erica Pearson
                    </Text>
                    <Text as='p' sx={styles.workflow.box.namebox.position}>
                    Co-founder &amp; CEO, Vacation Fund
                    </Text>
                  </Box>
                </Box>
            </Box>
            <Box sx={styles.workflow.box.testimonial}>
              
                <Text as='p' sx={styles.workflow.box.text}>
                "FI helped me build my network when I moved to the U.S. from Turkey in 2008. I didn’t know anyone in Silicon Valley and started from scratch when I arrived. I met one of my co-founders, as well as one of our first angel investors, who was a mentor for the Founder Institute."
                </Text>
                <Box sx={styles.workflow.box.namebox}>
                  <Image src={Eren} alt="Eren Bali" />
                  <Box>
                    <Text as='p' sx={styles.workflow.box.namebox.name}>
                    Eren Bali
                    </Text>
                    <Text as='p' sx={styles.workflow.box.namebox.position}>
                    Co-founder, Udemy
                    </Text>
                  </Box>
                </Box>
            </Box>
          </Box>
          <Box as="div" sx={styles.workflow.box}>
            <Box sx={styles.workflow.box.testimonial}>
              
                <Text as='p' sx={styles.workflow.box.text}>
                "Climber Hotel is my third startup and I still needed a working plan that would prevent me from making the same mistakes from the past. FI is exactly that... it saved me months of unnecessary run-around."
                </Text>
                <Box sx={styles.workflow.box.namebox}>
                  <Image src={Mario} alt="Mario Mouraz" />
                  <Box>
                    <Text as='p' sx={styles.workflow.box.namebox.name}>
                    Mario Mouraz
                    </Text>
                    <Text as='p' sx={styles.workflow.box.namebox.position}>
                    Founder &amp; CEO, Climber
                    </Text>
                  </Box>
                </Box>
            </Box>
            <Box sx={styles.workflow.box.testimonial}>
              
                <Text as='p' sx={styles.workflow.box.text}>
                "Founder Institute gave me the practical knowledge, skills, business sense, and the network I needed to grow Appota to where it is today. I strongly encourage other startups to join the Founder Institute."
                </Text>
                <Box sx={styles.workflow.box.namebox}>
                  <Image src={Dotuan} alt="Do Tuan Anh" />
                  <Box>
                    <Text as='p' sx={styles.workflow.box.namebox.name}>
                    Do Tuan Anh
                    </Text>
                    <Text as='p' sx={styles.workflow.box.namebox.position}>
                    Founder &amp; CEO, Appota
                    </Text>
                  </Box>
                </Box>
            </Box>
            <Box sx={styles.workflow.box.testimonial}>
              
                <Text as='p' sx={styles.workflow.box.text}>
                "Every week they teach you useful things... and, you have to practice pitching every single time. Four months later, I had pitched at least one hundred times, got tons of feedback, and actually tested things with my customers."
               </Text>
                <Box sx={styles.workflow.box.namebox}>
                  <Image src={Lucy} alt="Lucy Beard" />
                  <Box>
                    <Text as='p' sx={styles.workflow.box.namebox.name}>
                    Lucy Beard
                    </Text>
                    <Text as='p' sx={styles.workflow.box.namebox.position}>
                    Founder &amp; CEO, Feetz
                    </Text>
                  </Box>
                </Box>
            </Box>
          </Box>
          <Box as="div" sx={styles.workflow.box}>
            <Box sx={styles.workflow.box.testimonial}>
              
                <Text as='p' sx={styles.workflow.box.text}>
                "I got to see how a successful entrepreneur would run my project and in what order they would do things. The battle’s far from over, but I went from 0.1% knowledge about how to do things to 1.3%... that’s an awesome return on investment."
                </Text>
                <Box sx={styles.workflow.box.namebox}>
                  <Image src={Khalil} alt="Khalil Zahar" />
                  <Box>
                    <Text as='p' sx={styles.workflow.box.namebox.name}>
                    Khalil Zahar
                    </Text>
                    <Text as='p' sx={styles.workflow.box.namebox.position}>
                    Founder &amp; CEO, Hykso
                    </Text>
                  </Box>
                </Box>
            </Box>
            <Box sx={styles.workflow.box.testimonial}>
              
                <Text as='p' sx={styles.workflow.box.text}>
                          E"FI is awesome for founders who are new to the startup scene since the program takes you through the entire process. The curriculum has allowed me to leave with a systematic and complete methodology of building a startup."



                </Text>
                <Box sx={styles.workflow.box.namebox}>
                  <Image src={Evan} alt="Evan Wong" />
                  <Box>
                    <Text as='p' sx={styles.workflow.box.namebox.name}>
                    Evan Wong
                    </Text>
                    <Text as='p' sx={styles.workflow.box.namebox.position}>
                    Founder &amp; CEO, Checkbox
                    </Text>
                  </Box>
                </Box>
            </Box>
            <Box sx={styles.workflow.box.testimonial}>
              
                <Text as='p' sx={styles.workflow.box.text}>
                "I pivoted my original idea, I worked very hard on my pitch and trained, trained, trained...

                  If you want to build a startup and don’t know how, the Founder Institute is the right place to be!"
                </Text>
                <Box sx={styles.workflow.box.namebox}>
                  <Image src={Amira} alt="Amira Boutouchent" />
                  <Box>
                    <Text as='p' sx={styles.workflow.box.namebox.name}>
                    Amira Boutouchent
                    </Text>
                    <Text as='p' sx={styles.workflow.box.namebox.position}>
                    Founder &amp; CEO, Bridgr
                    </Text>
                  </Box>
                </Box>
            </Box>
          </Box>
        </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default FoundersTestimonial;

const styles = {
  workflow: {
    fontFamily: 'futura !important',
    backgroundColor: '#fafafa',
    position: 'relative',
    pt: '100px',
    pb: '100px',
    '@media screen and (max-width: 1366px)': {
      pb: '100px',
    },
    '@media screen and (max-width: 992px)': {
      pb: '60px',
      paddingTop: '60px',
    },
    blockTitle: {
      marginBottom: [30, null, 55],
      textAlign: 'center',
    },

    column: {
      display: 'flex',
      mt: '40px',
      overflow: 'scroll',
      overflowX: 'scroll',
      '@media only screen and (max-width: 720px)': {
        flexDirection: 'column',
      },
    },

    box: {
      // width: '100%',
      px: '20px',
      minWidth: '400px',
      '@media only screen and (max-width: 720px)': {
        minWidth: 'auto',
      },

      testimonial: {
        marginBottom: '20px',
        textAlign: 'left !important',
        backgroundColor: '#efefef',
        borderRadius: '9px',
        padding: '30px',
      },

      namebox: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px', columnGap: '20px',

        name: {
          fontSize: '12px',
          fontWeight: 'bold',
          lineHeight: 2,
          color: '#000',
          '@media only screen and (max-width: 720px)': {
            fontSize: '10px',
          },
        },

        position: {
          fontSize: '12px',
          fontWeight: 'light',
          lineHeight: 2,
          color: '#727272',
          '@media only screen and (max-width: 720px)': {
            fontSize: '10px',
          },
        },
      },

      img: {
        width: '50px',
        backgroundColor: '#ffffff',
        borderRadius: '9999px',
      },

      text: {
        fontSize: '14px',
        fontWeight: 'light',
        lineHeight: 2,
        color: '#000',
        '@media only screen and (max-width: 720px)': {
          fontSize: '16px',
        },
      },
    },

    iconBox: {
      width: '70px',
      height: '70px',
      borderRadius: '40%',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      mb: 30,
      fontSize: 30,
      fontWeight: 700,
      justifyContent: 'center',
      color: 'black',
      boxShadow: '0px 14px 20px rgba(76, 119, 171, 0.1)',
      '@media screen and (max-width: 560px)': {
        width: '50px',
        height: '50px',
        fontSize: 24,
        borderRadius: 20,
        mb: 25,
      },
      '@media screen and (max-width: 480px)': {
        mb: 20,
      },
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      mt: '-5px',
      title: {
        fontSize: 22,
        color: 'black',
        lineHeight: 1.55,
        fontWeight: 500,
        mb: '15px',
        '@media screen and (max-width: 1200px)': {
          fontSize: 20,
          lineHeight: 1.4,
        },
        '@media screen and (max-width: 480px)': {
          fontSize: '18px',
          lineHeight: 1.45,
          mb: '10px',
        },
      },

      subTitle: {
        fontSize: '15px',
        fontWeight: 400,
        lineHeight: '1.73',
        color: '#343D48',
        '@media screen and (max-width: 480px)': {
          fontSize: '15px',
          lineHeight: '1.85',
        },
      },
    },
  },
};
