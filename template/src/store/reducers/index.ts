import {combineReducers} from '@reduxjs/toolkit'
import user, {userInitialState} from './user'
import app, {appInitialState} from './app'
import loading from './loading'
import {persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

export * from './app'
export * from './user'

export const InitialState = {
  user: userInitialState,
  app: appInitialState,
}

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: Object.keys(InitialState),
}

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
}

export default combineReducers({
  user: persistReducer(userPersistConfig, user),
  app,
  loading,
})
