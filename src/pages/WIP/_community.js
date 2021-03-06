import React from "react";
import { StickyProvider } from "contexts/app/app.provider";
// import { VideoProvider } from 'contexts/video/video.provider';
import SEO from "components/seo";
import Community_Layout from "components/community_layout";
// import Modal from 'components/modal';
import Community from "sections/community";
// import CtaOne from 'sections/cta-one';
// import FAQ from 'sections/faq';
// import CtaTwo from 'sections/cta-two';
import Workflow from "sections/workflow";
import Platform from "sections/platform";
import Partner from "sections/partner";
import Testimonial from "sections/testimonial";
import Header2 from "components/header/header2";

// import FavoriteCourse from 'sections/favorite-course';

import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";
import "swiper/swiper-bundle.min.css";
import "typeface-dm-sans";

export default function IndexPage() {
  return (
    <StickyProvider>
      <Community_Layout>
        <SEO
          description="Community-driven VC scouting and investing in Next-Generation technology startups from the UK and Europe"
          title="Community Page"
        />
        <Header2 />
        <Community />
        <Partner />
        {/* <CtaThree />
          <PopularCourse /> */}
        <Workflow />
        <Platform />
        {/*<Testimonial />*/}
        {/* <FAQ />
          <CtaOne />
          <Modal /> */}
      </Community_Layout>
    </StickyProvider>
  );
}
