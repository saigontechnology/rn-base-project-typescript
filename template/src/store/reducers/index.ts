import {combineReducers} from '@reduxjs/toolkit'

// Reducer Imports
import app, {appInitialState} from './app'
import loading from './loading'
import user, {userInitialState} from './user'

// Reducer Export
export * from './app'
export * from './user'
import {persistReducer} from 'redux-persist'
import INITIAL_STATE from '../initialState'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: Object.keys(INITIAL_STATE),
}

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
}

export const InitialState = {
  user: userInitialState,
  app: appInitialState,
}

export default combineReducers({
  // Reducers
  user: persistReducer(userPersistConfig, user),
  app,
  loading,
})
