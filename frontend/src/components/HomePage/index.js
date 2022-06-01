import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as ravesActions from '../../store/raves'
import CreateRaveForm from "../CreateRaveForm"

const HomePage = () => {
    const dispatch = useDispatch();
    const allRaves = useSelector((state) => state.raves)
    console.log(allRaves)
    const raves = Object.values(allRaves)
    console.log(raves)


    useEffect(() => {
        dispatch(ravesActions.getAllRaves())
    }, [dispatch])
    return (
        <>
            <div>
                <h2>Add a Rave</h2>
                <h2>Recent Raves</h2>
                <ul>
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

export default HomePage
