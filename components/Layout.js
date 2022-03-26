import Head from 'next/head';

function Layout({ children, title, desc }) {
  return (
    <div>
      <Head>
        <meta name="description" content={desc} />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: 'Home',
  desc: 'portfolio, fortune-web-works',
};

export default Layout;
