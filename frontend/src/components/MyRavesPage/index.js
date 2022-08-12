import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import LikeStatus from "../LikeStatus"
import * as ravesActions from '../../store/raves'
import './MyRavesPage.css'

const MyRavesPage = () => {
    const dispatch = useDispatch();
    const myRaves = useSelector((state) => Object.values(state?.raves))
    // console.log("THIS IS MY RAVES PAGE", myRaves)
    const sessionUser = useSelector((state) => state?.session?.user)
    const userId = sessionUser?.id

    function sortByName(a, b) {
        if (a.title < b.title) {
            return -1
        }
        if (a.title > b.title) {
            return 1
        }
        return 0
    }

    useEffect(() => {
        dispatch(ravesActions.getMyRaves(userId))
    }, [dispatch, userId])

    return (
        <>
            <h2 className="recent-raves-header">My Raves</h2>
            <div className="ul-recent-raves">
                {myRaves && myRaves.sort(sortByName).map(rave => {
                    return <NavLink key={rave.id} style={{ textDecoration: 'none' }} exact to={`/raves/${rave.id}`}>
                        <div className="home-recent-raves-list" key={rave?.id}>
                            <div className="rave-title-container">
                                <div className="rave-title">
                                    {rave?.title}
                                </div>
                                <div>
                                    <LikeStatus raveId={rave?.id} />
                                </div>
                            </div>
                            <div className="homepage-rave-image-container">
                                <img className="rave-image" src={rave?.photoUrl} alt=''></img>
                            </div>
                        </div>
                    </NavLink>
                })}
            </div>

        </>
    )


}

export default MyRavesPage
