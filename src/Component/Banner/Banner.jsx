import React from 'react'
import './Banner.css'
function Banner(){
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='tittle'> Movie Name</h1>
            <div className='Banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Consectetur, velit itaque rerum a repudiandae animi! Quidem sunt nisi ipsa officia aliquid! 
              Soluta, distinctio hic? Culpa autem ex nulla sint ad!</h1>
        </div>
        <div className="fade_bottom">
          
        </div>
    </div>
  )
}
export default Banner
