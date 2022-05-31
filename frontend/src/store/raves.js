import { csrfFetch } from "./csrf";

const GET_RAVES = 'raves/GET_RAVES'

const loadRaves = raves => ({
    type: GET_RAVES,
    raves
})

// thunk action creator for getting all raves
export const getAllRaves = () => async dispatch => {
    const response = await csrfFetch('api/raves')

    if (response.ok) {
        const raves = await response.json();
        dispatch(loadRaves(raves))
    }
}

const initialState = {}

const raveReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RAVES:
            const allRaves = {};
        action.raves.forEach(rave => {
            allRaves[rave.id] = rave
        })
        return {
            ...allRaves
        }
        default:
            return state;
    }
}

export default raveReducer
