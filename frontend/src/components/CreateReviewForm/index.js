import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllReviews, createReview } from '../../store/reviews';

const CreateReviewForm = ({ raveId }) => {
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

        if (content.length < 1) errors.push("Tell us how it was!")
        if (image.length < 1) errors.push("Show others your favorite moment")
        setErrors(errors)
    }, [content, image])

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
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/raves/${raveId}`)
        reset();
    }
    return (
        <section className="new-form-holder centered middled">
            <ul>
                {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
            <form className="create-review-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Share your experience!"
                    required
                    value={content}
                    onChange={updateContent} />
                <input
                    type="text"
                    placeholder="Must include picture!"
                    required
                    value={image}
                    onChange={updateImage} />
                <button type="submit">Share your thoughts!</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    );
}

export default CreateReviewForm;
