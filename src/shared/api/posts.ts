import { Post } from '../types/post';
import { ApiInstance } from './_api-instance';

export class PostsApi {
  static async getAllPosts() {
    const response = await ApiInstance.get<Post[]>('/posts');
    return response.data;
  }
}
