import {combineReducers} from '@reduxjs/toolkit'
// Reducer Imports
import user from './user'
import app from './app'
import loading from './loading'
// Reducer Export
export * from './app'
export * from './user'

export default combineReducers({
  // Reducers
  user,
  app,
  loading,
})
