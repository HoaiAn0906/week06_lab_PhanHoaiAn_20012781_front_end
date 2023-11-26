import { BaseApi } from '@/api/base'

export class PostsAPI extends BaseApi {
  getPosts(): Promise<any> {
    return this.get('/posts')
  }

  getPost(id: number): Promise<any> {
    return this.get(`/posts/${id}`)
  }

  createPost(data: any): Promise<any> {
    return this.post('/posts', data)
  }

  deletePost(id: number): Promise<any> {
    return this.delete(`/posts/${id}`)
  }
}
