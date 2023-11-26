import { AxiosInstance } from 'axios'
import { AuthAPI } from '@/api/auth'
import { PostsAPI } from '@/api/posts'
import { PostCommentsAPI } from "@/api/post-comments"

export class Api<T extends unknown> {
  public readonly auth: AuthAPI
  public readonly posts: PostsAPI
  public readonly postComments: PostCommentsAPI

  constructor(axios: AxiosInstance) {
    this.auth = new AuthAPI(axios)
    this.posts = new PostsAPI(axios)
    this.postComments = new PostCommentsAPI(axios)
  }
}
