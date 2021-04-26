import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { fetchPastLaunchesFailure, fetchPastLaunchesSuccess } from './actions'
import { FETCH_PAST_LAUNCHES_REQUEST } from './actionTypes'

const getPastLaunches = () =>
    axios.get<any[]>('https://api.spacexdata.com/v4/launches/past')

function* fetchPastLaunchesSaga() {
    try {
        const response = yield call(getPastLaunches)
        yield put(
            fetchPastLaunchesSuccess({
                launches: response.data,
            })
        )
    } catch (e) {
        yield put(
            fetchPastLaunchesFailure({
                error: e.message,
            })
        )
    }
}

function* pastLaunchesSaga() {
    yield all([takeLatest(FETCH_PAST_LAUNCHES_REQUEST, fetchPastLaunchesSaga)])
}

export default pastLaunchesSaga
