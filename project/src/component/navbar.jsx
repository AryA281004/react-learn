import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <p className='p1'>Neon</p>
        <p className='p2'>Lens</p>
      </div>

      <div className="search-container">
        <input placeholder="search username" className="search-input smooth-type" type="text" />
        <div className="search-icon">
          <div className="search-lens"></div>
          <div className="search-handle"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar