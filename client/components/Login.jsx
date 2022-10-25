import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, loginError } from '../actions/auth'

function Login() {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    const confirmSuccess = () => navigateTo('/')
    dispatch(loginUser(formData, confirmSuccess))
  }

  return (
    <div className='section'>
      <form className="form box  py-6" onSubmit={handleSubmit}>
        <h1 className="title is-2 mx-6 p-2">Login</h1>
        <hr className='mx-6' />
        {auth.errorMessage && (
          <span className="has-text-danger is-large">{auth.errorMessage}</span>
        )}
        <div className="container  mx-6 p-2" >
          <div className='field control has-icons-left has-icons-right '>
            <input
              required
              className="input has-text-centered is-large is-fullwidth"
              placeholder="User Name"
              type="text"
              name="username"
              autoComplete="username"
              value={formData.username}
              onChange={handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <div className='field control has-icons-left has-icons-right'>
            <input
              required
              className="input has-text-centered is-large is-fullwidth"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <div className='field'>
            <input
              className="button is-medium  is-success"
              value="Login"
              type="submit"
            />

          </div>
        </div>
      </form>

    </div>

  )
}

export default Login
