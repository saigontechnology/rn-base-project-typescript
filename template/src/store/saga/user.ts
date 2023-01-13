import {takeLatest, delay, put} from 'redux-saga/effects'
import {appActions, userActions} from '../reducers'
import RouteKey from '../../navigation/RouteKey'
import Toast from '../../components/Toast'
import {IError} from '../../constants/interface/common/CommonInterface'

function* userLoginSaga(action): IterableIterator<void> {
  try {
    yield put(appActions.setShowGlobalIndicator(true))
    // TODO: login login
    yield delay(1000)
    yield put(appActions.setAppStack(RouteKey.MainStack))
  } catch (e: IError | any) {
    Toast.error(e.message)
    yield put(appActions.setAppStack(RouteKey.AuthStack))
  } finally {
    yield put(appActions.setShowGlobalIndicator(false))
  }
}

function* userSignUpSaga(action): IterableIterator<void> {
  try {
    yield put(appActions.setShowGlobalIndicator(true))
  } catch (e: IError | any) {
    Toast.error(e.message)
  } finally {
    yield put(appActions.setShowGlobalIndicator(false))
  }
}

function* userLogout() {
  // try {} catch (e) {}
}

export default [
  takeLatest(userActions.userLogin.type, userLoginSaga),
  takeLatest(userActions.userSignUp.type, userSignUpSaga),
  takeLatest(userActions.logout.type, userLogout),
]
