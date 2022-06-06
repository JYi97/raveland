import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteRave, getRave } from "../../store/raves";
import './DeleteRaveConfirmPage.css'

const DeleteRaveConfirmPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    // const raves = useSelector((state) => state.raves);
    // const rave = raves[id]

    const handleDeleteClick = async (e) => {
        e.preventDefault();
        await dispatch(deleteRave(id))
        history.push("/")
    }

    const handleCancelClick = async (e) => {
        e.preventDefault();
        history.push(`/raves/${id}`)
    }

    useEffect(() => {
        dispatch(getRave(id))
    }, [dispatch, id])

    return (
        <>
            <div className="delete-confirm-page">
                Are you sure you want to delete this rave? This will delete all the reviews as well.
            </div>
            <div>
                <button onClick={handleDeleteClick}>YES DELETE THIS RAVE</button>
            </div>
            <div>
                <button onClick={handleCancelClick}>NO DON'T DELETE IT</button>
            </div>
        </>
    )
}

export default DeleteRaveConfirmPage
