import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as ravesActions from '../../store/raves'
import { NavLink } from "react-router-dom"
import { getAllReviews } from '../../store/reviews'
import RaveReviews from "./RaveReviews"
import CreateReviewForm from "../CreateReviewForm"
import Footer from '../Footer'
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
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        dispatch(ravesActions.getRave(id))
        dispatch(getAllReviews(id))
    }, [dispatch, id])

    return (
        <>

            {rave[0] && <>

                <div className="rave-page-title-date-image-container">
                    <div className="rave-page-title-date-container">
                        <h1 className="rave-page-title">
                            {rave[0]?.title}
                        </h1>
                        <div className="rave-page-rave-date">
                            {rave[0]?.date.slice(5, 7)}-{rave[0]?.date.slice(8, 10)}-{rave[0]?.date.slice(0, 4)}
                        </div>

                        {sessionUser?.id === rave[0]?.userId ? <div className="rave-page-edit-links"><NavLink className="rave-edit-link" to={`/raves/${rave[0]?.id}/edit`}>
                            Edit
                        </NavLink> </div> : null}

                        {sessionUser?.id === rave[0]?.userId ? <div className="rave-page-delete-links"> <NavLink className="rave-delete-link" to={`/raves/${rave[0]?.id}/delete`}>
                            Delete
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
                                    Log in or sign up to share your experience
                                </div>
                            }
                            {sessionUser && (showForm ? <div>
                                <CreateReviewForm setShowForm={setShowForm} raveId={id} />
                            </div> : null)}
                            <div className="rave-page-reviews-container">
                                <RaveReviews user={sessionUser} reviews={raveReviews} />
                            </div>
                        </div>
                    </div>
                    <div className="rave-page-address-city-container">
                        <div className="rave-page-address">{rave[0]?.address}</div>
                        <div className="rave-page-city">{rave[0]?.city}, {rave[0]?.state} {rave[0]?.zipCode}
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}

export default RavePage
