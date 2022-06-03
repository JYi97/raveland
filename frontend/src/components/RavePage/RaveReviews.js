function RaveReviews({ reviews }) {
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
                            <img src={review.image} alt=''></img>
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
}

export default RaveReviews
