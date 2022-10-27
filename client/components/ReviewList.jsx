import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function ReviewList() {
  const reviews = useSelector((store) => store.reviews)

  // sort reviews by rating
  let ratingArr = []
  let foundReview
  let sortedReviews

  if (reviews) {
    for (const review of reviews) ratingArr.push(review.rating)
  }

  const sortedRating = ratingArr.sort((a, b) => b - a)

  if (reviews) {
    sortedReviews = sortedRating.map((rating) => {
      foundReview = reviews.find((review) => review.rating === rating)
      return foundReview
    })
  }


  return (
    <>
      <section className='review-section'>
        <div className='mx-3'>
          <h2 className="is-size-3  p-3"><b>Check out Pickle&apos;s reviews</b></h2>
          <p className='is-size-6 px-3'> Click on the cards to see the full review</p>
        </div>
        <div className='is-flex is-justify-content-space-evenly is-flex-wrap-wrap  mt-3 p-3 ' >
          {sortedReviews?.map((review, idx) => {
            const id = review.id
            return (
                <Link to={`/review/${id}`} data={review} key={idx}>
                  <div className='box is-two-fifths  m-3 '>
                   <div className="card-image">
                    <figure className="image is-4by3">
                      <img src='https://picsum.photos/300' alt="Placeholder" />
                    </figure>
                   </div>
                  <p className='is-size-4'>{review.location}</p>
                  <p className='is-size-4 has-text-weight-bold'>Rating: {review.rating}</p>
                  <p className='is-size-5'>{review.title}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

    </>
  )
}

export default ReviewList
