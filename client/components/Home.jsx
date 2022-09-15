import React from 'react'
import { useSelector } from 'react-redux'
import {  Link } from 'react-router-dom'


function Home() {
  const state = useSelector((redux)=> redux)
  return (
    <div>
      <h2>Welcome {state.auth.user ? state.auth.user.username+'!' : 'Friend!'} </h2>
      <img src= 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beautiful-australian-shepherd-walking-royalty-free-image-168814214-1565190235.jpg?crop=0.66832xw:1xh;center,top&resize=480:*'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias maxime nisi quia facilis vel impedit inventore, similique provident reprehenderit non quaerat incidunt at officiis consequuntur pariatur debitis soluta ea.</p>
      <Link to='/reviewlist'>Review List</Link>
    </div>
  )
}


export default Home
