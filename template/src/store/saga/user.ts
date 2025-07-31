import {AnyAction} from 'redux'
import {delay, put, takeLatest} from 'redux-saga/effects'
import {showToast} from '../../components'
import RouteKey from '../../navigation/RouteKey'
import {appActions, userActions} from '../reducers'

function* userLoginSaga(): IterableIterator<AnyAction> {
  try {
    yield put(appActions.setShowGlobalIndicator(true))
    // TODO: login login
    yield delay(1000)
    yield put(appActions.setAppStack(RouteKey.HomeStack))
  } catch (e) {
    if (e instanceof Error) {
      showToast({type: 'ERROR', message: e.message})
    }
    yield put(appActions.setAppStack(RouteKey.AuthStack))
  } finally {
    yield put(appActions.setShowGlobalIndicator(false))
  }
}

function* userSignUpSaga(): IterableIterator<AnyAction> {
  try {
    yield put(appActions.setShowGlobalIndicator(true))
  } catch (e) {
    if (e instanceof Error) {
      showToast({type: 'ERROR', message: e.message})
    }
  } finally {
    yield put(appActions.setShowGlobalIndicator(false))
  }
}

function* userLogout() {
  // TODO: add logout function
}

export default [
  takeLatest(userActions.userLogin.type, userLoginSaga),
  takeLatest(userActions.userSignUp.type, userSignUpSaga),
  takeLatest(userActions.logout.type, userLogout),
]
