import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllReviews, createReview } from '../../store/reviews';

const CreateReviewForm = ({raveId}) => {
    const userId = useSelector((state) => state.session.user.id)
    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([])

    const updateContent = (e) => setContent(e.target.value);
    const updateImage = (e) => setImage(e.target.value);

    useEffect(() => {
        const errors = [];

        if (content.length < 1) errors.push("Content must have at least 1 character")
        setErrors(errors)
    }, [content])

    useEffect(() => {
        dispatch(getAllReviews(raveId));
    }, [dispatch, raveId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            raveId,
            content,
            image
        }

        let createdReview;
        createdReview = await dispatch(createReview(payload))
        if (createdReview) {
            history.push(`/raves/${raveId}`)
            reset();
        }
    }

    const reset = () => {
        setContent("");
        setImage("");
        setErrors(["Content must have at least 1 character"])
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/raves/${raveId}`)
        reset();
    }
    return (
        <section className="new-form-holder centered middled">
            <form className="create-review-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Share your experience!"
                    required
                    value={content}
                    onChange={updateContent} />
                <input
                    type="text"
                    placeholder="Image URL"
                    required
                    value={image}
                    onChange={updateImage} />
                <button type="submit">Share your thoughts!</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
            <ul>
                {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
        </section>
    );
}

export default CreateReviewForm;
