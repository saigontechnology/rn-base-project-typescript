import {AxiosError, AxiosResponse} from 'axios'
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

async function axiosAPI<S, Q = any>(params: IParams<Q>): Promise<AxiosResponse<S, Q>> {
  const {url, method, body, config} = params
  let data = body

  if (isObject(body)) {
    data = JSON.stringify(body)
  }
  return instance({
    url,
    method,
    data,
    headers: {...config},
  })
    .then((response: AxiosResponse) => ({...response.data, status: response.status}))
    .catch((error: AxiosError<S>) => ({error: error?.response?.data, status: error?.response?.status}))
}

export function getRequest<S, Q = any>(params: IParams<Q>): Promise<AxiosResponse<S, Q>> {
  const {url, config} = params
  return axiosAPI<S>({url, method: AxiosMethod.get, config})
}

export function postRequest<S, Q = any>(params: IParams<Q>): Promise<AxiosResponse<S, Q>> {
  const {url, body, config} = params
  return axiosAPI<S>({url, method: AxiosMethod.post, body, config})
}

export function postFormDataRequest<S, Q = any>(
  params: IParams<Q>,
): Promise<AxiosResponse<S, Q>> | IAxiosError {
  const {url, body, config} = params
  try {
    if (body?.constructor !== FormData) {
      throw new Error('Unrecognized FormData part')
    }

    const customConfig = {
      ...config,
      'Content-Type': 'multipart/form-data',
    }
    return axiosAPI<S>({url, method: AxiosMethod.post, body, config: customConfig})
  } catch (error: unknown) {
    const err = error as AxiosError<Error>
    return {error: err.response?.data.message || err.message}
  }
}

export function putRequest<S, Q = any>(params: IParams<Q>): Promise<AxiosResponse<S, Q>> {
  const {url, body, config} = params
  return axiosAPI<S>({url, method: AxiosMethod.put, body, config})
}

export function patchRequest<S, Q = any>(params: IParams<Q>): Promise<AxiosResponse<S, Q>> {
  const {url, body, config} = params
  return axiosAPI<S>({url, method: AxiosMethod.patch, body, config})
}

export function deleteRequest<S, Q = any>(params: IParams<Q>): Promise<AxiosResponse<S, Q>> {
  const {url, config} = params
  return axiosAPI<S>({url, method: AxiosMethod.delete, config})
}
