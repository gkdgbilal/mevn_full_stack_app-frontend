import axios from 'axios';

const url = '/api/post';

export default class API {
  // to get all the posts from the server
  static async getAllPosts() {
    const res = await axios.get(url);
    return res.data;
  }
  // to get single post by ID from the server
  static async getPostByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }
  // to insert post into db
  static async addPost(post) {
    const res = await axios.post(url, post);
    return res.data;
  }
  // to update post into db
  static async updatePost(id, post) {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  }
  // to delete post by ID from db
  static async deletePost(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
