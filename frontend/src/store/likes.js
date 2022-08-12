import { csrfFetch } from "./csrf";

// Getting all Likes for each rave and user
const GET_LIKES = 'likes/GET_LIKES'

const readLikes = (likes) => ({
    type: GET_LIKES,
    likes
})

export const loadLikes = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/likes/${userId}`)

    if (response.ok) {
        const likes = await response.json();
        console.log("THIS IS THE THUNK ACTION CREATOR RESPONSE", likes)
        dispatch(readLikes(likes))
        return response
    }
}

const initialState = {}

const likeReducer = (state = initialState, action) => {
    // const newState = {...state}
    switch(action.type) {
        case GET_LIKES:
            console.log("THIS IS THE GET LIKES REDUCER", action.likes)
            const likes = {};
            action.likes.forEach(like => {
                likes[like.id] = like
            })
            return {
                ...likes
            }
        default:
            return state
    }
}

export default likeReducer
