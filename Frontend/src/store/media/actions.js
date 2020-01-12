import {FETCH_MEDIA,FETCH_TOP10,SELECTED_TUNE} from './types'

export function fetchMedia(payload) {
    return {
        type: FETCH_MEDIA,
        query:payload
    }
}

export function selectedTune(payload) {
    return{
        type:SELECTED_TUNE,
        tune:payload
    }

}

export function fetchTop10() {
    return {
        type: FETCH_TOP10
    }
}