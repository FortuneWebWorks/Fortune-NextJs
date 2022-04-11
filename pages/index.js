import Layout from '@/components/Layout';
import section1 from '@/styles/Section1.module.scss';
import section2 from '@/styles/Section2.module.scss';
import section4 from '@/styles/Section4.module.scss';
import HatAnimation from '@/components/HatAnimation';
import BrowserAnimation from '@/components/BrowserAnimation';
import TecsAnimation from '@/components/TecsAnimation';

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
              <button className={section1.hide_us}>
                🪄 Hire us to work the magic
              </button>
              <button className={section1.hide_us}>
                Receive a free consulting session today
              </button>
            </div>
          </div>
          {/* <HatAnimation /> */}

          <div className={section1.section1_buttons}>
            <button className={section1.hide_us}>
              🪄 Hire us to work the magic.
            </button>
            <button className={section1.hide_us}>
              Receive a free consulting session today.
            </button>
          </div>
        </section>

        <section className={section2.section2}>
          <h2>
            Delivery of fast and reliable services, like pulling a rabbit out of
            a hat.
          </h2>
          <h2 className={section2.text}>
            Say goodbye to bloated and overly complicated solutions— web design
            shouldn’t be a riddle.
          </h2>
          <div className={section2.section2_browsers} id="section2-scroll">
            <BrowserAnimation />
          </div>
        </section>

        <section className={section4.section4}>
          <h3>Applause for Fortune:</h3>
          <div className={section4.section4_cards}>
            <div>
              <span>they are the best fucking people in the universe.</span>
              <p>- someone</p>
            </div>
            <div>
              <span>they are the best fucking people in the universe.</span>
              <p>- someone</p>
            </div>
            <div>
              <span>
                they are the best fucking peoplein for sure the universe
              </span>
              <p>- someone</p>
            </div>
            <div>
              <span>
                they are the best fucking peoplein for sure the universe
              </span>
              <p>- someone</p>
            </div>
            <div>
              <span>
                they are the best fucking peoplein for sure the universe
              </span>
              <p>- someone</p>
            </div>
          </div>
        </section>

        <TecsAnimation />
      </>
    </Layout>
  );
}
