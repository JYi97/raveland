import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as ravesActions from '../../store/raves'

const RavePage = () => {
    const dispatch = useDispatch();
    const rave = useSelector((state) => state.raves)
    // console.log(allRaves)
    const raveInput = Object.values(rave)
    // console.log(raves)


    useEffect(() => {
        dispatch(ravesActions.getAllRaves())
    }, [dispatch])
    return (
        <>
            <div>
                <h2>Hello</h2>
            </div>
        </>
    )
}

export default RavePage
