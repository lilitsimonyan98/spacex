import {
    FETCH_PAST_LAUNCHES_REQUEST,
    FETCH_PAST_LAUNCHES_SUCCESS,
    FETCH_PAST_LAUNCHES_FAILURE,
} from './actionTypes'

import { PastLaunchesState, PastLaunchesActions} from './types'

const initialState: PastLaunchesState = {
    loading: false,
    launches: [],
    error: null,
}

export default (state = initialState, action: PastLaunchesActions) => {
    switch (action.type) {
        case FETCH_PAST_LAUNCHES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PAST_LAUNCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                launches: action.payload.launches,
                error: null,
            }
        case FETCH_PAST_LAUNCHES_FAILURE:
            return {
                ...state,
                loading: false,
                launches: [],
                error: action.payload.error,
            }
        default:
            return {
                ...state,
            }
    }
}
