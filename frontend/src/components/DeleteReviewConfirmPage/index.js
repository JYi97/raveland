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
           <div className="delete-form-container">
                <div className="delete-confirm-title">
                    Delete My Review
                </div>
                <div className="delete-review-delete-cancel-buttons-container">
                    <div className="delete-review-delete-button-container">
                        <button className="delete-review-delete-button" onClick={handleDeleteClick}>Delete</button>
                    </div>
                    <div className="delete-review-cancel-button-container">
                        <button className="delete-review-cancel-button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteReviewConfirmPage
