import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as ravesActions from '../../store/raves'
import { NavLink } from "react-router-dom"
import { getAllReviews } from '../../store/reviews'
import RaveReviews from "./RaveReviews"
import CreateReviewForm from "../CreateReviewForm"
import CreateLikeButton from "../CreateLikeButton"
import { loadOneLike } from "../../store/likes"
import './RaveReviews.css'

const RavePage = () => {
    const dispatch = useDispatch();
    const raves = useSelector((state) => state?.raves)
    // console.log(raves)
    const { id } = useParams()
    // console.log(id)
    const rave = Object.values(raves)
    // console.log(rave)
    const sessionUser = useSelector((state) => state?.session?.user)
    const reviews = useSelector((state) => state?.reviews)
    const likes = useSelector((state) => Object.values(state?.likes))
    // console.log("THIS IS THE LIKE FROM THE RAVE PAGE", likes)
    // console.log(reviews)
    const raveReviews = Object.values(reviews)
    const [showForm, setShowForm] = useState(false)

    // const customDate = new Date(2022, 0, 12)

    // console.log("THIS IS THE NEW DATE", customDate)

    useEffect(() => {
        dispatch(loadOneLike(id))
        dispatch(ravesActions.getRave(id))
        dispatch(getAllReviews(id))
    }, [dispatch, id])

    return (
        <>

            {rave[0] && <>
                <div className="rave-page-title-date-image-container">
                    <div className="rave-page-title-date-container">
                        <div className="rave-page-title-like-container">
                        {((likes[0]?.userId === sessionUser?.id && likes[0]?.raveId === id)) ? null: <div className="rave-page-like-container">
                            <CreateLikeButton likes={likes} raveId={rave[0].id} />
                        </div>}
                            <h1 className="rave-page-title">
                                {rave[0]?.title}
                            </h1>
                        </div>
                        {/* {((likes[0].raveId === id && likes[0].userId === sessionUser.id)) ? <div>Hi</div>: <div className="rave-page-like-container">
                            <CreateLikeButton likes={likes} raveId={rave[0].id} />
                        </div>} */}

                        <div className="rave-page-rave-date">
                            {rave[0]?.date.slice(5, 7)}-{rave[0]?.date.slice(8, 10)}-{rave[0]?.date.slice(0, 4)}
                        </div>

                        {sessionUser?.id === rave[0]?.userId ? <div className="rave-page-edit-links"><NavLink className="rave-edit-link" to={`/raves/${rave[0]?.id}/edit`}>
                        <i class="fa fa-cog" aria-hidden="true"></i>
                        </NavLink> </div> : null}

                        {sessionUser?.id === rave[0]?.userId ? <div className="rave-page-delete-links"> <NavLink className="rave-delete-link" to={`/raves/${rave[0]?.id}/delete`}>
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </NavLink></div> : null}
                        <h2>
                            About the Rave
                        </h2>
                    </div>
                    <div className="rave-page-image-container">
                        <img className="rave-page-image" src={rave[0]?.photoUrl} alt=''></img>
                    </div>
                </div>
                <div className="rave-page-description-address-container">
                    <div className="rave-page-description-container">
                        <div className="rave-page-description">
                            {rave[0]?.description}
                            {sessionUser ? (showForm ?
                                <div>
                                    <button onClick={() => {
                                        if (showForm) {
                                            setShowForm(false)
                                        } else {
                                            setShowForm(true)
                                        }
                                    }} className="rave-page-share-experience-button">
                                        Cancel
                                    </button>
                                </div> : <div>
                                    <button onClick={() => {
                                        if (showForm) {
                                            setShowForm(false)
                                        } else {
                                            setShowForm(true)
                                        }
                                    }} className="rave-page-share-experience-button">
                                        Add Review
                                    </button>
                                </div>)
                                :
                                <div className="rave-page-share-experience">
                                    Log in/Sign up to share your experience
                                </div>
                            }
                            {sessionUser && (showForm ? <div>
                                <CreateReviewForm setShowForm={setShowForm} raveId={id} />
                            </div> : null)}
                            <div className="rave-page-reviews-container">
                                <RaveReviews raveId={id} user={sessionUser} reviews={raveReviews} />
                            </div>
                        </div>
                    </div>
                    <div className="rave-page-address-city-container">
                        <div className="rave-page-address">{rave[0]?.address}</div>
                        <div className="rave-page-city">{rave[0]?.city}, {(rave[0]?.state).toUpperCase()} {rave[0]?.zipCode}
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}

export default RavePage
