import { useSelector } from "react-redux";
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'




import { postNewReviewApi } from "../apis/review";



function AddReviewForm(){

  const navigate = useNavigate()

  const state = useSelector((redux)=> redux)
  const admin = state.auth.user.username
  console.log(admin, 'admin')
  const today = new Date()
  const [review, setReview] = useState({
    location:'',
    title:'',
    text:'',
    rating:0,
    date: today
  })

  const [thankSwitch, setThankSwitch] = useState(false)

  const handleChange = (evt) => {
    setThankSwitch(false)
    setReview({
      ...review,
      [evt.target.name] : evt.target.value,
    })
  }
  const handleSubmbit = (evt) => {
    evt.preventDefault()
    setThankSwitch(true)
    if (admin === 'pickle') {
      postNewReviewApi(review)
      navigate('/reviewlist')

    } 
    else { console.log('you are not authorized') }
    
  }

  return(
    <>
      <h2>Add a Review now, Pickles</h2>
      <form onSubmit= {handleSubmbit}>
        <label htmlFor="location">location</label>
        <input name="location" type="text" id="location" onChange={handleChange}/>
        <br/>
        <label htmlFor="title">title</label>
        <input name="title" type="text" id="title" onChange={handleChange}/>
        <br/>
        <label htmlFor="text">text</label>
        <input name="text" type="text" id="text" onChange={handleChange}/>
        <br/>
        <label htmlFor="rating">rating</label>
        <input name="rating" type="number" id="rating" onChange={handleChange}/>
        <br/>
        <button className="button">Add</button>
      </form>
      {thankSwitch && <p>Good pup!</p>}
    </>
  )
}

export default AddReviewForm