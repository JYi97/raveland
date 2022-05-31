import { csrfFetch } from "./csrf";

const GET_RAVES = 'raves/GET_RAVES'
const ADD_ONE = 'raves/ADD_ONE'

const loadRaves = raves => ({
    type: GET_RAVES,
    raves
})

const addOneRave = (rave) => {
    return {
        type: ADD_ONE,
        rave
    }
}

// thunk action creator for getting all raves
export const getAllRaves = () => async dispatch => {
    const response = await csrfFetch('api/raves')

    if (response.ok) {
        const raves = await response.json();
        dispatch(loadRaves(raves))
    }
}

// thunk action creator for creating a rave
export const createRave = (data) => async dispatch => {
    const response = await csrfFetch('api/raves', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const rave = await response.json();

    dispatch(addOneRave(rave))
}

const initialState = {}

const raveReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RAVES:
            const allRaves = {};
            action.raves.forEach(rave => {
                allRaves[rave.id] = rave
            })
            return {
                ...allRaves
            }
        case ADD_ONE:
            if (!state[action.rave.id]) {
                const newState = {
                    ...state,
                    [action.rave.id]: action.rave
                }
                const raves = newState.raves.map(id => newState[id])
                raves.push(action.rave);
                return newState
            }
            break
        default:
            return state;
    }
}

export default raveReducer
