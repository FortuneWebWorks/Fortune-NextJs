import style from '@/styles/Footer.module.scss';
import HatAnimation from './HatAnimation';
import styles from '@/styles/Header.module.scss';
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content_1}>
        <div className={`${styles.logo} ${style.logo}`}>
          <HatAnimation notEffect="true" />
        </div>
        <span>fortune web works</span>
      </div>
      <div className={style.footer_content_2}>
        <span className={style.footer_content_2_blog}>blog</span>
        <span>twitter</span>
        <span>upwork</span>
      </div>
    </footer>
  );
}

export default Footer;
