import { AnyAction } from 'redux'
import { call, put, takeLatest } from 'redux-saga/effects'
import RouteKey from '../../navigation/RouteKey'
import { getData } from '../../utilities/storage'
import { appActions } from '../reducers'

function* getAppSettingSaga(): IterableIterator<AnyAction> {
  try {
    const token = yield call(getData, 'token')
    if (!token) {
      throw new Error('Token does not existed!')
    }
  } catch (e) {
    yield put(appActions.setAppStack(RouteKey.AuthStack))
  } finally {
  }
}

export default [takeLatest(appActions.getSettings().type, getAppSettingSaga)]
