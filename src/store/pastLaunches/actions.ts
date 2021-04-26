import {
    FETCH_PAST_LAUNCHES_REQUEST,
    FETCH_PAST_LAUNCHES_SUCCESS,
    FETCH_PAST_LAUNCHES_FAILURE,
} from './actionTypes'
import {
    FetchPastLaunchesRequest,
    FetchPastLaunchesSuccessPayload,
    FetchPastLaunchesSuccess,
    FetchPastLaunchesFailurePayload, FetchPastLaunchesFailure,
} from './types'

export const fetchPastLaunchesRequest = (): FetchPastLaunchesRequest => ({
    type: FETCH_PAST_LAUNCHES_REQUEST,
})

export const fetchPastLaunchesSuccess = (
    payload: FetchPastLaunchesSuccessPayload
): FetchPastLaunchesSuccess => ({
    type: FETCH_PAST_LAUNCHES_SUCCESS,
    payload,
})

export const fetchPastLaunchesFailure = (
    payload: FetchPastLaunchesFailurePayload
): FetchPastLaunchesFailure => ({
    type: FETCH_PAST_LAUNCHES_FAILURE,
    payload,
})
