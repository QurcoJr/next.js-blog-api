import Link from 'next/link';

import Layout from '../components/Layout';

const HomePage = () => (
  <Layout title="Blog Api">
    <div>
      <img src="/back.jpg" alt="blog" />
      <div className="cntr-text">
        <span>See our Blogs</span>
        <Link href="/blog">
          <a className="btn btn-primary btn-lg">See Blogs</a>
        </Link>
      </div>
    </div>
    <style jsx>
      {`
        img {
          width: 100%;
          max-height: 94vh;
          opacity: 0.9;
        }

        .cntr-text {
          position: absolute;
          top: 50%;
          left: 50%;
          color: white;
          font-size: 5rem;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .cntr-text span {
          display: block;
          margin-bottom: -40px;
          text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
        }
      `}
    </style>
  </Layout>
);

export default HomePage;
