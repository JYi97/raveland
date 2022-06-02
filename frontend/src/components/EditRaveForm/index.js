import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editRave } from '../../store/raves';
import { useHistory } from 'react-router-dom';


const EditRaveForm = () => {
    const userId = useSelector((state) => state.session.user.id)
    const dispatch = useDispatch();
    const history = useHistory();
    const rave = useSelector((state) => state.raves[1])
    const [title, setTitle] = useState(rave.title);
    const [image, setImage] = useState(rave.image);
    const [description, setDescription] = useState(rave.description);
    const [address, setAddress] = useState(rave.address);
    const [city, setCity] = useState(rave.city);
    const [state, setState] = useState(rave.state);
    const [zipCode, setZipCode] = useState(rave.zipCode);
    const [date, setDate] = useState(rave.date);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateImage = (e) => setImage(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateZipCode = (e) => setZipCode(e.target.value);
    const updateDate = (e) => setDate(e.target.value);

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
            date
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
        </section>
    );
};

export default EditRaveForm;
