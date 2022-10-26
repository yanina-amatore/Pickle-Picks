import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const state = useSelector((redux) => redux)

  return (
    <>   
    <div>
      <section className='home section'>
        <div className='columns is-tablet is-flex  is-flex-wrap-wrap-reverse'>
          <div className=' column is-half is-flex is-align-self-center is-justify-content-center is-flex-direction-column has-text-centered'>
            
              <h1 className= 'has-text-justified is-size-3  pl-6'>Hi I&apos;m Pickle</h1>
              <p className= 'has-text-justified is-size-6  pt-3 px-6 '>Pickle and her owner has traveled far and wide finding places to eat and spend time in. She has been so excited about it that she wanted to make a blog about it. Follow along Pickle&apos;s journey as she ventures out to more places to spend time in and reports back what she thinks, with the hopes of more dog friends joining along to make the experience more dog friendly.</p>
            
            <div className=" buttons pt-6 px-6" >
              <Link to="/reviewlist" className="button is-link "><i className="fa-solid fa-list-ul mr-2"></i>Review List</Link>
              
              {/* User only */}
              {state.auth.user != null && <Link to="/savelist" className="button is-link "><i className="fa-regular fa-heart mr-2"></i>My Wishlist</Link>}
            </div>      
          </div>
          
            <div className="column">
              <div className="img-wrapper has-text-centered">
               <img className='home-img ' src='../images/6.jpg' alt='Pickle' /> 
              </div>    
            </div>        
         
        </div>
      </section>
     
    </div>
    </>
  )
}

export default Home
