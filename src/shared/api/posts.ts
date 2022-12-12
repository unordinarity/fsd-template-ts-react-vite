import { Post } from '../types/post';
import { ApiInstance } from './_api-instance';

export class PostsApi {
  static async getPostsList() {
    const response = await ApiInstance.get<Post[]>('/posts-list');
    return response.data;
  }
}
