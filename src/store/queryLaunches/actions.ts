import {
    FETCH_QUERY_LAUNCHES_REQUEST,
    FETCH_QUERY_LAUNCHES_FAILURE,
    FETCH_QUERY_LAUNCHES_SUCCESS,
    DELETE_QUERY_LAUNCH,
    ADD_QUERY_LAUNCH_SUCCESS,
    ADD_QUERY_LAUNCH_FAILURE, ADD_QUERY_LAUNCH_REQUEST,
} from './actionTypes'

import {
    FetchQueryLaunchesRequest,
    FetchQueryLaunchesSuccess,
    FetchQueryLaunchesSuccessPayload,
    FetchQueryLaunchesFailure,
    FetchQueryLaunchesFailurePayload,
    DeleteQueryLaunchPayload,
    DeleteQueryLaunch,
    AddQueryLaunchRequestPayload,
    AddQueryLaunchSuccess,
    AddQueryLaunchFailurePayload,
    AddQueryLaunchFailure, AddQueryLaunchRequest,
} from './types'

export const fetchQueryLaunchesRequest = (): FetchQueryLaunchesRequest => ({
    type: FETCH_QUERY_LAUNCHES_REQUEST,
})

export const deleteQueryLaunch = (payload: DeleteQueryLaunchPayload): DeleteQueryLaunch => ({
    type: DELETE_QUERY_LAUNCH,
    payload,
})

export const fetchQueryLaunchesSuccess = (
    payload: FetchQueryLaunchesSuccessPayload
): FetchQueryLaunchesSuccess => ({
    type: FETCH_QUERY_LAUNCHES_SUCCESS,
    payload,
})

export const fetchQueryLaunchesFailure = (
    payload: FetchQueryLaunchesFailurePayload
): FetchQueryLaunchesFailure => ({
    type: FETCH_QUERY_LAUNCHES_FAILURE,
    payload,
})
export const addQueryLaunchSuccess = (
    payload: AddQueryLaunchRequestPayload
): AddQueryLaunchSuccess => ({
    type: ADD_QUERY_LAUNCH_SUCCESS,
    payload,
})


export const addQueryLaunchFailure = (
    payload: AddQueryLaunchFailurePayload
): AddQueryLaunchFailure => ({
    type: ADD_QUERY_LAUNCH_FAILURE,
    payload,
})

export const addQueryLaunchRequest = (payload: AddQueryLaunchRequestPayload): AddQueryLaunchRequest => ({
    type: ADD_QUERY_LAUNCH_REQUEST,
    payload,
})
