import {
    FETCH_LAUNCH_FAILURE,
    FETCH_LAUNCH_REQUEST, FETCH_LAUNCH_SUCCESS
} from './actionTypes'

export interface LaunchState {
    loading: boolean;
    launch: any;
    error: string | null;
}

export interface FetchLaunchSuccessPayload {
    launch: any;
}

export interface FetchLaunchRequestPayload {
    id: string;
}

export interface FetchLaunchFailurePayload {
    error: string;
}

export interface FetchLaunchRequest {
    type: typeof FETCH_LAUNCH_REQUEST;
    payload: FetchLaunchRequestPayload
}

export type FetchLaunchSuccess = {
    type: typeof FETCH_LAUNCH_SUCCESS;
    payload: FetchLaunchSuccessPayload;
};

export type FetchLaunchFailure = {
    type: typeof FETCH_LAUNCH_FAILURE;
    payload: FetchLaunchFailurePayload;
};

export type LaunchActions = FetchLaunchFailure | FetchLaunchRequest | FetchLaunchSuccess;
