import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStore } from 'react-redux'
import {useParams} from 'react-router-dom'

import { fetchReview } from '../actions/review'

// Data needs to come from Reviewlist prop
function Review() {
  // const dispatch = useDispatch()

const reviews = useSelector((store) => store.reviews)
console.log( "store", reviews)

let { id } = useParams();

const {location, rating, title, date, text, synopsis} = reviews.find(element => element.id == id)

// console.log()

// check with ming for table names after new migration (migrate latest)

  return (
  <>
     <div>
      <h2>Name: {title}</h2>
      <p> Rating: {rating} </p>
      <p> Date: {date}  </p>
      <p> Location: {location} </p>
      <p> {text} </p>      
    </div>
    <div>
      {/* btn - OnClick func Action SAVE REVIEW */}
      <button> Add to wish list</button>
    </div>

</>
  )
}

export default Review