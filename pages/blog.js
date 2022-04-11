import Image from 'next/image';
import Router from 'next/router';
import styles from '@/styles/Blog.module.scss';
import headStyle from '@/styles/Header.module.scss';
import footerStyle from '@/styles/Footer.module.scss';

function blog() {
  const imageClick = () => {
    Router.push('/');
  };

  return (
    <section className={styles.blog_body}>
      <header className={headStyle.header}>
        <div className={headStyle.head_content_1} style={{ height: '3rem' }}>
          <div className={headStyle.logo}>
            <Image
              src="http://localhost:3000/favicon.jpg"
              alt="logo"
              objectFit="cover"
              width="100"
              height="100"
              onClick={imageClick}
            />
          </div>
        </div>
        <div
          className="head-content-2"
          style={{ margin: 'auto', alignItems: 'center' }}
        >
          <span
            style={{
              color: '#ff8d4f',
              fontWeight: 'bold',
              fontSize: '1.4rem',
              fontFamily: 'Cubano',
            }}
          >
            THE BLOG
          </span>
        </div>
      </header>

      <div className={styles.blog_post}>
        <h2>
          THE COMPLETE TUTORIAL OF HOW TO BE FUCKING AMAZING IN ALL OF THE
          UNIVERSE
        </h2>
        <div className={styles.blog_post_info}>
          <span className={styles.dude}>
            <span className={styles.point_circle}>🟠</span> one of us
          </span>
          <span className={styles.date}>2022 28 2</span>
        </div>
        <p className={styles.blog_post_comment}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam harum
          repellendus culpa autem alias similique ipsam cum modi voluptates,
          molestiae, qui omnis, fuga sequi assumenda consectetur facilis.
          Excepturi, cumque dolorum.
        </p>
      </div>
      <div className={styles.blog_post}>
        <h2>
          THE COMPLETE TUTORIAL OF HOW TO BE FUCKING AMAZING IN ALL OF THE
          UNIVERSE
        </h2>
        <div className={styles.blog_post_info}>
          <span className={styles.dude}>
            <span className={styles.point_circle}>🟠</span> one of us
          </span>{' '}
          <span className={styles.date}>2022 28 2</span>
        </div>
        <p className={styles.blog_post_comment}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam harum
          repellendus culpa autem alias similique ipsam cum modi voluptates,
          molestiae, qui omnis, fuga sequi assumenda consectetur facilis.
          Excepturi, cumque dolorum.
        </p>
      </div>
      <div className={styles.blog_post}>
        <h2>
          THE COMPLETE TUTORIAL OF HOW TO BE FUCKING AMAZING IN ALL OF THE
          UNIVERSE
        </h2>
        <div className={styles.blog_post_info}>
          <span className={styles.dude}>
            <span className={styles.point_circle}>🟠</span> one of us
          </span>{' '}
          <span className={styles.date}>2022 28 2</span>
        </div>
        <p className={styles.blog_post_comment}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam harum
          repellendus culpa autem alias similique ipsam cum modi voluptates,
          molestiae, qui omnis, fuga sequi assumenda consectetur facilis.
          Excepturi, cumque dolorum.
        </p>
      </div>
      <div className={styles.blog_post}>
        <h2>
          THE COMPLETE TUTORIAL OF HOW TO BE FUCKING AMAZING IN ALL OF THE
          UNIVERSE
        </h2>
        <div className={styles.blog_post_info}>
          <span className={styles.dude}>
            <span className={styles.point_circle}>🟠</span> one of us
          </span>{' '}
          <span className={styles.date}>2022 28 2</span>
        </div>
        <p className={styles.blog_post_comment}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam harum
          repellendus culpa autem alias similique ipsam cum modi voluptates,
          molestiae, qui omnis, fuga sequi assumenda consectetur facilis.
          Excepturi, cumque dolorum.
        </p>
      </div>

      <footer className={footerStyle.footer} style={{ height: '4rem' }}>
        <div
          className={footerStyle.footer_content_1}
          style={{ height: '3rem' }}
        >
          <div className={footerStyle.logo} style={{ position: 'relative' }}>
            <Image
              src="http://localhost:3000/favicon.jpg"
              alt="logo"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
        <div className={footerStyle.footer_content_2}>
          <span>blog</span>
          <span>twitter</span>
          <span>upwork</span>
        </div>
      </footer>
    </section>
  );
}

export default blog;
