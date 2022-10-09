import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const state = useSelector((redux) => redux)
  return (
    <>
    <section className='userName section'>
      <h2 className='subtitle is-3 has-text-right is-capitalized'>
        Welcome {state.auth.user ? state.auth.user.username + '!' : 'Friend!'}{' '}
      </h2>
      </section>
    <div>
      <section className='home section'>
        <div className='columns is-mobile'>
          <div className='column is-half is-flex is-align-items-center '>
            <p className= 'has-text-justified is-size-4 px-4'>Pickle and her owner has traveled far and wide finding places to eat and spend time in. She has been so excited about it that she wanted to make a blog about it. Follow along Pickle's journey as she ventures out to more places to spend time in and reports back what she thinks, with the hopes of more dog friends joining along to make the experience more dog friendly.</p>
          </div>
        <div className="column image ">          
          <img className='is-rounded' src='../images/6.jpg' alt='Picture of Pickle' />        
        </div>
        </div>
      </section>
      <section className="breadcrumb" aria-label="breadcrumbs">
        <Link to="/reviewlist" className='subtitle is-link is-3 has-text-right px-4'>Review List</Link>
        {state.auth.user != null && <Link to="/savelist" className='subtitle is-3 has-text-right px-4'>Save List</Link>}
      </section>
    </div>
    </>
  )
}

export default Home
