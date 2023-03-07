import {combineReducers} from '@reduxjs/toolkit'
import app from './app'
import loading from './loading'
import user from './user'
export * from './app'
export * from './user'
import {persistReducer} from 'redux-persist'
import {MMKVStorage} from '../../services/mmkv'
import INITIAL_STATE from '../initialState'

export const persistConfig = {
  key: 'root',
  storage: MMKVStorage,
  blacklist: Object.keys(INITIAL_STATE),
}

const userPersistConfig = {
  key: 'user',
  storage: MMKVStorage,
}

export default combineReducers({
  user: persistReducer(userPersistConfig, user),
  app,
  loading,
})
