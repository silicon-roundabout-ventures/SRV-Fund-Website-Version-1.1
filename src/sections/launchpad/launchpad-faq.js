import React from 'react';
import { Box, Container, Text } from 'theme-ui';
import Accordion from '../../components/accordion/accordion';
import BlockTitle from '../../components/block-title';

const commonquestions = [
  {
    isExpanded: false,
    title: 'Is Launchpad 🚀 only for tech companies?',
    contents: (
      <div>
        The Founder Institute and Silicon Roundabout Ventures focuses on technology and technology-enabled businesses.
        This can include hardware and traditional businesses such as food, ecommerce, and brick and mortar, so long as the business has the ability to scale through technology.
        We typically do not accept founders looking to build non-scalable service-based companies, such as consultancies and agencies.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'How is the Silicon Roundabout Launchpad 🚀 different from Techstars and Y Combinator?',
    contents: (
      <div>
Seed-accelerators like Techstars and Y Combinator typically take a company with a team, live product, and some traction and provide them with operating capital and/or a small seed investment to help them prepare for an angel or VC round of funding. The Founder Institute and Silicon Roundabout Ventures works with entrepreneurs before this point in their process, and provides them with a structured process, expert mentorship, and a global network to get to traction and funding.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Website reponse taking time, how to improve?',
    contents: (
      <div>
        An FAQ is a list of frequently asked questions (FAQs) and answers on a
        particular topic (also known as Questions and Answers [Q&amp;A] or
        Frequently Asked Questions). The format is often used in articles,
        websites, email lists, and online forums where common questions tend to
        recur, for example through posts or queries by new users related to
        common knowledge gaps. The purpose of an FAQ is generally provide
        information.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Is the Launchpad 🚀 a pre-accelerator?',
    contents: (
      <div>
Pre-Accelerators exist to help you get into a seed-accelerator. While many Founder Institute and Silicon Roundabout Ventures Alumni do go on to seed-accelerators like Techstars, Y Combinator, and 500 Startups, this is not the sole purpose of the FI program. In fact, many companies companies leave FI further along than a seed-accelerator, or may not need funding at all. Only approximately 15% of FI alumni go on to join seed-accelerator programs, and we have relationships in place to facilitate that process when it makes sense for the company.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Where are the London Founder Institute and Silicon Roundabout Ventures Feedback Sessions located?',
    contents: (
      <div>
Program Update: This accelerator will be run online with local and international mentors, with the potential for some optional in-person networking. Learn more on FI's<a href="https://fi.co/virtualfaq" target="_blank"> Virtual Program FAQ page </a>.

When in-person sessions resume, the local session locations are sometimes held in the same venues as the public pre-program events listed on FI.co/program, though this is not always the case. These Sessions are not open to the public, so their locations are not listed on the public website.      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How much time does the program require?',
    contents: (
      <div>
The Founder Institute and Silicon Roundabout Ventures requires a minimum of 20 hours of work per week, on average. Participating founders are required to join each three and a half hour weekly session, plus additional networking hours. The sessions will have between ten and fifteen hours of sprint work that needs to be completed before the following session, in addition to team meetings. If a participating Founder is also working on a prototype or some other aspect of the business, then the time commitment can be much greater.      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How do I complete the program?',
    contents: (
      <div>
In order to complete the program, a Founder must join the Feedback Sessions, complete all of the Growth Sprints in a satisfactory manner, and receive satisfactory ratings from Mentors. The Founder Institute and Silicon Roundabout Ventures supports the efforts of every entrepreneur, but the program is very hard, because building a meaningful company is harder. On average, about 30% of founders are able to complete program.      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Do I need to join every session?',
    contents: (
      <div>
Joining the sessions are mandatory, however, it is understood that founders may have emergencies, illness, or pre-planned travel that may prevent them from joining one or two sessions. The Founder Institute and Silicon Roundabout Ventures makes exceptions on a case by case basis, but founders are advised to communicate any conflicts in schedule as early as possible to their Local Leaders. In particular, the Orientation, Mentor Idea Review, and the Mentor Progress Review sessions should never be missed.      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Is the Launchpad 🚀 only for individuals? Can teams or multiple co-founders also enroll?',
    contents: (
      <div>
The Founder Institute and Silicon Roundabout Ventures encourages founding teams to apply to the program, and a typical cohort contains roughly 40% teams, and 60% solo-founders. When a team joins the Founder Institute and Silicon Roundabout Ventures, the 4% pledge to the Equity Collective remains the same (it is 4% per company, not Founder).

Founding teams can decide to send one co-founder, multiple co-founders, or all co-founders to participate in the program, but each co-founder must apply separately (noting the name of your company in your application, in the “Company Name” section). Since we are the ‘Founder’ Institute, each co-founder’s application will be evaluated independently by our admissions team (one co-founder gaining acceptance does not mean that their entire team is accepted). However, even if one co-founder is rejected, any accepted co-founders are still invited to participate.

Teams are also able to enroll in the program for a discounted course fee per-founder: Teams of 2-3 are invited to enroll for 1.5x the course fee, and Teams of 4-5 for 2x the course fee.

Each enrolled founder will be responsible for completing assignments and participating in working groups, and 1-2 team members will be responsible for pitching during program sessions. Non-participating co-founders are not permitted to join the FI program sessions, but are welcome to participate in program Office Hours and company-building assignments, as well as many perks post-program.

      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'What happens if I drop out after the third session?',
    contents: (
      <div>
After the Customer Development session, if you cannot finish the program for personal reasons or get dropped by the Founder Institute and Silicon Roundabout Ventures, you can use your already paid course fee towards a future program of the Founder Institute and Silicon Roundabout Ventures in the same city, so long as that program begins within one calendar year of the start date of the program you dropped out from. If the course fee for the new program is significantly higher than your original one, FI reserves the right to require you to pay the difference in order to enroll in the new program. However, we will not refund the difference if the course fee of the new program is lower.      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'If I am already accepted, what is the deadline for enrolling in the Launchpad 🚀?',
    contents: (
      <div>
In order to guarantee a spot in the program, we encourage founders to complete their enrollment promptly. Typically we close enrollment approximately 7 days before the start date of the program (October 1st week), but if the class fills up before then you may not be guaranteed a spot.      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Can full teams be dropped from the program?',
    contents: (
      <div>
Evaluations throughout the program are by team. If a team is not able to meet course requirements they will be asked to leave and re-enroll in the next program. If a team member decides to stop participating, the rest of the team can continue with the program contingent on there being one Full-time team member enrolled.
      </div>
    ),
  },
];

const Ideas = [
  {
    isExpanded: false,
    title: 'How does the program’s ideation phase work?',
    contents: (
      <div>
        For early-stage founders, founders are broken into smaller working groups by related ideas. These groups are then given specific assignments for refining, researching, and validating ideas.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Could other participants have similar ideas to mine?',
    contents: (
      <div>
        Possibly. Some applicants supply multiple ideas that they intend to pursue, some of which may be similar to yours. That being said, founders in similar spaces have often ended up collaborating in the past, and your intellectual property will be protected by the founder NDA.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How is our intellectual property protected during the Program? Will somebody steal my idea?',
    contents: (
      <div>
        All founders, mentors, and local leaders joining sessions of the Founder Institute and Silicon Roundabout Ventures have to sign NDAs before participating in the program. Your IP is protected under the NDA.
      </div>
    ),
  },
];

const Applications = [
  {
    isExpanded: false,
    title: 'How does the application process work?',
    contents: (
      <div>
First, navigate to the join page: https://FI.co/join.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'What is the DNA Assessment?',
    contents: (
      <div>
We focus on founders, not ideas. As a result, all applicants are required to take a proprietary psychometric/ aptitude test developed by the Founder Institute and leading social scientists. Learn more about the assessment at FI.co/DNA, and our full admissions process at FI.co/admissions.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'What are the application deadlines for the program?',
    contents: (
      <div>
        The Early Application Deadline is Sep 12, 2021, and the Final Application Deadline is Oct 03, 2021. To apply, visit FI.co/join.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'What is the benefit of enrolling before the Early Application Deadline?',
    contents: (
      <div>
       If you enroll by the Early Admissions Deadline (Sep 12, 2021) in London), you will be invited to take the Entrepreneur DNA Assessment for free, and you will be eligible for a reduced course fee.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Will information from the application process be shared or made public?',
    contents: (
      <div>
       The Founder Institute and Silicon Roundabout Ventures will not reveal any application information to the public. Once enrolled, founders are given the option to make parts of their profiles public.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Can I apply if I have an established startup?',
    contents: (
      <div>
       Yes. The Founder Institute and Silicon Roundabout Ventures is appropriate for both aspiring founders, and founders that are running a business that is less than two years old and with less than half a million in annual revenues. Founders that are more advanced in the program are put on the "Growth Track", which focuses more on generating traction and preparing for funding.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Can I join the program if my company is already incorporated?',
    contents: (
      <div>
       If the company is incorporated with an acceptable legal structure, then the company only needs to issue the warrant or option with the help of a law firm, or professional firm. Otherwise, the legal partner needs to work with the company to transition an incorrect structure to the proper structure as part of the engagement.
       The Founder Institute and Silicon Roundabout Ventures does not accept partnership and LLC formats because these companies are not optimal for issuing shares and raising capital.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'I applied, but did not receive an email response. Did you get my application?',
    contents: (
      <div>
       Yes. After you successfully apply, you will be logged into the Founder Institute site. On the right hand side, it should say: Semester: London Fall Virtual 2021, Role: Founder, Status: Applied. This indicates that your application has gone through. As the Founder Institute and Silicon Roundabout Ventures processes applications, your status will change to "Reviewing," "Accepted," "Finalist" or "Rejected." Within 48 hours, the admissions team will begin reviewing your application and you will receive an email notification. FI will also email you when your application status changes.
      </div>
    ),
  },
];

const Program = [
  {
    isExpanded: false,
    title: 'What is a typical Feedback Session like?',
    contents: (
      <div>
        See a sample <a target="_blank" href="https://fi.co/sessions">Feedback Session</a> here.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Do founders need to quit their day job?',
    contents: (
      <div>
        No. The Founder Institute and Silicon Roundabout Ventures has a mix of full-time and part-time founders in the program. Many businesses get started with part-time founders until the company gains traction. Once a company gets off the ground and properly capitalized through revenues or investment, FI expects that the founders will start working full-time.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Can I find a co-founder in the program?',
    contents: (
      <div>
        Yes. Since participants have shared areas of interest and hail from a variety of backgrounds, it is common for founding teams to be established with different program participants. In one case a Mentor even joined one of the Founder Institute companies as a Co-Founder.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'What is the graduation rate?',
    contents: (
      <div>
        Graduating from the Founder Institute and Silicon Roundabout Ventures is challenging. First, only roughly 30% of applicants are admitted to the program. Then, less than 30% of accepted founders generally make it through the program. In order to graduate, a Founder needs to develop an engaging idea for a technology company that is validated by the program mentors, plan out the business, work on an offering, incorporate their company, and complete all of the required assignments - all within a four month timeframe. Reasons for not graduating differ, but each Founder who leaves is invited to join a future program, when they are ready to launch a business.
      </div>
    ),
  },
];

const Mentors = [
  {
    isExpanded: false,
    title: 'How does the Founder Institute and Silicon Roundabout Ventures select Mentors?',
    contents: (
      <div>
        The Founder Institute and Silicon Roundabout Ventures selects Mentors with a broad range of industry experiences, including hardware, software, manufacturing, biotech, entertainment, digital media, investment, services, and B2B/B2C. Most Mentors have started multiple companies and are currently running a well-known startup. In addition, all Mentors are anonymously rated by program participants for the sake of quality control.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'How do founders get paired with mentors?',
    contents: (
      <div>
        The pairing process is informal. Founders have the opportunity to ask questions of mentors before, during, and after each session. While some mentors are extremely busy, it is expected that the majority of mentors will help founders where they have common interests. The mentors are compensated through the Equity Collective, and mentor compensation increases with positive ratings from participating founders. This gives mentors the extra incentive to help the founders, provide introductions, etc. In addition, a final review is done after the program is completed, creating an incentive for longer term mentor involvement.
      </div>
    ),
  },
];

const Equity_Collective_Agreement = [
  {
    isExpanded: false,
    title: 'Where can I learn about the Equity Collective?',
    contents: (
      <div>
        Learn about the Equity Collective at <a target="_blank" href="https://fi.co/liquidity">FI.co/liquidity</a>, and you can see all of the agreements at <a target="_blank" href="https://fi.co/agreements">FI.co/agreements</a>.
        Please note that Founders are NOT asked to join the Equity Collective to enroll and start the program. Instead, you will be asked to join approximately two-thirds of the way through the program (2021-12-09 for the London Fall Virtual 2021 cohort), allowing you to fully understand the value the Founder Institute and Silicon Roundabout Ventures Network provides before committing equity in your business.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Will the Founder Institute and Silicon Roundabout Ventures help me incorporate?',
    contents: (
      <div>
        The Program will include a session about legal topics during the Startup Legal and IP session. If you need help with getting incorporated, you can always ask for help during the program's office hours, or speak with our local legal partner, leaders, or mentors.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Do I need to be working with a law firm now?',
    contents: (
      <div>
        You should engage a law firm for incorporating your company during the Program, and we will provide you with the guidance and tools to do so. In some countries, professionals, such as corporate secretaries or accounting firms, are customarily hired to incorporate a company. It is important that you hire a professional to create the corporation to ensure that it is done properly and investors can fund your company.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Do I need to use the Founder Institute’s legal partner?',
    contents: (
      <div>
        The Founder Institute and Silicon Roundabout Ventures strongly recommends that Founders go with our legal partner, but we do not mandate it. Our legal partners deeply understand the Founder Institute process and know how to help early stage Founders. Most legal partners also provide discounted and/or deferred pricing.
        Cheap legal alternatives will not be able to help you when very technical problems happen. In the long run, it can cost hundreds of thousands of dollars. We suggest that you check with your lawyer and research on local prices and policies.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Am I required to incorporate in my home country?',
    contents: (
      <div>
        You are allowed to incorporate in whatever country you see fit, as we have localized agreements in many jurisdictions. During our Startup Legal & IP session, we will give you advice on how/where to incorporate as well. For those incorporating in the United States, we recommend Delaware C-Corps as they are the most conducive to raising venture capital. There are similar safe-havens for corporations all across the globe.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'What if I can’t incorporate due to work, unemployment, or visa conflicts?',
    contents: (
      <div>
        This question should be asked to your law firm as each country has different laws and policies. The legal partner should review existing employment contracts and basic visa situations to determine if a Founder is able to incorporate a business without significant ethical breaches. The Founder Institute and Silicon Roundabout Ventures does not sponsor nor facilitate any processes with regards to Visas. If you cannot incorporate a company, you cannot graduate from the program.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'What if my company is already incorporated? Can I or should I still enroll into the program?',
    contents: (
      <div>
        We have had many successful cases of Founders that go through the program to receive valuable feedback from mentors even while they have already had an incorporated company. If the company is incorporated with an acceptable legal structure, then the company only needs to issue the warrant or option with the help of a professional law firm. Otherwise, the legal partner needs to work with the company to transition an incorrect structure to the proper structure as part of the engagement.
        The Founder Institute and Silicon Roundabout Ventures does not accept partnership and LLC formats because these companies are not optimal for issuing shares and raising capital.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'I already own a company, but I want to work on a new company in the Program. Will FI own part of my old company?',
    contents: (
      <div>
        No. At approximately 2/3 of the way through the Founder Institute and Silicon Roundabout Ventures program, you will be asked to sign the warrant or option agreement for the company you are building in the program.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How is our intellectual property protected during the program? Will somebody steal my idea? How do I know nobody will steal my idea in the program?',
    contents: (
      <div>
        All founders, mentors, and local leaders joining sessions of the Founder Institute and Silicon Roundabout Ventures have to sign NDAs before participating in the program. Your IP is safe. We also tell all of our Founders that in many cases, Founders change their ideas in the program and realize that for example there is no market for the idea to scale or that there are holes in the idea that cannot be filled and therefore should be dropped.
        Additionally, your idea will never be able to be replicated the same exact way that you visualize it. Ideas are worthless, execution is everything. If you actually have a good idea, then there is a big chance that someone else out there is already working on it.
        By restricting yourself to talk openly about your ideas, you forgo valuable opportunities to get feedback on your startup.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Does the Founder Institute and Silicon Roundabout Ventures have voting power in my company after I graduate?',
    contents: (
      <div>
        The Founder Institute and Silicon Roundabout Ventures does not have any voting rights in our alumni companies, and we do not hold any board seats either.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'When is 4% of my company granted?',
    contents: (
      <div>
        Please note that Founders are NOT asked to join the Equity Collective to enroll and start the program. Instead, you will be asked to join approximately two-thirds of the way through the program (2021-12-09 for the London Fall Virtual 2021 cohort), allowing you to fully understand the value the Founder Institute and Silicon Roundabout Ventures Network provides before committing equity in your business.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'If I drop out, do I still owe 4% equity to the Founder Institute and Silicon Roundabout Ventures?',
    contents: (
      <div>
        If you drop out with more than 45 days left before Graduation ( Jan 27, 2022 ), then you are not obligated to issue the warrant. However, if you drop out with less than 45 days left in the program, then you are contractually bound to issue the Founder Institute and Silicon Roundabout Ventures warrants in accordance with the Equity Collective Agreement. This prevents people from cheating the system and leaving the program at the very end, thereby purposefully avoiding contribution into the Equity Collective and cheating their peers, mentors, the Founder Institute and Silicon Roundabout Ventures.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Why is any company that I create during the program, and within 6 months after Graduation of the program, obligated to join the Equity Collective?',
    contents: (
      <div>
        Similar to the 45 day stipulation above, this clause is meant to prevent founders from immediately starting a new (identical) company after Graduation that is not part of the Equity Collective, thereby cheating their peers and the Founder Institute. We would only use this clause if the new company formed within 6 months was identical or very similar in nature to the company you formed in the program.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Why are founders required to start a commercially viable product within 24 months after the program?',
    contents: (
      <div>
        This clause was added to the Equity Collective Agreement after receiving feedback from alumni, and it prevents alumni that do not try to build a company within 2 years after the program from participating in the Equity Collective.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Where is the Equity Collective Agreement to sign and upload?',
    contents: (
      <div>
        Be sure to select your city in the top right drop down menu, and visit the Agreements page.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'I have legal questions about the FAST agreement.',
    contents: (
      <div>
        The FAST agreement (https://fi.co/FAST) gives you the legal framework to engage with mentors and advisors. It was developed by our CEO, Adeo Ressi with our partner law firm, Wilson Sonsini Goodrich & Rosati, LLP (WSGR). It is a public document for anyone to use and edit. For any questions regarding the document, please consult a legal counsel.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How do I get answers to questions about the Equity Collective Agreement?',
    contents: (
      <div>
        You can reply to any email you have received from us, and we will try to respond ASAP. In addition, we host two Conference Calls per week with FI Local Leaders to answer questions for applicants. To see the upcoming calls, visit http://fi.co/calls.
      </div>
    ),
  },
];

const Investment = [
  {
    isExpanded: false,
    title: 'Can I apply if I am not planning to raise money?',
    contents: (
      <div>
        Yes. FI encourages founders with standalone business ideas that are capital efficient to apply. The majority of topics covered in the program are relevant to any business, such as team building, vendors, and revenue. The Founder Institute and Silicon Roundabout Ventures is working with two dozen partners on discounted or free offerings to dramatically reduce the cost of launching a new company, making enrollment worthwhile.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Can I apply if I am already fundraising?',
    contents: (
      <div>
        Yes. The Founder Institute and Silicon Roundabout Ventures encourages active fundraising throughout the program for founders that are prepared and require outside capital. The goal is to get founders in front of investors multiple times before the program ends.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How will founders interact with investors?',
    contents: (
      <div>
        At graduation, top rated angel investors and venture capitalists will be invited to join and contribute. At this investor session, you will be experienced and very well prepared to pitch. In past investor sessions, over a dozen venture capital companies have been represented, with additional angel investors. FI also facilitates investor meetings outside of the program.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Are investors turned off by the Class F stock and Equity Collective?',
    contents: (
      <div>
        Some are, yes, and others are not. Only the best teams and the best companies will receive financing in the current economic climate, and these strong opportunities will be able to push for better terms. The Founder Institute and Silicon Roundabout Ventures aims to foster the best, and that is reflected in the terms. FI does not mandate that companies use the documents nor that the founders participate in the collective.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How much money should participating founders plan on raising?',
    contents: (
      <div>
        The Founder Institute and Silicon Roundabout Ventures invites a wide range of founders from different sectors to apply. Some companies need more capital and will raise more capital during the program. The amount of money that a participating Founder can expect to raise is ultimately based on the business, its specific needs, and the execution.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Does the Founder Institute make investments?',
    contents: (
      <div>
        The Founder Institute does not invest directly in alumni companies. However, we do facilitate investment through introductions, local/ regional/ global events, and more.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Does Silicon Roundabout Ventures make investments?',
    contents: (
      <div>
        Silicon Roundabout Ventures invests only in high performing alumni startup at pre-seed/seed stage. In addition, we do facilitate investment through introductions, local/ regional/ global events, and more.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Does the entrepreneur have input into and veto power over the valuation?',
    contents: (
      <div>
        The founders choose the investors, negotiate the terms, and sign the deal with assistance of - but no control from - the Founder Institute and Silicon Roundabout Ventures. Everything is up to the founder and the shareholders. Keep in mind that the Founder Institute and Silicon Roundabout Ventures will not be a shareholder of any kind pre-funding.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <Text as='H2' sx={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      lineHeight: 2,
                      color: '#000',
                      textAlign: 'center',
                      mb: '20px',
                      '@media only screen and (max-width: 720px)': {
                        fontSize: '20px',
                      },
                    }}>
                  Frequently Asked Questions
        </Text>
        <Text as='p' sx={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      lineHeight: 2,
                      color: '#000',
                      textAlign: 'center',
                      mb: '20px',
                      '@media only screen and (max-width: 720px)': {
                        fontSize: '16px',
                      },
                    }}>
                  Common Questions
        </Text>
        <Accordion items={commonquestions} />

        <Text as='p' sx={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      lineHeight: 2,
                      color: '#000',
                      textAlign: 'center',
                      mb: '20px',
                      mt: '80px',
                      '@media only screen and (max-width: 720px)': {
                        fontSize: '16px',
                      },
                    }}>
                  Ideas
        </Text>
        <Accordion items={Ideas} />

        <Text as='p' sx={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      lineHeight: 2,
                      color: '#000',
                      textAlign: 'center',
                      mb: '20px',
                      mt: '80px',
                      '@media only screen and (max-width: 720px)': {
                        fontSize: '16px',
                      },
                    }}>
                  Applications
        </Text>
        <Accordion items={Applications} />

        <Text as='p' sx={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      lineHeight: 2,
                      color: '#000',
                      textAlign: 'center',
                      mb: '20px',
                      mt: '80px',
                      '@media only screen and (max-width: 720px)': {
                        fontSize: '16px',
                      },
                    }}>
                  Program
        </Text>
        <Accordion items={Program} />

        <Text as='p' sx={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      lineHeight: 2,
                      color: '#000',
                      textAlign: 'center',
                      mb: '20px',
                      mt: '80px',
                      '@media only screen and (max-width: 720px)': {
                        fontSize: '16px',
                      },
                    }}>
                  Mentors
        </Text>
        <Accordion items={Mentors} />

        <Text as='p' sx={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      lineHeight: 2,
                      color: '#000',
                      textAlign: 'center',
                      mb: '20px',
                      mt: '80px',
                      '@media only screen and (max-width: 720px)': {
                        fontSize: '16px',
                      },
                    }}>
                  Equity Collective Agreement
        </Text>
        <Accordion items={Equity_Collective_Agreement} />

        <Text as='p' sx={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      lineHeight: 2,
                      color: '#000',
                      textAlign: 'center',
                      mb: '20px',
                      mt: '80px',
                      '@media only screen and (max-width: 720px)': {
                        fontSize: '16px',
                      },
                    }}>
                  Investment
        </Text>
        <Accordion items={Investment} />
      </Container>
    </Box>
  );
};
export default FAQ;

const styles = {
  accordion: {
    fontFamily: 'futura !important',
    backgroundColor: '#fafafa !important',
    pt: '160px',
    container: {
      maxWidth: '900px',
      backgroundColor: '#fafafa !important',
      color: 'black',
    },
  },
};
