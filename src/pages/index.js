import React from "react";
import { StickyProvider } from "contexts/app/app.provider";
// import { VideoProvider } from 'contexts/video/video.provider';
import Seo from "components/seo";
import Layout from "components/layout";
// import Modal from 'components/modal';
import LandingPage from "sections/home/landingpage";
// import CtaOne from 'sections/cta-one';
// import FAQ from 'sections/faq';
// import CtaTwo from 'sections/cta-two';
//import WorkFlow from "sections/workflow";
// import Pricing from 'sections/pricing';
// import PopularCourse from 'sections/popular-course';
// import CtaThree from 'sections/cta-three';
// import FavoriteCourse from 'sections/favorite-course';

import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";
import "swiper/swiper-bundle.min.css";
import "typeface-dm-sans";

function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <Seo
          description="Community-driven VC scouting and investing in Next-Generation technology startups from the UK and Europe"
          title="Silicon Roundabout Ventures"
          image="/srv_dark_logo.png"
        />
        <LandingPage />
        {/* <FavoriteCourse />
          <CtaThree />
          <PopularCourse /> */}
        {/* <WorkFlow /> */}
        {/* <Pricing />
          <CtaTwo />
          <FAQ />
          <CtaOne />
          <Modal /> */}
      </Layout>
    </StickyProvider>
  );
}

export default IndexPage;