import React from 'react'
import { useSelector } from 'react-redux'


function Home() {
  const state = useSelector((redux)=> redux)
  return <h2>Welcome {state.auth.user ? state.auth.user.username+'!' : 'Friend!'} </h2>
}

export default Home
