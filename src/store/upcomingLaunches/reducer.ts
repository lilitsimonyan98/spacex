import {
    ADD_UPCOMING_LAUNCH_FAILURE,
    ADD_UPCOMING_LAUNCH_REQUEST,
    ADD_UPCOMING_LAUNCH_SUCCESS,
    DELETE_UPCOMING_LAUNCH,
    FETCH_UPCOMING_LAUNCHES_FAILURE,
    FETCH_UPCOMING_LAUNCHES_REQUEST,
    FETCH_UPCOMING_LAUNCHES_SUCCESS,
} from './actionTypes'
import {UpcomingLaunchesActions, UpcomingLaunchesState} from './types'

export const initialState: UpcomingLaunchesState = {
    loading: false,
    launches: [],
    error: null,
}

export default (state = initialState, action: UpcomingLaunchesActions) => {
    switch (action.type) {
        case FETCH_UPCOMING_LAUNCHES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_UPCOMING_LAUNCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                launches: action.payload.launches,
                error: null,
            }
        case FETCH_UPCOMING_LAUNCHES_FAILURE:
            return {
                ...state,
                loading: false,
                launches: [],
                error: action.payload.error,
            }
        case DELETE_UPCOMING_LAUNCH:
            const prevLaunches = [...state.launches]
            const index = prevLaunches.findIndex((element) => element.id === action.payload.id)
            prevLaunches.splice(index, 1)
            return {
                ...state,
                loading: false,
                launches: [...prevLaunches],
                error: null,
            }
        case ADD_UPCOMING_LAUNCH_REQUEST:
            return {
                ...state,
            }
        case ADD_UPCOMING_LAUNCH_SUCCESS:

            return {
                ...state,
                loading: false,
                launches: [action.payload, ...state.launches],
                error: null,
            }
        case ADD_UPCOMING_LAUNCH_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            }
        default:
            return {
                ...state,
            }
    }
}
