import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as ravesActions from '../../store/raves'
import { NavLink } from "react-router-dom"
import { getAllReviews } from '../../store/reviews'
import RaveReviews from "./RaveReviews"
import CreateReviewForm from "../CreateReviewForm"

const RavePage = () => {
    const dispatch = useDispatch();
    const raves = useSelector((state) => state.raves)
    // console.log(raves)
    const { id } = useParams()
    // console.log(id)
    const rave = Object.values(raves)
    // console.log(rave)
    const sessionUser = useSelector((state) => state.session.user)
    const reviews = useSelector((state) => state.reviews)
    console.log(reviews)
    const raveReviews = Object.values(reviews)


    useEffect(() => {
        dispatch(ravesActions.getRave(id))
        dispatch(getAllReviews(id))
    }, [dispatch, id])

    return (
        <>
            <div>
                <h2>{rave[0].title}</h2>
                <div>
                    {sessionUser?.id === rave[0].userId && <NavLink to={`/raves/${rave[0].id}/edit`}>
                        Edit
                    </NavLink>}
                </div>
                <div>
                    {sessionUser?.id === rave[0].userId && <NavLink to={`/raves/${rave[0].id}/delete`}>
                        Delete
                    </NavLink>}
                </div>
                <div><img src={rave[0].image} alt=''></img></div>
                {sessionUser ? <div>
                    Add a review:
                </div> : <div> Log in or Sign Up to share your experience </div>}
                {sessionUser && <div>
                    <CreateReviewForm raveId={id} />
                </div>}
                <div>
                </div>
                <div>
                    <RaveReviews reviews={raveReviews} />
                </div>
            </div>
        </>
    )
}

export default RavePage
