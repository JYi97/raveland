import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadLikes } from "../../store/likes"
import './LikeStatus.css'

const LikeStatus = ({ raveId }) => {

    const likes = useSelector(state => Object.values(state?.likes))
    const sessionUser = useSelector(state => state?.session?.user)
    const userId = sessionUser?.id
    console.log("THIS IS THE LIKES IN THE FRONTEND", likes)
    const dispatch = useDispatch()
    console.log("THIS IS RAVE ID IN THE LIKE BUTTON", raveId)
    console.log("THIS IS USER ID IN THE LIKE BUTTON", userId)
    let like

    if (likes) {
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].raveId === raveId && likes[i].userId === userId) {
                like = likes[i]
            }
        }
    }

    useEffect(() => {

            dispatch(loadLikes())

        // console.log("USE EFFECT FROM HOMEPAGE")
    }, [dispatch])

    return (
        <>
            {like ?
            <div><i class="fa fa-star" aria-hidden="true"></i>
            </div> : null}
        </>
    )

}

export default LikeStatus
