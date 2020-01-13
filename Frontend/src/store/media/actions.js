import {FETCH_MEDIA,FETCH_TOP10} from './types'

export function fetchMedia(payload) {
    return {
        type: FETCH_MEDIA,
        query:payload
    }
}

export function fetchTop10() {
    return {
        type: FETCH_TOP10
    }
}