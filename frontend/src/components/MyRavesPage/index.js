import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
// import {loadLikedRaves} from "../../store/likes"
import * as ravesActions from '../../store/raves'

import './MyRavesPage.css'

const MyRavesPage = () => {
    const dispatch = useDispatch();
    const myRaves = useSelector((state) => Object.values(state?.raves))
    // console.log("THIS IS MY RAVES PAGE", myRaves)
    const sessionUser = useSelector((state) => state?.session?.user)
    const likedRaves = useSelector((state) => Object.values(state?.likes))
    // console.log("THIS IS THE LIKED RAVES", likedRaves)
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
        // setTimeout(()=> {
        //     dispatch(loadLikedRaves(userId))
        // }, "5000")

    }, [dispatch, userId])

    return (
        <>
             {/* <h2 className="recent-raves-header">Raves You Liked</h2>
            <div className="ul-recent-raves">
                {likedRaves ? likedRaves.sort(sortByName).map(rave => {
                    return <NavLink key={rave.id} style={{ textDecoration: 'none' }} exact to={`/raves/${rave.id}`}>
                        <div className="home-recent-raves-list" key={rave?.id}>
                            <div className="rave-title-container">
                                <div className="rave-title">
                                    {rave?.title}
                                </div>
                            </div>
                            <div className="homepage-rave-image-container">
                                <img className="rave-image" src={rave?.photoUrl} alt=''></img>
                            </div>
                        </div>
                    </NavLink>
                }) : <div>Loading</div>}
            </div> */}
            <h2 className="recent-raves-header">Raves You Have Posted</h2>
            <div className="ul-recent-raves">
                {myRaves && myRaves.sort(sortByName).map(rave => {
                    return <NavLink key={rave.id} style={{ textDecoration: 'none' }} exact to={`/raves/${rave.id}`}>
                        <div className="home-recent-raves-list" key={rave?.id}>
                            <div className="rave-title-container">
                                <div className="rave-title">
                                    {rave?.title}
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
