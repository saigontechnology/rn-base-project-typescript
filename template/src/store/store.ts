import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import {useDispatch, useSelector as useReduxSelector} from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const middlewareEnhancer = applyMiddleware(sagaMiddleware)

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false, thunk: false}),
  enhancers: [middlewareEnhancer],
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type AppState = typeof store.getState
export type RootState = ReturnType<AppState>
export const useAppDispatch: () => AppDispatch = useDispatch

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
export {store}
