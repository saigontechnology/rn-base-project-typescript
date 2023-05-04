import {IResponseCode, IToken, ITokenType} from './interface/services/axios'

export const TOKEN: IToken = {
  token: 'TOKEN_KEY',
  refreshToken: 'REFRESH_TOKEN_KEY',
}

export const RESPONSE_CODE: IResponseCode = {
  success: [200, 201],
  unauthorized: [401, 403],
}

export const TOKEN_TYPE: ITokenType = {
  Bearer: 'Bearer',
  Basic: 'Basic',
}

export const AXIOS_TIMEOUT = 6000
