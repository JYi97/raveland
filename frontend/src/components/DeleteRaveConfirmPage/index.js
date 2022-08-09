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
            <div className="delete-form-container">
                <div className="delete-confirm-title">
                    Delete My Rave
                </div>
                <div className="delete-rave-delete-cancel-buttons-container">
                    <div className="delete-rave-delete-button-container">
                        <button className="delete-rave-delete-button" onClick={handleDeleteClick}>Delete</button>
                    </div>
                    <div className="delete-rave-cancel-button-container">
                        <button className="delete-rave-cancel-button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteRaveConfirmPage
