import {all, put, select, takeLatest } from 'redux-saga/effects'

import {
    addQueryLaunchFailure,
    addQueryLaunchSuccess,
    fetchQueryLaunchesSuccess
} from './actions'
import {ADD_QUERY_LAUNCH_REQUEST, FETCH_QUERY_LAUNCHES_REQUEST} from './actionTypes'
import {toast} from 'react-toastify'
import {QueryLaunchesState} from './types'

const getLaunches = (state: QueryLaunchesState) => state.launches

function* fetchQueryLaunchesSaga() {
    yield put(
        fetchQueryLaunchesSuccess({
            launches: [],
        })
    )
}

function* addQueryLaunchSaga(action: any) {
    const launches = yield select(getLaunches)
    if(launches && launches.includes(action.payload)){
        yield put(addQueryLaunchFailure({error: 'Ошибка'}))
        toast.error('Ошибка!')
    }else{
        yield put(addQueryLaunchSuccess(action.payload))
        toast.success(`${action.payload.name} полет забронирован!`)
    }
}


function* queryLaunchesSaga() {
    yield all([takeLatest(FETCH_QUERY_LAUNCHES_REQUEST, fetchQueryLaunchesSaga)])
    yield all([takeLatest(ADD_QUERY_LAUNCH_REQUEST, addQueryLaunchSaga)])
}

export default queryLaunchesSaga
