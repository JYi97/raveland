import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createOneLike, deleteOneLike } from "../../store/likes"
import './CreateLikeButton.css'

const CreateLikeButton = ({raveId, likes}) => {
    const userId = useSelector((state) => state?.session?.user?.id)
    const dispatch = useDispatch()
    // console.log("THIS IS THE RAVE ID IN THE LIKE BUTTON", raveId)
    // console.log("THIS IS THE USER ID IN THE LIKE BUTTON", userId)
    // const like = useSelector((state) => state?.likes)
    // console.log("THIS IS THE LIKES", likes)
    let like

    if (likes) {
        for (let i = 0; i < likes?.length; i++) {
            if (likes[i]?.userId === userId && likes[i]?.raveId === raveId) {
                like = likes[i]
            }
        }
    }

    // console.log("THIS SHOULD BE THE LIKE FOR THE RAVE", like?.id)


    const likeRave = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            raveId
        }
        dispatch(createOneLike(payload))

    }

    const deleteLike = async (e) => {
        e.preventDefault();

        const likeId = like?.id
        dispatch(deleteOneLike(likeId))

    }

    useEffect(() => {

    }, [createOneLike])

    useEffect(() => {

    }, [deleteOneLike])


    return (
        <>
        {(like) ?
        <button className='delete-like-button' onClick={deleteLike}>
            <i className="fa fa-star" aria-hidden="true"></i>
            </button> :
            userId ?
            <button className='create-like-button' onClick={likeRave}>
        <i className="fa fa-star-o" aria-hidden="true"></i>
        </button> :
         null}
        </>
    )

}

export default CreateLikeButton
