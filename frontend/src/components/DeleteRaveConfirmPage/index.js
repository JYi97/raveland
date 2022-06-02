import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteRave, getRave } from "../../store/raves";

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

    useEffect(() => {
        dispatch(getRave(id))
    }, [dispatch, id])

    return (
        <>
            <div>
                Are you sure you want to delete?
            </div>
            <div>
                <button onClick={handleDeleteClick}>YES DELETE IT</button>
            </div>
        </>
    )
}

export default DeleteRaveConfirmPage
