import { combineReducers } from 'redux'

import pastLaunchesReducer from './pastLaunches/reducer'
import upcomingLaunchesReducer from './upcomingLaunches/reducer'
import queryLaunchesReducer from './queryLaunches/reducer'
import launchReducer from './launch/reducer'

const rootReducer = combineReducers({
    pastLaunches: pastLaunchesReducer,
    upcomingLaunches: upcomingLaunchesReducer,
    queryLaunches: queryLaunchesReducer,
    launch: launchReducer,
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer
