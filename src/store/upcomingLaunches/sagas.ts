import axios from 'axios'
import {all, call, put, takeLatest, select} from 'redux-saga/effects'
import { toast } from 'react-toastify'
import {
    addUpcomingLaunchFailure,
    addUpcomingLaunchSuccess,
    fetchUpcomingLaunchesFailure,
    fetchUpcomingLaunchesSuccess
} from './actions'
import { ADD_UPCOMING_LAUNCH_REQUEST, FETCH_UPCOMING_LAUNCHES_REQUEST} from './actionTypes'
import {UpcomingLaunchesState} from './types'

const getUpcomingLaunches = () =>
    axios.get<any[]>('https://api.spacexdata.com/v4/launches/upcoming')

const getLaunches = (state: UpcomingLaunchesState) => state.launches

function* fetchUpcomingLaunchesSaga() {
    try {
        const response = yield call(getUpcomingLaunches)
        yield put(
            fetchUpcomingLaunchesSuccess({
                launches: response.data,
            })
        )
    } catch (e) {
        yield put(
            fetchUpcomingLaunchesFailure({
                error: e.message,
            })
        )
    }
}

function* addUpcomingLaunchSaga(action: any) {
    const launches = yield select(getLaunches)
    if(launches && launches.includes(action.payload)){
        yield put(addUpcomingLaunchFailure({error: 'Ошибка'}))
        toast.error('Ошибка!')
    }else{
        yield put(addUpcomingLaunchSuccess(action.payload))
        toast.error(`${action.payload.name} полет отменен!`)
    }
}

function* upcomingLaunchesSaga() {
    yield all([takeLatest(FETCH_UPCOMING_LAUNCHES_REQUEST, fetchUpcomingLaunchesSaga)])
    yield all([takeLatest(ADD_UPCOMING_LAUNCH_REQUEST, addUpcomingLaunchSaga)])
}

export default upcomingLaunchesSaga
