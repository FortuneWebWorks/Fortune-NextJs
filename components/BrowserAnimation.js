import { useRef, useEffect } from 'react';
import styles from '@/styles/Browsers.module.scss';
import editorsStyle from '@/styles/CodeEditors.module.scss';
import { gsap, Power3 } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function BrowserAnimation() {
  let section = useRef(null);
  let firstText = useRef(null);
  let secondText = useRef(null);
  let fadeOuter = useRef(null);
  let fadeIner = useRef(null);
  let background = useRef(null);
  let secondBrowser = useRef(null);
  let dashboard = useRef(null);
  let html = useRef(null);
  let css = useRef(null);
  let htmlCode = `
    <div>Test</div>
    <p>Hello world</p>
    <span>Opps</span>
  `;
  let cssCode = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  `;

  useEffect(() => {
    // HTML
    const splittedText = htmlCode.split('');
    if (html.innerHTML === '') {
      splittedText.forEach((item) => {
        const span = document.createElement('span');
        span.innerHTML = item;
        span.className = 'typingTextHtml';
        html.appendChild(span);
      });
    }
    // CSS
    const splittedTextCss = cssCode.split('');
    if (css.innerHTML === '') {
      splittedTextCss.forEach((item) => {
        const span = document.createElement('span');
        span.innerHTML = item;
        span.className = 'typingTextCss';
        css.appendChild(span);
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: '-20%',
        end: '+=' + window.innerHeight * 10,
        scrub: true,
        markers: true,
        pin: true,
      },
    });

    // step 1: first text
    tl.fromTo(
      firstText,
      { top: '0%', opacity: 1 },
      { top: '-50%', opacity: 0, duration: 3 }
    );
    // step 2: second text
    tl.fromTo(
      secondText,
      { top: '50%', opacity: 0 },
      { top: '-10%', opacity: 1, duration: 3 },
      '50%'
    );
    // step 4: bye bye
    tl.fromTo(
      '.bye',
      {
        scale: '0',
        opacity: 0,
      },
      {
        scale: '1',
        opacity: 1,
        duration: 3,
      }
    );
    // fade dashboard out
    tl.fromTo(dashboard, { opacity: 1 }, { opacity: 0 }, '<60%');
    // fade charts out
    tl.fromTo('.chart', { opacity: 1 }, { opacity: 0 }, '<');
    // step 3: fading the left browser out
    tl.fromTo(
      fadeOuter,
      {
        scale: '1',
        opacity: 1,
      },
      { scale: '0', opacity: 0 },
      '<'
    );
    // step 5: fading the text editor in
    tl.fromTo(
      fadeIner,
      {
        scale: '0',
        translateY: '0',
        opacity: 0,
      },
      { scale: '1', translateY: '-85%', opacity: 1 },
      '<'
    );
    // step 5: bring the right browser a bit top
    tl.fromTo(
      secondBrowser,
      {
        translateY: '0',
      },
      { translateY: '10%' },
      '<'
    );
    // step 4: bye bye
    tl.fromTo(
      '.bye',
      {
        scale: '1',
        opacity: 1,
      },
      {
        scale: '0',
        opacity: 0,
        duration: 3,
      }
    );
    // remove the container
    tl.fromTo(
      background,
      {
        display: 'block',
      },
      {
        display: 'none',
      }
    );
    // typing html
    tl.fromTo('.typingTextHtml', { opacity: 0 }, { opacity: 1, stagger: 0.1 });
    // dashboard fadein
    tl.fromTo(dashboard, { opacity: 0 }, { opacity: 1 }, '<60%');
    // typing css
    tl.fromTo('.typingTextCss', { opacity: 0 }, { opacity: 1, stagger: 0.1 });
    // charts fadein
    tl.fromTo(
      '.chart',
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 1,
        duration: 1,
      },
      '>10%'
    );
  });

  return (
    <section
      className={`section2 ${styles.section2}`}
      ref={(el) => (section = el)}
    >
      <h2 className={styles.text} ref={(el) => (firstText = el)}>
        Say goodbye to bloated and overly complicated solutions— web design
        shouldn’t be a riddle.
      </h2>
      <div
        className={styles.section2_browsers}
        style={{ transition: 'opacity 0.5s ease-out', overflow: 'visible' }}
      >
        <div className={`section2-icnon ${styles.first_browser}`}>
          <div
            ref={(el) => (fadeOuter = el)}
            style={{
              position: 'relative',
              transition: 'all 500ms ease-out',
              height: '100%',
              width: '100%',
              backgroundColor: '#1e1e1e',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <div className="section2-searchbar">
              <div className="buttons">
                <div className="btn"></div>
                <div className="btn"></div>
                <div className="btn last-btn"></div>
                <div className="tab"></div>
                <div className="tab"></div>
              </div>
              <div className="navigation">
                <div></div>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://drive.google.com/uc?export=view&id=1JZnd3ri1q5A02BfC1cIAqeDqaY3gXTLl"
              alt="Loading..."
              style={{
                width: '20%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -40%)',
              }}
            />
          </div>
          {/* Code editors */}
          <div ref={(el) => (fadeIner = el)} className={editorsStyle.container}>
            <div className={editorsStyle.editors_container}>
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>
                <span>index.html</span>
              </div>

              <div
                id="html"
                className={styles.html}
                ref={(el) => (html = el)}
              ></div>
            </div>
            <div className={editorsStyle.editors_container}>
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>main.css</div>
              <div id="css" ref={(el) => (css = el)}></div>
            </div>
          </div>

          <div className={styles.background} ref={(el) => (background = el)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '25vh',
                left: '8vw',
                height: '8vh',
                width: '8vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '23vh',
                right: '32vw',
                height: '5vh',
                width: '5vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                top: '24vh',
                left: '-4vw',
                height: '13vh',
                width: '13vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '-5vh',
                right: '18vw',
                height: '13vh',
                width: '13vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '-3vh',
                left: '15vw',
                height: '13vh',
                width: '13vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                top: '20vh',
                right: '-2vw',
                height: '13vh',
                width: '13vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '16vh',
                left: '35vw',
                height: '5vh',
                width: '5vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '10vh',
                right: '-5vw',
                height: '13vh',
                width: '13vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '37vh',
                left: '3vw',
                height: '5vh',
                width: '5vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                top: '38vh',
                right: '-3vw',
                height: '5vh',
                width: '5vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '36vh',
                right: '10vw',
                height: '5vh',
                width: '5vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '30vh',
                right: '40vw',
                height: '8vh',
                width: '8vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '25vh',
                right: '7vw',
                height: '8vh',
                width: '8vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '8vh',
                right: '22vw',
                height: '8vh',
                width: '8vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                top: '1vh',
                right: '10vw',
                height: '5vh',
                width: '5vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                bottom: '12vh',
                left: '2vw',
                height: '8vh',
                width: '8vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                top: '35vh',
                left: '48vw',
                height: '5vh',
                width: '5vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                top: '20vh',
                left: '35vw',
                height: '8vh',
                width: '8vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                top: '-5vh',
                left: '13vw',
                height: '13vh',
                width: '13vh',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bye"
              src="../svg/byeEmoji.svg"
              alt=""
              style={{
                top: '-1vh',
                right: '40vw',
                height: '8vh',
                width: '8vh',
              }}
            />
          </div>
        </div>

        <div
          className={styles.second_browser}
          ref={(el) => (secondBrowser = el)}
        >
          <div className="section2-searchbar" style={{ height: '100%' }}>
            <div className="buttons">
              <div className="btn"></div>
              <div className="btn"></div>
              <div className="btn last-btn"></div>
              <div className="tab"></div>
              <div className="tab"></div>
            </div>
            <div className="navigation">
              <div></div>
            </div>
            <div className={styles.content} id="animate-target">
              <div
                className={`${styles.dashboard} fadein`}
                ref={(el) => (dashboard = el)}
              >
                <h5>
                  <span>🔥</span>DASHBOARD
                </h5>
                <ul>
                  <li>clients</li>
                  <li>invoices</li>
                  <li>expenses</li>
                  <li>accounts</li>
                  <li>results</li>
                  <li>blog posts</li>
                </ul>
              </div>
              <div className={`${styles.charts_container} fadein`}>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="chart"
                    src="https://drive.google.com/uc?export=view&id=1Dt19ogtzRPP7Tghz0mcuulIscDd6wbau"
                    alt="img"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="chart"
                    src="https://drive.google.com/uc?export=view&id=1Qpx9RG9wO4VIPHxgcubFYs-BOJsb6U9R"
                    alt="img"
                  />
                </div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="chart"
                    src="https://drive.google.com/uc?export=view&id=11nSCPBDJzbef0JEdniYDxeRYgOrnP1pM"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2
        className={`${styles.text} ${styles.fireText}`}
        ref={(el) => (secondText = el)}
        style={{ transition: 'opacity 0.5s ease-out' }}
      >
        Delivery of fast and reliable services, like pulling a rabbit out of a
        hat.
      </h2>
    </section>
  );
}

export default BrowserAnimation;
