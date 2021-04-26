import { all, fork } from 'redux-saga/effects'

import pastLaunchesSaga from './pastLaunches/sagas'
import upcomingLaunchesSaga from './upcomingLaunches/sagas'
import queryLaunchesSaga from './queryLaunches/sagas'
import launchSaga from './launch/sagas'

export function* rootSaga() {
    yield all([fork(pastLaunchesSaga)])
    yield all([fork(upcomingLaunchesSaga)])
    yield all([fork(queryLaunchesSaga)])
    yield all([fork(launchSaga)])
}
