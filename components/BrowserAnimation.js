import Image from 'next/image';

function BrowserAnimation() {
  return (
    <section className="section2">
      <h2 className="text show">
        Delivery of fast and reliable services, like pulling a rabbit out of a
        hat.
      </h2>
      <h2 className="text">
        Say goodbye to bloated and overly complicated solutions— web design
        shouldn’t be a riddle.
      </h2>
      <div className="section2-browsers" id="section2-scroll">
        <div className="section2-icnon" style={{ position: 'relative' }}>
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

        <div className="section2-icnon section2-goodBrowser">
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
            <div className="charts_browser_container">
              <div style={{ marginBottom: '2rem' }}>
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
                  src="https://drive.google.com/uc?export=view&id=1Qpx9RG9wO4VIPHxgcubFYs-BOJsb6U9R"
                  alt="img"
                />
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
    </section>
  );
}

export default BrowserAnimation;
