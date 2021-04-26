import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getUpcomingLoading = (state: AppState) => state.upcomingLaunches.loading

const getUpcomingLaunches = (state: AppState) => state.upcomingLaunches.launches

const getError = (state: AppState) => state.upcomingLaunches.error

export const getUpcomingLaunchesSelector = createSelector(getUpcomingLaunches, (UpcomingLaunches) => UpcomingLaunches)

export const getUpcomingLoadingSelector = createSelector(
    getUpcomingLoading,
    (loading) => loading
)

export const getErrorSelector = createSelector(getError, (error) => error)
