import React from 'react'

const Userprofile = (props) => {
    
    
  return (

  <div className="all-cards">
    <div className="user-card">
      <div className="card-header">
        <div className="card-border-animation">
          <img className="card-image" src={props.profileimage} alt="Profile"></img>
        </div>
        <div className='name-score'>

          <h1 className="card-name">{props.username} {props.usersurname}</h1>
         <p className='nl-score'>NL Score: {props.nlScore}</p>
         
        </div>
      </div>
   
      <div className="card-actions">
        <a className='card-view-btn' href="">View Profile</a>
      </div>
    </div>
  </div>
  )
}

export default Userprofile