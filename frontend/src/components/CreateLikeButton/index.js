import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createOneLike } from "../../store/likes"
import './CreateLikeButton.css'

const CreateLikeButton = ({raveId}) => {
    const userId = useSelector((state) => state?.session?.user?.id)
    const dispatch = useDispatch()
    console.log("THIS IS THE RAVE ID IN THE LIKE BUTTON", raveId)

    const likeRave = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            raveId
        }
        dispatch(createOneLike(payload))
    }

    useEffect(() => {

    }, [likeRave])


    return (
        <>
        <button onClick={likeRave}>
            Add to Favorites
        </button>
        </>
    )

}

export default CreateLikeButton
