import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editReview, getAllReviews } from '../../store/reviews';
import './EditReviewForm.css'

const EditReviewForm = ({ reviewContent, review, rave, setShowEditReview }) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state?.session?.user?.id)

    // console.log("THIS IS THE NUMBER RAVE ID", rave)
    const raveId = Number(rave)
    const reviewId = Number(review)
    // console.log(reviewId)
    const [content, setContent] = useState(reviewContent);
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([]);
    const [show, setShow] = useState(false);

    const updateContent = (e) => setContent(e.target.value);

    useEffect(() => {
        const errors = [];
        if (content?.length > 255) errors.push("Please limit character count to under 255.")
        if (content?.length < 1) errors.push("Please enter your review.")
        setErrors(errors)
    }, [content])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (errors.length > 0) {
            setShow(true)
            return
        }

        if (errors.length === 0) {
            setShow(false)
            const payload = {
                reviewId,
                userId,
                raveId,
                content,
                image
            }
            let editedReview;
            editedReview = await dispatch(editReview(payload))
            if (editedReview) {
                dispatch(getAllReviews(raveId))
                setShowEditReview(false)
            }
        }
    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    };

    return (
        <>
            <section className="new-form-holder centered middled">
                <div className='ul-createform-errors'>
                    {show ? errors.length > 0 ? <>
                        {errors.map((error) => <div className='review-errors' key={error}>{error}</div>)}
                    </> : null : null}
                </div>
                <form
                    className="create-review-form"
                    onSubmit={handleSubmit}
                >
                    <div className='create-rave-review-form-container'>
                        <input
                            className='create-review-form-content-field'
                            type="text"
                            placeholder="Your Review"
                            required
                            value={content}
                            onChange={updateContent} />
                        <input
                            className='create-review-form-image-button'
                            type="file"
                            placeholder="Image URL"
                            required
                            onChange={updateFile} />
                        <div>
                            <button className='create-review-form-add-review-button' type="submit">Edit Review</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )

}

export default EditReviewForm
