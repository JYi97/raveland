import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import * as ravesActions from '../../store/raves'
import './HomePage.css'

const HomePage = () => {
    const dispatch = useDispatch();
    const allRaves = useSelector((state) => state.raves)
    console.log(allRaves)
    const raves = Object.values(allRaves)
    console.log(raves)
    const currentYear = Number(new Date().toISOString().slice(0, 4))
    const currentMonth = Number(new Date().toISOString().slice(5, 7))
    const currentDay = Number(new Date().toISOString().slice(8, 10))

    const [showMoreRaves, setShowMoreRaves] = useState(false);

    // console.log("THIS IS CURRENT YEAR FROM THE HOMEPAGE", currentYear)
    // console.log("THIS IS CURRENT MONTH FROM THE HOMEPAGE", currentMonth)
    // console.log("THIS IS CURRENT DAT FROM THE HOMEPAGE", currentDay)

    let recentRaves = []
    let upcomingRaves = []

    if (raves) {
        for (let i = 0; i < raves.length; i++) {
            let raveYear = Number(raves[i].date.slice(0, 4))
            let raveMonth = Number(raves[i].date.slice(5, 7))
            let raveDay = Number(raves[i].date.slice(8, 10))
            if (currentYear > raveYear) recentRaves.push(raves[i])
            if (currentYear < raveYear) upcomingRaves.push(raves[i])
            if (currentYear === raveYear && currentMonth > raveMonth) recentRaves.push(raves[i])
            if (currentYear === raveYear && currentMonth < raveMonth) upcomingRaves.push(raves[i])
            if (currentYear === raveYear && currentMonth === raveMonth && currentDay >= raveDay) recentRaves.push(raves[i])
            if (currentYear === raveYear && currentMonth === raveMonth && currentDay < raveDay) upcomingRaves.push(raves[i])
        }
    }



    function sortByDate(a, b) {
        let aDay = a.date.slice(8, 10)
        let bDay = b.date.slice(8, 10)
        let aMonth = a.date.slice(5, 7)
        let bMonth = b.date.slice(5, 7)
        let aYear = a.date.slice(0, 4)
        let bYear = b.date.slice(0, 4)

        if (aYear < bYear) return 1;
        if (aYear > bYear) return -1;
        if (aYear === bYear && aMonth < bMonth) return 1;
        if (aYear === bYear && aMonth > bMonth) return -1;
        if (aYear === bYear && aMonth === bMonth && aDay < bDay) return 1;
        if (aYear === bYear && aMonth === bMonth && aDay > bDay) return -1;
        else {
            return 0
        }
    }


    useEffect(() => {
        dispatch(ravesActions.getAllRaves())
        // console.log("USE EFFECT FROM HOMEPAGE")
    }, [dispatch])

    return (
        <>
            {allRaves && <>
                <div className="home-page-main-image-container">
                    {/* <div>
                This is going to be the Seach Bar
            </div> */}
                </div>
                <h2 className="recent-raves-header">Recent Raves</h2>
                <div className="ul-recent-raves">
                    {recentRaves && recentRaves.sort(sortByDate).slice(0, 12).map(rave => {
                        return <div className="home-recent-raves-list" key={rave?.id}>
                            <div className="homepage-rave-author-poster">
                                {rave?.User?.username}
                            </div>
                            <div className="rave-title">
                                <NavLink className={'rave-title-link'} exact to={`raves/${rave.id}`}>
                                    {rave?.title}
                                </NavLink>
                            </div>
                            <div className="homepage-rave-image-container">
                                <img className="rave-image" src={rave?.photoUrl} alt=''></img>
                            </div>
                        </div>
                    })}
                </div>
                {showMoreRaves ?
                    <>
                           <div className="ul-recent-raves">
                    {recentRaves && recentRaves.sort(sortByDate).slice(12, 25).map(rave => {
                        return <div className="home-recent-raves-list" key={rave?.id}>
                            <div className="homepage-rave-author-poster">
                                {rave?.User?.username}
                            </div>
                            <div className="rave-title">
                                <NavLink className={'rave-title-link'} exact to={`raves/${rave.id}`}>
                                    {rave?.title}
                                </NavLink>
                            </div>
                            <div className="homepage-rave-image-container">
                                <img className="rave-image" src={rave?.photoUrl} alt=''></img>
                            </div>
                        </div>
                    })}
                </div>
                    <div className="home-page-navlink-see-all">
                        <NavLink to ='/raves'>
                            See all raves
                        </NavLink>
                    </div>
                    </>
                    :
                    <>
                        <div className="show-more-raves-button-container">
                            <button onClick={() => {
                                if (showMoreRaves) {
                                    setShowMoreRaves(false)
                                } else {
                                    setShowMoreRaves(true)
                                }
                            }} className="show-more-raves-button">Show more raves</button>
                        </div>
                    </>}

                {/* <ul className="ul-upcoming-raves">
                {raves && upcomingRaves.sort(sortByDate).slice(0, 10).map(rave => {
                    return <li className="home-raves-list" key={rave.id}>
                        <img className="rave-image" src={rave.photoUrl} alt=''></img>
                        <div className="rave-title">
                            <NavLink className={'see-details-link'} exact to={`raves/${rave.id}`}>
                                {rave.title}
                            </NavLink>

                        </div>
                        <div >
                            <span className="rave-date">Date: {rave.date}</span>
                        </div>
                    </li>
                })}
            </ul> */}</>}


        </>
    )
}

export default HomePage
