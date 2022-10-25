import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../actions/auth'

function Nav() {
    
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  const [burgerVisible, setBurgerVisible] = useState(false)

  const toggleBurger = () => {
    setBurgerVisible((prevBurgerState) => {
      return !prevBurgerState
    })
  }

  const logout = () => {
    const confirmSuccess = () => navigateTo('/')
    dispatch(logoutUser(confirmSuccess))
  }

  return (
    <>
      <div className="hero is-small is-primary p-4">
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className='Logo py-3'>
              <Link to="/" className="">
                <h1 className="title is-1 pl-5">Pickle&apos;s Picks</h1>
              </Link>
            </div>
            <span
              onClick={toggleBurger}
              className={`navbar-burger burger ${burgerVisible ? 'is-active' : ''
                }`}
              data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            id="navbarMenuHeroA"
            className={`navbar-menu ${burgerVisible ? 'is-active' : ''}`}
          >
            <div className="navbar-end">
              <Link to="/" className="navbar-item is-right">
                Home
              </Link>

              {auth.isAuthenticated ? (
                <>
                  <Link to="/" className="navbar-item " onClick={logout}>
                    Logout
                  </Link>
                  {auth.user.id === 1 && <Link to="/reviews/addreview" className="navbar-item is-large">
                    Add Review
                  </Link>}
                </>

              ) : (
                <>
                  <Link
                    onClick={toggleBurger}
                    className="navbar-item is-large"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    onClick={toggleBurger}
                    className="navbar-item"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
      
    
    </>
  )
}

export default Nav

