import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getLoading = (state: AppState) => state.launch.loading

const getLaunch = (state: AppState) => state.launch.launch

const getError = (state: AppState) => state.launch.error

export const getLaunchSelector = createSelector(getLaunch, (launch) => launch)

export const getLoadingSelector = createSelector(
    getLoading,
    (loading) => loading
)

export const getErrorSelector = createSelector(getError, (error) => error)
