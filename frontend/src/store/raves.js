import { csrfFetch } from "./csrf";

const GET_RAVES = 'raves/GET_RAVES'
const ADD_ONE = 'raves/ADD_ONE'
const EDIT_RAVE = 'raves/EDIT_RAVE'
const DELETE_RAVE = 'raves/DELETE_RAVE'

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

const editOneRave = (rave) => {
    return {
        type: EDIT_RAVE,
        rave
    }
}

const deleteOneRave = () => {
    return {
        type: DELETE_RAVE
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

// thunk action creator for editing a rave
export const editRave = (data) => async dispatch => {
    const response = await csrfFetch(`api/raves/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    if (response.ok) {
        const rave = await response.json();
        dispatch(editOneRave(rave))
    }
}

// thunk action creator for deleting a rave
export const deleteRave = (data) => async dispatch => {
    const response = await csrfFetch(`api/raves/${data.id}`, {
        method: "DELETE",
    })
    dispatch(deleteOneRave());
    return response;
}

const initialState = {}

const raveReducer = (state = initialState, action) => {
    const newState = {...state}
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
            console.log('IN REDUCER ADD ONE CASE - ACTION -> ', action);
            if (!state[action.rave.id]) {
                const newState = {
                    ...state,
                    [action.rave.id]: action.rave
                }
                console.log(newState)
                return newState
            }
            return {
                ...state,
                [action.rave.id]: {
                    ...state[action.rave.id],
                    ...action.rave
                }
            }
        case EDIT_RAVE:
            newState.raves = state.raves.map((rave)=> {
                if (rave.id === action.rave.id) {
                    return action.rave
                } else {
                    return rave
                }
            })
            return newState
        default:
            return state;
    }
}

export default raveReducer
