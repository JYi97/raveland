import { NavLink } from "react-router-dom";
import './RaveReviews.css'
function RaveReviews({ user, reviews }) {
    // console.log(reviews)


    return (
        <>
            <h3>Reviews</h3>
            <ul>
                {reviews?.map((review) => {
                    return <li className="rave-reviews"
                        id={review.id}
                        key={review.id}
                    >
                        <div>
                            <img className="rave-reviews-image" src={review.photoUrl} alt='Invalid Pic URL'></img>
                        </div>
                        <div className="rave-reviews-content">{review.content}</div>
                        <span>
                            {user?.id === review.userId && <NavLink className={'rave-reviews-delete-review'} to={`/reviews/${review.id}/delete`}>
                                Delete
                            </NavLink>}
                        </span>
                    </li>
                })}
            </ul>
        </>
    )
}

export default RaveReviews
