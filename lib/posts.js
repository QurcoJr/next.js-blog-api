const posts = fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
  res.json()
);

export async function getPosts() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const posts = await res.json();

  return await posts;
}

// export async function getPostIds() {
//   return await posts.map(post => ({ params: { id: post.id } }));
// }

export async function getPostData(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  return await (await fetch(url)).json();
}
