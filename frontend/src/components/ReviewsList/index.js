import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as reviewsActions from '../../store/reviews'

const ReviewsList = () => {
    const dispatch = useDispatch();
    const allReviews = useSelector((state) => state.reviews)
    console.log(allReviews)
    const reviews = Object.values(allReviews)
    // console.log(reviews)


    useEffect(() => {
        dispatch(reviewsActions.getAllReviews())
    }, [dispatch])
    return (
        <>
            <div>
                <h2>All Reviews</h2>
                <ul>
                    {reviews.map(review => {
                        return <li key={review.id}>
                            <div>
                                {review.content}
                            </div>
                            <div>
                                <img src={review.images} alt=''></img>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default ReviewsList
