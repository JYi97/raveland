import { csrfFetch } from "./csrf";

const GET_RAVES = 'raves/GET_RAVES'
const GET_MY_RAVES = 'raves/MY_RAVES'
const ADD_ONE = 'raves/ADD_ONE'
const EDIT_RAVE = 'raves/EDIT_RAVE'
const DELETE_RAVE = 'raves/DELETE_RAVE'
const GET_ONE = 'raves/GET_ONE'

const loadRaves = raves => ({
    type: GET_RAVES,
    raves
})

const loadMyRaves = (raves) => {
    return {
        type: GET_MY_RAVES,
        raves
    }
}

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

const deleteOneRave = (rave) => {
    return {
        type: DELETE_RAVE,
        rave
    }
}

const loadOneRave = (rave) => {
    return {
        type: GET_ONE,
        rave
    }
}

// thunk action creator for getting all raves
export const getAllRaves = () => async dispatch => {
    const response = await csrfFetch('/api/raves')

    if (response.ok) {
        const raves = await response.json();
        dispatch(loadRaves(raves))
        return response
    }
}

// thunk action creator for getting user raves
export const getMyRaves = (id) => async dispatch => {
    const response = await csrfFetch(`/api/raves/users/${id}`)

    if (response.ok) {
        const raves = await response.json();
        dispatch(loadMyRaves(raves))
        return response
    }
}

// thunk action creator for creating a rave
export const createRave = (data) => async dispatch => {
    const {
        userId,
        title,
        description,
        address,
        city,
        state,
        zipCode,
        date,
        image
    } = data


    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zipCode", zipCode);
    formData.append("date", date);

    if (image) formData.append("image", image);


    const response = await csrfFetch('/api/raves', {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: formData
    })
    const rave = await response.json();
    dispatch(addOneRave(rave))
    return rave
}

// thunk action creator for getting a rave
export const getRave = (id) => async dispatch => {
    const response = await csrfFetch(`/api/raves/${id}`)

    if (response.ok) {
        const rave = await response.json();
        dispatch(loadOneRave(rave))
        return response
    }
}

// thunk action creator for editing a rave
export const editRave = (data) => async dispatch => {
    const {
        userId,
        title,
        description,
        address,
        city,
        state,
        zipCode,
        date,
        image
    } = data


    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zipCode", zipCode);
    formData.append("date", date);

    if (image) formData.append("image", image);
    const response = await csrfFetch(`/api/raves/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    })

    if (response.ok) {
        const rave = await response.json();
        dispatch(editOneRave(rave))
        return rave
    }
}

// thunk action creator for deleting a rave
export const deleteRave = (id) => async dispatch => {
    const response = await csrfFetch(`/api/raves/${id}`, {
        method: "DELETE",
    })
    if (response.ok) {
        const rave = await response.json()
        dispatch(deleteOneRave(rave));
        return
    }
}

const initialState = {}

const raveReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case GET_RAVES:
            const allRaves = {};
            // console.log(action.raves, "THIS IS THE RAVES REDUCER")
            action.raves.forEach(rave => {
                allRaves[rave.id] = rave
            })
            return {
                ...allRaves
            }
        case GET_MY_RAVES:
            const myRaves = {};
            action.raves.forEach(rave => {
                myRaves[rave.id] = rave
            })
            return {
                ...myRaves
            }
        case ADD_ONE:
            // console.log('IN REDUCER ADD ONE CASE - ACTION -> ', action);
            if (!state[action.rave.id]) {
                const newState = {
                    ...state,
                    [action.rave.id]: action.rave
                }
                // console.log(newState)
                return newState
            }
            break
        case GET_ONE:
            const rave = {};
            rave[action.rave.id] = action.rave
            return {
                ...rave
            }
        case EDIT_RAVE:
            for (let rave in state.raves) {
                if (rave.id === action.rave.id) {
                    return action.rave
                }
                else {
                    return rave
                }
            }
            return newState
        case DELETE_RAVE:
            for (let rave in state.raves) {
                if (rave.id === action.rave.id) {
                    delete action.rave
                    return newState;
                }
                else {
                    return rave
                }
            }
            return newState
        default:
            return state;
    }
}

export default raveReducer
