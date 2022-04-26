import LfetExplodingBrowser from './LfetExplodingBrowser';
import styles from '@/styles/Browsers.module.scss';
import CodeEditors from './CodeEditors';

function BrowserAnimation() {
  return (
    <section className={`section2 ${styles.section2}`} id="section-2">
      <h2
        className={styles.text}
        style={{ transition: 'opacity 0.5s ease-out' }}
      >
        Say goodbye to bloated and overly complicated solutions— web design
        shouldn’t be a riddle.
      </h2>
      <h2
        className={styles.text}
        id="fire-place"
        style={{ transition: 'opacity 0.5s ease-out' }}
      >
        Delivery of fast and reliable services, like pulling a rabbit out of a
        hat.
      </h2>
      <div
        className={styles.section2_browsers}
        id="section2-scroll"
        style={{ transition: 'opacity 0.5s ease-out', overflow: 'visible' }}
      >
        <div
          className={`section2-icnon ${styles.first_browser}`}
          id="code-editors-container"
          style={{
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <div
            id="explod_target"
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
                width: '30%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -40%)',
              }}
            />
          </div>
          <LfetExplodingBrowser />
          <CodeEditors />
        </div>

        <div className={styles.second_browser} id="second-browser">
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
              <div className={styles.dashboard}>
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
              <div className={styles.charts_container}>
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
      {/* <HatRabit /> */}
    </section>
  );
}

export default BrowserAnimation;
