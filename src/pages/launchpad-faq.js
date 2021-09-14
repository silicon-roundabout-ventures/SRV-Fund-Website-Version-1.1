import React from "react";
import { StickyProvider } from "contexts/app/app.provider";

import SEO from "components/seo";
import Community_Layout from "components/community_layout";

import Launchpad_FAQ from "sections/launchpad/launchpad-faq";
import FoundersAlumni from "sections/launchpad/founders-alumni";
import Criteria from "sections/launchpad/criteria";
import FoundersPartner from "sections/launchpad/founders-partner";
import FoundersTestimonial from "sections/launchpad/founders-testimonial";
import BackToVentures from "sections/launchpad/back_to_ventures";
import Header3 from "components/header/header3";

import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";
import "swiper/swiper-bundle.min.css";
import "typeface-dm-sans";

export default function IndexPage() {
  return (
    <StickyProvider>
      <Community_Layout>
        <SEO
          description="Silicon Roundabout presents a 4-month startup programme for our community startups in accordance with Founders Institute"
          title="4-month Startup Programme"
        />
        <Header3 />
        <Launchpad_FAQ />
      </Community_Layout>
    </StickyProvider>
  );
}
