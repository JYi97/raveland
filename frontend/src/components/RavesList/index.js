import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as ravesActions from '../../store/raves'

const RavesList = () => {
    const dispatch = useDispatch();
    const allRaves = useSelector((state) => state.raves)
    const raves = Object.values(allRaves)

    useEffect(() => {
        dispatch(ravesActions.getAllRaves())
    }, [dispatch])

    return (
        <>
            <div>
                <h2>All Raves</h2>
                <ul>
                    {/* raves.slice(0,2).map will show only the first 2 */}
                    {raves.map(rave => {
                        return <li key={rave.id}>
                            <div>
                                {rave.title}
                            </div>
                            <div>
                                <img src={rave.image} alt=''></img>
                            </div>
                            <div>
                                <span>Description:</span> {rave.description}
                            </div>
                            <div>
                                <span>Address:</span> {rave.address}.
                                <span> {rave.city}, </span>
                                <span> {rave.state}, </span>
                                <span> {rave.zipCode} </span>
                            </div>
                            <div>
                                <span>Date: </span> {rave.date}
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default RavesList
