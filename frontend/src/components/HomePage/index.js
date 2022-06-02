import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import * as ravesActions from '../../store/raves'

const HomePage = () => {
    const dispatch = useDispatch();
    const allRaves = useSelector((state) => state.raves)
    // console.log(allRaves)
    const raves = Object.values(allRaves)
    // console.log(raves)


    useEffect(() => {
        dispatch(ravesActions.getAllRaves())
    }, [dispatch])
    return (
        <>
            <div>
                <h2>Recent Raves</h2>
                <ul>
                    {raves.map(rave => {
                        return <li key={rave.id}>
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
            </div>
        </>
    )
}

export default HomePage
