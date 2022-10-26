import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { addReviewToWishlist } from '../actions/saved'


function Review() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
 

  useEffect(() => {
  
  }, [])

  const store = useSelector((store) => store)
  console.log(store)
  let { id } = useParams()

  const { location, rating, date, text } = store.reviews.find(
    (element) => element.id == id
  )
  // TODO: create upload img to database and make API call to display 
  // To select a random pic from Public folder
  const imgNum = Math.floor(Math.random() * (12 - 1) + 1)
  const NewImage = `../images/${imgNum}.jpg`
     
  

  return (
    <>
    <section className='section review-wrapper'>
      <div className='columns is-tablet box'>
        {/* <div className='column auto'></div> */}
        <div className="column is-half ">
            <div className='p-3'>
              <h2 className='is-size-3 pb-2'>{location} </h2>
              <p className='is-size-5 pb-2'> <b>Rating: {rating}</b></p>
              <p className='is-size-6 pb-2'> Date: {date} </p>
              <p className='is-size-6 pb-2'> {text} </p>
              {/* btn - OnClick func Action SAVE REVIEW */}
              {store.auth.user != null && (
                <button
                className='button is-link my-5'
                onClick={() => {
                  dispatch(addReviewToWishlist(store.auth.user.id, id))
                  alert('success add to wishlist')
                  navigate("/savelist/")
                  // redirect code
                }}
                >
                  <i className="fa-solid fa-heart mr-2"></i>
                  Add to my Wishlist
                </button>
              )
            }             
            </div>
          </div>
          <div className='column auto'>
            <figure className='has-text-centered mt-'> 
              <img className='pickle-imgs ' src= {NewImage} alt='pickle pic'/>                  
            </figure>
          </div>
      </div>     
    </section>  

    </>
  )
}

export default Review
