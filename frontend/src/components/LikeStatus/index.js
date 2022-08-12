import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadLikes } from "../../store/likes"
import './LikeStatus.css'

const LikeStatus = ({ raveId }) => {

    const sessionUser = useSelector(state => state?.session?.user);
    const likes = useSelector(state => Object.values(state?.likes))
    console.log("THIS IS THE LIKES IN THE FRONTEND", likes)
    const userId = sessionUser?.id
    const dispatch = useDispatch()
    console.log("THIS IS RAVE ID IN THE LIKE BUTTON", raveId)
    let like

    if (likes) {
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].raveId === raveId) {
                like = likes[i]
            }
        }
    }

    useEffect(() => {
        if (sessionUser) {
            dispatch(loadLikes(userId))
        }
        // console.log("USE EFFECT FROM HOMEPAGE")
    }, [dispatch, userId])

    return (
        <>
            {like ? <div>Unlike</div> : <div>Like</div>}
        </>
    )

}

export default LikeStatus
