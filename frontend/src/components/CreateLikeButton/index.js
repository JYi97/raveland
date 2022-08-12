import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createOneLike, loadOneLike } from "../../store/likes"
import './CreateLikeButton.css'

const CreateLikeButton = ({raveId, likes}) => {
    const userId = useSelector((state) => state?.session?.user?.id)
    const dispatch = useDispatch()
    console.log("THIS IS THE RAVE ID IN THE LIKE BUTTON", raveId)
    console.log("THIS IS THE USER ID IN THE LIKE BUTTON", userId)
    // const like = useSelector((state) => state?.likes)
    console.log("THIS IS THE LIKES", likes)
    let like

    if (likes) {
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].userId === userId && likes[i].raveId === raveId) {
                like = likes[i]
            }
        }
    }

    console.log("THIS SHOULD BE THE LIKE FOR THE RAVE", like)


    const likeRave = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            raveId
        }
        dispatch(createOneLike(payload))
        dispatch(loadOneLike(raveId))
    }

    useEffect(() => {

    }, [likeRave])


    return (
        <>
        {like ? <div>Favorited</div> :    <button onClick={likeRave}>
            Add to Favorites
        </button>}

        </>
    )

}

export default CreateLikeButton
