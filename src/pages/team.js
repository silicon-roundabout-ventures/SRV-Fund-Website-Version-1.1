import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
// import { VideoProvider } from 'contexts/video/video.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';
// import Modal from 'components/modal';
import Team from 'sections/team';
// import CtaOne from 'sections/cta-one';
// import FAQ from 'sections/faq';
// import CtaTwo from 'sections/cta-two';
// import WorkFlow from 'sections/workflow';
// import Pricing from 'sections/pricing';
// import PopularCourse from 'sections/popular-course';
// import CtaThree from 'sections/cta-three';
// import FavoriteCourse from 'sections/favorite-course';

import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';
import 'swiper/swiper-bundle.min.css';
import 'typeface-dm-sans';

export default function IndexPage() {
  return (
    <StickyProvider>
        <Layout>
          <SEO
            description="Founders don't worry we understand your Tech!"
            title="Silicon Roundabout Ventures Team"
          />
          <Team />
        </Layout>
    </StickyProvider>
  );
}
