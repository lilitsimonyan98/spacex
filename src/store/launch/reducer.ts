import {
    FETCH_LAUNCH_FAILURE,
    FETCH_LAUNCH_REQUEST,
    FETCH_LAUNCH_SUCCESS,
} from './actionTypes'

import {LaunchActions, LaunchState} from './types'


export const initialState: LaunchState = {
    loading: false,
    launch: {},
    error: null,
}

export default (state: LaunchState = initialState, action: LaunchActions) => {
    switch (action.type) {
        case FETCH_LAUNCH_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_LAUNCH_SUCCESS:
            return {
                ...state,
                loading: false,
                launch: action.payload.launch,
                error: null,
            }
        case FETCH_LAUNCH_FAILURE:
            return {
                ...state,
                loading: false,
                launch: {},
                error: action.payload.error,
            }
        default:
            return {
                ...state,
            }
    }
}
