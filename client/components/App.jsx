import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Footer from './Footer'
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
  const state = useSelector((redux) => redux)


  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
    dispatch(fetchReview())
  }, [])


  return (
    <>
      <section className="hero is-small is-primary ">
        <Nav />
      </section>
      <section className='userName mb-3 is-size-6'>
        <i className="fa-regular fa-hand-wave mr-2"></i>
        <h2 className='is-5 has-text-right is-capitalized mr-4'>
          Welcome {state.auth.user ? state.auth.user.username + '!' : 'Friend!'}{' '}
        </h2>
      </section>
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
      <section>
        <Footer/>
      </section>
    </>

  )
}

export default App
