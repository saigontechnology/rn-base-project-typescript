import {MMKV} from 'react-native-mmkv'

export const storage = new MMKV()

export const MMKVStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value)
    //this required by library used for redux-persist https://github.com/mrousavy/react-native-mmkv/blob/master/docs/WRAPPER_REDUX.md
    return Promise.resolve(true)
  },
  getItem: (key: string) => {
    const value = storage.getString(key)
    return Promise.resolve(value)
  },
  removeItem: (key: string) => {
    storage.delete(key)
    return Promise.resolve()
  },
}
