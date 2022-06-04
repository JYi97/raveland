import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllRaves, createRave } from '../../store/raves';

const CreateRaveForm = () => {
    const userId = useSelector((state) => state.session.user.id)
    // console.log(userId)
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [date, setDate] = useState('');
    const [errors, setErrors] = useState([])

    const updateTitle = (e) => setTitle(e.target.value);
    const updateImage = (e) => setImage(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateZipCode = (e) => setZipCode(e.target.value);
    const updateDate = (e) => setDate(e.target.value);

    useEffect(() => {
        const errors = [];

        if (title.length < 1) errors.push("Please enter the name of Rave")
        if (title.length > 50) errors.push("Title must be less than 50 characters")
        if (address.length < 1) errors.push("Please enter the address")
        if (address.length > 100) errors.push("Address must be less than 100 characters")
        if (city.length < 1) errors.push("Please enter the city")
        if (city.length > 50) errors.push("City must be less than 100 characters")
        if (state.length < 1) errors.push("Please entere the state")
        if (state.length > 2) errors.push("Please enter just the state's initials")
        if (zipCode.length < 1) errors.push("Please enter zip code")
        if (zipCode.length < 5 || zipCode.length > 5 || isNaN(zipCode)) errors.push("Please enter valid zip code")
        if (date.length < 1) errors.push("Please enter the date of rave")
        if (!date.includes("-") || date.length < 10 || date.length > 10) errors.push("Please format date to YYYY-MM-DD")
        setErrors(errors)
    }, [title, image, description, address, city, state, zipCode, date])

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
            date,
            errors
        };

        let createdRave;
        createdRave = await dispatch(createRave(payload))
        if (createdRave) {
            history.push(`/`);
            reset();
        }
    };

    const reset = () => {
        setTitle("");
        setImage("");
        setDescription("");
        setAddress("");
        setCity("");
        setState("");
        setZipCode("");
        setDate("")
        setErrors([])
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push('/')
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
            <ul>
                {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
        </section>
    );
};

export default CreateRaveForm;
