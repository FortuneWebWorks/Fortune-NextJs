import Image from 'next/image';
import styles from '@/styles/Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.head_content_1}>
        <div className={styles.logo}>
          <Image
            src="http://localhost:3000/favicon.jpg"
            alt="logo"
            objectFit="cover"
            width="100"
            height="100"
          />
        </div>
        <span>fortune web works</span>
      </div>
      <div className={styles.head_content_2}>
        <span>Analysis</span>
        <span>Contact</span>
      </div>
    </header>
  );
}

export default Header;
