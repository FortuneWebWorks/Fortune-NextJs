import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import HatAnimation from './HatAnimation';
import styles from '@/styles/Header.module.scss';

function Header() {
  const imageClick = () => {
    Router.push('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.head_content_1}>
        <div className={styles.logo}>
          <HatAnimation />
        </div>
        <span>fortune web works</span>
      </div>
      <div className={styles.head_content_2}>
        <Link href="/blog" passHref>
          <span>Analysis</span>
        </Link>
        <Link href="/form" passHref>
          <span>Contact</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
