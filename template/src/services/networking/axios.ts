import {AnyAction, Store} from '@reduxjs/toolkit'
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios'
import Config from 'react-native-config'
import {AXIOS_TIMEOUT, RESPONSE_CODE, TOKEN, TOKEN_TYPE} from '../../constants'
import {userActions} from '../../store/reducers'
import {RootState} from '../../store/store'
import {getData, setData, clearAllData} from '../../utilities/storage'
import {AUTH_API} from '../api/api'

let store: Store<RootState, AnyAction>

const instance = axios.create({
  baseURL: Config.API_URL,
  timeout: AXIOS_TIMEOUT,
  withCredentials: false,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  data: {},
})

export const injectStore = (_store: Store<RootState, AnyAction>) => {
  store = _store
}

export function setBaseURL(baseURL: string) {
  instance.defaults.baseURL = baseURL
}

export function setToken(token: string, type: string) {
  switch (type) {
    case TOKEN_TYPE.Bearer:
      instance.defaults.headers.common.Authorization = `Bearer ${token}`
      break
    default: {
      instance.defaults.headers.common.Authorization = token
    }
  }
}

const logout = () => {
  store.dispatch(userActions.logout())
}

const handleRefreshToken = async (
  refreshToken: string,
  originalConfig: AxiosRequestConfig,
): Promise<AxiosRequestConfig | void> => {
  // Call RefreshToken API
  return instance
    .post(AUTH_API.refreshToken, refreshToken)
    .then((response: AxiosResponse) => {
      // Save new Token and RefreshToken
      setToken(response?.data?.token, TOKEN_TYPE.Bearer)
      setData(TOKEN.token, response?.data?.token)
      setData(TOKEN.refreshToken, response?.data?.refreshToken)
      return instance(originalConfig)
    })
    .catch(() => {
      // Remove all keys and back to login screen to get new token
      clearAllData()
      logout()
    })
}

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Do something before request is sent
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  },
)

const interceptor = instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Do something with response data
    return response
  },
  async (error: AxiosError) => {
    const originalConfig = error?.config
    const token = await getData<string>(TOKEN.token)
    const refreshToken = await getData<string>(TOKEN.refreshToken)
    const isTokenExpired = token && RESPONSE_CODE.unauthorized.includes(error?.response?.status as number)

    if (isTokenExpired) {
      if (refreshToken) {
        // Eject the interceptor so it doesn't loop in case
        instance.interceptors.response.eject(interceptor)

        // handle refresh token when the token has expired
        return handleRefreshToken(refreshToken, originalConfig)
      } else {
        // Do something when expired token
      }
    }

    return Promise.reject(error)
  },
)

export default instance
