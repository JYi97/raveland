import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as ravesActions from '../../store/raves'
import { NavLink } from "react-router-dom"
import { getAllReviews } from '../../store/reviews'
import RaveReviews from "./RaveReviews"
import CreateReviewForm from "../CreateReviewForm"
import './RaveReviews.css'

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
    // console.log(reviews)
    const raveReviews = Object.values(reviews)

    useEffect(() => {
        dispatch(ravesActions.getRave(id))
        dispatch(getAllReviews(id))
    }, [dispatch, id])

    return (
        <>{rave[0] && <><div>
            <h1 className="rave-page-title">
                {rave[0].title}
            </h1>
        </div>
        <div className="rave-page-image-container">
            <img className="rave-page-image" src={rave[0].photoUrl} alt=''></img></div>
        <div className="rave-page-description">{rave[0].description}</div>
        <div className="rave-page-address">Address: {rave[0].address}</div>
        <div className="rave-page-city">{rave[0].city}, <span>{rave[0].state} {rave[0].zipCode}</span></div>
        <div className="rave-page-edit-links">
            {sessionUser?.id === rave[0].userId && <NavLink className="rave-edit-link" to={`/raves/${rave[0].id}/edit`}>
                Edit
            </NavLink>}
        </div>
        <div className="rave-page-delete-links">
            {sessionUser?.id === rave[0].userId && <NavLink className="rave-delete-link" to={`/raves/${rave[0].id}/delete`}>
                Delete
            </NavLink>}
            {sessionUser ? <div className="rave-page-share-experience">
                Share your experience!
            </div> : <div className="rave-page-share-experience"> Log in or sign up to share your experience </div>}
            {sessionUser && <div>
                <CreateReviewForm raveId={id} />
            </div>}
            <div className="rave-page-reviews-container">
                <RaveReviews user={sessionUser} reviews={raveReviews} />
            </div>
        </div></>}

        </>
    )
}

export default RavePage
