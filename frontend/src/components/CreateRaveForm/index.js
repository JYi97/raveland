import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllRaves, createRave } from '../../store/raves';
import './CreateRaveForm.css'

const CreateRaveForm = () => {
    const userId = useSelector((state) => state.session.user.id)
    // console.log(userId)
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [date, setDate] = useState('');
    const [errors, setErrors] = useState([])

    const updateTitle = (e) => setTitle(e.target.value);
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
        if (description.length < 1) errors.push("Please enter description")
        if (address.length < 1) errors.push("Please enter the address")
        if (address.length > 100) errors.push("Address must be less than 100 characters")
        if (city.length < 1) errors.push("Please enter the city")
        if (city.length > 50) errors.push("City must be less than 100 characters")
        if (state.length < 1) errors.push("Please enter state's initials")
        if (state.length > 2) errors.push("Please enter just the state's initials")
        if (zipCode.length < 1) errors.push("Please enter zip code")
        if (zipCode.length < 5 || zipCode.length > 5) errors.push("Please enter valid zip code")
        if (isNaN(zipCode)) errors.push("Invalid zipcode")
        if (date.length < 1) errors.push("Please enter the date of rave")
        if (!date.includes("-") || date.length < 10 || date.length > 10) errors.push("Please format date to YYYY-MM-DD")
        if (date.slice(5, 7) > 12) errors.push("Please enter valid month")
        if (date.slice(8, 10) > 31) errors.push("Pleaese enter valid day")
        setErrors(errors)
    }, [title, description, address, city, state, zipCode, date])

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
    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
      };

    return (
        <section className="new-form-holder centered middled">
            <form className="create-rave-form" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        required
                        value={title}
                        onChange={updateTitle} />
                </div>
                <div>
                    <input
                        type="file"
                        placeholder="Image URL"
                        required
                        onChange={updateFile} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Description"
                        required
                        value={description}
                        onChange={updateDescription} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Address"
                        required
                        value={address}
                        onChange={updateAddress} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="City"
                        required
                        value={city}
                        onChange={updateCity} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="State"
                        required
                        value={state}
                        onChange={updateState} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Zip Code"
                        required
                        value={zipCode}
                        onChange={updateZipCode} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Date"
                        required
                        value={date}
                        onChange={updateDate} />
                </div>
                <div>
                    <button type="submit">Post New Rave </button>
                    <button type="button" onClick={handleCancelClick}>Cancel</button>
                    <ul>
                        {errors.map((error) => <li className='errors-list' key={error}>{error}</li>)}
                    </ul>
                </div>
            </form>
        </section>
    );
};

export default CreateRaveForm;
