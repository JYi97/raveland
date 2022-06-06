import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as ravesActions from '../../store/raves'
import './RavesList.css'

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
                        <h3>
                            {rave.title}
                        </h3>
                        <div>
                            <img src={rave.image} alt=''></img>
                        </div>
                        <div>
                            <span>Description:</span> {rave.description}
                        </div>
                        <div>
                            <span>Address:</span> {rave.address}
                            <span> {rave.city}, </span>
                            <span> {rave.state.toUpperCase()}, </span>
                            <span> {rave.zipCode} </span>
                        </div>
                        <div>
                            <span>Date: </span> {rave.date}
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
}

export default RavesList
