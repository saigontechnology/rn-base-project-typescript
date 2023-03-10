import {AnyAction} from 'redux'
import {call, put, takeLatest} from 'redux-saga/effects'
import RouteKey from '../../navigation/RouteKey'
import {appActions} from '../reducers'
import {getString} from '../../services/mmkv/storage'
import {TOKEN} from '../../constants'

function* getAppSettingSaga(): IterableIterator<AnyAction> {
  try {
    const token = yield call(getString, TOKEN.token)
    if (!token) {
      throw new Error('Token does not existed!')
    }
  } catch (e) {
    yield put(appActions.setAppStack(RouteKey.AuthStack))
  }
}

export default [takeLatest(appActions.getSettings.type, getAppSettingSaga)]
