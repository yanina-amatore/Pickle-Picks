import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStore } from 'react-redux'

import { fetchReview } from '../actions/review'

// Data needs to come from Reviewlist prop
function Review(data) {
  // const dispatch = useDispatch()

  

  return (
<>
    <div>
      <h2>Name</h2>
      <p> Rating </p>
      <p> Date </p>
      <p> Text (review) </p>      
    </div>
    <div>
      {/* btn - OnClick func Action SAVE REVIEW */}
      <button> Add to wish list</button>
    </div>

</>
  )
}

export default Review