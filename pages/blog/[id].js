import Link from 'next/link';
import Layout from '../../components/Layout';
import { getPosts, getPostData } from '../../lib/posts';

const BlogPage = ({ data }) => (
  <Layout title={data.title}>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card text-center">
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p className="card-text">{data.body}</p>
          <Link href="/blog">
            <a>Go Back</a>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export async function getStaticPaths() {
  const paths = (await getPosts()).map(post => `/blog/${post.id}`);

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostData(params.id);
  return {
    props: {
      data
    }
  };
}

export default BlogPage;
