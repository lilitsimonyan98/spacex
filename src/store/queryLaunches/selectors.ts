import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getLoading = (state: AppState) => state.queryLaunches.loading

const getQueryLaunches = (state: AppState) => state.queryLaunches.launches

const getError = (state: AppState) => state.queryLaunches.error

export const getQueryLaunchesSelector = createSelector(getQueryLaunches, (launches) => launches)

export const getLoadingSelector = createSelector(
    getLoading,
    (loading) => loading
)

export const getErrorSelector = createSelector(getError, (error) => error)
