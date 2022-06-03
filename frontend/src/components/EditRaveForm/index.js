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

        if (title.length < 1) errors.push("Title needs one character")
        if (title.length >= 100) errors.push("Title must be less than 100 characters")
        if (address.length < 1) errors.push("Address needs one character")
        if (address.length >= 100) errors.push("Address must be less than 100 characters")
        if (city.length < 1) errors.push("City needs one character")
        if (city.length >= 100) errors.push("City must be less than 100 characters")
        if (state.length < 1) errors.push("State needs one character")
        if (state.length >= 100) errors.push("State must be less than 100 characters")
        if (zipCode.length < 1) errors.push("Zip Code needs one character")
        if (zipCode.length >= 20) errors.push("Zip Code must be less than 20 characters")
        if (date.length < 1) errors.push("Date needs one character")
        if (date.length >= 100) errors.push("Date must be less than 100 characters")
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
