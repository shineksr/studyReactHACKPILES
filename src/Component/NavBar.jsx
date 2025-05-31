import React from 'react'
import "./NavBar.css";
function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src="./image/logonetflix.png" alt="netlixlogo" />
        <img className="avatar" src="./image/avatar-netflix.png" alt="NetflixAvatar" />
    </div>
  )
}

export default NavBar