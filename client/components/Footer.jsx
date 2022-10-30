import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>      
      <section className="hero is-small has-background-light">
        <div className="hero-body">
          <div className="content has-text-centered ">
              <Link to="https://github.com/yanina-amatore/Pickle-Picks">
                <i className="fa-brands fa-github mr-2"></i> {' '}              
               Created by <b>Yanina Amatore</b> & Dev Academy Students             
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer