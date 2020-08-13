import Link from 'next/link';
import Layout from '../../components/Layout';
import { fetcher, baseURL } from '../../lib/myApi';
import useSWR from 'swr';

const UserPosts = ({ posts, user, id }) => {
  const { data: postsData } = useSWR(`${baseURL}/posts?userId=${id}`, fetcher, {
    initialData: posts
  });

  const { data: userData } = useSWR(`${baseURL}/users/${id}`, fetcher, {
    initialData: user
  });

  return (
    <Layout title={userData.username}>
      <div className="container mt-4 d-flex flex-column justify-content-center mb-3">
        <h1>{userData.username}`s posts:</h1>
        {postsData.map(post => (
          <div key={post.id} className="card text-center mt-3">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ))}
        <Link href="/blog">
          <a>Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = (await fetcher(`${baseURL}/users`)).map(
    user => `/user/${user.id}`
  );

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { id } }) {
  const posts = await fetcher(`${baseURL}/posts?userId=${id}`);
  const user = await fetcher(`${baseURL}/users/${id}`);

  return {
    props: {
      posts,
      user,
      id
    }
  };
}

export default UserPosts;
