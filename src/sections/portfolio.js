//src/sections/portfolio.js

import React, { useState } from 'react';
import { Box, Container, Flex, Text, Image, Link } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { FaAtom /*, FaBatteryFull, FaSatellite, FaPlane, FaMicrochip*/ } from 'react-icons/fa';
import Footer from '../components/footer/footer';
import Stealth from '../assets/stealth-bomber.png';
import Causalens from '../assets/startups/community/causalens.png';
import Monzo from '../assets/startups/community/monzo.png';
import Zego from '../assets/startups/community/zego.png';
import Proximie from '../assets/startups/community/proximie.png';
import CQ from '../assets/startups/community/cq.png';
import Gardin from '../assets/startups/community/gardin.png';

const Banner = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const { allAirtablePortfolio } = useStaticQuery(graphql`
    query PortfolioQuery {
      allAirtablePortfolio(
        filter: {
          table: { eq: "Dealflow/Portfolio Pipelines" }
          data: { 
            Status: { eq: "COMPLETED" }
          }
        }
      ) {
        edges {
          node {
            data {
              Deal_Name
              Summary
              domain__from_Company_
              Status
              Announced
              Logo {
                localFiles {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `);

  const portfolioItems = allAirtablePortfolio?.edges?.map(edge => edge.node) || [];

  const commonTextStyles = {
    color: "#fff",
    lineHeight: 2.0,
    "@media only screen and (max-width: 992px)": {
      fontSize: "12px",
      marginTop: "20px",
    }
  };

  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.container}>
        <Flex sx={styles.row}>
          <Text sx={{ ...commonTextStyles, ...styles.header }}>
            Portfolio_Startups()
          </Text>
          <Text sx={{ ...commonTextStyles, ...styles.regular }}>
            <p>After a decade of community building, we launched Silicon Roundabout Ventures as a Deeptech Super-Angel VC in 2023. The fund is backed by top-tier VC Molten Ventures (LSE:GROW) and exited founders, engineers and execs: including ex googlers, amazonians and from 2 unicorns.</p>
            <p>Our main focus within deeptech is on startups building infrastructure technologies in Computing, Impact in Climate or Health, and Defence.</p>
          </Text>
          <Box sx={styles.startups}>
            {portfolioItems.length > 0 ? (
              portfolioItems.map(({ data: company }) => (
                <Box as="span" sx={styles.avatar} key={company.Deal_Name} onClick={() => setSelectedCompany(company)}>
                  <Image
                    src={company.Announced === 'Yes' ? company.Logo?.localFiles[0]?.publicURL : Stealth}
                    alt={company.Announced === 'Yes' ? company.Deal_Name : 'Stealth Company'}
                  />
                  <Text as="H3">{company.Announced === 'Yes' ? company.Deal_Name : 'Stealth'}</Text>
                  <Box as="p" sx={styles.title}>
                    <Box sx={styles.socials}>
                      {company.Announced === 'Yes' && (
                        <Link target="_blank" to={company.domain_from_Company}>
                          <FaAtom sx={styles.icons} />
                        </Link>
                      )}
                    </Box>
                  </Box>
                </Box>
              ))
            ) : (
              <Text>No Portfolio Company Found</Text>
            )}
          </Box>
        </Flex>

        <Flex sx={styles.row}>
          <Text sx={{ ...commonTextStyles, ...styles.header, marginTop: "80px" }}>
            Community_Startups()
          </Text>
          <Text sx={{ ...commonTextStyles, ...styles.regular }}>
            <p>Our firms is built on top and leverages our meetup community of 15,000 entrepreneurs and engineers, through which we previously attracted, selected and helped launch 33 Deep Tech and Big Data startups now valued at over £6 Billion.</p>
          </Text>

          <Box sx={styles.community}>
            {[Causalens, Monzo, Zego, Proximie, CQ, Gardin].map((img, index) => (
              <Box as="span" sx={styles.avatar} key={index}>
                <Image src={img} alt={`Community Startup ${index + 1}`} />
                <Text as="h3">{`Community Startup ${index + 1}`}</Text>
              </Box>
            ))}
            <Box as="span" sx={styles.avatar}>
              <Text as="h3" sx={styles.moreText}>+ 5000 more</Text>
            </Box>
          </Box>
        </Flex>

        {selectedCompany && (
          <ModalBackground onClick={() => setSelectedCompany(null)}>
            <ModalWrapper onClick={e => e.stopPropagation()}>
              <Image
                src={selectedCompany.Logo?.localFiles[0]?.publicURL || Stealth}
                alt={selectedCompany.Deal_Name}
                sx={{ maxWidth: '200px', height: 'auto' }}
              />
              <Text as="h2" sx={{ color: '#fff' }}>{selectedCompany.Deal_Name}</Text>
              <Text sx={{ color: '#fff' }}>
                {selectedCompany.Status === 'Stealth'
                  ? 'Stealth Mode Company'
                  : selectedCompany.Summary}
              </Text>
              {selectedCompany.Status !== 'Stealth' && (
                <Link
                  target="_blank"
                  to={selectedCompany.domain_from_Company}
                  sx={{ color: '#fff', textDecoration: 'underline' }}
                >
                  Visit Website
                </Link>
              )}
            </ModalWrapper>
          </ModalBackground>
        )}

        <Footer />
      </Container>
    </Box>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  background: #000;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  z-index: 1000;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const styles = {
  banner: {
    background: "#000",
    height: "100vh",
    overflowX: "hidden",
    paddingTop: ["100px", "120px"],
    paddingBottom: ["0px", null, "30px"],
  },
  container: {
    maxWidth: ["100%", null, null, null, null, "1240px", "1440px"],
  },
  row: {
    flexWrap: "wrap",
    display: "flex",
    marginLeft: "25px",
    flexDirection: "column",
    "@media only screen and (max-width: 992px)": {
      marginLeft: "0px",
    }
  },
  header: {
    fontSize: "32px",
    fontWeight: "bold",
    marginTop: "40px",
    "@media only screen and (max-width: 992px)": {
      fontSize: "22px",
      ml: "20px",
    }
  },
  regular: {
    fontSize: "20px",
    fontWeight: "regular",
    marginTop: "40px",
  },
  startups: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    rowGap: "40px",
    columnGap: "20px",
    marginTop: "80px",
    "@media only screen and (max-width: 992px)": {
      rowGap: "80px",
      columnGap: "40px",
      marginTop: "20px",
    },
  },
  community: {
    display: "flex",
    flexDirection: "row",
    marginTop: "80px",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    rowGap: "40px",
    columnGap: "20px",
  },
  avatar: {
    height: "80px",
    width: "80px",
    alignItems: "center",
    flex: "0 0 30.333333333%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "60px",
    cursor: "pointer",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "@media only screen and (max-width: 992px)": {
      width: "45px",
      height: "45px",
      margin: "15px",
    },
    img: {
      margin: ["0px", null, null, null, null, "0"],
      height: "100%",
    },
    h3: {
      color: "white",
      fontSize: "20px",
      "@media only screen and (max-width: 992px)": {
        fontSize: "16px",
        maxWidth: "max-content",
        width: "200px",
      },
    },
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  socials: {
    display: "flex",
    flexDirection: "row",
  },
  icons: {
    color: "white",
    margin: "0 5px",
  },
  moreText: {
    fontSize: "32px !important",
    "@media only screen and (max-width: 992px)": {
      fontSize: "20px !important",
    },
  },
};

export default Banner;
