import { combineReducers } from '@reduxjs/toolkit'
import app from './app'
import loading from './loading'
import user from './user'
export * from './app'
export * from './user'

export default combineReducers({
  user,
  app,
  loading,
})
