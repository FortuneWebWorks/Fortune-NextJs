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
          <span>blog</span>
        </Link>
        <span>
          <a
            target="_blank"
            href="https://twitter.com/fortunewebworks"
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </span>
        <span>
          <a
            target="_blank"
            href="http://www.upwork.com/agencies/~01d95aa9c29bb38c2c"
            rel="noopener noreferrer"
          >
            upwork
          </a>
        </span>
      </div>
    </header>
  );
}

export default Header;
