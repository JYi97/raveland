import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as ravesActions from '../../store/raves'
import { NavLink } from "react-router-dom"

const RavePage = () => {
    const dispatch = useDispatch();
    const raves = useSelector((state) => state.raves)
    console.log(raves)
    const { id } = useParams()
    console.log(id)
    const rave = Object.values(raves)
    console.log(rave)

    useEffect(() => {
        dispatch(ravesActions.getRave(id))
    }, [dispatch, id])

    return (
        <>
            <div>
                <h2>{rave[0].title}</h2>
                <div>
                    Likes
                </div>
                <div>
                    Reviews
                </div>
                <div>
                    <NavLink to={`/raves/${rave[0].id}/edit`}>
                        Edit
                    </NavLink>
                </div>
                <div>
                    <NavLink to={`/raves/${rave[0].id}/delete`}>
                        Delete
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default RavePage
