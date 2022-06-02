import { NavLink } from "react-router-dom";

function RaveReviews({ reviews }) {
    console.log(reviews)
    return (
        <>
            <h1>Reviews</h1>
            <ul>
                {reviews?.map((review) => {
                    return <li><NavLink
                        to={`/raves/${review.raveId}`}
                        id={review.id}
                        key={review.id}
                    >
                        <h2>{review.content}</h2>
                        <div>
                            <img src={review.images} alt=''></img>
                        </div>
                    </NavLink>
                    </li>
                })}
            </ul>
        </>
    )
}

export default RaveReviews
