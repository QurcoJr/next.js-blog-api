import Head from 'next/head';

import Navbar from './Navbar';

const Layout = props => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <title>{props.title}</title>
    </Head>
    <Navbar />
    <main>{props.children}</main>
  </div>
);

export default Layout;
