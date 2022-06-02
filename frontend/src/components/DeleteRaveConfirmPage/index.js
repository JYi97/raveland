import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteRave } from "../../store/raves";

const DeleteRaveConfirmPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const raves = useSelector((state) => state.raves);
    const rave = raves[id]
    const sessionUser = useSelector((state) => state.session.user)

    const handleDeleteClick = (e) => {
        e.preventDefault();
        dispatch(deleteRave(id))
        history.push("/")
    }

    return (
        <>
            <div>
                Are you sure you want to delete?
            </div>
            <div>
                {sessionUser?.id === rave.userId && <button onClick={handleDeleteClick}>YES DELETE IT</button>}
            </div>
        </>
    )
}

export default DeleteRaveConfirmPage
