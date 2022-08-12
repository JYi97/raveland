import { csrfFetch } from "./csrf";

// Getting all Likes for each rave and user
const GET_LIKES = 'likes/GET_LIKES'

const readLikes = (likes) => ({
    type: GET_LIKES,
    likes
})

export const loadLikes = () => async dispatch => {
    const response = await csrfFetch(`/api/likes/`)

    if (response.ok) {
        const likes = await response.json();
        console.log("THIS IS THE THUNK ACTION CREATOR RESPONSE", likes)
        dispatch(readLikes(likes))
        return response
    }
}

// Get likes for one rave
const GET_LIKES_FOR_ONE_RAVE = 'likes/GET_LIKES_FOR_ONE_RAVE'

const readLikesForOneRave = (likes) => ({
    type: GET_LIKES_FOR_ONE_RAVE,
    likes
})

export const loadOneLike = (raveId) => async dispatch => {
    const response = await csrfFetch(`/api/likes/${raveId}`)

    if (response.ok) {
        const likes = await response.json();
        console.log("THIS IS THE LOAD ONE LIKE".likes)
        dispatch(readLikesForOneRave(likes))
        return response
    }
}

// Create like for one rave
const CREATE_LIKE = 'likes/CREATE_ONE_LIKE'

const createLikeForOneRave = (like) => ({
    type: CREATE_LIKE,
    like
})

export const createOneLike = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/likes/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const like = await response.json()
        console.log("THIS IS THE LIKE FROM THE CREATE THUNK", like)
        dispatch(createLikeForOneRave(like))
    }
}

// DELETE Like for one rave
const DELETE_LIKE = 'likes/DELETE_ONE_LIKE'

const deleteLikeForOneRave = (like) => {
    return {
        type: DELETE_LIKE,
        like
    }
}

export const deleteOneLike = (likeId) => async dispatch => {
    const response = await csrfFetch(`/api/likes/${likeId}`, {
        method: "DELETE",
    })
    if (response.ok) {
        const like = await response.json()
        dispatch(deleteLikeForOneRave(like))
        return
    }
}

const initialState = {}

const likeReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case GET_LIKES:
            console.log("THIS IS THE GET LIKES REDUCER", action.likes)
            const likes = {};
            action.likes.forEach(like => {
                likes[like.id] = like
            })
            return {
                ...likes
            }
        case GET_LIKES_FOR_ONE_RAVE:
            const likesforOneRave = {};
            action.likes.forEach(like => {
                likesforOneRave[like.id] = like
            })
            return {
                ...likesforOneRave
            }
        case CREATE_LIKE:
            const newOneLike = {};
            console.log("THIS IS THE CREATE LIKE REDUCER", action.like)
            newOneLike[action.like.id] = action.like
            return {
                ...newOneLike
            }
        case DELETE_LIKE:
            for (let like in newState.likes) {
                if (like.id === action.like.id) {
                    delete action.like
                    return newState
                }
                else {
                    return like
                }
            }
            return newState
        // if (!state[action.like.id] === action.like) {
        //     const newState = {
        //         ...state,
        //         [action.like.id]: action.like
        //     }
        //     return newState
        // }
        default:
            return state
    }
}


export default likeReducer
