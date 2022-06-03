import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteReview, getReview } from "../../store/reviews";

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

    useEffect(() => {
        dispatch(getReview(id))
    }, [dispatch, id])

    return (
        <>
            <div>
                Are you sure you want to delete?
            </div>
            <div>
                <button onClick={handleDeleteClick}>YES DELETE REVIEW</button>
            </div>
        </>
    )
}

export default DeleteReviewConfirmPage
