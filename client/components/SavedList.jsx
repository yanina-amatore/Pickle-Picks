import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchSavedReviews } from '../actions/review'


function ReviewList() {
  const dispatch = useDispatch()
  const store = useSelector((store) => store)
 

  useEffect(() => {
    dispatch(fetchSavedReviews(store.auth.user.id))
    // .then(() => {
    //     store.reviews.map((review) => {
    //     store.saved.includes(review.id)
    //   })
    // })
    // .catch((err) => {
    //   console.log('Error:' + err.message)
    // }) 
 }, [])

  return (
    <>
      <section className='review-section pb-3'>
      <h2 className="is-size-4 is-bold p-3">My Saved Reviews Page</h2>
 
        <div className='is-flex is-justify-content-space-evenly is-flex-wrap-wrap  my-3 p-3 ' >
        {store.reviews?.map((review, idx) => {
          const id = review.id
          // console.log('in  saved map', review)
          if (store.saved.includes(id)) {
            return (
            
              <Link to={`/review/${id}`} data={review} key={idx}>
                <div className='box is-two-fifths   p-3 '>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src='https://picsum.photos/300' alt="Placeholder" />
                    </figure>
                  </div>
                  <div>
                    <p className='is-size-4 py-1'>{review.location}</p>
                    <p className='is-size-4 has-text-weight-bold py-1'>Rating: {review.rating}</p>
                    <p className='is-size-5 py-1'>{review.title}</p>
                  </div>
            {/* TODO: create a Remove Button */}
                  <div className='is-right'>
                    <button className='button is-centered is-danger  is-outlined mt-2'><i className="fa-regular fa-trash-can"></i></button>
                  </div>
                </div>
              </Link>
            )
          }
        })}
        </div>
      </section>
    </>
  )
}

export default ReviewList
