import React from 'react'
import { useSelector } from 'react-redux'


function Home() {
  const state = useSelector((redux)=> redux)
  return (
    <div>
      <h2>Welcome {state.auth.user ? state.auth.user.username+'!' : 'Friend!'} </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias maxime nisi quia facilis vel impedit inventore, similique provident reprehenderit non quaerat incidunt at officiis consequuntur pariatur debitis soluta ea.</p>
      <Link to='/reviewlist'>Review List</Link>
    </div>
  )
}


export default Home
