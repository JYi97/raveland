import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editRave, getRave } from '../../store/raves';
import { useHistory, useParams } from 'react-router-dom';


const EditRaveForm = () => {
    const userId = useSelector((state) => state.session.user.id)
    const dispatch = useDispatch();
    const history = useHistory();
    const raveId = useParams()
    const id = raveId.id
    // console.log(id)
    const rave = useSelector((state) => state.raves[id])
    // console.log(rave)
    const [title, setTitle] = useState(rave.title);
    const [image, setImage] = useState(rave.image);
    const [description, setDescription] = useState(rave.description);
    const [address, setAddress] = useState(rave.address);
    const [city, setCity] = useState(rave.city);
    const [state, setState] = useState(rave.state);
    const [zipCode, setZipCode] = useState(rave.zipCode);
    const [date, setDate] = useState(rave.date);
    const [errors, setErrors] = useState([]);

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
        if (image.length < 1) errors.push("Please enter a picture of rave")
        if (image.length > 0 && !image.includes(".jpg")) errors.push("Please enter valid image")
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
        if (date.slice(8,10) > 31) errors.push("Pleaese enter valid day")
        setErrors(errors)
    }, [title, image, description, address, city, state, zipCode, date])

    useEffect(() => {
        dispatch(getRave(id))
    }, [dispatch, id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...rave,
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

        let updatedRave;
        updatedRave = await dispatch(editRave(payload))
        if (updatedRave) {
            history.push(`/raves/${rave.id}`)
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/raves/${rave.id}`)
    };



    return (
        <section className="edit-form-holder centered middled">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={rave.title}
                    required
                    value={title}
                    onChange={updateTitle} />
                <input
                    type="text"
                    placeholder={rave.image}
                    required
                    value={image}
                    onChange={updateImage} />
                <input
                    type="text"
                    placeholder={rave.description}
                    required
                    value={description}
                    onChange={updateDescription} />
                <input
                    type="text"
                    placeholder={rave.address}
                    required
                    value={address}
                    onChange={updateAddress} />
                <input
                    type="text"
                    placeholder={rave.city}
                    required
                    value={city}
                    onChange={updateCity} />
                <input
                    type="text"
                    placeholder={rave.state}
                    required
                    value={state}
                    onChange={updateState} />
                <input
                    type="text"
                    placeholder={rave.zipCode}
                    required
                    value={zipCode}
                    onChange={updateZipCode} />
                <input
                    type="text"
                    placeholder={rave.date}
                    required
                    value={date}
                    onChange={updateDate} />
                <button type="submit">Update Rave</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
            <ul>
                {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
        </section>
    );
};

export default EditRaveForm;
