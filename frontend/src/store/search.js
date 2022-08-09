const SEARCH_RAVES = 'search/searchRaves'

export const getSearchRaves = (raves) => {
    return {
        type: SEARCH_RAVES,
        raves
    }
}

export const searchRaves = () => async(dispatch) => {
    const response = await fetch('/api/search/')

    if (response.ok) {
        const raves = await response.json()
        dispatch(getSearchRaves(raves))
    }
}

let initialState = { entries: {} }

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_RAVES:
            return {
                entries: action.raves
            }
        default:
            return state;
    }
}
