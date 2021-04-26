import {
    FETCH_PAST_LAUNCHES_REQUEST,
    FETCH_PAST_LAUNCHES_SUCCESS,
    FETCH_PAST_LAUNCHES_FAILURE,
} from './actionTypes'

export interface PastLaunchesState {
    loading: boolean;
    launches: any[];
    error: string | null;
}

export interface FetchPastLaunchesSuccessPayload {
    launches: any[];
}

export interface FetchPastLaunchesFailurePayload {
    error: string;
}

export interface FetchPastLaunchesRequest {
    type: typeof FETCH_PAST_LAUNCHES_REQUEST;
}

export type FetchPastLaunchesSuccess = {
    type: typeof FETCH_PAST_LAUNCHES_SUCCESS;
    payload: FetchPastLaunchesSuccessPayload;
};

export type FetchPastLaunchesFailure = {
    type: typeof FETCH_PAST_LAUNCHES_FAILURE;
    payload: FetchPastLaunchesFailurePayload;
};

export type PastLaunchesActions =
    | FetchPastLaunchesRequest
    | FetchPastLaunchesSuccess
    | FetchPastLaunchesFailure;

