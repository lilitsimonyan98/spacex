import {
    FETCH_QUERY_LAUNCHES_REQUEST,
    FETCH_QUERY_LAUNCHES_FAILURE,
    FETCH_QUERY_LAUNCHES_SUCCESS,
    DELETE_QUERY_LAUNCH, ADD_QUERY_LAUNCH_FAILURE, ADD_QUERY_LAUNCH_REQUEST, ADD_QUERY_LAUNCH_SUCCESS
} from './actionTypes'

export interface QueryLaunchesState {
    loading: boolean;
    launches: any[];
    error: string | null;
}

export interface FetchQueryLaunchesSuccessPayload {
    launches: any[];
}

export interface FetchQueryLaunchesFailurePayload {
    error: string;
}

export interface FetchQueryLaunchesRequest {
    type: typeof FETCH_QUERY_LAUNCHES_REQUEST;
}

export type FetchQueryLaunchesSuccess = {
    type: typeof FETCH_QUERY_LAUNCHES_SUCCESS;
    payload: FetchQueryLaunchesSuccessPayload;
};

export type FetchQueryLaunchesFailure = {
    type: typeof FETCH_QUERY_LAUNCHES_FAILURE;
    payload: FetchQueryLaunchesFailurePayload;
};

export interface DeleteQueryLaunch {
    type: typeof DELETE_QUERY_LAUNCH;
    payload: DeleteQueryLaunchPayload
}

export interface DeleteQueryLaunchPayload {
    id: number
}

export type AddQueryLaunchFailure = {
    type: typeof ADD_QUERY_LAUNCH_FAILURE;
    payload: AddQueryLaunchFailurePayload;
};
export type AddQueryLaunchSuccess = {
    type: typeof ADD_QUERY_LAUNCH_SUCCESS;
    payload: AddQueryLaunchRequestPayload;
};

export interface AddQueryLaunchRequest {
    type: typeof ADD_QUERY_LAUNCH_REQUEST;
    payload: AddQueryLaunchRequestPayload
}

export interface AddQueryLaunchFailurePayload {
    error: string;
}

export interface AddQueryLaunchRequestPayload {
    launch: any;
}

export type QueryLaunchesActions =
    | FetchQueryLaunchesRequest
    | FetchQueryLaunchesSuccess
    | FetchQueryLaunchesFailure
    | AddQueryLaunchRequest
    | AddQueryLaunchSuccess
    | AddQueryLaunchFailure
    | DeleteQueryLaunch;
