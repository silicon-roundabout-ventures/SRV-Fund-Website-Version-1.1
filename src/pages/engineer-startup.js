import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';
import DocuSeries from 'sections/docuseries';

import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';
import 'swiper/swiper-bundle.min.css';
import 'typeface-dm-sans';

export default function IndexPage() {
  return (
    <StickyProvider>
        <Layout>
          <SEO
            description="Community-driven VC scouting and investing in Next-Generation technology startups from the UK and Europe"
            title="Silicon Roundabout Ventures"
          />
          <DocuSeries />
        </Layout>
    </StickyProvider>
  );
}
