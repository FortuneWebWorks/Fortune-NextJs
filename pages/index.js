import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import section1 from '@/styles/Section1.module.scss';
import section2 from '@/styles/Section2.module.scss';
import section3 from '@/styles/Section3.module.scss';
import section4 from '@/styles/Section4.module.scss';
import HatAnimation from '@/components/HatAnimation';

export default function Home() {
  const container = useRef();
  const canvas = useRef();

  return (
    <Layout>
      <>
        <section className={section1.section1}>
          <div className={section1.section1_text}>
            <h1>
              Rapidly build modern websites without ever leaving
              <span>your HTML</span>. EVER LEAVING YOUR HTML
            </h1>
            <div>
              <button className={section1.hide_us}>HIRE US &#127881;</button>
              <button className={section1.hide_us}>GET A FREE ANALSYS</button>
            </div>
          </div>
          <HatAnimation />

          <div className={section1.section1_buttons}>
            <button className={section1.hide_us}>HIRE US &#127881;</button>
            <button className={section1.hide_us}>GET A FREE ANALSYS</button>
          </div>
        </section>

        <section className={section2.section2}>
          <h2 className={`${section2.text} ${section2.show}`}>
            {"Don't give a fuck for the websites that do not work!"}
          </h2>
          <h2 className={section2.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
            hic.
          </h2>
          <h2 className={section2.text}>Lorem ipsum dolor sit amet.</h2>
          <h2 className={section2.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
          <h2 className={section2.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            aliquid ut quos ea similique odio deserunt nobis praesentium quo
            dignissimos facilis, autem, dolores, natus tenetur nesciunt nisi
            distinctio! Accusamus, cupiditate? Eveniet expedita officiis commodi
            eos quo! Consequuntur quis cumque nulla, voluptate alias dolore
            delectus fugiat aliquid quisquam rerum culpa perspiciatis sapiente
            iusto consectetur quaerat sequi dolorem, assumenda itaque placeat et
            quasi vel numquam voluptas! Consequuntur hic enim repudiandae. Sit
            minus at neque quas tempore earum alias assumenda temporibus saepe
            id.
          </h2>
          <div className={section2.section2_browsers} id="section2-scroll">
            <div className={section2.section2_icnon}>
              <div className={section2.section2_searchbar}>
                <div className={section2.buttons}>
                  <div className={section2.btn}></div>
                  <div className={section2.btn}></div>
                  <div className={`${section2.btn} ${section2.last_btn}`}></div>
                  <div className={section2.tab}></div>
                  <div className={section2.tab}></div>
                </div>
                <div className={section2.navigation}>
                  <div></div>
                </div>
              </div>

              {/* <img src={uri + '/loading.gif'} alt="Loading..." /> */}
            </div>

            <div
              className={`
                ${section2.section2_icnon}
                ${section2.section2_goodBrowser}
              `}
            >
              <div className={section2.section2_searchbar}>
                <div className={section2.buttons}>
                  <div className={section2.btn}></div>
                  <div className={section2.btn}></div>
                  <div className={`${section2.btn} ${section2.last_btn}`}></div>
                  <div className={section2.tab}></div>
                  <div className={section2.tab}></div>
                </div>
                <div className={section2.navigation}>
                  <div></div>
                </div>
              </div>
              <div className={section2.section2_content}>
                <div className={section2.fadein_target}></div>
                <div className={section2.cc_container}>
                  <div className={section2.cc}>
                    <div className={section2.fadein_target}></div>
                    <div className={section2.fadein_target}></div>
                    <div className={section2.fadein_target}></div>
                    <div className={section2.fadein_target}></div>
                  </div>
                  <div
                    className={`${section2.fadein_target} ${section2.cc_side}`}
                  ></div>
                </div>
                <div className={section2.fadein_target}></div>
              </div>
            </div>
          </div>
        </section>

        <section className={section4.section4}>
          <h3>SEE WHAT OTHER PEOPLE THINK:</h3>
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

        <section className={section3.section3}>
          <canvas id="tecs"></canvas>
          <div className={section3.section3_text}>
            <p>go to mooonnnnn &#128640;</p>
            <p>WITH THE MODERN WEB</p>
          </div>
        </section>
      </>
    </Layout>
  );
}
