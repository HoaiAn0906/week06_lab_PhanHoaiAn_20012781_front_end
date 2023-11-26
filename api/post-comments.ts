import { BaseApi } from '@/api/base'

export class PostCommentsAPI extends BaseApi {
  createPostComment(data: any): Promise<any> {
    return this.post('/post-comments', data)
  }

  getPostCommentsByPostId(postId: number): Promise<any> {
    return this.get(`/post-comments/${postId}`)
  }
}
