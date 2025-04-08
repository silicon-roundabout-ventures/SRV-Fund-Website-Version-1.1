//src/sections/portfolio.js

import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, Text, Image, Link, Spinner, Button } from 'theme-ui';
import styled from 'styled-components';
import { FaAtom } from 'react-icons/fa';
import Footer from '../components/footer/footer';
import Stealth from '../assets/stealth-bomber.png';
import Causalens from '../assets/startups/community/causalens.png';
import Monzo from '../assets/startups/community/monzo.png';
import Zego from '../assets/startups/community/zego.png';
import Proximie from '../assets/startups/community/proximie.png';
import CQ from '../assets/startups/community/cq.png';
import Gardin from '../assets/startups/community/gardin.png';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import Slide from 'react-reveal/Slide';

// Import portfolio data with safety mechanism
// Using require with try/catch to handle potential file not found issues
let portfolioData = [];
try {
  portfolioData = require('../data/portfolio.json');
  console.log(`Loaded ${portfolioData.length} portfolio items from JSON`);
} catch (e) {
  console.warn('Could not load portfolio data:', e.message);
  portfolioData = [];
}

// Static portfolio data as fallback
const staticPortfolioData = [
  {
    fields: {
      Deal_Name: "Finchetto",
      Summary: "Financial technology company",
      domain__from_Company_: "https://finchetto.com",
      Status: "COMPLETED",
      Announced: "Yes",
    }
  },
  {
    fields: {
      Deal_Name: "Origin Robotics",
      Summary: "Advanced robotics solutions",
      domain__from_Company_: "https://originrobotics.com",
      Status: "COMPLETED",
      Announced: "Yes",
    }
  },
  {
    fields: {
      Deal_Name: "Stealth AI Company",
      Summary: "A stealth company working on cutting-edge AI technology",
      domain__from_Company_: "",
      Status: "COMPLETED",
      Announced: "No",
    }
  }
];

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    zIndex: 100,
  },
  content: {
    border: 'none',
    background: 'transparent',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },
};

const masonryOptions = {
  transitionDuration: 0,
};

// Set Modal app element if in browser environment
if (typeof window !== 'undefined' && document.getElementById('___gatsby')) {
  Modal.setAppElement('#___gatsby');
}

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use the prefetched data from portfolio.json if available
    if (portfolioData && portfolioData.length > 0) {
      setPortfolioItems(portfolioData);
    } else {
      // Otherwise fall back to static data
      setPortfolioItems(staticPortfolioData);
    }
    setIsLoading(false);
  }, []);

  function toggleModal(company = null) {
    setIsOpen(!isOpen);
    setSelectedCompany(company);
  }

  // Filter for public portfolio companies
  const publicPortfolio = portfolioItems
    .filter(item => item.fields?.Status === 'COMPLETED')
    .filter(item => item.fields?.Announced === 'Yes');

  const renderLogo = (company) => {
    // For stealth mode companies or when no logo is available
    return (
      <Image 
        src={Stealth} 
        alt={company.fields.Deal_Name} 
        sx={styles.logo} 
      />
    );
  };

  const commonTextStyles = {
    color: "#fff",
    lineHeight: 2.0,
    "@media only screen and (max-width: 992px)": {
      fontSize: "12px",
      marginTop: "20px",
    }
  };

  if (isLoading) {
    return (
      <Box as="section" id="banner" sx={styles.banner}>
        <Container sx={styles.container}>
          <Flex sx={{ justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <Spinner />
          </Flex>
        </Container>
      </Box>
    );
  }

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
            {publicPortfolio.length > 0 ? (
              publicPortfolio.map((company, index) => (
                <Box as="span" sx={styles.avatar} key={index} onClick={() => toggleModal(company)}>
                  {renderLogo(company)}
                  <Text as="H3">{company.fields.Deal_Name}</Text>
                  <Box as="p" sx={styles.title}>
                    <Box sx={styles.socials}>
                      {company.fields.domain__from_Company_ && (
                        <Link target="_blank" href={
                          company.fields.domain__from_Company_.startsWith('http')
                            ? company.fields.domain__from_Company_
                            : `https://${company.fields.domain__from_Company_}`
                        }>
                          <FaAtom sx={styles.icons} />
                        </Link>
                      )}
                    </Box>
                  </Box>
                </Box>
              ))
            ) : (
              <Text sx={{ color: '#fff' }}>No Portfolio Companies Found</Text>
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

        <Modal
          isOpen={isOpen}
          onRequestClose={() => toggleModal()}
          style={customStyles}
          contentLabel="Company Details"
        >
          <Container sx={styles.modalContent}>
            {selectedCompany && (
              <Box sx={styles.modalInner}>
                <Button sx={styles.closeButton} onClick={() => toggleModal()}>
                  <IoMdClose size="24px" color="#fff" />
                </Button>
                <Box sx={styles.modalImageContainer}>
                  {renderLogo(selectedCompany)}
                </Box>
                <Box sx={styles.companyDetails}>
                  <h2>{selectedCompany.fields.Deal_Name}</h2>
                  <p>{selectedCompany.fields.Summary}</p>
                  {selectedCompany.fields.domain__from_Company_ && (
                    <a
                      href={
                        selectedCompany.fields.domain__from_Company_.startsWith('http')
                          ? selectedCompany.fields.domain__from_Company_
                          : `https://${selectedCompany.fields.domain__from_Company_}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  )}
                  <Box sx={styles.tags}>
                    {selectedCompany.fields.Stage && (
                      <span sx={styles.tag}>{selectedCompany.fields.Stage}</span>
                    )}
                    {selectedCompany.fields.Sector && (
                      <span sx={styles.tag}>{selectedCompany.fields.Sector}</span>
                    )}
                  </Box>
                </Box>
              </Box>
            )}
          </Container>
        </Modal>

        <Footer />
      </Container>
    </Box>
  );
};

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
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    position: 'relative',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    marginBottom: '50px',
  },
  modalInner: {
    position: 'relative',
    padding: ['20px', null, null, '30px'],
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    alignItems: ['center', null, null, 'flex-start'],
    textAlign: ['center', null, null, 'left'],
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  modalImageContainer: {
    flex: ['1 1 100%', null, null, '0 0 250px'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mb: [4, null, null, 0],
    mr: [0, null, null, 4],
  },
  companyDetails: {
    flex: 1,
    h2: {
      fontSize: [3, null, null, 4],
      fontWeight: 'bold',
      mb: 3,
      color: '#0F2137',
    },
    p: {
      fontSize: [1, null, null, 2],
      lineHeight: 1.6,
      color: '#343D48',
      mb: 4,
    },
    a: {
      display: 'inline-block',
      backgroundColor: '#EBF2FF',
      color: '#3A7EFF',
      borderRadius: '5px',
      py: 2,
      px: 3,
      fontSize: 1,
      fontWeight: 'bold',
      textDecoration: 'none',
      mb: 4,
    },
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#F6F8FB',
    color: '#343D48',
    borderRadius: '30px',
    fontSize: 0,
    py: 1,
    px: 3,
    mr: 2,
    mb: 2,
  },
  logo: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
    mb: 3,
  },
};

export default Banner;
