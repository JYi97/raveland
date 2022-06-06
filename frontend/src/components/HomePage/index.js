import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import * as ravesActions from '../../store/raves'
import './HomePage.css'

const HomePage = () => {
    const dispatch = useDispatch();
    const allRaves = useSelector((state) => state.raves)
    // console.log(allRaves)
    const raves = Object.values(allRaves)
    // console.log(raves)

    function sortByDate(a, b) {
        if (a.date.slice(0, 4) < b.date.slice(0, 4)) {
            return 1;
        }
        if (a.date.slice(0, 4) > b.date.slice(0, 4)) {
            return -1;
        }
        if (a.date.slice(0, 4) === b.date.slice(0, 4) && a.date.slice(5, 7) < b.date.slice(5, 7)) {
            return 1;
        }
        if (a.date.slice(0, 4) === b.date.slice(0, 4) && a.date.slice(5, 7) > b.date.slice(5, 7)) {
            return -1;
        }
        if (a.date.slice(0, 4) === b.date.slice(0, 4) && a.date.slice(5, 7) === b.date.slice(5, 7) && a.date.slice(8, 10) < b.date.slice(8, 10)) {
            return 1;
        }
        if (a.date.slice(0, 4) === b.date.slice(0, 4) && a.date.slice(5, 7) === b.date.slice(5, 7) && a.date.slice(8, 10) > b.date.slice(8, 10)) {
            return -1;
        }
        return 0
    }


    useEffect(() => {
        dispatch(ravesActions.getAllRaves())
        // console.log("USE EFFECT FROM HOMEPAGE")
    }, [dispatch])

    return (
        <>
            <h2 className="recent-raves-header">Recent Raves</h2>
            <ul className="ul-recent-raves">
                {raves.sort(sortByDate) && raves.slice(0, 16) && raves.map(rave => {
                    return <li className="home-raves-list" key={rave.id}>
                        <NavLink exact to={`raves/${rave.id}`}>
                            <div>
                                <img src={rave.image} alt=''></img>
                            </div>
                            <div>
                                {rave.title}
                            </div>
                            <div>
                                <span>Date: </span> {rave.date}
                            </div>
                        </NavLink>
                    </li>
                })}
            </ul>
        </>
    )
}

export default HomePage
