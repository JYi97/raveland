import { NavLink } from "react-router-dom";

function RaveReviews({ user, reviews }) {
    // console.log(reviews)


    return (
        <>
            <h1>Reviews</h1>
            <ul>
                {reviews?.map((review) => {
                    return <li
                        id={review.id}
                        key={review.id}
                    >
                        <h2>{review.content}</h2>
                        <div>
                            <img src={review.image} alt='Invalid Pic URL'></img>
                        </div>
                        <div>
                            {user?.id === review.userId && <NavLink to={`/reviews/${review.id}/delete`}>
                                Delete
                            </NavLink>}
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
}

export default RaveReviews
