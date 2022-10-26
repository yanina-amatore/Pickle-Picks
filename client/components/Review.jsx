import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { addReviewToWishlist } from '../actions/saved'


function Review() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // let [currentImage, setNewImage] = useState('')

  useEffect(() => {
    // getRandomImg()
  }, [])

  const store = useSelector((store) => store)
  console.log(store)
  let { id } = useParams()

  const { location, rating, date, text } = store.reviews.find(
    (element) => element.id == id
  )
  
  // To select a random pic from Public folder
  const imgNum = Math.floor(Math.random() * (12 - 1) + 1)
  const NewImage = `images/${imgNum}.jpg`
  console.log(NewImage)
      
  

  return (
    <>
    <div className='columns'>
      {/* <div className='column auto'></div> */}
      <div className="container column is-half box my-5">
          <div className='p-3'>
            <h2 className='is-size-3'>{location} </h2>
            <p> Rating: <b>{rating}</b></p>
            <p> Date: {date} </p>
            <p> {text} </p>
          </div>
          <div>
            {/* btn - OnClick func Action SAVE REVIEW */}
            {store.auth.user != null && (
              <button
                onClick={() => {
                  dispatch(addReviewToWishlist(store.auth.user.id, id))
                  alert('success add to wishlist')
                  navigate("/savelist/")
                  // redirect code
                }}
              >
                Add to wish list
              </button>
            )
            }
          </div>
        </div>
        <div className='column auto'>
          <figure> 
            {/* <img src= {`/server/public/${NewImage}`} alt='pickle pic'/>       */}
            <img src= {`/server/public/${NewImage}`} alt='pickle pic'/>      
          </figure>
        </div>
    </div>     

    </>
  )
}

export default Review
