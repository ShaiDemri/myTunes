import {FETCH_MEDIA,FETCH_TOP10,SELECTED_TUNE,GET_SELECTED_TUNE} from './types'

export function selectedTune(payload) {
    return{
        type:SELECTED_TUNE,
        tune:payload
    }
}

export function getSelectedTune() {
    return{
        type:GET_SELECTED_TUNE,
    }
}