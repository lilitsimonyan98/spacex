import {
    ADD_UPCOMING_LAUNCH_FAILURE,
    ADD_UPCOMING_LAUNCH_REQUEST,
    ADD_UPCOMING_LAUNCH_SUCCESS,
    DELETE_UPCOMING_LAUNCH,
    FETCH_UPCOMING_LAUNCHES_FAILURE,
    FETCH_UPCOMING_LAUNCHES_REQUEST,
    FETCH_UPCOMING_LAUNCHES_SUCCESS,
} from './actionTypes'
import {
    AddUpcomingLaunchFailure, AddUpcomingLaunchFailurePayload,
    AddUpcomingLaunchRequest,
    AddUpcomingLaunchRequestPayload,
    AddUpcomingLaunchSuccess,
    DeleteUpcomingLaunch,
    DeleteUpcomingLaunchPayload,
    FetchUpcomingLaunchesFailure,
    FetchUpcomingLaunchesFailurePayload,
    FetchUpcomingLaunchesRequest,
    FetchUpcomingLaunchesSuccess,
    FetchUpcomingLaunchesSuccessPayload,
} from './types'

export const fetchUpcomingLaunchesRequest = (): FetchUpcomingLaunchesRequest => ({
    type: FETCH_UPCOMING_LAUNCHES_REQUEST,
})
export const deleteUpcomingLaunch = (payload: DeleteUpcomingLaunchPayload): DeleteUpcomingLaunch => ({
    type: DELETE_UPCOMING_LAUNCH,
    payload,
})
export const fetchUpcomingLaunchesSuccess = (
    payload: FetchUpcomingLaunchesSuccessPayload
): FetchUpcomingLaunchesSuccess => ({
    type: FETCH_UPCOMING_LAUNCHES_SUCCESS,
    payload,
})
export const fetchUpcomingLaunchesFailure = (
    payload: FetchUpcomingLaunchesFailurePayload
): FetchUpcomingLaunchesFailure => ({
    type: FETCH_UPCOMING_LAUNCHES_FAILURE,
    payload,
})
export const addUpcomingLaunchSuccess = (
    payload: AddUpcomingLaunchRequestPayload
): AddUpcomingLaunchSuccess => ({
    type: ADD_UPCOMING_LAUNCH_SUCCESS,
    payload,
})


export const addUpcomingLaunchFailure = (
   payload: AddUpcomingLaunchFailurePayload
): AddUpcomingLaunchFailure => ({
    type: ADD_UPCOMING_LAUNCH_FAILURE,
    payload,
})

export const addUpcomingLaunchRequest = (payload: AddUpcomingLaunchRequestPayload): AddUpcomingLaunchRequest => ({
    type: ADD_UPCOMING_LAUNCH_REQUEST,
    payload,
})
