import {storage} from './index'

export const setObject = (key: string, data: object) => {
  storage.set(key, JSON.stringify(data))
}

export const getObject = (key: string) => {
  try {
    return JSON.parse(storage.getString(key) ?? '')
  } catch (err) {
    console.log('Get object error', err)
  }
}

//includes string, number, boolean
export const setData = (key: string, data: string | number | boolean) => {
  storage.set(key, data)
}

export const getString = (key: string) => storage.getString(key)

export const getNumber = (key: string) => storage.getNumber(key)

export const getBoolean = (key: string) => storage.getBoolean(key)

export const getAllKeys = () => storage.getAllKeys()

export const clearAllKeys = () => {
  storage.clearAll()
}

export const deleteByKey = (key: string) => {
  storage.delete(key)
}
