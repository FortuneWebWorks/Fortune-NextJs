import Image from 'next/image';
import styles from '@/styles/Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className="head-content-1">
        <Image
          src="http://localhost:3000/favicon.jpg"
          alt="Logo"
          width={30}
          height={30}
          className={styles.logo}
        />
        <span>fortune web works</span>
      </div>
      <div className={styles.head_content_2}>
        <span>blog</span>
        <span>twitter</span>
        <span>upwork</span>
      </div>
    </header>
  );
}

export default Header;
