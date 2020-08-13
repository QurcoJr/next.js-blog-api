import Link from 'next/link';
import Layout from '../../components/Layout';
import { fetcher, baseURL } from '../../lib/myApi';
import useSWR from 'swr';

const BlogPage = ({ post, id }) => {
  const { data: postData } = useSWR(`${baseURL}/posts/${id}`, fetcher, {
    initialData: post
  });

  return (
    <Layout title={postData.title}>
      <div className="container mt-4 d-flex justify-content-center">
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title">{postData.title}</h2>
            <p className="card-text">{postData.body}</p>
            <Link href="/blog">
              <a>Go Back</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = (await fetcher(`${baseURL}/posts`)).map(
    post => `/blog/${post.id}`
  );

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { id } }) {
  const post = await fetcher(`${baseURL}/posts/${id}`);

  return {
    props: {
      post,
      id
    }
  };
}

export default BlogPage;
