import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllReviews, createReview } from '../../store/reviews';
import './CreateReviewForm.css'

const CreateReviewForm = ({ raveId }) => {
    const userId = useSelector((state) => state.session.user.id)
    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([])

    const updateContent = (e) => setContent(e.target.value);

    useEffect(() => {
        const errors = [];

        if (content.length < 1) errors.push("Tell us how it was!")
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
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/raves/${raveId}`)
        reset();
    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
      };

    return (
        <section className="new-form-holder centered middled">
            <ul className='ul-createform-errors'>
                {errors.map((error) => <li className='review-errors' key={error}>{error}</li>)}
            </ul>
            <form className="create-review-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Must be filled out!"
                    required
                    value={content}
                    onChange={updateContent} />
                <input
                    type="file"
                    placeholder="Image URL"
                    required
                    onChange={updateFile} />
                <button type="submit">Share your thoughts!</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    );
}

export default CreateReviewForm;
