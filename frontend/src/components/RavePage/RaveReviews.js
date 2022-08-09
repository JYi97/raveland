import { NavLink } from "react-router-dom";
import { useState } from "react";
import EditReviewForm from "../EditReviewForm"
import './RaveReviews.css'
function RaveReviews({ user, reviews, raveId }) {
    // console.log(reviews)
    const [showEditReview, setShowEditReview] = useState(false)


    return (
        <>
            <h3 className="rave-details-page-reviews-header">Reviews</h3>
            <div>
                {reviews?.map((review) => {
                    return <div
                        className="rave-reviews"
                        id={review?.id}
                        key={review?.id}
                    >
                        <div className="rave-reviews-username-delete-button-container">
                            <div className="rave-reviews-username-initial-container">
                                <div className="rave-reviews-username-initial">
                                    {review?.User?.username.slice(0, 1)}
                                </div>
                                <div className="rave-reviews-username">
                                    {review?.User?.username}
                                </div>
                            </div>
                            <div>
                                {user?.id === review?.userId ?
                                    <div className="rave-review-edit-delete-buttons-container">
                                        <div className="rave-review-edit-button-container">
                                            <button onClick={() => {
                                                if (showEditReview) {
                                                    setShowEditReview(false)
                                                    setShowEditReview(review?.id)
                                                }
                                                if (showEditReview === review?.id) {
                                                    setShowEditReview(false)
                                                }
                                                else {
                                                    setShowEditReview(review?.id)
                                                }
                                            }} className="rave-review-edit-button">Edit</button>
                                        </div>
                                        <div>
                                            <NavLink className={'rave-reviews-delete-review'} to={`/reviews/${review.id}/delete`}>
                                                Delete
                                            </NavLink>
                                        </div>
                                    </div>
                                    :
                                    null}
                            </div>
                        </div>
                        <div className="rave-reviews-review-date">
                            {review?.createdAt.slice(5, 7)}-{review?.createdAt.slice(8, 10)}-{review.createdAt.slice(0, 4)}
                        </div>
                        {showEditReview === review?.id ? <div key={review?.id} className="rave-review-edit-review-form">
                            <EditReviewForm reviewContent={review?.content} review={review?.id} setShowEditReview={setShowEditReview} rave={raveId}/>
                        </div>
                            :
                            null}
                        <div className="rave-reviews-content-delete-container">
                            <div className="rave-reviews-content">
                                {review?.content}
                            </div>
                        </div>
                        <div className="rave-reviews-image-container">
                            <img className="rave-reviews-image" src={review?.photoUrl} alt='Invalid Pic URL'></img>
                        </div>
                    </div>
                })}
            </div>

        </>
    )
}

export default RaveReviews
