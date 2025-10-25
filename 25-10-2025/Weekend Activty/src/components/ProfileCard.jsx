import React from 'react';

const ProfileCard = ({ name, age, location }) => {
  return (
    <div className="container text-center mt-5">
      <div className="card mx-auto" style={{width: '18rem'}}>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Location: {location}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
