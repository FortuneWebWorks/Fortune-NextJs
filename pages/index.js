import Layout from '@/components/Layout';
import section1 from '@/styles/Section1.module.scss';
import section2 from '@/styles/Section2.module.scss';
import section4 from '@/styles/Section4.module.scss';
import Link from 'next/link';
import BrowserAnimation from '@/components/BrowserAnimation';
import TecsAnimation from '@/components/TecsAnimation';
import Youtube from '@/components/Youtube';

export default function Home() {
  return (
    <Layout>
      <>
        <section className={section1.section1}>
          <div className={section1.section1_text}>
            <h1>
              Cast your website into
              <span> reality.</span>
            </h1>
            <div>
              <Link href="/hireUs" passHref>
                <button className={section1.hide_us}>
                  🪄 Hire us to work the magic
                </button>
              </Link>
              <Link href="/websiteAnalyses" passHref>
                <button className={section1.hide_us}>
                  Receive a free consulting session today
                </button>
              </Link>
            </div>
          </div>
          {/* <HatAnimation /> */}
          <Youtube />

          <div className={section1.section1_buttons}>
            <Link href="/hireUs" passHref>
              <button className={section1.hide_us}>
                🪄 Hire us to work the magic
              </button>
            </Link>
            <Link href="/websiteAnalyses" passHref>
              <button className={section1.hide_us}>
                Receive a free consulting session today
              </button>
            </Link>
          </div>
        </section>

        {/* <section className={section2.section2}>
          <h2>
            Delivery of fast and reliable services, like pulling a rabbit out of
            a hat.
          </h2>
          <h2 className={section2.text}>
            Say goodbye to bloated and overly complicated solutions— web design
            shouldn’t be a riddle.
          </h2>
          <div className={section2.section2_browsers} id="section2-scroll"> */}
        <BrowserAnimation />
        {/* </div> */}
        {/* </section> */}

        <section className={section4.section4}>
          <h3>Applause for Fortune:</h3>
          <div className={section4.section4_cards}>
            <div>
              <span>
                I would like to formally and sincerely express my gratitude for
                your excellent work in developing our online psychological
                assessment system for Arameh Psychological Center.<br></br> Your
                production of the online family assessment system has directly
                impacted our indexes to serve clientele by enhancing their
                satisfaction with our services. I want you to know that I value
                the amount of effort you have put into your work and see great
                potential in you.
              </span>
              <p>
                - Dr, Siamak Samani<br></br>
                Associate Prof. In Psychology<br></br>
                Chair of Aramesh Pychological Center<br></br>
              </p>
            </div>
          </div>
        </section>

        <TecsAnimation />
      </>
    </Layout>
  );
}
