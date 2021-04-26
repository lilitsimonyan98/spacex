import {
     ADD_QUERY_LAUNCH_FAILURE, ADD_QUERY_LAUNCH_REQUEST, ADD_QUERY_LAUNCH_SUCCESS,
    DELETE_QUERY_LAUNCH,
    FETCH_QUERY_LAUNCHES_FAILURE,
    FETCH_QUERY_LAUNCHES_REQUEST,
    FETCH_QUERY_LAUNCHES_SUCCESS,
} from './actionTypes'

import {QueryLaunchesActions, QueryLaunchesState} from './types'


export const initialState: QueryLaunchesState = {
    loading: false,
    launches: [],
    error: null,
}

export default (state: QueryLaunchesState = initialState, action: QueryLaunchesActions) => {
    switch (action.type) {
        case FETCH_QUERY_LAUNCHES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_QUERY_LAUNCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                launches: [],
                error: null,
            }
        case FETCH_QUERY_LAUNCHES_FAILURE:
            return {
                ...state,
                loading: false,
                launches: [],
                error: action.payload.error,
            }
        case ADD_QUERY_LAUNCH_REQUEST:
            return {
                ...state,
            }
        case ADD_QUERY_LAUNCH_SUCCESS:
            return {
                ...state,
                loading: false,
                launches: [action.payload, ...state.launches],
                error: null,
            }
        case ADD_QUERY_LAUNCH_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            }
        case DELETE_QUERY_LAUNCH:
            const prevLaunches = [...state.launches]
            const index = prevLaunches.findIndex((element) => element.id === action.payload.id)
            prevLaunches.splice(index, 1)
            return {
                ...state,
                loading: false,
                launches: [...prevLaunches],
                error: null,
            }
        default:
            return {
                ...state,
            }
    }
}
