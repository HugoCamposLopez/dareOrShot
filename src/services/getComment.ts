import axios from 'axios';

export const getPost = async (postNumber: string) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
}