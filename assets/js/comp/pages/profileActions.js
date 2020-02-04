import React from 'react'
import {Link} from 'react-router-dom';
const profileActions = () => {
  return (
    <div>
      <Link to="/edit-profile" className="editProfileButton">
        Edit Profile
      </Link>

      
    </div>
  )
}

export default profileActions;
