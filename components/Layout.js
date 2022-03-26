import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, title, desc }) {
  return (
    <div>
      <Head>
        <meta name="description" content={desc} />
        <link rel="shortcut icon" href="favicon.jpg" type="image/x-icon" />
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Home',
  desc: 'portfolio, fortune-web-works',
};

export default Layout;
