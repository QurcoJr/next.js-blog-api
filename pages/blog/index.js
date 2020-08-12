import Link from 'next/link';
import { useState } from 'react';
import Pagination from 'react-js-pagination';
import { getPosts } from '../../lib/posts';

import Layout from '../../components/Layout';

const BlogsPage = ({ posts }) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  return (
    <Layout title="Blogs">
      <div className="container mt-4">
        <h1>Blogs</h1>
        <div>
          {posts
            .slice((activePage - 1) * 10, (activePage - 1) * 10 + 10)
            .map(post => (
              <div className="card mt-4" key={post.id}>
                <div className="card-body">
                  <h4 className="card-title">{post.title}</h4>
                  <p className="card-text" style={{ opacity: '0.8' }}>
                    {post.body.split(' ').slice(0, 8).join(' ') + '...'}
                  </p>
                  <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                    <a className="btn btn-primary">See Full Post</a>
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="pag d-flex justify-content-center mt-2">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={100}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts
    }
  };
}

export default BlogsPage;
