import {AxiosError, AxiosRequestHeaders, AxiosResponse} from 'axios'
import {IAxiosMethod, IError} from '../../constants/interface/services/axios'
import {isObject} from '../../utilities/utils'
import instance from './axios'

const AxiosMethod: IAxiosMethod = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH',
}

async function axiosAPI<T>({
  url,
  method,
  data,
  config,
}: {
  url: string
  method: string
  data?: T | string
  config?: AxiosRequestHeaders
}): Promise<AxiosResponse<T>> {
  if (isObject(data)) {
    data = JSON.stringify(data)
  }
  return instance({
    url,
    method,
    data,
    headers: {...config},
  })
    .then((response: AxiosResponse) => {
      return {...response.data, status: response.status}
    })
    .catch((error: AxiosError<T>) => {
      return {error: error?.response?.data, status: error?.response?.status}
    })
}

export function getRequest<T>(url: string, config?: AxiosRequestHeaders): Promise<AxiosResponse<T>> {
  return axiosAPI<T>({url, method: AxiosMethod.get, config})
}

export function postRequest<T>(
  url: string,
  data: T,
  config?: AxiosRequestHeaders,
): Promise<AxiosResponse<T>> {
  return axiosAPI<T>({url, method: AxiosMethod.post, data, config})
}

export function postFormDataRequest<T>(
  url: string,
  data: T,
  config: AxiosRequestHeaders,
): Promise<AxiosResponse<T>> | IError {
  try {
    if (data?.constructor !== FormData) {
      throw new Error('Unrecognized FormData part')
    }
    const headers: AxiosRequestHeaders = {
      'content-type': 'multipart/form-data',
    }
    config = {
      ...config,
      ...headers,
    }
    return axiosAPI<T>({url, method: AxiosMethod.post, data, config})
  } catch (error: unknown) {
    const err = error as AxiosError<Error>
    return {error: err.response?.data.message || err.message}
  }
}

export function putRequest<T>(url: string, data: T, config?: AxiosRequestHeaders): Promise<AxiosResponse<T>> {
  return axiosAPI<T>({url, method: AxiosMethod.put, data, config})
}

export function patchRequest<T>(url: string, data: T, config?: AxiosRequestHeaders) {
  return axiosAPI<T>({url, method: AxiosMethod.patch, data, config})
}

export function deleteRequest(url: string, config?: AxiosRequestHeaders) {
  return axiosAPI({url, method: AxiosMethod.delete, config})
}
