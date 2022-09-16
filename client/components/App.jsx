import React, { useEffect } from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Home from './Home'
import Review from './Review'
import ReviewList from './ReviewList'
import SavedList from './SavedList'

import AddReviewForm from './AddReviewForm'

import { checkAuth } from '../actions/auth'
import { fetchReview } from '../actions/review'

function App() {
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)
  const reviews = useSelector((state) => state.reviews)

  // let { id } = useParams();
  // console.log('id', id)

  useEffect(() => {
    const confirmSuccess = () => {}
    dispatch(checkAuth(confirmSuccess))
    dispatch(fetchReview())
  }, [])

  return (
    <div className="container has-text-centered">
      <div className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to="/" className="">
            <h1 className="title is-1">Pickle's Picks</h1>
          </Link>
          <Nav />
        </div>
      </div>

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          {auth.user?.id === 1 && (
            <Route path="/reviews/addreview" element={<AddReviewForm />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reviewlist" element={<ReviewList />} />
          <Route path="/savelist/" element={<SavedList reviews={reviews} />} />
          <Route path="/review/:id" element={<Review />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
