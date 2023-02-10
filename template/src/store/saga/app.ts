import {takeLatest, call, put} from 'redux-saga/effects'
import {appActions} from '../reducers'
import RouteKey from '../../navigation/RouteKey'
import {getString} from '../../services/mmkv/storage'
import {TOKEN} from '../../constants'

function* getAppSettingSaga(): IterableIterator<void> {
  try {
    const token = yield call(getString, TOKEN.token)
    if (!token) {
      throw new Error('Token does not existed!')
    }
  } catch (e) {
    yield put(appActions.setAppStack(RouteKey.AuthStack))
  } finally {
  }
}

export default [takeLatest(appActions.getSettings.type, getAppSettingSaga)]
