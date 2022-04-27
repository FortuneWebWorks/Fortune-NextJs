import { useRef, useEffect } from 'react';
import styles from '@/styles/Browsers.module.scss';
import editorsStyle from '@/styles/CodeEditors.module.scss';
import Exploder from './LfetExplodingBrowser';
import { gsap, SteppedEase } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function BrowserAnimation() {
  let leftBrowser = useRef(null);
  let rightBrowser = useRef(null);
  let codeEditors = useRef(null);
  let firePlace = useRef(null);
  let behindText = useRef(null);
  let typer1 = useRef(null);
  let typer2 = useRef(null);
  let canvas = useRef(null);
  let animation = useRef(null);
  let exploders = useRef([]);
  let c = useRef();

  useEffect(() => {
    let counter = 0;
    const tl = gsap.timeline();
    // Canvas Things
    c.current = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 800;

    const fire = () => {
      exploders.current.forEach((item) => {
        item.setFire = true;
      });
      animate();

      gsap.to(behindText, {
        y: '-50%',
        opacity: 1,
      });

      setTimeout(() => {
        gsap.to(codeEditors, {
          position: 'static',
          opacity: 1,
        });

        setTimeout(() => {
          if (counter <= 0) {
            typing(typer1);
            chartsFade();
            counter++;
          }
        }, 2500);
      }, 2000);

      tl.to(rightBrowser, {
        y: '30%',
      });

      if (counter <= 0) {
        gsap.to('.fadein', { opacity: 0 });
      }
    };

    const leave = () => {
      gsap.to(behindText, {
        y: '100%',
        duration: 0.5,
      });
      gsap.to(behindText, {
        opacity: 0,
        duration: 0,
      });
    };

    const animate = () => {
      if (!canvas) return;
      animation.current = requestAnimationFrame(animate);

      c.current.clearRect(0, 0, canvas.width, canvas.height);

      exploders.current.forEach((item) => {
        item.update();
      });
    };

    const typing = (target) => {
      let text = `
      <div>Test</div>
      <p>Hello world</p>
      <span>Opps</span>
    `;

      let curr = 0;

      let Write = function write() {
        let elem = target;

        elem.textContent = elem.textContent + text.charAt(curr);

        curr++;
        if (typer1.textContent.length - 1 < text.length && curr < text.length) {
          window.setTimeout(write, 10);
        } else if (typer2.textContent === '') {
          typing(typer2);
        }
      };

      Write();
    };

    const chartsFade = () => {
      gsap.to('.fadein', { opacity: 1, stagger: 2 });
    };

    for (let i = 0; i < 200; i++) {
      const dx = parseFloat((Math.random() * 10 - 5).toFixed(7));
      const dy = parseFloat((Math.random() * 10 - 5).toFixed(7));

      exploders.current.push(
        new Exploder(
          canvas,
          exploders.current,
          canvas.width / 2,
          canvas.height / 2,
          dx,
          dy,
          1
        )
      );
    }

    // Animation
    tl.to(leftBrowser, {
      scrollTrigger: {
        trigger: firePlace,
        start: 'top top',
        onEnter: fire,
        onLeaveBack: leave,
      },
      opacity: 0,
      onComplete() {
        gsap.to(leftBrowser, {
          display: 'none',
        });
      },
    });
  }, []);

  return (
    <section className={`section2 ${styles.section2}`} id="section-2">
      <h2
        className={styles.text}
        ref={(el) => (firePlace = el)}
        style={{ transition: 'opacity 0.5s ease-out' }}
      >
        Say goodbye to bloated and overly complicated solutions— web design
        shouldn’t be a riddle.
      </h2>
      <div
        className={styles.section2_browsers}
        id="section2-scroll"
        style={{ transition: 'opacity 0.5s ease-out', overflow: 'visible' }}
      >
        <div className={`section2-icnon ${styles.first_browser}`}>
          <div
            id="explod_target"
            ref={(el) => {
              leftBrowser = el;
            }}
            style={{
              position: 'relative',
              transition: 'all 500ms ease-out',
              height: '100%',
              width: '100%',
              backgroundColor: '#1e1e1e',
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
          <canvas
            className={styles.exploder}
            ref={(el) => (canvas = el)}
          ></canvas>
          {/* Code editors */}
          <div
            ref={(el) => (codeEditors = el)}
            id="code-editors"
            style={{
              opacity: '0',
              position: 'absolute',
              zIndex: '-100',
              transition: 'opacity 1s 1s ease-in',
            }}
            className={editorsStyle.container}
          >
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
                ref={(el) => (typer1 = el)}
              ></div>
            </div>
            <div className={editorsStyle.editors_container}>
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>main.css</div>
              <div id="css" ref={(el) => (typer2 = el)}></div>
            </div>
          </div>
        </div>

        <div
          className={styles.second_browser}
          id="second-browser"
          ref={(el) => (rightBrowser = el)}
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
              <div className={`${styles.dashboard} fadein`}>
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
                    src="https://drive.google.com/uc?export=view&id=1Dt19ogtzRPP7Tghz0mcuulIscDd6wbau"
                    alt="img"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://drive.google.com/uc?export=view&id=1Qpx9RG9wO4VIPHxgcubFYs-BOJsb6U9R"
                    alt="img"
                  />
                </div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
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
        ref={(el) => (behindText = el)}
        style={{ transition: 'opacity 0.5s ease-out' }}
      >
        Delivery of fast and reliable services, like pulling a rabbit out of a
        hat.
      </h2>
    </section>
  );
}

export default BrowserAnimation;
