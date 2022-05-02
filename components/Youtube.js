import styles from '@/styles/Youtube.module.scss';
import { useEffect, useRef } from 'react';

const Youtube = () => {
  // const iframe = useRef(null);

  // useEffect(() => {
  //   function setIframeSrc() {
  //     setTimeout(function () {
  //       if (window.stop) {
  //         window.stop();
  //         iframe.innerHTML = `<h2>Faild to load content! please check your connection....</h2>`;
  //         iframe.style.border = '1px solid coral';
  //       } else {
  //         document.execCommand('Stop');
  //         iframe.innerHTML = `<h2>Faild to load content! please check your connection....</h2>`;
  //         iframe.style.border = '1px solid coral';
  //       }
  //     }, 5000);
  //   }
  //   setTimeout(setIframeSrc, 5000);
  // }, []);

  return (
    <div
      className={styles.youtube}
      // ref={(el) => (iframe = el)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '7px',
      }}
    >
      <iframe
        src="https://youtube.com/embed/HF1SgsoHE-g"
        width="300"
        height="300"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '20px',
        }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
