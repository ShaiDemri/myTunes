import * as types from './types'

const initialState = {
    selectedTune:undefined
};

export default function tune(state = initialState, action) {

    switch (action.type) {
        case types.GET_SELECTED_TUNE_SUCCESS:
            console.log(action);
            return {
                ...state,
                selectedTune:action.tune
            };
        case types.SELECTED_TUNE_SUCCESS:
            console.log(action);
            return {
                ...state,
                selectedTune:action.tune
            };
        default:
            return state
    }
}
