import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as ravesActions from '../../store/raves'

const HomePage = () => {
    const dispatch = useDispatch();
    const raves = useSelector((state) => state.raves)
    console.log(raves)

    useEffect(() => {
        dispatch(ravesActions.getAllRaves())
    }, [dispatch])
    return (
        <>
            <div>
                This is the new homepage
            </div>
        </>
    )
}

export default HomePage
