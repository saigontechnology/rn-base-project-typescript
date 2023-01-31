import {AxiosError, AxiosRequestHeaders, AxiosResponse} from 'axios'
import {IAxiosMethod, IAxiosError, IParams} from '../../constants/interface/services/axios'
import {isObject} from '../../utilities/utils'
import instance from './axios'

const AxiosMethod: IAxiosMethod = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH',
}

async function axiosAPI<T>({url, method, body, config}: IParams<T>): Promise<AxiosResponse<T>> {
  if (isObject(body)) {
    body = JSON.stringify(body)
  }
  return instance({
    url,
    method,
    data: body,
    headers: {...config},
  })
    .then((response: AxiosResponse) => {
      return {...response.data, status: response.status}
    })
    .catch((error: AxiosError<T>) => {
      return {error: error?.response?.data, status: error?.response?.status}
    })
}

export function getRequest<T>({url, config}: IParams<T>): Promise<AxiosResponse<T>> {
  return axiosAPI<T>({url, method: AxiosMethod.get, config})
}

export function postRequest<T>({url, body, config}: IParams<T>): Promise<AxiosResponse<T>> {
  return axiosAPI<T>({url, method: AxiosMethod.post, body, config})
}

export function postFormDataRequest<T>({
  url,
  body,
  config,
}: IParams<T>): Promise<AxiosResponse<T>> | IAxiosError {
  try {
    if (body?.constructor !== FormData) {
      throw new Error('Unrecognized FormData part')
    }
    const headers: AxiosRequestHeaders = {
      'content-type': 'multipart/form-data',
    }
    config = {
      ...config,
      ...headers,
    }
    return axiosAPI<T>({url, method: AxiosMethod.post, body, config})
  } catch (error: unknown) {
    const err = error as AxiosError<Error>
    return {error: err.response?.data.message || err.message}
  }
}

export function putRequest<T>({url, body, config}: IParams<T>): Promise<AxiosResponse<T>> {
  return axiosAPI<T>({url, method: AxiosMethod.put, body, config})
}

export function patchRequest<T>({url, body, config}: IParams<T>): Promise<AxiosResponse<T>> {
  return axiosAPI<T>({url, method: AxiosMethod.patch, body, config})
}

export function deleteRequest({url, config}: IParams) {
  return axiosAPI({url, method: AxiosMethod.delete, config})
}
