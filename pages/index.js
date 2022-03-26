import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Hello</h1>
        </div>
      </div>
    </Layout>
  );
}
