import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReviews, createReview } from '../../store/reviews';
import './CreateReviewForm.css'

const CreateReviewForm = ({ setShowForm, raveId }) => {
    const userId = useSelector((state) => state?.session?.user?.id)
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
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

    useEffect(() => {
        dispatch(getAllReviews(raveId));
    }, [dispatch, raveId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (errors.length > 0) {
            setShow(true)
            return
        }

        if (errors.length === 0) {
            setShow(false)
            const payload = {
                userId,
                raveId,
                content,
                image
            }
            let createdReview;
            createdReview = await dispatch(createReview(payload))
            if (createdReview) {
                dispatch(getAllReviews(raveId));
                reset();
                setShowForm(false)
            }
        }
    }

    const reset = () => {
        setContent("");
        setImage("");
    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    };

    return (
        <section className="new-form-holder centered middled">
            <div className='ul-createform-errors'>
                {show ? errors.length > 0 ? <>
                    {errors.map((error) => <div className='review-errors' key={error}>{error}</div>)}
                </> : null : null}
            </div>
            <form className="create-review-form" onSubmit={handleSubmit}>
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
                        <button className='create-review-form-add-review-button' type="submit">Add Review</button>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default CreateReviewForm;
