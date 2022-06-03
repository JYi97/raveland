import { csrfFetch } from "./csrf";

const GET_REVIEWS = 'reviews/GET_REVIEWS'

const loadReviews = reviews => ({
    type: GET_REVIEWS,
    reviews
})

// thunk action creator for getting all reviews
export const getAllReviews = (raveId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${raveId}`)

    if (response.ok) {
        const reviews = await response.json();
        dispatch(loadReviews(reviews))

    }
}

const ADD_REVIEW = 'reviews/ADD_REVIEW'

const addOneReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
}

// thunk action creator for creating a review
export const createReview = (data) => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const review = await response.json();
    dispatch(addOneReview(review))
    return review
}
const EDIT_REVIEW = 'reviews/EDIT_REVIEW'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'
const GET_REVIEW = 'reviews/GET_REVIEW'

const editOneReview = (review) => {
    return {
        type: EDIT_REVIEW,
        review
    }
}

const deleteOneReview = (review) => {
    return {
        type: DELETE_REVIEW,
        review
    }
}

const loadOneReview = (review) => {
    return {
        type: GET_REVIEW,
        review
    }
}



// thunk action creator for getting a review
export const getReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`)

    if (response.ok) {
        const review = await response.json();
        dispatch(loadOneReview(review))
        return response
    }
}

// thunk action creator for editing a review
export const editReview = (data) => async dispatch => {
    const response = await csrfFetch(`/api/review/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    if (response.ok) {
        const review = await response.json();
        dispatch(editOneReview(review))
        return review
    }
}

// thunk action creator for deleting a review
export const deleteReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: "DELETE",
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(deleteOneReview(review));
        return
    }
}

const initialState = {}

const reviewReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case GET_REVIEWS:
            const allReviews = {};
            action.reviews.forEach(review => {
                allReviews[review.id] = review
            })
            return {
                ...allReviews
            }
        case ADD_REVIEW:
           // console.log('IN REDUCER ADD ONE CASE - ACTION -> ', action);
            if (!state[action.review.id]) {
                const newState = {
                    ...state,
                    [action.review.id]: action.review
                }
                // console.log(newState)
                return newState
            }
            break
        // case GET_REVIEW:
        //     const review = {};
        //     review[action.review.id] = action.review
        //     return {
        //         ...review
        //     }
        // case EDIT_REVIEW:
        //     for (let review in state.reviews) {
        //         if (review.id === action.review.id) {
        //             return action.review
        //         }
        //         else {
        //             return review
        //         }
        //     }
        //     return newState
        case DELETE_REVIEW:
            for (let review in state.reviews) {
                if (review.id === action.review.id) {
                    delete action.review
                    return newState;
                }
                else {
                    return review
                }
            }
            return newState
        default:
            return state;
    }
}

export default reviewReducer
