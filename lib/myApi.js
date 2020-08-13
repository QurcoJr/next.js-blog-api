export const fetcher = (...args) => fetch(...args).then(res => res.json());
export const baseURL = 'https://jsonplaceholder.typicode.com';