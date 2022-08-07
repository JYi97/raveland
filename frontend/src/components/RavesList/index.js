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
            <h1 className="all-raves-title"> All Raves</h1>
            <div className="all-raves-ul-recent-raves">
                {raves && raves.sort(sortByName).map(rave => {
                    return <div className="all-raves-list" key={rave?.id}>
                        <div className="all-raves-rave-author-poster">
                            {rave?.User?.username}
                        </div>
                        <div className="all-raves-rave-title">
                            <NavLink className={'all-raves-rave-title-link'} exact to={`raves/${rave.id}`}>
                                {rave?.title}
                            </NavLink>
                        </div>
                        <div className="all-raves-rave-image-container">
                            <img className="all-raves-rave-image" src={rave?.photoUrl} alt=''></img>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default RavesList
