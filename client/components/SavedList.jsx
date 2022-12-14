import React, { useEffect} from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { Link} from 'react-router-dom'

import { fetchSavedReviews } from '../actions/review'

// create a state to hold the review id and pass it to the delete func

function ReviewList() {
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const store = useSelector((store) => store)



  const wishlistStore = store.saved
  const reviewsStore = store.reviews



  const userId = store.auth.user.id

  useEffect(() => {
    dispatch(fetchSavedReviews(userId))
  }, [])


  return (
    <>
      <section className='review-section pb-3'>
        <Link to="/reviewlist" className="button is-small is-link ml-3 "><i className="fa-solid fa-arrow-left mr-2"></i>Back to List</Link>
        <h2 className="is-size-4 is-bold p-3">My Saved Reviews Page</h2>
      </section>

      <div className='is-flex is-justify-content-space-evenly is-flex-wrap-wrap  my-3 p-3 ' >
        {!wishlistStore?.length ?
          <>
            <p className='my-6 py-6'> Wishlist is empty | Check out the <Link to='/'>Review List</Link> & add your favorites</p>
          </>
          :
          reviewsStore?.map((review, idx) => {
            const id = review.id

            if (wishlistStore.includes(id)) {
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
                  </div>
                </Link>
              )
            }
          })
        }
      </div>
    </>
  )
}

export default ReviewList
