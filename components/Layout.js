import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, title, desc }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={desc} />
        <link rel="shortcut icon" href="favicon.jpg" type="image/x-icon" />
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
