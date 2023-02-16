import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
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
export const useAppDispatch: () => AppDispatch = useDispatch
export {store}
