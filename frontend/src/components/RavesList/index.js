import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as ravesActions from '../../store/raves'
import './RavesList.css'
import { NavLink } from "react-router-dom"

const RavesList = () => {
    const dispatch = useDispatch();
    const allRaves = useSelector((state) => state.raves)
    const raves = Object.values(allRaves)
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
        dispatch(ravesActions.getAllRaves())
    }, [dispatch])

    return (
        <>
            <ul className="ul-all-raves">
                {raves.sort(sortByName) && raves.map(rave => {
                    return <li className="ravesList-raves" key={rave.id}>
                        <h2 className="raves-list-title">
                            {rave.title}
                        </h2>
                        <div>
                            <img className="all-raves-page-image" src={rave.photoUrl} alt=''></img>
                        </div>
                        <div>
                            <span className="all-raves-page-description">{rave.description}</span>
                        </div>
                        <div>
                            <span className="all-raves-page-date">Date: {rave.date}</span>
                        </div>
                        <NavLink className={'see-details-link'} exact to={`raves/${rave.id}`}>
                            See more details
                        </NavLink>
                    </li>
                })}
            </ul>
        </>
    )
}

export default RavesList
