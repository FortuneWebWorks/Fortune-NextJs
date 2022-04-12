import Image from 'next/image';
import style from '@/styles/Footer.module.scss';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content_1}>
        <Image
          src="http://localhost:3000/favicon.jpg"
          alt="logo"
          className={style.logo}
          // layout="fill"
          objectFit="cover"
          width="60"
          height="60"
        />
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
