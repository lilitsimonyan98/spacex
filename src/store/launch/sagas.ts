import axios from 'axios'
import {all, call, put, takeLatest} from 'redux-saga/effects'

import {fetchLaunchFailure, fetchLaunchSuccess} from './actions'
import {FETCH_LAUNCH_REQUEST} from './actionTypes'

async function getLaunch (id: string) {
    return await axios.get<any>(`https://api.spacexdata.com/v4/launches/${id}`)
}

function* fetchLaunchSaga(action: any) {
    try {
        const response = yield call(getLaunch, action.payload.id)
        yield put(
            fetchLaunchSuccess({
                launch: response.data,
            })
        )
    } catch (e) {
        yield put(
            fetchLaunchFailure({
                error: e.message,
            })
        )
    }
}

function* LaunchesSaga() {
    yield all([takeLatest(FETCH_LAUNCH_REQUEST, fetchLaunchSaga)])
}

export default LaunchesSaga
