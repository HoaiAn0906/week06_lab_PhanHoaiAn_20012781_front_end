import { BaseResponse } from '@/types/ResponseTypes'

type Token = {
  token: string
  token_type: string
  expires_at: number
  user: Record<string, any>
}

type TokenResponse = BaseResponse<Token>

export type { Token, TokenResponse }
