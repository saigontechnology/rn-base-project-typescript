import {combineReducers} from '@reduxjs/toolkit'

// Reducer Imports
import app from './app'
import loading from './loading'
import user from './user'

// Reducer Export
export * from './app'
export * from './user'

export default combineReducers({
  // Reducers
  user,
  app,
  loading,
})
