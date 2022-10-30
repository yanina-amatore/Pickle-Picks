import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector,} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { fetchSavedReviews, fetchDelSaved } from '../actions/review'

// create a state to hold the review id and pass it to the delete func

function ReviewList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const store = useSelector((store) => store)

  // const [currentId, setId] = useState(null)
  // console.log('currentID',currentId)

  const wishlistStore = store.saved
  const reviewsStore = store.reviews

  console.log('wishlistStore', wishlistStore)
  
  const userId = store.auth.user.id 

  useEffect(() => {
    dispatch(fetchSavedReviews(store.auth.user.id))
  }, [])

    // //  Delete btn func
    // const handleDelete = () => {     
    //   dispatch(fetchDelSaved(userId, currentId))
    //   navigate("/savelist/")  
    // }
   
  return (
    <>
      <section className='review-section pb-3'>
      <Link to="/reviewlist" className="button is-small is-link ml-3 "><i className="fa-solid fa-arrow-left mr-2"></i>Back to List</Link>
         <h2 className="is-size-4 is-bold p-3">My Saved Reviews Page</h2>
         <div className='is-flex is-justify-content-space-evenly is-flex-wrap-wrap  my-3 p-3 ' >

        {/* // Problem is I'm in a loop. I need to check the wishlist condition and then render the tiles. */}

        {reviewsStore?.map((review, idx) => {
          const id = review.id          
          if (wishlistStore.length === 0){
          return ( 
            <p className="title"> Your Wishlist is empty</p>
          )
          } else if(wishlistStore.includes(id)){            
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
                  <button
                      className='button is-danger is-outlined my-5'
                      onClick={() => {
                        dispatch(fetchDelSaved(userId, id));
                        navigate("/savelist/")                         
                      }}
                        >
                      <i className="fa-regular fa-trash-can mr-2"></i>
                      Remove
                    </button>
            
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
