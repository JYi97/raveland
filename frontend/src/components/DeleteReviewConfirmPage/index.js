import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteReview, getReview } from "../../store/reviews";
import './DeleteReviewConfirmPage.css'

const DeleteReviewConfirmPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    // console.log(id)
    const reviews = useSelector((state) => state.reviews);
    const review = reviews[id]

    const handleDeleteClick = async (e) => {
        e.preventDefault();
        await dispatch(deleteReview(id))
        history.push(`/raves/${review.raveId}`)
    }

    const handleCancelClick = async (e) => {
        e.preventDefault();
        history.push(`/`)
    }

    useEffect(() => {
        dispatch(getReview(id))
    }, [dispatch, id])

    return (
        <>
            <div className="delete-review-confirm">
                Are you sure you want to this review? No one will be able to see your review again
            </div>
            <div>
                <button onClick={handleDeleteClick}>YES DELETE REVIEW</button>
            </div>
            <span><button onClick={handleCancelClick}>NO DON'T DELETE IT</button>
            </span>

        </>
    )
}

export default DeleteReviewConfirmPage
