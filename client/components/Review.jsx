import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { addReviewToWishlist, fetchDelSaved } from '../actions/review'


function Review() {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const store = useSelector((store) => store)

  const reviewsStore = store.reviews
  const wishlistStore = store.saved
  console.log('wishlistStore', wishlistStore)
 
  let { id } = useParams()
  const userId = store.auth.user.id
  
  const { location, rating, date, text } = reviewsStore.find(
    (element) => element.id == id
  )
  // TODO: create upload img to database and make API call to display 
  // To select a random pic from Public folder
  const imgNum = Math.floor(Math.random() * (12 - 1) + 1)
  const NewImage = `../images/${imgNum}.jpg`


  const saveToWishlist = () => {
    dispatch(addReviewToWishlist(userId, id))
    alert('Review added to Wishlist')
    navigate("/savelist/")
  }

  //  Delete btn func
  const handleDelete =  () => {
    dispatch(fetchDelSaved(userId, id))
    navigate("/savelist/")

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
                
                  <div className='auth-buttons'>
                  
                  {wishlistStore?.includes(id)? 
                    return (  
                    <button
                      className='button is-danger is-outlined my-5'
                      onClick={saveToWishlist}>
                      <i className="fa-solid fa-heart mr-2"></i>
                        Add to my Wishlist
                      </button>
                    ) : return   (               
                    <button 
                    className='button is-danger is-outlined my-5'
                    onClick={handleDelete}>
                    <i className="fa-regular fa-trash-can mr-2"></i>
                    Remove from Wishlist
                    </button>
                    )
                  }
                  </div>
                

                <Link to="/reviewlist"
                  className="button is-link is-outlined my-5 ">
                  <i className="fa-solid fa-arrow-left mr-2"></i>
                  Back to Reviews </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Review
