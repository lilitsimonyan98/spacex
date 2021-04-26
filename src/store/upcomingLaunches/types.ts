import {
    FETCH_UPCOMING_LAUNCHES_REQUEST,
    FETCH_UPCOMING_LAUNCHES_SUCCESS,
    FETCH_UPCOMING_LAUNCHES_FAILURE,
    DELETE_UPCOMING_LAUNCH,
    ADD_UPCOMING_LAUNCH_SUCCESS,
    ADD_UPCOMING_LAUNCH_REQUEST, ADD_UPCOMING_LAUNCH_FAILURE,
} from './actionTypes'

export interface UpcomingLaunchesState {
    loading: boolean;
    launches: any[];
    error: string | null;
}

export interface FetchUpcomingLaunchesSuccessPayload {
    launches: any[];
}


export interface FetchUpcomingLaunchesFailurePayload {
    error: string;
}

export interface FetchUpcomingLaunchesRequest {
    type: typeof FETCH_UPCOMING_LAUNCHES_REQUEST;
}

export interface DeleteUpcomingLaunch {
    type: typeof DELETE_UPCOMING_LAUNCH;
    payload: DeleteUpcomingLaunchPayload
}
export interface DeleteUpcomingLaunchPayload {
    id: number
}
export type FetchUpcomingLaunchesSuccess = {
    type: typeof FETCH_UPCOMING_LAUNCHES_SUCCESS;
    payload: FetchUpcomingLaunchesSuccessPayload;
};

export type FetchUpcomingLaunchesFailure = {
    type: typeof FETCH_UPCOMING_LAUNCHES_FAILURE;
    payload: FetchUpcomingLaunchesFailurePayload;
};
export type AddUpcomingLaunchFailure = {
    type: typeof ADD_UPCOMING_LAUNCH_FAILURE;
    payload: AddUpcomingLaunchFailurePayload;
};
export type AddUpcomingLaunchSuccess = {
    type: typeof ADD_UPCOMING_LAUNCH_SUCCESS;
    payload: AddUpcomingLaunchRequestPayload;
};

export interface AddUpcomingLaunchRequest {
    type: typeof ADD_UPCOMING_LAUNCH_REQUEST;
    payload: AddUpcomingLaunchRequestPayload
}

export interface AddUpcomingLaunchFailurePayload {
    error: string;
}
export interface AddUpcomingLaunchRequestPayload {
    launch: any;
}
export type UpcomingLaunchesActions =
    | FetchUpcomingLaunchesRequest
    | FetchUpcomingLaunchesSuccess
    | FetchUpcomingLaunchesFailure
    | DeleteUpcomingLaunch
    | AddUpcomingLaunchSuccess
    | AddUpcomingLaunchRequest
    | AddUpcomingLaunchFailure;

