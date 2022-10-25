import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginError, registerUserRequest } from '../actions/auth'

function Register() {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  const [formData, setFormData] = useState({
    username: '',
    email_address: '',
    password: '',
    confirm_password: '',
  })

  useEffect(() => {
    dispatch(loginError(''))
  }, [])

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    const { password, confirm_password } = formData

    if (confirm_password != password) {
      dispatch(loginError("Passwords don't match"))
    } else {
      const confirmSuccess = () => navigateTo('/')
      const userInfo = { ...formData }
      delete userInfo.confirm_password
      dispatch(registerUserRequest(userInfo, confirmSuccess))
    }
  }

  return (
    <div className='section'>
      <form className="form box py-6 " onSubmit={handleSubmit}>
        <h1 className="title is-2">Register</h1>
        <hr />
        {auth.errorMessage && (
          <span className="has-text-danger is-large">{auth.errorMessage}</span>
        )}
        <div className="container">
          <div className="field control has-icons-left has-icons-right column is-6 is-offset-one-quarter">
           
              <input
                required
                className="input is-large has-text-centered is-fullwidth"
                placeholder="User Name"
                type="text"
                name="username"
                autoComplete="username"
                onChange={handleChange}
                value={formData.username}
              />
            <span className="icon is-small is-left has-text-centered">
              <i className="fas fa-user"></i>
            </span>
          
          </div>
          <label className="column is-6 is-offset-one-quarter label is-large has-text-centered">
            <input
              required
              className="input is-large has-text-centered is-fullwidth"
              placeholder="Email Adress"
              type="text"
              name="email_address"
              onChange={handleChange}
              value={formData.email_address}
            />
          </label>
        </div>
        <br />
        <div className="columns">
          <label className="column is-6 is-offset-one-quarter label is-large has-text-centered">
            <input
              required
              className="input is-large has-text-centered is-fullwidth"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="new-password"
              onChange={handleChange}
              value={formData.password}
            />
          </label>
          <label className="column is-6 is-offset-one-quarter label is-large has-text-centered">
            <input
              required
              className="input is-large has-text-centered is-fullwidth"
              placeholder="Confirm Password"
              type="password"
              name="confirm_password"
              autoComplete="new-password"
              onChange={handleChange}
              value={formData.confirm_password}
            />
          </label>
        </div>
        <input
          className="button is-success is-large is-centered "
          value="Register"
          type="submit"
        />
      </form>
    </div>

  )
}

export default Register
