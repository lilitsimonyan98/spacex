import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getLoading = (state: AppState) => state.pastLaunches.loading

const getPastLaunches = (state: AppState) => state.pastLaunches.launches

const getError = (state: AppState) => state.pastLaunches.error

export const getPastLaunchesSelector = createSelector(getPastLaunches, (pastLaunches) => pastLaunches)

export const getLoadingSelector = createSelector(
    getLoading,
    (loading) => loading
)

export const getErrorSelector = createSelector(getError, (error) => error)
