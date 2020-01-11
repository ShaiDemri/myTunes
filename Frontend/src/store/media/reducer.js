import * as types from './types'

const initialState = {
    top10:[],
    media:[]
};

export default function media(state = initialState, action) {

    switch (action.type) {
        case types.FETCH_MEDIA_SUCCESS:
            return {
                ...state,
                media: action.media.data.results
            };
        case types.FETCH_TOP10_SUCCESS:
            return {
                ...state,
                top10: action.top10.data
            };
        default:
            return state
    }
}
