import {
    FETCH_LAUNCH_REQUEST,
    FETCH_LAUNCH_FAILURE,
    FETCH_LAUNCH_SUCCESS
} from './actionTypes'

import {
    FetchLaunchRequest,
    FetchLaunchSuccess,
    FetchLaunchSuccessPayload,
    FetchLaunchFailure,
    FetchLaunchFailurePayload, FetchLaunchRequestPayload
} from './types'

export const fetchLaunchRequest = (
    payload: FetchLaunchRequestPayload
): FetchLaunchRequest => ({
    type: FETCH_LAUNCH_REQUEST,
    payload
})

export const fetchLaunchSuccess = (
    payload: FetchLaunchSuccessPayload
): FetchLaunchSuccess => ({
    type: FETCH_LAUNCH_SUCCESS,
    payload,
})

export const fetchLaunchFailure = (
    payload: FetchLaunchFailurePayload
): FetchLaunchFailure => ({
    type: FETCH_LAUNCH_FAILURE,
    payload,
})
