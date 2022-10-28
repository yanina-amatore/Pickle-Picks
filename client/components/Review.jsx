import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { addReviewToWishlist } from '../actions/review'


function Review() {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const store = useSelector((store) => store)
  const wishlistStore = store.saved
  const reviewsStore = store.reviews
 
  let { id } = useParams()

  const { location, rating, date, text } = reviewsStore.find(
    (element) => element.id == id
  )
  // TODO: create upload img to database and make API call to display 
  // To select a random pic from Public folder
  const imgNum = Math.floor(Math.random() * (12 - 1) + 1)
  const NewImage = `../images/${imgNum}.jpg`

  const dispatchSaveReview = async () => {
    const userId = store.auth.user.id
    dispatch(addReviewToWishlist(userId, id))
    alert('Review added to Wishlist')
    navigate("/savelist/")
  }

  // Check if the id is already in the wishlist
  function saveToWishlist() {
    !wishlistStore.includes(id) ? dispatchSaveReview() : alert('already saved in Wishlist')
  }

  return (
    <>
      <section className='section review-wrapper'>

        <div className='columns is-tablet box'>
          <div className='column auto'>
            <figure className='has-text-centered mt-5'>
              <img className='pickle-imgs ' src={NewImage} alt='pickle pic' />
            </figure>
          </div>
          <div className="column is-half ">
            <div className='p-3'>
              <h2 className='is-size-3 pb-2'>{location} </h2>
              <p className='is-size-5 pb-2'> <b><i className="fa-solid fa-dog mr-2"></i>Rating: {rating}</b></p>
              <p className='is-size-6 is-italic pb-2'> Date: {date} </p>
              <p className='is-size-6 pb-2'> {text} </p>
              <div className='buttons'>
                {/* btn - OnClick func Action SAVE REVIEW */}
                {store.auth.user != null && (
                  <button
                    className='button is-danger is-outlined my-5'
                    onClick={saveToWishlist}>
                    <i className="fa-solid fa-heart mr-2"></i>
                    Add to my Wishlist
                  </button>
                )
                }
                <Link to="/reviewlist"
                  className="button is-link is-outlined my-5 ">
                  <i className="fa-solid fa-list-ul mr-2"></i>
                  Full Reviews List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Review
