import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllRaves, createRave } from '../../store/raves';

const CreateRaveForm = ({ hideForm }) => {
    const currentUserId = useSelector((state) => state.session.user.id)
    const dispatch = useDispatch();
    const history = useHistory();
    const [userId, setUserId] = useState(currentUserId)
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [date, setDate] = useState();

    const updateTitle = (e) => setTitle(e.target.value);
    const updateImage = (e) => setImage(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateZipCode = (e) => setZipCode(e.target.value);
    const updateDate = (e) => setDate(e.target.value);

    useEffect(() => {
        dispatch(getAllRaves());
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            title,
            image,
            description,
            address,
            city,
            state,
            zipCode,
            date
        };

        let createdRave;
        createdRave = await dispatch(createRave(payload))
        if (createdRave) {
            history.push(`/`);
            hideForm();
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    };

    return (
        <section className="new-form-holder centered middled">
            <form className="create-rave-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    required
                    value={title}
                    onChange={updateTitle} />
                <input
                    type="text"
                    placeholder="Image URL"
                    required
                    value={image}
                    onChange={updateImage} />
                <input
                    type="text"
                    placeholder="Description"
                    required
                    value={description}
                    onChange={updateDescription} />
                <input
                    type="text"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={updateAddress} />
                <input
                    type="text"
                    placeholder="City"
                    required
                    value={city}
                    onChange={updateCity} />
                <input
                    type="text"
                    placeholder="State"
                    required
                    value={state}
                    onChange={updateState} />
                <input
                    type="text"
                    placeholder="Zip Code"
                    required
                    value={zipCode}
                    onChange={updateZipCode} />
                <input
                    type="text"
                    placeholder="Date"
                    required
                    value={date}
                    onChange={updateDate} />
                <button type="submit">Post New Rave </button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    );
};

export default CreateRaveForm;
